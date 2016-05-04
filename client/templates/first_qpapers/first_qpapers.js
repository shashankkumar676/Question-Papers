/*****************************************************************************/
/* FirstQpapers: Event Handlers */
/*****************************************************************************/
Template.FirstQpapers.events({
});

/*****************************************************************************/
/* FirstQpapers: Helpers */
/*****************************************************************************/
Template.FirstQpapers.helpers({

  first_qp_png: function () {

    var sess_ppr = Session.get('choice_first_qp_val');

    if (Session.get('year') === 'first') {

      if (Session.get('one_sub') === 'eng') {
        return new Handlebars.SafeString('<img src=\"/pdfs/first_yr/english/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
      } else if (Session.get('one_sub') === 'm1') {
        return new Handlebars.SafeString('<img src=\"/pdfs/first_yr/m1/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
      } else if (Session.get('one_sub') === 'm2') {
        return new Handlebars.SafeString('<img src=\"/pdfs/first_yr/m2/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
      } else if (Session.get('one_sub') === 'phy') {
        return new Handlebars.SafeString('<img src=\"/pdfs/first_yr/phy/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
      } else if (Session.get('one_sub') === 'chem') {
        return new Handlebars.SafeString('<img src=\"/pdfs/first_yr/chem/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
      } else if (Session.get('one_sub') === 'c') {
        return new Handlebars.SafeString('<img src=\"/pdfs/first_yr/c/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
      } else if (Session.get('one_sub') === 'mech') {
        return new Handlebars.SafeString('<img src=\"/pdfs/first_yr/mech/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
      } else if (Session.get('one_sub') === 'draw') {
        return new Handlebars.SafeString('<img src=\"/pdfs/first_yr/draw/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
      }

    }

  }

});

/*****************************************************************************/
/* FirstQpapers: Lifecycle Hooks */
/*****************************************************************************/
Template.FirstQpapers.created = function () {
};

Template.FirstQpapers.rendered = function () {
};

Template.FirstQpapers.destroyed = function () {
};
