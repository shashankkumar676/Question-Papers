(function(){/*****************************************************************************/
/* FirstQpcards: Event Handlers */
/*****************************************************************************/
Template.FirstQpcards.events({
});

/*****************************************************************************/
/* FirstQpcards: Helpers */
/*****************************************************************************/
Template.FirstQpcards.helpers({

    first_qptitles:function(){

      if (Session.get('one_sub') === 'eng') {
        return English.find({}).fetch();
      } else if (Session.get('one_sub') === 'm1') {
        return Mone.find({}).fetch();
      } else if (Session.get('one_sub') === 'm2') {
        return Mtwo.find({}).fetch();
      } else if (Session.get('one_sub') === 'phy') {
        return Physics.find({}).fetch();
      } else if (Session.get('one_sub') === 'chem') {
        return Chemistry.find({}).fetch();
      } else if (Session.get('one_sub') === 'c') {
        return C.find({}).fetch();
      } else if (Session.get('one_sub') === 'mech') {
        return Mechanics.find({}).fetch();
      } else if (Session.get('one_sub') === 'draw') {
        return Drawing.find({}).fetch();
      }

    }

});

/*****************************************************************************/
/* FirstQpcards: Lifecycle Hooks */
/*****************************************************************************/
Template.FirstQpcards.created = function () {
};

Template.FirstQpcards.rendered = function () {
  // console.log(Session.get('year'));
  // console.log(Session.get('one_sub'));
};

Template.FirstQpcards.destroyed = function () {
};

})();
