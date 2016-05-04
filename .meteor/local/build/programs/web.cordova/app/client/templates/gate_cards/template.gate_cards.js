(function(){
Template.__checkName("GateCards");
Template["GateCards"] = new Template("Template.GateCards", (function() {
  var view = this;
  return HTML.BODY({
    id: "body-gate_cards"
  }, "\n\n    ", HTML.DIV({
    id: "gate_cards"
  }, "\n\n      ", HTML.Raw('<div class="ui inverted fixed menu navbar page grid" style="background:#29b6f6;height:60px;">\n        <div>\n            <a class="back-btn" href="gate" style="color:white;">\n              <button class="ui circular olive icon button">\n                <i class="big arrow left icon"></i>\n              </button>\n            </a>\n          </div><div>\n          <h1 class="ui center aligned header" style="color:white;margin-top: 10px;">\n              <div class="content">Gottem!</div>\n            </h1>\n          </div><div>\n            <a class="home-btn" href="/home_selection" style="color:white;">\n              <button class="ui circular orange icon button">\n                <i class="big home icon"></i>\n              </button>\n            </a>\n          </div>\n        </div>'), "\n\n       ", HTML.Raw('<!-- <a href="/selections" style="color:white;float:right;">\n        <button class="ui huge circular orange icon button">\n          <i class="large home icon"></i>\n        </button>\n      </a> -->'), "\n\n\n    ", HTML.Raw('<!-- {{#each first_qptitles}}\n    <h4 style="text-align:center;font-family:BubblegumSans;">{{subject}} Papers</h4>\n    {{/each}} -->'), "\n\n    ", HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), "\n\n      ", HTML.DIV({
    "class": "ui six doubling cards"
  }, "\n\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("gate_qptitles"));
  }, function() {
    return [ "\n        ", HTML.DIV({
      "class": "blue card"
    }, "\n\n          ", HTML.DIV({
      "class": "ui image"
    }, "\n            ", HTML.IMG({
      src: "/img/qp1.jpg"
    }), "\n          "), "\n\n          ", HTML.DIV({
      "class": "content"
    }, "\n            ", HTML.H5({
      id: "qp_title"
    }, Blaze.View("lookup:card_title", function() {
      return Spacebars.mustache(view.lookup("card_title"));
    })), "\n            ", HTML.A({
      href: function() {
        return [ "/gate_qpapers/", Spacebars.mustache(view.lookup("title_val")) ];
      },
      id: "show_qp"
    }, "\n              ", HTML.BUTTON({
      "class": "ui small inverted blue button show_btn"
    }, "Show"), "\n            "), "\n          "), "\n\n        "), "\n        " ];
  }), "\n\n      "), "\n    "), "\n\n  ");
}));

})();
