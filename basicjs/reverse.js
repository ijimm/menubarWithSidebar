



var k= "ALL FOR LOVE";
function r(){
    document.write(k + "<br>");
    document.write("<br>");
    document.write("<b>REVERSE</b>" + "<br>");
    document.write("<br>");
    k = k.split("").reverse().join("");
    document.write(k);
}
r();

document.write("<br>");
document.write("<br>");

var j = 12345;
function l(){
    j= j + "";
    document.write(j + "<br>");
    document.write("<br>");
    document.write("<b>REVERSE</b>" + "<br>");
    document.write("<br>");
    j = j.split("").reverse().join("");
    document.write(j);
}
l();