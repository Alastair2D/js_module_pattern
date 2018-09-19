"use strict";

(function(exports) {
  function interrobang(exclaim, question, smiley, string) {
    // return exclaim(question(string));
    return smiley(exclaim(question(string)));
  };

  exports.interrobang = interrobang;
})(this);
