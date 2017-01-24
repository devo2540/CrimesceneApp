(function() {
  var app = angular.module('searchResult', [ ] );
  app.controller('SearchController', function() {
      this.results= persons;
  });
  var persons = [
      {
         caseNum : "1",
          img : "http://www.psdgraphics.com/file/female-silhouette.jpg",
          firstName: "Jane",
          lastName: "Doe",
          sex : "F",
          weight : "125",
          height : "5'8\"",
          age : "28"
        },
        {
          caseNum : "2",
          img : "http://www.psdgraphics.com/file/male-silhouette.jpg",
          firstName: "John",
          lastName: "Doe",
          sex : "M",
          weight : "205",
          height : "6'8\"",
          age : "55"
        },
        {
          caseNum : "3",
          img : "http://www.psdgraphics.com/file/male-silhouette.jpg",
          firstName: "Jim",
          lastName: "Doe",
          sex : "M",
          weight : "190",
          height : "5'10\"",
          age : "22"
        },
        {
          caseNum : "4",
          img : "http://www.psdgraphics.com/file/female-silhouette.jpg",
          firstName : "Janet",
          lastName: "Doe",
          sex : "F",
          weight : "180",
          height : "5'3\"",
          age : "38"
        },
        {
          caseNum : "5",
          img : "http://www.psdgraphics.com/file/female-silhouette.jpg",
          firstName : "Jade",
          lastName : "Doe",
          sex : "F",
          weight : "135",
          height : "5'4\"",
          age : "32"
        }
];
}) ();
