function getFormvalue(e) {
    //Write your code here
	e.preventDefault();
let form  = document.querySelector("#form1");
let name = document.querySelectorAll("input");
let fname = name[0].value, lname = name[1].value;
	
	
	alert(fname+" "+lname);
});
}
