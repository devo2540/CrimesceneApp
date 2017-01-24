
function results() {

  var div= document.createElement("DIV");
  div.setAttribute("class", "prof");

  var img= document.createElement("IMG");
  img.setAttribute("src","http://www.psdgraphics.com/file/female-silhouette.jpg");
   img.setAttribute("alt" ,"headshot");
  div.appendChild(img);


  var p= document.createElement("P");
  div.appendChild(p);
    p.appendChild(document.createTextNode("John Doe"));

  var pp= document.createElement("P");
  div.appendChild(pp);
    pp.appendChild(document.createTextNode("&nsbp"));
  var span= document.createElement("SPAN");

  div.appendChild(span);
  var p1= document.createElement("P");
  span.appendChild(p1);
  p1.appendChild(document.createTextNode("Male"));
  var p2= document.createElement("P");
  span.appendChild(p2);
  p2.appendChild(document.createTextNode("210"));
  var p3= document.createElement("P");
  span.appendChild(p3);
  p3.appendChild(document.createTextNode("6' 1\""));
  var p4= document.createElement("P");
  span.appendChild(p4);
  p4.appendChild(document.createTextNode("50"));

    return div;
}

 function case_file_result() {
   var result = 0;
   while(result<8) {
     result ++;
     document.getElementById("result").appendChild(results());
   }
 }
