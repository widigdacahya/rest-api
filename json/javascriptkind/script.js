//obje to json
let aPerson = {
  name: "Desthian",
  email: "desthian@gmail.com",
  number: 99,
};

//it still be an objet
console.log(aPerson);

//chane to json
console.log(JSON.stringify(aPerson));

//json to object
//use json that created befor firts.json
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let aPersonHere = this.responseText;
    console.log(aPersonHere);
  }
};
//run the ajax
xhr.open("GET", "../firtst.json", true);
xhr.send();
//step above, data show in log is json
//to make as data, add Parse of response text, code shown below

//Stringinfy = from object to JSON
//Parse = from JSON to object
let xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function () {
  if (xhr2.readyState == 4 && xhr2.status == 200) {
    let aPersonHere2 = JSON.parse(this.responseText);
    console.log(aPersonHere2);
  }
};
//run the ajax
xhr2.open("GET", "../firtst.json", true);
xhr2.send();
