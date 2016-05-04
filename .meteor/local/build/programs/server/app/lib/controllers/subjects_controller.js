(function(){SubjectsController = RouteController.extend({
  subscriptions: function () {
    // set up the subscriptions for the route and optionally
    // wait on them like this:
    //
     this.subscribe('cseiisemi');this.subscribe('cseiisemii');this.subscribe('cseiiisemi');this.subscribe('cseiiisemii');this.subscribe('cseivsemi');this.subscribe('cseivsemii');
     this.subscribe('eceiisemi');this.subscribe('eceiisemii');this.subscribe('eceiiisemi');this.subscribe('eceiiisemii');this.subscribe('eceivsemi');this.subscribe('eceivsemii');
     this.subscribe('eeeiisemi');this.subscribe('eeeiisemii');this.subscribe('eeeiiisemi');this.subscribe('eeeiiisemii');this.subscribe('eeeivsemi');this.subscribe('eeeivsemii');
     this.subscribe('itiisemi');this.subscribe('itiisemii');this.subscribe('itiiisemi');this.subscribe('itiiisemii');this.subscribe('itivsemi');this.subscribe('itivsemii');
     this.subscribe('mechiisemi');this.subscribe('mechiisemii');this.subscribe('mechiiisemi');this.subscribe('mechiiisemii');this.subscribe('mechivsemi');this.subscribe('mechivsemii');
    //
    // "Waiting" on a subscription does not block. Instead,
    // the subscription handle is added to a reactive list
    // and when all items in this list are ready, this.ready()
    // returns true in any of your route functions.
  },

  data: function () {
    // return a global data context like this:
    // Items.findOne({_id: this.params._id});
  },

  action: function () {
    // You can create as many action functions as you'd like.
    // This is the primary function for running your route.
    // Usually it just renders a template to a page. But it
    // might also perform some conditional logic. Override
    // the data context by providing it as an option in the
    // last parameter.
    this.render('Subjects', { /* data: {} */});
  }
});

})();
