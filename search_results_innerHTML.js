function results(caseFile) {

    var div = document.createElement("DIV");
    div.setAttribute("class", "prof");
    div.innerHTML = "<img src='" + caseFile.img + "'/>"
    + "<p>" + caseFile.firstName + " " + caseFile.lastName + "</p>"
    + "<p>" + "&nbsp;" + "</p>"
    + "<span>"
                        + "<p>" + caseFile.sex + "</p>"
                        + "<p>" + caseFile.weight + "</p>"
                        + "<p>" + caseFile.height + "</p>"
                        + "<p>" + caseFile.age + "</p>"
                        + "</span>";
    return div;

}



function case_file_result() {

  var caseLists = getCaseList();
  var result = 0;
  while(result<caseLists.length) {
    document.getElementById("result").appendChild(results(caseLists[result]));
    result = result + 1;
  }
}
