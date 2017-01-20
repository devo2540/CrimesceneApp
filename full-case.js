/*
Pass a section where heading is a string, and field is an array of strings.
*/

function caseSection(section, fullCase) {
  var div = document.createElement("DIV");
  div.setAttribute("class", "person");
  div.innerHTML = "<h2>" + section.heading + "</h2>";

  for ( i in section.fields) {
    var name = section.fields[i];
    var value = fullCase[name];
    div.innerHTML += "<p>" + section.displayName(name) + "</p>"
    + "<p>" + value + "</p>";
  }
  return div;
}


function addCaseSection(section, fullCase) {
  document.getElementById("info").appendChild(caseSection(section, fullCase));
}
