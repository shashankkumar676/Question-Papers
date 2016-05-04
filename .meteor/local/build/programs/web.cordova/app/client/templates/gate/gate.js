(function(){/*****************************************************************************/
/* FirstYear: Event Handlers */
/*****************************************************************************/
Template.gate.events({

  "click #gate .gate_btns  .cs .button": function(event) {
    Session.setPersistent('gate_sub', 'cs');
  },
  "click #gate .gate_btns  .ec .button": function(event) {
    Session.setPersistent('gate_sub', 'ec');
  },
  "click #gate .gate_btns  .ee .button": function(event) {
    Session.setPersistent('gate_sub', 'ee');
  },
  "click #gate .gate_btns  .me .button": function(event) {
    Session.setPersistent('gate_sub', 'me');
  }

});

/*****************************************************************************/
/* FirstYear: Helpers */
/*****************************************************************************/
Template.FirstYear.helpers({
});

/*****************************************************************************/
/* FirstYear: Lifecycle Hooks */
/*****************************************************************************/
Template.FirstYear.created = function () {
};

Template.FirstYear.rendered = function () {
};

Template.FirstYear.destroyed = function () {
};

})();
