/*****************************************************************************/
/* Qpcards: Event Handlers */
/*****************************************************************************/
Template.Qpcards.events({

});

// Template.registerHelper('formatId', function(data) {
//   return (data && data._str) || data;
// });

/*****************************************************************************/
/* Qpcards: Helpers */
/*****************************************************************************/
Template.Qpcards.helpers({
  
  qptitles:function(){

    if (Session.get('year') === 'second') {

      if (Session.get('sem') === 'one') {

        if (Session.get('branch') === 'cse'){

          if(Session.get('subj') === 'm3'){
            return Mthree.find({}).fetch();
          }else if(Session.get('subj') === 'ds'){
            return Ds.find({}).fetch();
          }else if(Session.get('subj') === 'dist'){
            return Dist.find({}).fetch();
          }else if(Session.get('subj') === 'lst'){
            return Lst.find({}).fetch();
          }else if(Session.get('subj') === 'ca'){
            return Ca.find({}).fetch();
          }else if(Session.get('subj') === 'be'){
            return Be.find({}).fetch();
          }

    //     } else if (Session.get('branch') === 'civil'){
    //       if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }
    //     } else if (Session.get('branch') === 'ece'){
    //       if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }
    //     } else if (Session.get('branch') === 'eee'){
    //       if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }
    //     } else if (Session.get('branch') === 'it'){
    //       if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }
    //     } else if (Session.get('branch') === 'mech'){
    //       if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }
    //     }
    //
    //   } else if (Session.get('sem') === 'two') {
    //
    //     if (Session.get('branch') === 'cse'){
    //       if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }
    //     } else if (Session.get('branch') === 'civil'){
    //       if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }
    //     } else if (Session.get('branch') === 'ece'){
    //       if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }
    //     } else if (Session.get('branch') === 'eee'){
    //       if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }
    //     } else if (Session.get('branch') === 'it'){
    //       if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }
    //     } else if (Session.get('branch') === 'mech'){
    //       if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }else if(Session.get('subj') === ''){
    //         return .find({}).fetch();
    //       }
    //     }
    //
    //   }
    //
    // } else  if (Session.get('year') === 'third') {
    //
    //       if (Session.get('sem') === 'one') {
    //
    //         if (Session.get('branch') === 'cse'){
    //           if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }
    //         } else if (Session.get('branch') === 'civil'){
    //           if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }
    //         } else if (Session.get('branch') === 'ece'){
    //           if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }
    //         } else if (Session.get('branch') === 'eee'){
    //           if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }
    //         } else if (Session.get('branch') === 'it'){
    //           if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }
    //         } else if (Session.get('branch') === 'mech'){
    //           if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }
    //         }
    //
    //       } else if (Session.get('sem') === 'two') {
    //
    //         if (Session.get('branch') === 'cse'){
    //           if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }
    //         } else if (Session.get('branch') === 'civil'){
    //           if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }
    //         } else if (Session.get('branch') === 'ece'){
    //           if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }
    //         } else if (Session.get('branch') === 'eee'){
    //           if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }
    //         } else if (Session.get('branch') === 'it'){
    //           if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }
    //         } else if (Session.get('branch') === 'mech'){
    //           if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }else if(Session.get('subj') === ''){
    //             return .find({}).fetch();
    //           }
    //         }
    //
    //       }
    //
    //     } else if (Session.get('year') === 'fourth') {
    //
    //           if (Session.get('sem') === 'one') {
    //
    //             if (Session.get('branch') === 'cse'){
    //               if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }
    //             } else if (Session.get('branch') === 'civil'){
    //               if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }
    //             } else if (Session.get('branch') === 'ece'){
    //               if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }
    //             } else if (Session.get('branch') === 'eee'){
    //               if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }
    //             } else if (Session.get('branch') === 'it'){
    //               if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }
    //             } else if (Session.get('branch') === 'mech'){
    //               if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }
    //             }
    //
    //           } else if (Session.get('sem') === 'two') {
    //
    //             if (Session.get('branch') === 'cse'){
    //               if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }
    //             } else if (Session.get('branch') === 'civil'){
    //               if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }
    //             } else if (Session.get('branch') === 'ece'){
    //               if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }
    //             } else if (Session.get('branch') === 'eee'){
    //               if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }
    //             } else if (Session.get('branch') === 'it'){
    //               if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }
    //             } else if (Session.get('branch') === 'mech'){
    //               if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }else if(Session.get('subj') === ''){
    //                 return .find({}).fetch();
    //               }
                 }

              }

            }
  }

});

/*****************************************************************************/
/* Qpcards: Lifecycle Hooks */
/*****************************************************************************/
Template.Qpcards.created = function () {
};

Template.Qpcards.rendered = function () {
};

Template.Qpcards.destroyed = function () {

};
