(function(){/*****************************************************************************/
/* Selections: Event Handlers */
/*****************************************************************************/
Template.selections_comp.events({

  "click #selections_comp .first_btn .blue": function(event) {
    Session.clearPersistent('subj');
  },

  "submit .select-form":function(event){

    Session.clearPersistent();
    event.preventDefault();

    var choice_year = event.target.year.value;
    var choice_sem = event.target.semester.value;
    var choice_branch = event.target.branch.value;

    // console.log(choice_year,choice_sem,choice_branch);

    if (choice_year !== 'select_year' & choice_sem !== 'select_semester'
                                      & choice_branch !== 'select_branch') {
        Session.setPersistent('year', choice_year);
        Session.setPersistent('sem', choice_sem);
        Session.setPersistent('branch', choice_branch);

        // console.log(Session.get('year'));console.log(Session.get('sem'));
        // console.log(Session.get('branch'));

        Router.go('subjects');
    }
  }

});

/*****************************************************************************/
/* Selections: Helpers */
/*****************************************************************************/
Template.selections_engg.helpers({
});

/*****************************************************************************/
/* Selections: Lifecycle Hooks */
/*****************************************************************************/
Template.selections_engg.created = function () {
};

Template.selections_engg.rendered = function () {

  $('#select-yr').dropdown();

  $('#select-sem').dropdown();

  $('#select-br').dropdown();

  $('img').each(function(){
    $(this).click(function(){
        $(this).width($(this).width()+$(this).width())
    });
  });

};

Template.selections_engg.destroyed = function () {
};

})();
