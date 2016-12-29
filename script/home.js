

function get_img_data() {
		var xhttp1=new XMLHttpRequest();
	  
    xhttp1.onreadystatechange=function() {
		
    if(this.readyState==4 && this.status==200){
			  var img_result=this.responseText;
        img_result=JSON.parse(img_result);
        
        for(var i=0;i<img_result.data.length;i++) {
            var url=img_result.data[i].imageUrl;
            var caption=img_result.data[i].caption;
            var output_img=document.createElement("img");
            output_img.src=url;
            output_img.setAttribute("height",200);
            output_img.setAttribute("width",200);
            output_img.setAttribute("alt","image");
            var cap=document.createElement("P");
            var capt=document.createTextNode(caption);
            cap.appendChild(capt);
            var div=document.createElement('div');
            div.setAttribute("id","box");
            document.getElementById("container").appendChild(div);
            div.appendChild(output_img);
            div.appendChild(cap);
         }
      }

	};
	
  xhttp1.open("GET","https://exptest.herokuapp.com/api/imageGallery",true);
  xhttp1.send();
  }

  function log_out() {
    if(confirm("Are you sure you want to logout?")) {
       window.location="index.html";
       return true;
    }
    else {
      return false;
    }
  }
