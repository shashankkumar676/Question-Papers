(function(){/*****************************************************************************/
/* FirstQpcards: Event Handlers */
/*****************************************************************************/
Template.Gatecards.events({
});

/*****************************************************************************/
/* FirstQpcards: Helpers */
/*****************************************************************************/
Template.Gatecards.helpers({

    gate_qptitles:function(){

      if (Session.get('gate_sub') === 'cs') {
        return Cs.find({}).fetch();
      } else if (Session.get('gate_sub') === 'ec') {
        return Ec.find({}).fetch();
      } else if (Session.get('gate_sub') === 'ee') {
        return Ee.find({}).fetch();
      } else if (Session.get('gate_sub') === 'me') {
        return Me.find({}).fetch();
      }

    }

});

/*****************************************************************************/
/* FirstQpcards: Lifecycle Hooks */
/*****************************************************************************/
Template.Gatecards.created = function () {
};

Template.Gatecards.rendered = function () {
  // console.log(Session.get('year'));
  // console.log(Session.get('one_sub'));
};

Template.Gatecards.destroyed = function () {
};

})();
