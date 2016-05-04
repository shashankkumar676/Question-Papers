Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.route('home_selection', {
  name: 'home_selection',
  controller: 'HomeSelectionController',
  action: 'action',
  where: 'client'
});

Router.route('selections_engg', {
  name: 'selections_engg',
  controller: 'SelectionsEnggController',
  action: 'action',
  where: 'client'
});

Router.route('selections_comp', {
  name: 'selections_comp',
  controller: 'SelectionsCompController',
  action: 'action',
  where: 'client'
});

Router.route('gate', {
  name: 'gate',
  controller: 'GateController',
  action: 'action',
  where: 'client'
});

Router.route('gate_cards', {
  name: 'GateCards',
  controller: 'GateCardsController',
  action: 'action',
  where: 'client'
});

Router.route('/gate_qpapers/:ppr_val', {
  controller: 'GateQpapersController',
  action: 'action',
  where: 'client',
  data: function(){ Session.set('choice_gate_qp_val', this.params.ppr_val);}
});

Router.route('subjects', {
  name: 'subjects',
  controller: 'SubjectsController',
  action: 'action',
  where: 'client'
});


Router.route('qpcards', {
  name: 'qpcards',
  controller: 'QpcardsController',
  action: 'action',
  where: 'client'
});


Router.route('qpapers', {
  name: 'qpapers',
  controller: 'QpapersController',
  action: 'action',
  where: 'client'
});

Router.route('/qpapers/:ppr_val', {
  controller: 'QpapersController',
  action: 'action',
  where: 'client',
  data: function(){
    // var par = this.params._id;
    // console.log(this.params._id);
    //
    // var bef = 'ObjectId(\"';
    // var oid = this.params._id;
    // var after = '\")';
    // var obid = bef.concat(oid,after);
    // console.log(obid);

    Session.set('choice_qp_val', this.params.ppr_val);
    // console.log(Session.get('choice_qp_val'));

    // return Ca.find({"title_val": this.params.ppr_val}).fetch();
  }
});

Router.route('first_year', {
  name: 'firstYear',
  controller: 'FirstYearController',
  action: 'action',
  where: 'client'
});

Router.route('first_qpcards', {
  name: 'firstQpcards',
  controller: 'FirstQpcardsController',
  action: 'action',
  where: 'client'
});

Router.route('first_qpapers', {
  name: 'firstQpapers',
  controller: 'FirstQpapersController',
  action: 'action',
  where: 'client'
});

Router.route('/first_qpapers/:ppr_val', {
  controller: 'FirstQpapersController',
  action: 'action',
  where: 'client',
  data: function(){ Session.set('choice_first_qp_val', this.params.ppr_val);}
});

Router.route('credits', {
  name: 'credits',
  controller: 'CreditsController',
  action: 'action',
  where: 'client'
});
