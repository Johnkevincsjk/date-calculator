var pardiv = document.createElement("div");

// div element has been created


var inputdata = document.createElement("input");
inputdata.setAttribute("type", "date");
inputdata.setAttribute("id", "dob");
inputdata.style.marginTop = "100px";
inputdata.style.marginLeft = "400px";

inputdata.style.width = "30%"

// input data has been created

var button = document.createElement("button");
button.innerHTML = "Display data";
button.className = "btn btn-danger";
button.style.margin = "10px"
button.addEventListener("click", Displaydata)

// button has been created.

var resultdiv = document.createElement("div");
resultdiv.getElementById = "Displaydata";
document.body.append(resultdiv);

// result display div above.

pardiv.append(inputdata, button);
document.body.append(pardiv);





// total out-look has been created.

function Displaydata() {
    var input = document.getElementById("dob").value;
    var indate = new Date(input);
    console.log(indate);
    var curdate = new Date();
    console.log(curdate);
    //milli seconds has been calculated below.
    var milsecdate = curdate.getTime() - indate.getTime();
    console.log(milsecdate);
    // seconds has been calculated below.
    var secdate = deci(milsecdate, 1000);
    console.log(secdate);
    // minites hs been calculated below.
    var mindate = deci(secdate, 60);
    console.log(mindate);
    // hours has been calculated below.
    var hordate = deci(mindate, 60);
    console.log(hordate);
    // days has been calculated below.
    var daydate = deci(hordate, 24);
    console.log(daydate);

    // Month has been calculated below.
    var mondif = monthdif(indate, curdate);
    console.log(mondif);



    // years has been calculated below.

    var yrdif = yeardif(indate, curdate);
    console.log(yrdif);



}

// the below function is to remove the decimal points on date / time.
function deci(value1, value2) {
    return Math.floor(value1 / value2);
}
// the below mentioned code is to find out the number of years difference.
function yeardif(value1, value2) {
    var y1 = new Date(value1);
    var y2 = new Date(value2);
    return y2.getFullYear() - y1.getFullYear()
}
// the below mentioned code is to find out the number of year difference.

function monthdif(value1, value2) {
    var year = yeardif(value1, value2);
    var mon = year * 12 + (value2.getMonth() - value1.getMonth())
    return mon
}

