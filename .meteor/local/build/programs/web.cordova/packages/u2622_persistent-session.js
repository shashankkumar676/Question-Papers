//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var Session = Package.session.Session;
var _ = Package.underscore._;
var EJSON = Package.ejson.EJSON;

/* Package-scope variables */
var PersistentSession;

(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/u2622:persistent-session/lib/persistent_session.js                                                  //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
// This file uses code direct from Meteor's reactive-dict package, mostly from                                  // 1
// this file: https://github.com/meteor/meteor/blob/0ef65cc/packages/reactive-dict/reactive-dict.js             // 2
//                                                                                                              // 3
// helpers: https://github.com/meteor/meteor/blob/0ef65cc/packages/reactive-dict/reactive-dict.js#L1-L16        // 4
var stringify = function (value) {                                                                              // 5
  if (value === undefined)                                                                                      // 6
    return 'undefined';                                                                                         // 7
  return EJSON.stringify(value);                                                                                // 8
};                                                                                                              // 9
var parse = function (serialized) {                                                                             // 10
  if (serialized === undefined || serialized === 'undefined')                                                   // 11
    return undefined;                                                                                           // 12
  return EJSON.parse(serialized);                                                                               // 13
};                                                                                                              // 14
                                                                                                                // 15
var changed = function (v) {                                                                                    // 16
  v && v.changed();                                                                                             // 17
};                                                                                                              // 18
                                                                                                                // 19
                                                                                                                // 20
PersistentSession = function (dictName) {                                                                       // 21
  if (_.isString(dictName)) {                                                                                   // 22
    this._dictName = dictName;                                                                                  // 23
                                                                                                                // 24
    // when "session", use the existing dict                                                                    // 25
    if (dictName == "session") {                                                                                // 26
      this._dictName = ""   // we don't need a name for session                                                 // 27
      this._dict = oldSession; // we also want to use the global (incase something was set previously)          // 28
                                                                                                                // 29
    // not session? create a new dict                                                                           // 30
    } else {                                                                                                    // 31
      this._dict = new ReactiveDict(dictName);                                                                  // 32
    }                                                                                                           // 33
                                                                                                                // 34
  } else {                                                                                                      // 35
    throw new Error("dictName must be a string");                                                               // 36
  }                                                                                                             // 37
                                                                                                                // 38
                                                                                                                // 39
  /*                                                                                                            // 40
   * Used to determine if we need to migrate how the data is stored.                                            // 41
   * Each time the data format changes, increment this number.                                                  // 42
   */                                                                                                           // 43
  var PSA_DATA_VERSION = 1;                                                                                     // 44
                                                                                                                // 45
  // === INITIALIZE KEY TRACKING ===                                                                            // 46
  this.psKeys     = {};                                                                                         // 47
  this.psKeyList  = [];                                                                                         // 48
  this.psaKeys    = {};                                                                                         // 49
  this.psaKeyList = [];                                                                                         // 50
                                                                                                                // 51
  // initialize default method setting                                                                          // 52
  this.default_method = 'temporary'; // valid options: 'temporary', 'persistent', 'authenticated'               // 53
  if (Meteor.settings &&                                                                                        // 54
      Meteor.settings.public &&                                                                                 // 55
      Meteor.settings.public.persistent_session) {                                                              // 56
    this.default_method = Meteor.settings.public.persistent_session.default_method;                             // 57
  }                                                                                                             // 58
                                                                                                                // 59
                                                                                                                // 60
  var self = this;                                                                                              // 61
                                                                                                                // 62
  // === HOUSEKEEPING ===                                                                                       // 63
  /*                                                                                                            // 64
   * Converts previously stored values into EJSON compatible formats.                                           // 65
   */                                                                                                           // 66
  function migrateToEJSON() {                                                                                   // 67
    if (amplify.store('__PSDATAVERSION__' + self._dictName) >= PSA_DATA_VERSION) {                              // 68
      return;                                                                                                   // 69
    }                                                                                                           // 70
                                                                                                                // 71
    var psKeyList = amplify.store('__PSKEYS__' + self._dictName);                                               // 72
    var psaKeyList = amplify.store('__PSAKEYS__' + self._dictName);                                             // 73
                                                                                                                // 74
    _.each([psKeyList, psaKeyList], function(list) {                                                            // 75
      _.each(list, function(key) {                                                                              // 76
        amplify.store(key, EJSON.stringify(amplify.store(key)));                                                // 77
      });                                                                                                       // 78
    });                                                                                                         // 79
                                                                                                                // 80
    amplify.store('__PSDATAVERSION__' + self._dictName, PSA_DATA_VERSION);                                      // 81
  };                                                                                                            // 82
                                                                                                                // 83
  if (Meteor.isClient) {                                                                                        // 84
                                                                                                                // 85
    // --- on startup, load persistent data back into meteor session ---                                        // 86
    Meteor.startup(function(){                                                                                  // 87
      var val;                                                                                                  // 88
                                                                                                                // 89
      migrateToEJSON();                                                                                         // 90
                                                                                                                // 91
      // persistent data                                                                                        // 92
      var psList = amplify.store('__PSKEYS__' + self._dictName);                                                // 93
      if ( typeof psList == "object" && psList.length!==undefined ) {                                           // 94
        for (var i=0; i<psList.length; i++) {                                                                   // 95
          if (!_.has(self._dict.keys, psList[i])) {                                                             // 96
            val = self.get(psList[i]);                                                                          // 97
            self.set(psList[i], val, true, false);                                                              // 98
          }                                                                                                     // 99
        }                                                                                                       // 100
      }                                                                                                         // 101
                                                                                                                // 102
      // authenticated data                                                                                     // 103
      var psaList = amplify.store('__PSAKEYS__' + self._dictName);                                              // 104
      if ( typeof psaList == "object" && psaList.length!==undefined ) {                                         // 105
        for (var i=0; i<psaList.length; i++) {                                                                  // 106
          if (!_.has(self._dict.keys, psaList[i])) {                                                            // 107
            val = self.get(psaList[i]);                                                                         // 108
            self.setAuth(psaList[i], val, true, true);                                                          // 109
          }                                                                                                     // 110
        }                                                                                                       // 111
      }                                                                                                         // 112
                                                                                                                // 113
    });                                                                                                         // 114
                                                                                                                // 115
  };                                                                                                            // 116
                                                                                                                // 117
  Tracker.autorun(function () {                                                                                 // 118
    // lazy check for accounts-base                                                                             // 119
    if (Meteor.userId) {                                                                                        // 120
      var userId = Meteor.userId()                                                                              // 121
      if (userId) {                                                                                             // 122
        // user is logged in, leave session in tacted                                                           // 123
      } else {                                                                                                  // 124
        // user is unset, clear authencated keys                                                                // 125
        self.clearAuth()                                                                                        // 126
      }                                                                                                         // 127
    }                                                                                                           // 128
  });                                                                                                           // 129
                                                                                                                // 130
  return this;                                                                                                  // 131
};                                                                                                              // 132
                                                                                                                // 133
// === LOCAL STORAGE INTERACTION ===                                                                            // 134
PersistentSession.prototype.store = function _psStore(type, key, value) {                                       // 135
  // use dict name for uniqueness                                                                               // 136
  this.psKeyList  = amplify.store('__PSKEYS__' + this._dictName) || [];                                         // 137
  this.psaKeyList = amplify.store('__PSAKEYS__' + this._dictName)|| [];                                         // 138
                                                                                                                // 139
  if (type == 'get') {                                                                                          // 140
    return amplify.store(this._dictName + key);                                                                 // 141
  } else {                                                                                                      // 142
                                                                                                                // 143
    this.psKeyList  = _.without(this.psKeyList, key);                                                           // 144
    this.psaKeyList = _.without(this.psaKeyList, key);                                                          // 145
    delete this.psKeys[key];                                                                                    // 146
    delete this.psaKeys[key];                                                                                   // 147
                                                                                                                // 148
    if (value===undefined || value===null || type=='temporary') {                                               // 149
      value = null;                                                                                             // 150
                                                                                                                // 151
    } else if (type=='persistent') {                                                                            // 152
      this.psKeys[key] = EJSON.toJSONValue(value);                                                              // 153
      this.psKeyList = _.union(this.psKeyList, [key]);                                                          // 154
                                                                                                                // 155
    } else if (type=='authenticated') {                                                                         // 156
      this.psaKeys[key] = EJSON.toJSONValue(value);                                                             // 157
      this.psaKeyList = _.union(this.psaKeyList, [key]);                                                        // 158
    }                                                                                                           // 159
                                                                                                                // 160
    amplify.store('__PSKEYS__', this.psKeyList);                                                                // 161
    amplify.store('__PSAKEYS__', this.psaKeyList);                                                              // 162
    amplify.store(this._dictName + key, EJSON.toJSONValue(value));                                              // 163
  }                                                                                                             // 164
};                                                                                                              // 165
                                                                                                                // 166
                                                                                                                // 167
// === GET ===                                                                                                  // 168
// keep for backwards compability, redirect to this._dict                                                       // 169
PersistentSession.prototype.old_get = function (/* arguments */){                                               // 170
  return this._dict.get.apply(this._dict, arguments);                                                           // 171
};                                                                                                              // 172
PersistentSession.prototype.get = function _psGet(key) {                                                        // 173
  var val = this.old_get(key);                                                                                  // 174
  var psVal;                                                                                                    // 175
  var unparsedPsVal = this.store('get', key);                                                                   // 176
  if (unparsedPsVal !== undefined) {                                                                            // 177
    psVal = EJSON.fromJSONValue(this.store('get', key));                                                        // 178
  }                                                                                                             // 179
                                                                                                                // 180
  /*                                                                                                            // 181
   * We can't do `return psVal || val;` here, as when psVal = undefined and                                     // 182
   * val = 0, it will return undefined, even though 0 is the correct value.                                     // 183
   */                                                                                                           // 184
  if (psVal === undefined || psVal === null) {                                                                  // 185
    return val;                                                                                                 // 186
  }                                                                                                             // 187
  return psVal;                                                                                                 // 188
};                                                                                                              // 189
                                                                                                                // 190
                                                                                                                // 191
// === SET ===                                                                                                  // 192
PersistentSession.prototype.old_set = function (/* arguments */){                                               // 193
  // defaults to a persistent, non-authenticated variable                                                       // 194
  return this._dict.set.apply(this._dict, arguments);                                                           // 195
};                                                                                                              // 196
PersistentSession.prototype.set = function _psSet(keyOrObject, value, persist, auth) {                          // 197
                                                                                                                // 198
  // Taken from https://github.com/meteor/meteor/blob/107d858/packages/reactive-dict/reactive-dict.js           // 199
  if ((typeof keyOrObject === 'object') && (value === undefined)) {                                             // 200
    this._setObject(keyOrObject, persist, auth);                                                                // 201
    return;                                                                                                     // 202
  }                                                                                                             // 203
                                                                                                                // 204
  var key = keyOrObject;                                                                                        // 205
  var type = 'temporary';                                                                                       // 206
  if (persist || (persist===undefined && (this.default_method=='persistent' || this.default_method=='authenticated'))) {
    if (auth || (persist===undefined && auth===undefined && this.default_method=='authenticated')) {            // 208
      type = 'authenticated';                                                                                   // 209
    } else {                                                                                                    // 210
      type = 'persistent';                                                                                      // 211
    }                                                                                                           // 212
  }                                                                                                             // 213
  this.store(type, key, value);                                                                                 // 214
  this.old_set(key, value);                                                                                     // 215
};                                                                                                              // 216
                                                                                                                // 217
                                                                                                                // 218
// Taken from https://github.com/meteor/meteor/blob/0ef65cc/packages/reactive-dict/reactive-dict.js#L144-L151   // 219
// Backwords compat:                                                                                            // 220
PersistentSession.prototype.all = function _psAll() {                                                           // 221
  if (this._dict.allDeps) {                                                                                     // 222
    this._dict.allDeps.depend();                                                                                // 223
  }                                                                                                             // 224
  var ret = {};                                                                                                 // 225
  _.each(this._dict.keys, function(value, key) {                                                                // 226
    ret[key] = parse(value);                                                                                    // 227
  });                                                                                                           // 228
  return ret;                                                                                                   // 229
}                                                                                                               // 230
                                                                                                                // 231
PersistentSession.prototype._setObject = function _psSetObject(object, persist, auth) {                         // 232
  var self = this;                                                                                              // 233
                                                                                                                // 234
  _.each(object, function (value, key){                                                                         // 235
    self.set(key, value, persist, auth);                                                                        // 236
  });                                                                                                           // 237
};                                                                                                              // 238
                                                                                                                // 239
PersistentSession.prototype._ensureKey = function _psEnsureKey(key) {                                           // 240
  var self = this._dict;                                                                                        // 241
  if (!(key in self.keyDeps)) {                                                                                 // 242
    self.keyDeps[key] = new Tracker.Dependency;                                                                 // 243
    self.keyValueDeps[key] = {};                                                                                // 244
  }                                                                                                             // 245
}                                                                                                               // 246
                                                                                                                // 247
// === EQUALS ===                                                                                               // 248
// Taken from https://github.com/meteor/meteor/blob/0ef65cc/packages/reactive-dict/reactive-dict.js#L93-L137    // 249
PersistentSession.prototype.equals = function _psEquals(key, value) {                                           // 250
                                                                                                                // 251
  // Mongo.ObjectID is in the 'mongo' package                                                                   // 252
  var ObjectID = null;                                                                                          // 253
  if (Package.mongo) {                                                                                          // 254
    ObjectID = Package.mongo.Mongo.ObjectID;                                                                    // 255
  }                                                                                                             // 256
                                                                                                                // 257
  // We don't allow objects (or arrays that might include objects) for                                          // 258
  // .equals, because JSON.stringify doesn't canonicalize object key                                            // 259
  // order. (We can make equals have the right return value by parsing the                                      // 260
  // current value and using EJSON.equals, but we won't have a canonical                                        // 261
  // element of keyValueDeps[key] to store the dependency.) You can still use                                   // 262
  // "EJSON.equals(reactiveDict.get(key), value)".                                                              // 263
  //                                                                                                            // 264
  // XXX we could allow arrays as long as we recursively check that there                                       // 265
  // are no objects                                                                                             // 266
  if (typeof value !== 'string' &&                                                                              // 267
      typeof value !== 'number' &&                                                                              // 268
      typeof value !== 'boolean' &&                                                                             // 269
      typeof value !== 'undefined' &&                                                                           // 270
      !(value instanceof Date) &&                                                                               // 271
      !(ObjectID && value instanceof ObjectID) &&                                                               // 272
      value !== null) {                                                                                         // 273
    throw new Error("ReactiveDict.equals: value must be scalar");                                               // 274
  }                                                                                                             // 275
  var serializedValue = stringify(value);                                                                       // 276
                                                                                                                // 277
  if (Tracker.active) {                                                                                         // 278
    this._ensureKey(key);                                                                                       // 279
                                                                                                                // 280
    if (! _.has(this._dict.keyValueDeps[key], serializedValue))                                                 // 281
      this._dict.keyValueDeps[key][serializedValue] = new Tracker.Dependency;                                   // 282
                                                                                                                // 283
    var isNew = this._dict.keyValueDeps[key][serializedValue].depend();                                         // 284
    if (isNew) {                                                                                                // 285
      var that = this;                                                                                          // 286
      Tracker.onInvalidate(function () {                                                                        // 287
        // clean up [key][serializedValue] if it's now empty, so we don't                                       // 288
        // use O(n) memory for n = values seen ever                                                             // 289
        if (! that._dict.keyValueDeps[key][serializedValue].hasDependents())                                    // 290
          delete that._dict.keyValueDeps[key][serializedValue];                                                 // 291
      });                                                                                                       // 292
    }                                                                                                           // 293
  }                                                                                                             // 294
                                                                                                                // 295
  var oldValue = this.get(key);                                                                                 // 296
                                                                                                                // 297
  return EJSON.equals(oldValue, value);                                                                         // 298
};                                                                                                              // 299
                                                                                                                // 300
// === SET TEMPORARY ===                                                                                        // 301
// alias to .set(); sets a non-persistent variable                                                              // 302
PersistentSession.prototype.setTemporary = function _psSetTemp(keyOrObject, value) {                            // 303
  this.set(keyOrObject, value, false, false);                                                                   // 304
};                                                                                                              // 305
PersistentSession.prototype.setTemp = function _psSetTemp(keyOrObject, value) {                                 // 306
  this.set(keyOrObject, value, false, false);                                                                   // 307
};                                                                                                              // 308
                                                                                                                // 309
// === SET PERSISTENT ===                                                                                       // 310
// alias to .set(); sets a persistent variable                                                                  // 311
PersistentSession.prototype.setPersistent = function _psSetPersistent(keyOrObject, value) {                     // 312
  this.set(keyOrObject, value, true, false);                                                                    // 313
};                                                                                                              // 314
                                                                                                                // 315
// === SET AUTHENTICATED ===                                                                                    // 316
// alias to .set(); sets a persistent variable that will be removed on logout                                   // 317
PersistentSession.prototype.setAuth = function _psSetAuth(keyOrObject, value) {                                 // 318
  this.set(keyOrObject, value, true, true);                                                                     // 319
};                                                                                                              // 320
                                                                                                                // 321
                                                                                                                // 322
// === MAKE TEMP / PERSISTENT / AUTH ===                                                                        // 323
// change the type of session var                                                                               // 324
PersistentSession.prototype.makeTemp = function _psMakeTemp(key) {                                              // 325
  this.store('temporary', key);                                                                                 // 326
};                                                                                                              // 327
PersistentSession.prototype.makePersistent = function _psMakePersistent(key) {                                  // 328
  var val = this.get(key);                                                                                      // 329
  this.store('persistent', key, val);                                                                           // 330
};                                                                                                              // 331
PersistentSession.prototype.makeAuth = function _psMakeAuth(key) {                                              // 332
  var val = this.get(key);                                                                                      // 333
  this.store('authenticated', key, val);                                                                        // 334
};                                                                                                              // 335
                                                                                                                // 336
                                                                                                                // 337
                                                                                                                // 338
// === CLEAR ===                                                                                                // 339
PersistentSession.prototype.old_clear = function (/* arguments */){                                             // 340
  return this._dict.clear.apply(this._dict, arguments);                                                         // 341
};                                                                                                              // 342
PersistentSession.prototype.clear = function _psClear(key, list) {                                              // 343
  var self = this;                                                                                              // 344
  var oldKeys = self._dict.keys;                                                                                // 345
                                                                                                                // 346
  if ((key === undefined) && (list === undefined)) {                                                            // 347
    list = oldKeys;                                                                                             // 348
  } else if (!(key === undefined)) {                                                                            // 349
    list = [key]                                                                                                // 350
  } else {                                                                                                      // 351
    // list = list                                                                                              // 352
  }                                                                                                             // 353
                                                                                                                // 354
  // okay, if it was an array of keys, find the old key pairings                                                // 355
  if (_.isArray(list)){                                                                                         // 356
    var oldList = list;                                                                                         // 357
    var list = {}                                                                                               // 358
    _.each(oldList, function (key) {                                                                            // 359
      list[key] = oldKeys[key];                                                                                 // 360
    });                                                                                                         // 361
  }                                                                                                             // 362
                                                                                                                // 363
  _.each(list, function(value, akey) {                                                                          // 364
    self.set(akey, undefined, false, false);                                                                    // 365
  });                                                                                                           // 366
};                                                                                                              // 367
                                                                                                                // 368
                                                                                                                // 369
// more or less how it's implemented in reactive dict, but add support for removing single or arrays of keys    // 370
// Derived from https://github.com/meteor/meteor/blob/0ef65cc/packages/reactive-dict/reactive-dict.js#L153-L167 // 371
PersistentSession.prototype.clear = function _psClear(key, list) {                                              // 372
  var self = this;                                                                                              // 373
  var oldKeys = self._dict.keys;                                                                                // 374
                                                                                                                // 375
  if ((key === undefined) && (list === undefined)) {                                                            // 376
    list = oldKeys;                                                                                             // 377
  } else if (!(key === undefined)) {                                                                            // 378
    list = [key]                                                                                                // 379
  } else {                                                                                                      // 380
    // list = list                                                                                              // 381
  }                                                                                                             // 382
                                                                                                                // 383
  // okay, if it was an array of keys, find the old key pairings for reactivity                                 // 384
  if (_.isArray(list)){                                                                                         // 385
    var oldList = list;                                                                                         // 386
    var list = {}                                                                                               // 387
    _.each(oldList, function (key) {                                                                            // 388
      list[key] = oldKeys[key];                                                                                 // 389
    });                                                                                                         // 390
  }                                                                                                             // 391
                                                                                                                // 392
  _.each(list, function(value, akey) {                                                                          // 393
    self.set(akey, undefined, false, false);                                                                    // 394
                                                                                                                // 395
    changed(self._dict.keyDeps[akey]);                                                                          // 396
    changed(self._dict.keyValueDeps[akey][value]);                                                              // 397
    changed(self._dict.keyValueDeps[akey]['undefined']);                                                        // 398
                                                                                                                // 399
    delete self._dict.keys[akey]; // remove the key                                                             // 400
  });                                                                                                           // 401
                                                                                                                // 402
  // reactive-dict 1.1.0+                                                                                       // 403
  if (self._dict.allDeps) {                                                                                     // 404
    self._dict.allDeps.changed();                                                                               // 405
  }                                                                                                             // 406
};                                                                                                              // 407
                                                                                                                // 408
                                                                                                                // 409
// === CLEAR TEMP ===                                                                                           // 410
// clears all the temporary keys                                                                                // 411
PersistentSession.prototype.clearTemp = function _psClearTemp() {                                               // 412
  this.clear(undefined, _.keys(_.omit(this._dict.keys, this.psKeys, this.psaKeys)));                            // 413
};                                                                                                              // 414
                                                                                                                // 415
// === CLEAR PERSISTENT ===                                                                                     // 416
// clears all persistent keys                                                                                   // 417
PersistentSession.prototype.clearPersistent = function _psClearPersistent() {                                   // 418
  this.clear(undefined, this.psKeys);                                                                           // 419
};                                                                                                              // 420
                                                                                                                // 421
// === CLEAR AUTH ===                                                                                           // 422
// clears all authenticated keys                                                                                // 423
PersistentSession.prototype.clearAuth = function _psClearAuth() {                                               // 424
  this.clear(undefined, this.psaKeys);                                                                          // 425
};                                                                                                              // 426
                                                                                                                // 427
                                                                                                                // 428
                                                                                                                // 429
                                                                                                                // 430
// === UPDATE ===                                                                                               // 431
// updates the value of a session var without changing its type                                                 // 432
PersistentSession.prototype.update = function _psUpdate(key, value) {                                           // 433
  var persist, auth;                                                                                            // 434
  if ( _.indexOf(this.psaKeyList, key) >= 0 ) { auth = true; }                                                  // 435
  if ( auth || _.indexOf(this.psKeyList, key) >= 0 ) { persist = true; }                                        // 436
  this.set(key, value, persist, auth);                                                                          // 437
};                                                                                                              // 438
                                                                                                                // 439
// === SET DEFAULT ===                                                                                          // 440
PersistentSession.prototype.old_setDefault = function (/* arguments */){                                        // 441
  return this._dict.setDefault.apply(this._dict, arguments);                                                    // 442
};                                                                                                              // 443
PersistentSession.prototype.setDefault = function _psSetDefault(keyOrObject, value, persist, auth) {            // 444
  var self = this;                                                                                              // 445
                                                                                                                // 446
  if (_.isObject(keyOrObject)) {                                                                                // 447
    _.each(keyOrObject, function(value, key) {                                                                  // 448
      self._dict.setDefault(key, value, persist, auth);                                                         // 449
    });                                                                                                         // 450
    return;                                                                                                     // 451
  }                                                                                                             // 452
                                                                                                                // 453
  // TODO: Handle objects                                                                                       // 454
  if ( this.get(keyOrObject) === undefined) {                                                                   // 455
    this.set(keyOrObject, value, persist, auth);                                                                // 456
  }                                                                                                             // 457
};                                                                                                              // 458
                                                                                                                // 459
// === SET DEFAULT TEMP ===                                                                                     // 460
PersistentSession.prototype.setDefaultTemp = function _psSetDefaultTemp(keyOrObject, value) {                   // 461
                                                                                                                // 462
  if (_.isObject(keyOrObject)) {                                                                                // 463
    value = undefined;                                                                                          // 464
  }                                                                                                             // 465
                                                                                                                // 466
  this.setDefault(keyOrObject, value, false, false);                                                            // 467
};                                                                                                              // 468
                                                                                                                // 469
// === SET DEFAULT PERSISTENT ===                                                                               // 470
PersistentSession.prototype.setDefaultPersistent = function _psSetDefaultPersistent(keyOrObject, value) {       // 471
                                                                                                                // 472
  if (_.isObject(keyOrObject)) {                                                                                // 473
    value = undefined;                                                                                          // 474
  }                                                                                                             // 475
                                                                                                                // 476
  this.setDefault(keyOrObject, value, true, false);                                                             // 477
};                                                                                                              // 478
                                                                                                                // 479
// === SET DEFAULT AUTH ===                                                                                     // 480
PersistentSession.prototype.setDefaultAuth = function _psSetDefaultAuth(keyOrObject, value) {                   // 481
                                                                                                                // 482
  if (_.isObject(keyOrObject)) {                                                                                // 483
    value = undefined;                                                                                          // 484
  }                                                                                                             // 485
                                                                                                                // 486
  this.setDefault(keyOrObject, value, true, true);                                                              // 487
};                                                                                                              // 488
                                                                                                                // 489
// automatically apply PersistentSession to Session                                                             // 490
var oldSession = _.clone(Session);                                                                              // 491
_.extend(Session, new PersistentSession("session"))                                                             // 492
                                                                                                                // 493
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['u2622:persistent-session'] = {
  PersistentSession: PersistentSession
};

})();
