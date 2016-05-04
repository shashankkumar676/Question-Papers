(function(){
Template.__checkName("Subjects");
Template["Subjects"] = new Template("Template.Subjects", (function() {
  var view = this;
  return HTML.BODY({
    id: "body-subjects"
  }, "\n\n  ", HTML.DIV({
    id: "year-sub"
  }, "\n\n    ", HTML.Raw('<div class="ui inverted fixed menu navbar page grid" style="background:#29b6f6;height:60px;">\n      <a href="selections_engg" style="color:white;margin-top:6px;">\n        <button class="ui circular olive large icon button">\n          <i class="large arrow left icon"></i>\n        </button>\n      </a>\n\n      <h1 class="ui aligned header" style="color:white;margin-top:10px;padding-left:3%">\n            <div class="content">Select Subject</div>\n          </h1>\n        </div>'), "\n\n    ", HTML.CENTER("\n        ", HTML.FORM({
    "class": "subs_form"
  }, "\n          ", HTML.Raw("<br>"), HTML.Raw("<br>"), "\n          ", HTML.Raw('<a class="ui orange bottom pointing label">Subject</a>'), "\n          ", HTML.Raw("<br>"), "\n\n          ", HTML.SELECT({
    name: "subject",
    "class": "ui dropdown",
    id: "select3"
  }, "\n            ", HTML.Raw('<option value="select_subject">Select Subject</option>'), "\n            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("subs"));
  }, function() {
    return [ "\n            ", HTML.OPTION({
      value: function() {
        return Spacebars.mustache(view.lookup("subject_val"));
      }
    }, Blaze.View("lookup:subject_name", function() {
      return Spacebars.mustache(view.lookup("subject_name"));
    })), "\n            " ];
  }), "\n          "), HTML.Raw("<br>"), HTML.Raw("<br>"), "\n\n          ", HTML.Raw('<button class="ui secondary huge button submit_btn" type="submit" style="background:#29b6f6;">\n            Submit<i class="right arrow icon"></i>\n          </button>'), "\n\n      "), "\n\n    "), "\n\n  "), "\n\n");
}));

})();
