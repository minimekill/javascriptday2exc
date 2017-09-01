
//1)
/*

var body = document.getElementsByTagName("body");
body[0].innerHTML += "<div id='my_id1'>first</div>"
body[0].innerHTML += "<div id='my_id2'>second</div>"
body[0].innerHTML += "<div id='my_id3'>third</div>"

document.getElementById("my_id1").style.backgroundColor = "red";
document.getElementById("my_id2").style.backgroundColor= "yellow";
document.getElementById("my_id3").style.backgroundColor = "green";



var button = document.createElement("button");
button.innerHTML = "Click me";
button.onclick = (function(){document.getElementById("my_id1").style.backgroundColor = "white"; });

//button.addEventListener("click", function(){document.getElementById("my_id1").style.backgroundColor = "white"; }); 
body[0].appendChild(button);

*/
//2)
//a)
/*
var body = document.getElementsByTagName("body")[0];
body.innerHTML += "<div id='my_id1'>first</div>";
body.innerHTML += "<div id='my_id2'>second</div>";



var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.mydiv {width: 25px; height: 25px;background-color:yellow; margin:1px;}';
document.getElementsByTagName("head")[0].appendChild(style);

document.getElementById("my_id1").className = 'mydiv';

var button = document.createElement("button");
var txtField = "tadaa";

body.innerHTML = "<div id='my_id4'>" + txtField + "</div>";
button.innerHTML = "Click me";
button.onclick = (function(){document.getElementById("my_id4").innerHTML = "<div id='my_id4'>Hej from "+document.getElementById('my_id4').id +  "</div>";});
body.appendChild(button);
*/
//b)

/*
var body = document.getElementsByTagName("body")[0];
body.innerHTML = "<div id='empty'>nothing yet</div>";  
var divs ="";
divs += "<div id='outher'>the outher";
divs += "<div id='my_id1'>first</div>";
divs += "<div id='my_id2'>second</div>";
divs += "<div id='my_id3'>third</div>";
divs += "<div id='my_id4'>fourth</div>";
divs += "<div id='my_id5'>fifth</div>";
divs += "<div id='my_id6'>sixth</div>";
divs += "<div id='my_id7'>seventh</div>";
divs += "<div id='my_id8'>eighth</div>";
divs += "<div id='my_id9'>nineth</div>";
divs += "<div id='my_id10'>tenth</div>";
divs+= "</div>";
body.innerHTML += divs;

document.getElementById("outher").addEventListener('click',function(){document.getElementById("empty").innerText = this.id });

//not sure if u wanted it to post the id of the inner divs or, group them together so all of them are the outer...?

*/
//4)
/*
var body = document.getElementsByTagName("body")[0];
var array = ["Peter"];
  body.innerHTML = "<form id='form'>write your name: <input type='text' name='name' value=''></form>";

var button = document.createElement("button");
button.innerHTML = "click me";
button.addEventListener("click",function(){array.push(document.getElementById("form").getAttribute("value")); makeList() });
body.appendChild(button);




function makeList(){

var setup = "";

setup += "<ul>" + array.map(function(element){return "<li>" + element + "</li>";}) + "</ul>";
body.innerHTML += setup;

}
*/

/*
var calculatorFunc = function (event) {
    if (event.innerHTML !== "=") {
        display.innerHTML += event.innerHTML;
    }else{
        var str = display.innerHTML;
        if(str.indexOf("+") > 0){
            var nr1 = str.split("+", 1);
            var nr2 = str.split("+").pop();
            nr1 = Number(nr1);
            nr2 = Number(nr2);
            console.log(nr1 + "+" + nr2);
            var res = nr1+nr2;
            display.innerHTML = res;
        }else if(str.indexOf("-") > 0){
            var nr1 = str.split("-", 1);
            console.log(nr1);
            var nr2 = str.split("-").pop();
            console.log(nr1 + "-" + nr2);
            nr1 = Number(nr1);
            nr2 = Number(nr2);
            var res = nr1-nr2;
            display.innerHTML = res;
        }else if(str.indexOf("") > 0){
            var nr1 = str.split("", 1);
            var nr2 = str.split("").pop();
            nr1 = Number(nr1);
            nr2 = Number(nr2);
            console.log(nr1 + "" + nr2);
            var res = nr1*nr2;
            display.innerHTML = res;
        }else if(str.indexOf("/") > 0){
            var nr1 = str.split("/", 1);
            var nr2 = str.split("/").pop();
            nr1 = Number(nr1);
            nr2 = Number(nr2);
            console.log(nr1 + "/" + nr2);
            var res = nr1/nr2;
            display.innerHTML = res;
        }
    }
	*/
};
