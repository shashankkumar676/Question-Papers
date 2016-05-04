(function(){/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('ca', function (/* args */) {
  return Ca.find();
});

Meteor.publish('be', function (/* args */) {
  return Be.find();
});

Meteor.publish('c', function (/* args */) {
  return C.find();
});

Meteor.publish('chemistry', function (/* args */) {
  return Chemistry.find();
});

Meteor.publish('dist', function (/* args */) {
  return Dist.find();
});

Meteor.publish('drawing', function (/* args */) {
  return Drawing.find();
});

Meteor.publish('ds', function (/* args */) {
  return Ds.find();
});

Meteor.publish('english', function (/* args */) {
  return English.find();
});

Meteor.publish('lst', function (/* args */) {
  return Lst.find();
});

Meteor.publish('mechanics', function (/* args */) {
  return Mechanics.find();
});

Meteor.publish('mone', function (/* args */) {
  return Mone.find();
});

Meteor.publish('mtwo', function (/* args */) {
  return Mtwo.find();
});

Meteor.publish('mthree', function (/* args */) {
  return Mthree.find();
});

Meteor.publish('physics', function (/* args */) {
  return Physics.find();
});


Meteor.publish('cseiisemi', function (/* args */) {
  return Cseiisemi.find();
});

Meteor.publish('cseiisemii', function (/* args */) {
  return Cseiisemii.find();
});

Meteor.publish('cseiiisemi', function (/* args */) {
  return Cseiiisemi.find();
});

Meteor.publish('cseiiisemii', function (/* args */) {
  return Cseiiisemii.find();
});

Meteor.publish('cseivsemi', function (/* args */) {
  return Cseivsemi.find();
});

Meteor.publish('cseivsemii', function (/* args */) {
  return Cseivsemii.find();
});

Meteor.publish('eceiisemi', function (/* args */) {
  return Eceiisemi.find();
});

Meteor.publish('eceiisemii', function (/* args */) {
  return Eceiisemii.find();
});

Meteor.publish('eceiiisemii', function (/* args */) {
  return Eceiiisemii.find();
});

Meteor.publish('eceivsemi', function (/* args */) {
  return Eceivsemi.find();
});

Meteor.publish('eceivsemii', function (/* args */) {
  return Eceivsemii.find();
});

Meteor.publish('mechiisemii', function (/* args */) {
  return Mechiisemii.find();
});

Meteor.publish('mechiisemi', function (/* args */) {
  return Mechiisemi.find();
});

Meteor.publish('mechiiisemi', function (/* args */) {
  return Mechiiisemi.find();
});

Meteor.publish('mechiiisemii', function (/* args */) {
  return Mechiiisemii.find();
});

Meteor.publish('mechivsemi', function (/* args */) {
  return Mechivsemi.find();
});

Meteor.publish('mechivsemii', function (/* args */) {
  return Mechivsemii.find();
});

Meteor.publish('itiisemi', function (/* args */) {
  return Itiisemi.find();
});

Meteor.publish('itiisemii', function (/* args */) {
  return Itiisemii.find();
});

Meteor.publish('itiiisemi', function (/* args */) {
  return Itiiisemi.find();
});

Meteor.publish('itiiisemii', function (/* args */) {
  return Itiiisemii.find();
});

Meteor.publish('itivsemii', function (/* args */) {
  return Itivsemii.find();
});

Meteor.publish('itivsemi', function (/* args */) {
  return Itivsemi.find();
});

Meteor.publish('eeeiisemi', function (/* args */) {
  return Eeeiisemi.find();
});

Meteor.publish('eeeiisemii', function (/* args */) {
  return Eeeiisemii.find();
});

Meteor.publish('eeeiiisemi', function (/* args */) {
  return Eeeiiisemi.find();
});

Meteor.publish('eeeiiisemii', function (/* args */) {
  return Eeeiiisemii.find();
});

Meteor.publish('eeeivsemii', function (/* args */) {
  return Eeeivsemii.find();
});

Meteor.publish('eeeivsemi', function (/* args */) {
  return Eeeivsemi.find();
});

})();
