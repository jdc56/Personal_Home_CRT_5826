/**
 * 
 */

var d = new Date();
var year = d.getFullYear();
var month = d.getMonth();
var date = d.getDate();
var realDate = ""+year+"-"+(month+1)+"-"+date+"";

document.getElementById("time").innerHTML = realDate;
document.getElementById("copyYear").innerHTML = year;