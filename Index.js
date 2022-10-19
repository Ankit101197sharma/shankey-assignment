
function validateForm(e){
    e.preventDefault()
    var name = document.forms["myForm"]["name"];
    var password = document.getElementById("myInput").value;
    if (name.value == ""){
        document.getElementById('errorname').innerHTML= "* Please enter email";
        name.focus();
        return false;
    }else{
        document.getElementById('errorname').innerHTML="";
    }
  
    if (password.value==" "){
        document.getElementById("errorname").innerHTML="please valid password";
        return false;
    }
}

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


//   Task 3 Table fetch data from api
fetch("https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817").then((data)=>{
    console.log(data)
return data.json();
}).then((objectData)=>{
    console.log(objectData.data[3].salary);
    let tableData = "";
    objectData.data.map((values)=>{
        tableData+=
        `<tr>
         <td >${values.name}</td>
         <td>${values.position}</td>
         <td>${values.office}</td>
         <td>${values.salary}</td>
        </tr>`
    });

    document.getElementById("employees").innerHTML= tableData;
}).catch((err)=>{
    console.log(err)
})
	



