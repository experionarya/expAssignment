

function get_data() {
	var uname=document.getElementById("u_name").value;
    var pattern=uname.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);

    if (pattern==null) {
          alert("Not a valid e-mail address");
    };
  
    var pword=document.getElementById("p_word").value;
	var xhttp=new XMLHttpRequest();
	
	xhttp.onreadystatechange=function() {
		if(this.readyState==4 && this.status==200){
			 var a=this.responseText;
             a=JSON.parse(a);
             
             if(a.status==200) {
               window.location="home.html";
             }
             
             else if(a.status==403) {
             	alert("Username and password not correct");
             }

		}

	};

	xhttp.open("POST","https://exptest.herokuapp.com/api/login",true);
    xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhttp.send("userName="+uname+"&"+"password="+pword);
  }


