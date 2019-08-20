// Escape html entities

// var escapeChars = {
//   "¢": "cent",
//   "£": "pound",
//   "¥": "yen",
//   "€": "euro",
//   "©": "copy",
//   "®": "reg",
//   "<": "lt",
//   ">": "gt",
//   '"': "quot",
//   "&": "amp",
//   "'": "#39"
// };

// var regexString = "[";
// for (var key in escapeChars) {
//   regexString += key;
// }
// regexString += "]";

// var regex = new RegExp(regexString, "g");

// function escapeHTML(str) {
//   return str.replace(regex, function(m) {
//     return "&" + escapeChars[m] + ";";
//   });
// }

// Unescape html entities

var htmlEntities = {
  nbsp: " ",
  cent: "¢",
  pound: "£",
  yen: "¥",
  euro: "€",
  copy: "©",
  reg: "®",
  lt: "<",
  gt: ">",
  quot: '"',
  amp: "&",
  apos: "'"
};

export default function unescapeHTML(str) {
  return str.replace(/&([^;]+);/g, function(entity, entityCode) {
    var match;

    if (entityCode in htmlEntities) {
      return htmlEntities[entityCode];
      /*eslint no-cond-assign: 0*/
    } else if ((match = entityCode.match(/^#x([\da-fA-F]+)$/))) {
      return String.fromCharCode(parseInt(match[1], 16));
      /*eslint no-cond-assign: 0*/
    } else if ((match = entityCode.match(/^#(\d+)$/))) {
      return String.fromCharCode(~~match[1]);
    } else {
      return entity;
    }
  });
}
