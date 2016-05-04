/*****************************************************************************/
/* FirstYear: Event Handlers */
/*****************************************************************************/
Template.FirstYear.events({

  "click #year1 .subjs-btns  .eng .button": function(event) {
    Session.setPersistent('year', 'first');
    Session.setPersistent('one_sub', 'eng');
  },
  "click #year1 .subjs-btns  .m1 .button": function(event) {
    Session.setPersistent('year', 'first');
    Session.setPersistent('one_sub', 'm1');
  },
  "click #year1 .subjs-btns  .m2 .button": function(event) {
    Session.setPersistent('year', 'first');
    Session.setPersistent('one_sub', 'm2');
  },
  "click #year1 .subjs-btns  .phy .button": function(event) {
    Session.setPersistent('year', 'first');
    Session.setPersistent('one_sub', 'phy');
  },
  "click #year1 .subjs-btns  .chem .button": function(event) {
    Session.setPersistent('year', 'first');
    Session.setPersistent('one_sub', 'chem');
  },
  "click #year1 .subjs-btns  .c .button": function(event) {
    Session.setPersistent('year', 'first');
    Session.setPersistent('one_sub', 'c');
  },
  "click #year1 .subjs-btns  .mech .button": function(event) {
    Session.setPersistent('year', 'first');
    Session.setPersistent('one_sub', 'mech');
  },
  "click #year1 .subjs-btns  .draw .button": function(event) {
    Session.setPersistent('year', 'first');
    Session.setPersistent('one_sub', 'draw');
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
