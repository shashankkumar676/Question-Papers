/*****************************************************************************/
/* Subjects: Event Handlers */
/*****************************************************************************/
Template.Subjects.events({

  "submit .subs_form":function(event){
    event.preventDefault();

    var choice_sub = event.target.subject.value;
    // console.log(choice_sub);

    Session.setPersistent('subj', choice_sub);
    // console.log(Session.get('subj'));

    Router.go('qpcards');

  }

});

/*****************************************************************************/
/* Subjects: Helpers */
/*****************************************************************************/
Template.Subjects.helpers({

  subs:function(){

    if (Session.get('year') === 'second') {

      if (Session.get('sem') === 'one') {

        if (Session.get('branch') === 'cse'){
          return Cseiisemi.find({}).fetch();
        } else if (Session.get('branch') === 'civil'){
          return Civiliisemi.find({}).fetch();
        } else if (Session.get('branch') === 'ece'){
          return Eceiisemi.find({}).fetch();
        } else if (Session.get('branch') === 'eee'){
          return Eeeiisemi.find({}).fetch();
        } else if (Session.get('branch') === 'it'){
          return Itiisemi.find({}).fetch();
        } else if (Session.get('branch') === 'mech'){
          return Mechiisemi.find({}).fetch();
        }

      } else if (Session.get('sem') === 'two') {

        if (Session.get('branch') === 'cse'){
          return Cseiisemii.find({}).fetch();
        } else if (Session.get('branch') === 'civil'){
          return Civiliisemii.find({}).fetch();
        } else if (Session.get('branch') === 'ece'){
          return Eceiisemii.find({}).fetch();
        } else if (Session.get('branch') === 'eee'){
          return Eeeiisemii.find({}).fetch();
        } else if (Session.get('branch') === 'it'){
          return Itiisemii.find({}).fetch();
        } else if (Session.get('branch') === 'mech'){
          return Mechiisemii.find({}).fetch();
        }

      }

    } else  if (Session.get('year') === 'third') {

          if (Session.get('sem') === 'one') {

            if (Session.get('branch') === 'cse'){
              return Cseiiisemi.find({}).fetch();
            } else if (Session.get('branch') === 'civil'){
              return Civiliiisemi.find({}).fetch();
            } else if (Session.get('branch') === 'ece'){
              return Eceiiisemi.find({}).fetch();
            } else if (Session.get('branch') === 'eee'){
              return Eeeiiisemi.find({}).fetch();
            } else if (Session.get('branch') === 'it'){
              return Itiiisemi.find({}).fetch();
            } else if (Session.get('branch') === 'mech'){
              return Mechiiisemi.find({}).fetch();
            }

          } else if (Session.get('sem') === 'two') {

            if (Session.get('branch') === 'cse'){
              return Cseiiisemii.find({}).fetch();
            } else if (Session.get('branch') === 'civil'){
              return Civiliiisemii.find({}).fetch();
            } else if (Session.get('branch') === 'ece'){
              return Eceiiisemii.find({}).fetch();
            } else if (Session.get('branch') === 'eee'){
              return Eeeiiisemii.find({}).fetch();
            } else if (Session.get('branch') === 'it'){
              return Itiiisemii.find({}).fetch();
            } else if (Session.get('branch') === 'mech'){
              return Mechiiisemii.find({}).fetch();
            }

          }

        } else if (Session.get('year') === 'fourth') {

              if (Session.get('sem') === 'one') {

                if (Session.get('branch') === 'cse'){
                  return Cseivsemi.find({}).fetch();
                } else if (Session.get('branch') === 'civil'){
                  return Civilivsemi.find({}).fetch();
                } else if (Session.get('branch') === 'ece'){
                  return Eceivsemi.find({}).fetch();
                } else if (Session.get('branch') === 'eee'){
                  return Eeeivsemi.find({}).fetch();
                } else if (Session.get('branch') === 'it'){
                  return Itivsemi.find({}).fetch();
                } else if (Session.get('branch') === 'mech'){
                  return Mechivsemi.find({}).fetch();
                }

              } else if (Session.get('sem') === 'two') {

                if (Session.get('branch') === 'cse'){
                  return Cseivsemii.find({}).fetch();
                } else if (Session.get('branch') === 'civil'){
                  return Civilivsemii.find({}).fetch();
                } else if (Session.get('branch') === 'ece'){
                  return Eceivsemii.find({}).fetch();
                } else if (Session.get('branch') === 'eee'){
                  return Eeeivsemii.find({}).fetch();
                } else if (Session.get('branch') === 'it'){
                  return Itivsemii.find({}).fetch();
                } else if (Session.get('branch') === 'mech'){
                  return Mechivsemii.find({}).fetch();
                }

              }

            }

  }

});

/*****************************************************************************/
/* Subjects: Lifecycle Hooks */
/*****************************************************************************/
Template.Subjects.created = function () {
};

Template.Subjects.rendered = function () {

  $('#select3').dropdown();

};

Template.Subjects.destroyed = function () {
};
