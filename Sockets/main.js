var infoserver = [];
var infoclient = [];
var servermsg = "";
var clientmsg = "";
var flagudp = 0;
var ser_input = document.createElement('input');   //Current input field entered by user in server terminal
var cli_input = document.createElement('input');   //Current input field entered by user in client terminal
var serquestions = ["socket family: ","socket type: ","Protocol: ","Port number: "]; 
var cliquestions = ["socket family: ","socket type: ","Protocol: ","Port number: ","IP address of server: "];
var seranswers = ["AF_INET",0,0,-1];
var clianswers = ["AF_INET",0,0,-1,"192.127.90.10"];
var client_request = "Connecting to server...";
var toggle = 0;              // toggle = 0 means client has sent message, toggle = 1 means server sent a message
var serIPaddress = "IP address of server is 192.127.90.10";
var wait = "Waiting for clients.....\n";
var count_ser = 0;
var count_cli = 0;
var text1 = document.createElement("input"); 
var text2 = document.createElement("input");
var text = document.createElement("input");

document.getElementById("div1").appendChild(document.createTextNode(serIPaddress));
document.getElementById("div1").appendChild(document.createElement("br"));

createserver();

function createserver()
{
 
 if (count_ser < 4)
 {
   var ser = document.createTextNode(serquestions[count_ser]);
   var br = document.createElement("br");
   ser_input = document.createElement('input');
   ser_input.setAttribute("class","textbox");
   ser_input.setAttribute("type","text");
   ser_input.setAttribute("onkeydown","keyCodeserver(event,0)");
   document.getElementById("div1").appendChild(ser);
   document.getElementById("div1").appendChild(ser_input);
   document.getElementById("div1").appendChild(br);
   ser_input.focus();
 }
 else if(count_ser == 4)
 {
   var ser = document.createTextNode(wait);
   toggle = 1;                         // No message is sent here; toggle is set to 1 for client to send message
   count_ser++;
   var br = document.createElement("br");
   document.getElementById("div1").appendChild(ser);
   document.getElementById("div1").appendChild(br);
   createclient();   
 }
 else if(toggle == 0)                 //This means client has sent a message and decremented toggle value  
 {
  toggle = 1;
  var ser = document.createTextNode("Received message : " + clientmsg);
  var label = document.createTextNode("Enter message to be sent : ");
  var br = document.createElement("br");
  var br1 = document.createElement("br");
  text = document.createElement('input'); 
  servermsg = "";
  text.setAttribute("class","textbox");
  text.setAttribute("type","text");
  text.setAttribute("onkeydown","keyCodeserver(event,1)");
  document.getElementById("div1").appendChild(ser); 
  document.getElementById("div1").appendChild(br); 
  document.getElementById("div1").appendChild(label);
  document.getElementById("div1").appendChild(text);
  document.getElementById("div1").appendChild(br1);
  text.focus();  
 }
}
function keyCodeserver(event,toggle) 
{
    var x = event.keyCode;
    if (x == 13 && toggle == 0) 
    {
        if(count_ser == 0 && seranswers[count_ser] != ser_input.value)
        {
         alert("Invalid value - AF_INET accepted");
         return;
        }
        if(count_ser == 1 && ser_input.value != "SOCK_STREAM" && ser_input.value != "SOCK_DGRAM")
        {
         alert("Enter either SOCK_STREAM or SOCK_DGRAM");
         return;
        } 
        if(count_ser == 2 && ser_input.value != "IPPROTO_TCP" && ser_input.value != "IPPROTO_UDP")
        {
         alert("Enter either IPPROTO_TCP or IPPROTO_UDP");
         return;
        }
        if(count_ser == 3 && ser_input.value < "0")
        {
         alert("Enter a valid port number");
         return;
        }
        infoserver.push(ser_input.value);
        ser_input.disabled = true;
        ser_input.blur();
        count_ser = count_ser + 1;
        createserver();                 
    }
    else if(x == 13)
    {
        servermsg = text.value;
        text.disabled = true;
        text.blur();
        createclient();
    }
}

function createclient()
{
 
 if (count_cli < 5)
 {
   var cli = document.createTextNode(cliquestions[count_cli]);
   var br = document.createElement("br");
   cli_input = document.createElement('input');
   cli_input.setAttribute("class","textbox");
   cli_input.setAttribute("type","text");
   cli_input.setAttribute("onkeydown","keyCodeclient(event,1)");
   document.getElementById("div2").appendChild(cli);
   document.getElementById("div2").appendChild(cli_input);
   document.getElementById("div2").appendChild(br);
   cli_input.focus();
 }
 else if(count_cli == 5)
 {
   toggle = 0;                         
   count_cli++;
   var br4 = document.createElement("br");
   var label2 = document.createTextNode("Enter message to be sent : ");
   text2.setAttribute("class","textbox");
   text2.setAttribute("type","text");
   text2.setAttribute("onkeydown","keyCodeclient(event,toggle)");
   document.getElementById("div2").appendChild(label2);
   document.getElementById("div2").appendChild(text2);
   document.getElementById("div2").appendChild(br4);
   text2.focus();      
 }
 else if(toggle == 1)                 //This means client has sent a message and decremented toggle value  
 {
  toggle = 0;
  count_cli++;
  var cli = document.createTextNode("Received message : " + servermsg);
  var label1 = document.createTextNode("Enter message to be sent : ");
  var br2 = document.createElement("br");
  var br3 = document.createElement("br");
  text1 = document.createElement('input');
  text1.setAttribute("class","textbox");
  text1.setAttribute("type","text");
  text1.setAttribute("onkeydown","keyCodeclient(event,0)");
  document.getElementById("div2").appendChild(cli); 
  document.getElementById("div2").appendChild(br2); 
  document.getElementById("div2").appendChild(label1);
  document.getElementById("div2").appendChild(text1);
  document.getElementById("div2").appendChild(br3);
  text1.focus();
  
 }
}

function keyCodeclient(event,toggle) 
{
    var x = event.keyCode;
    if (x == 13 && toggle == 1) 
    {
        
        if(count_cli == 0 && clianswers[count_cli] != cli_input.value)
        {
         alert("Invalid value - AF_INET accepted");
         return;
        }
        if(count_cli == 1 && cli_input.value != infoserver[1])
        {
         alert("Socket type mismatch");
         return;
        } 
        if(count_cli == 2 && cli_input.value != infoserver[2])
        {
         alert("Socket protocol mismatch");
         return;
        }
        if(count_cli == 3 && cli_input.value != infoserver[3])
        {
         alert("Enter a valid port number");
         return;
        }
        if(count_cli == 4 && cli_input.value != clianswers[4])
        {
         alert("Enter the IP address of server");
         return;
        }
        infoclient.push(cli_input.value);
        cli_input.disabled = true;
        cli_input.blur();
        count_cli = count_cli + 1;
        createclient();                
    }
    else if(x == 13 && count_cli == 6)
    {
        clientmsg = text2.value;
        text2.disabled = true;
        text2.blur();
        createserver();
    }
    else if(x == 13 && toggle == 0)
    {
        clientmsg = text1.value;
        text1.disabled = true;
        text1.blur();
        createserver();
    }
}

function send_t() {
  
  document.getElementById('Server_t').style.background = "red";
  document.getElementById('Client_t').style.background = "orange";
  document.getElementById('myContainer_t').style.background = "yellow";
  
  var elem = document.getElementById("myAnimation_t");   
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 500) {
      clearInterval(id);
    } else {
      pos=pos+3;       
      elem.style.left = pos + 'px'; 
    }
  }
}

function receive_t() {
  
  document.getElementById('Server_t').style.background = "red";
  document.getElementById('Client_t').style.background = "orange";
  document.getElementById('myContainer_t').style.background = "yellow";
  
  var elem = document.getElementById("myAnimation_t");   
  var pos = 500;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == -10) {
      clearInterval(id);
    } else {
      pos=pos-3;       
      elem.style.left = pos + 'px'; 
    }
  }
}

function socket_t()
{
 document.getElementById('Server_t').style.background = "orange";
 document.getElementById('Client_t').style.background = "orange";
 document.getElementById('myContainer_t').style.background = "white";
} 

function bind_t()
{
 document.getElementById('Server_t').style.background = "red";
 document.getElementById('Client_t').style.background = "orange";
 document.getElementById('myContainer_t').style.background = "white"; 
}

function listen_t()
{
 document.getElementById('Server_t').style.background = "red";
 document.getElementById('Client_t').style.background = "orange";
 document.getElementById('myContainer_t').style.background = "white";
 
 document.getElementById('Listen1').style.display = "block";
 document.getElementById('Listen2').style.display = "block";
 document.getElementById('Listen3').style.display = "block";
} 

function accept_t()
{
 document.getElementById('Server_t').style.background = "red";
 document.getElementById('Client_t').style.background = "orange";
 document.getElementById('myContainer_t').style.background = "yellow";
 
 document.getElementById('Listen1').style.display = "none";
 document.getElementById('Listen2').style.display = "none";
 document.getElementById('Listen3').style.display = "none";
  
} 

function socket_u()
{
 document.getElementById('Server_u').style.background = "orange";
 document.getElementById('Client_u').style.background = "orange";
} 

function bind_u()
{
 document.getElementById('Server_u').style.background = "red";
 document.getElementById('Client_u').style.background = "orange";
}

function send_u()
{
 document.getElementById('Server_u').style.background = "red";
 document.getElementById('Client_u').style.background = "orange";
}

function receive_u()
{
  document.getElementById('Server_u').style.background = "red";
  document.getElementById('Client_u').style.background = "orange";
    
  var elem = document.getElementById("myAnimation_u");   
  var pos = 500;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == -10) {
      clearInterval(id);
    } else {
      pos=pos-3;       
      elem.style.left = pos + 'px'; 
    }
  }
}

function send_u() {
  
  document.getElementById('Server_u').style.background = "red";
  document.getElementById('Client_u').style.background = "orange";
    
  var elem = document.getElementById("myAnimation_u");   
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 500) {
      clearInterval(id);
    } else {
      pos=pos+3;       
      elem.style.left = pos + 'px'; 
    }
  }
}