(function(){/*****************************************************************************/
/* FirstQpapers: Event Handlers */
/*****************************************************************************/
Template.GateQpapers.events({
});

/*****************************************************************************/
/* FirstQpapers: Helpers */
/*****************************************************************************/
Template.GateQpapers.helpers({

  gate_qp_png: function () {

    var sess_ppr = Session.get('choice_gate_qp_val');

      if (Session.get('gate_sub') === 'cs') {
        return new Handlebars.SafeString('<img src=\"/pdfs/gate/cs/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
      } else if (Session.get('gate_sub') === 'ec') {
        return new Handlebars.SafeString('<img src=\"/pdfs/gate/ec/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
      } else if (Session.get('gate_sub') === 'ee') {
        return new Handlebars.SafeString('<img src=\"/pdfs/gate/ee/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
      } else if (Session.get('gate_sub') === 'me') {
        return new Handlebars.SafeString('<img src=\"/pdfs/gate/me/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
      }

    }

});
/*****************************************************************************/
/* FirstQpapers: Lifecycle Hooks */
/*****************************************************************************/
Template.GateQpapers.created = function () {
};

Template.GateQpapers.rendered = function () {
};

Template.GateQpapers.destroyed = function () {
};

})();
