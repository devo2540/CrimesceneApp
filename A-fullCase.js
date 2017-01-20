( function() {
var app = angular.module('searchResult', [ ] );
app.controller('SearchController', function() {
      this.results = persons;
});
var persons = [
  // Identification
  {
    heading1 : "Identification",
    status : "Missing",
    firstName : "Tyronne",
    middleName : "A",
    lastName : "Trotter",
    alias : "Ty",
    ageLastSeen : "29 to 29 years old",
    ageNow : "29 years old",
    race : "Black/African American",
    ethnicity : "Other",
    sex : "Male",
    height : "71.0",
    heightUnits : "inches",
    weight : "175.0",
    weightUnits : "pounds"
  },
  // Circumstances
  {
    heading2 : "Circumstances",
    dateLastSeen : "November 18, 2016 05:30",
    dateEntered : "11/23/2016",
    city : "Dallas",
    state : "Texas",
    zipCode : "75224",
    county : "Dallas"
  },
  // Vehicle
  {
    heading3 : "Vehicle",
    vehicleMake : "",
    vehicleModel : "",
    year : "",
    style : "",
    vehicleColor : "",
    tagType : "",
    tagNumber : "",
    tagState : "",
    expYear : "",
    vehicleComments : "",
    airline : "",
    bus : "Known to travel by bus.",

  },
  // Clothing & Accesories
  {
    heading4 : "Clothing & Accesories",
    clothingAccesories : "True/False",
    clothing : "grey jacket with hoodie",
    footwear : "black shoes",
    jewelry : "",
    eyewear : "glasses",
    accesories : "white watch"
  },
  // Investigating Agency
  {
    heading5 : "Investigating Agency",
    title : "Detective",
    detFirstName : "Timothy",
    detLastName : "Johnson",
    phone : "214-671-4253",
    website : "",
    caseNumber : "276020 2016",
    dateReported : "November 17, 2016",
    jurisdiction : "County",
    agency : "Dallas Police Department",
    addressOne : "1400 S. Lamar St.",
    addressTwo : "",
    detCity : "Dallas",
    detState : "Texas",
    detZipCode : "75416",
    comments : ""
  },
  // Physical
  {
    heading6 : "Physical",
    noDistinctiveFeatures : "Ture/False",
    hairColor : "Brown",
    headHair : "Curly, dark brown, looks almost black.",
    bodyHair : "hair on arms, looks almost black.",
    facialHair : "has long, black 'go tee' beard",
    leftEyeColor : "Brown",
    rightEyeColor : "Brown",
    eyeDescription : "large, almond shaped.",
    scars : "",
    tattoos : "",
    piercings : "",
    fingerNails : "",
    other : ""
  },
  // Medical
  {
    heading7 : "Medical",
    amputations: "None",
    deformalities : "",
    artificialParts : "",
    foreignObjects : "",
    skeletalInfo : ""
  }
];
}) ();
