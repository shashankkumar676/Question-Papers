(function(){/*****************************************************************************/
/* Qpapers: Event Handlers */
/*****************************************************************************/
Template.Qpapers.events({
});

/*****************************************************************************/
/* Qpapers: Helpers */
/*****************************************************************************/
Template.Qpapers.helpers({

  qp_png: function () {
    var sess_ppr = Session.get('choice_qp_val');

    if (Session.get('year') === 'second') {

      if (Session.get('sem') === 'one') {

        if (Session.get('branch') === 'cse'){

          if(Session.get('subj') === 'm3'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/cse/two-one/m3/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'ds'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/cse/two-one/ds/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'dist'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/cse/dist/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'lst'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/cse/lst/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'ca'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/cse/two-one/ca/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'be'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/cse/be/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }

        } else if (Session.get('branch') === 'civil'){
          if(Session.get('subj') === 'civil_m3'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/civil/two-one/civil_m3/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'civil_bd'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/civil/two-one/civil_bd/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'civil_emc'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/civil/two-one/civil_emc/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'civil_eg'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/civil/two-one/civil_eg/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'civil_som1'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/civil/two-one/civil_som1/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'civil_s1'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/civil/two-one/civil_s1/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }
        } else if (Session.get('branch') === 'ece'){
          if(Session.get('subj') === 'ece_m3'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/ece/two-one/ece_m3/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'ece_emt'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/ece/two-one/ece_emt/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'ece_bca'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/ece/two-one/ece_bca/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'ece_ed'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/ece/two-one/ece_ed/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'ece_eme'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/ece/two-one/ece_eme/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'ece_et'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/ece/two-one/ece_et/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }
        } else if (Session.get('branch') === 'eee'){
          if(Session.get('subj') === 'eee_m3'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/eee/two-one/eee_m3/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'eee_ec1'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/eee/two-one/eee_ec1/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'eee_es'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/eee/two-one/eee_es/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'eee_emi'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/eee/two-one/eee_emi/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'eee_ee1'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/eee/two-one/eee_ee1/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'eee_pome'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/eee/two-one/eee_pome/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }
        } else if (Session.get('branch') === 'it'){
          if(Session.get('subj') === 'it_es'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/it/two-one/it_es/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'it_dist'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/it/two-one/it_ds/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'it_me'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/it/two-one/it_me/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'it_deld'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/it/two-one/it_deld/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'it_ecm'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/it/two-one/it_ecm/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'it_ds'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/it/two-one/it_ds/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }
        } else if (Session.get('branch') === 'mech'){
          if(Session.get('subj') === 'mech_m3'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/mech/two-one/mech_m3/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'mech_mms'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/mech/two-one/mech_mms/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'mech_md'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/mech/two-one/mech_md/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'mech_mom'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/mech/two-one/mech_mom/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'mech_es'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/mech/two-one/mech_es/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'mech_mea'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/mech/two-one/mech_mea/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }
        }

      } else if (Session.get('sem') === 'two') {

        if (Session.get('branch') === 'cse'){
          if(Session.get('subj') === 'm4'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/cse/two-two/m4/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'oops'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/cse/two-two/oops/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'mpi'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/cse/two-two/mpi/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'dc'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/cse/two-two/dc/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'es'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/cse/two-two/es/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'ecm'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/cse/two-two/ecm/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }
        } else if (Session.get('branch') === 'civil'){
          if(Session.get('subj') === 'civil_som2'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/civil/two-two/civil_som2/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'civil_s2'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/civil/two-two/civil_s2/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'civil_fm1'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/civil/two-two/civil_fm1/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'civil_es'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/civil/two-two/civil_es/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'civil_emt'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/civil/two-two/civil_emt/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }
        } else if (Session.get('branch') === 'ece'){
          if(Session.get('subj') === 'ece_m4'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/ece/two-two/ece_m4/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'ece_aec'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/ece/two-two/ece_aec/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'ece_ntl'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/ece/two-two/ece_ntl/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'ece_satt'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/ece/two-two/ece_satt/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'ece_pdsc'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/ece/two-two/ece_pdsc/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'ece_es'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/ece/two-two/ece_es/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }
        } else if (Session.get('branch') === 'eee'){
          if(Session.get('subj') === 'eee_ec2'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/eee/two-two/eee_ec2/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'eee_sm'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/eee/two-two/eee_sm/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'eee_ps1'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/eee/two-two/eee_ps1/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'eee_ee2'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/eee/two-two/eee_ee2/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'eee_emt'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/eee/two-two/eee_emt/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'eee_em1'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/eee/two-two/eee_em1/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }
        } else if (Session.get('branch') === 'it'){
          if(Session.get('subj') === 'it_prd'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/it/two-two/it_prd/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'it_ss'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/it/two-two/it_ss/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'it_wt'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/it/two-two/it_wt/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'it_oops'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/it/two-two/it_oops/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'it_com'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/it/two-two/it_com/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'it_dc'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/it/two-two/it_dc/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }
        } else if (Session.get('branch') === 'mech'){
          if(Session.get('subj') === 'mech_m4'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/mech/two-two/mech_m4/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'mech_kom'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/mech/two-two/mech_kom/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'mech_ecm'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/mech/two-two/mech_ecm/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'mech_td'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/mech/two-two/mech_td/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'mech_ae'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/mech/two-two/mech_ae/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }else if(Session.get('subj') === 'mech_fd'){
            return new Handlebars.SafeString('<img src=\"/pdfs/second_yr/mech/two-two/mech_fd/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
          }
        }

      }

    } else  if (Session.get('year') === 'third') {

          if (Session.get('sem') === 'one') {

            if (Session.get('branch') === 'cse'){
              if(Session.get('subj') === 'dbms'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/cse/three-one/dbms/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'os'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/cse/three-one/os/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'alc'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/cse/three-one/alc/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'se'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/cse/three-one/se/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'mea'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/cse/three-one/mea/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'daa'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/cse/three-one/daa/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }
            } else if (Session.get('branch') === 'civil'){
              if(Session.get('subj') === 'civil_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/civil/three-one/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'civil_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/civil/three-one/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'civil_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/civil/three-one/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'civil_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/civil/three-one/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'civil_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/civil/three-one/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'civil_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/civil/three-one/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }
            } else if (Session.get('branch') === 'ece'){
              if(Session.get('subj') === 'ece_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/ece/three-one/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'ece_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/ece/three-one/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'ece_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/ece/three-one/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'ece_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/ece/three-one/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'ece_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/ece/three-one/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'ece_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/ece/three-one/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }
            } else if (Session.get('branch') === 'eee'){
              if(Session.get('subj') === 'eee_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/eee/three-one/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'eee_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/eee/three-one/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'eee_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/eee/three-one/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'eee_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/eee/three-one/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'eee_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/eee/three-one/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'eee_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/eee/three-one/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }
            } else if (Session.get('branch') === 'it'){
              if(Session.get('subj') === 'it_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/it/three-one/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'it_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/it/three-one/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'it_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/it/three-one/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'it_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/it/three-one/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'it_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/it/three-one/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'it_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/it/three-one/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }
            } else if (Session.get('branch') === 'mech'){
              if(Session.get('subj') === 'mech_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/mech/three-one/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'mech_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/mech/three-one/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'mech_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/mech/three-one/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'mech_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/mech/three-one/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'mech_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/mech/three-one/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'mech_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/mech/three-one/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }
            }

          } else if (Session.get('sem') === 'two') {

            if (Session.get('branch') === 'cse'){
              if(Session.get('subj') === 'cn'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/cse/three-two/cn/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'ppl'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/cse/three-two/ppl/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'cc'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/cse/three-two/cc/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'oosd'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/cse/three-two/oosd/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'wps'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/cse/three-two/wps/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }
            } else if (Session.get('branch') === 'civil'){
              if(Session.get('subj') === 'civil_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/civil/three-two/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'civil_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/civil/three-two/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'civil_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/civil/three-two/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'civil_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/civil/three-two/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'civil_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/civil/three-two/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'civil_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/civil/three-two/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }
            } else if (Session.get('branch') === 'ece'){
              if(Session.get('subj') === 'ece_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/ece/three-two/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'ece_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/ece/three-two/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'ece_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/ece/three-two/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'ece_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/ece/three-two/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'ece_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/ece/three-two/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'ece_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/ece/three-two/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }
            } else if (Session.get('branch') === 'eee'){
              if(Session.get('subj') === 'eee_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/eee/three-two/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'eee_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/eee/three-two/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'eee_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/eee/three-two/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'eee_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/eee/three-two/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'eee_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/eee/three-two/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'eee_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/eee/three-two/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }
            } else if (Session.get('branch') === 'it'){
              if(Session.get('subj') === 'it_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/it/three-two/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'it_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/it/three-two/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'it_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/it/three-two/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'it_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/it/three-two/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'it_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/it/three-two/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'it_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/it/three-two/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }
            } else if (Session.get('branch') === 'mech'){
              if(Session.get('subj') === 'mech_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/mech/three-two/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'mech_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/mech/three-two/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'mech_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/mech/three-two/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'mech_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/mech/three-two/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'mech_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/mech/three-two/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }else if(Session.get('subj') === 'mech_'){
                return new Handlebars.SafeString('<img src=\"/pdfs/third_yr/mech/three-two/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
              }
            }

          }

        } else if (Session.get('year') === 'fourth') {

              if (Session.get('sem') === 'one') {

                if (Session.get('branch') === 'cse'){
                  if(Session.get('subj') === 'distsys'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-one/distsys/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'ai'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-one/ai/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'is'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-one/is/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'paes'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-one/paes/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'spm'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-one/spm/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'cg'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-one/cg/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }if(Session.get('subj') === 'ig'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-one/ig/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'asn'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-one/asn/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'mc'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-one/mc/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'rts'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-one/rts/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }
                } else if (Session.get('branch') === 'civil'){
                  if(Session.get('subj') === 'civil_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/civil/four-one/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'civil_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/civil/four-one/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'civil_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/civil/four-one/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'civil_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/civil/four-one/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'civil_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/civil/four-one/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'civil_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/civil/four-one/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }
                } else if (Session.get('branch') === 'ece'){
                  if(Session.get('subj') === 'ece_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/ece/four-one/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'ece_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/ece/four-one/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'ece_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/ece/four-one/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'ece_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/ece/four-one/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'ece_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/ece/four-one/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'ece_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/ece/four-one/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }
                } else if (Session.get('branch') === 'eee'){
                  if(Session.get('subj') === 'eee_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/eee/four-one/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'eee_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/eee/four-one/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'eee_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/eee/four-one/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'eee_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/eee/four-one/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'eee_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/eee/four-one/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'eee_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/eee/four-one/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }
                } else if (Session.get('branch') === 'it'){
                  if(Session.get('subj') === 'it_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/it/four-one/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'it_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/it/four-one/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'it_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/it/four-one/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'it_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/it/four-one/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'it_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/it/four-one/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'it_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/it/four-one/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }
                } else if (Session.get('branch') === 'mech'){
                  if(Session.get('subj') === 'mech_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/mech/four-one/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'mech_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/mech/four-one/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'mech_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/mech/four-one/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'mech_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/mech/four-one/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'mech_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/mech/four-one/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'mech_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/mech/four-one/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }
                }

              } else if (Session.get('sem') === 'two') {

                if (Session.get('branch') === 'cse'){
                  if(Session.get('subj') === 'dm'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-two/dm/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'sm'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-two/sm/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'sqt'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-two/sqt/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'ism'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-two/ism/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'hci'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-two/hci/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'srt'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-two/srt/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }if(Session.get('subj') === 'ets'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-two/ets/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'irs'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-two/irs/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'sw'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-two/sw/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'ipr'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-two/ipr/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'ad'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-two/ad/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'ms'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-two/ms/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'c_c'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-two/c_c/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'dmg'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/cse/four-two/dmg/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }
                } else if (Session.get('branch') === 'civil'){
                  if(Session.get('subj') === 'civil_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/civil/four-two/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'civil_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/civil/four-two/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'civil_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/civil/four-two/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'civil_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/civil/four-two/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'civil_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/civil/four-two/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'civil_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/civil/four-two/civil_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }
                } else if (Session.get('branch') === 'ece'){
                  if(Session.get('subj') === 'ece_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/ece/four-two/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'ece_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/ece/four-two/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'ece_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/ece/four-two/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'ece_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/ece/four-two/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'ece_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/ece/four-two/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'ece_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/ece/four-two/ece_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }
                } else if (Session.get('branch') === 'eee'){
                  if(Session.get('subj') === 'eee_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/eee/four-two/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'eee_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/eee/four-two/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'eee_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/eee/four-two/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'eee_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/eee/four-two/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'eee_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/eee/four-two/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'eee_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/eee/four-two/eee_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }
                } else if (Session.get('branch') === 'it'){
                  if(Session.get('subj') === 'it_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/it/four-two/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'it_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/it/four-two/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'it_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/it/four-two/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'it_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/it/four-two/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'it_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/it/four-two/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'it_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/it/four-two/it_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }
                } else if (Session.get('branch') === 'mech'){
                  if(Session.get('subj') === 'mech_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/mech/four-two/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'mech_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/mech/four-two/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'mech_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/mech/four-two/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'mech_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/mech/four-two/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'mech_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/mech/four-two/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }else if(Session.get('subj') === 'mech_'){
                    return new Handlebars.SafeString('<img src=\"/pdfs/fourth_yr/mech/four-two/mech_/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
                  }
                }
              }

            }

  }

});


// Template.Qpapers.helpers({
//
//   qp_png: function () {
//     var sess_ppr = Session.get('choice_qp_val');
//     return new Handlebars.SafeString('<img src=\"/pdfs/' + sess_ppr + '.jpg\" style=\"width:100%; height:auto;\" />');
//   }
//
// });


/*****************************************************************************/
/* Qpapers: Lifecycle Hooks */
/*****************************************************************************/
Template.Qpapers.created = function () {
};

Template.Qpapers.rendered = function () {
  console.log(Session.get('year'));
  console.log(Session.get('sem'));
  console.log(Session.get('branch'));
  console.log(Session.get('choice_qp_val'));

};

Template.Qpapers.destroyed = function () {
};

})();
