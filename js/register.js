
    // function fullname(){
    //     if(fullName!=fullName.match('^[a-zA-Z\-]+$')){
    //         alert("match the pattern");
    //     }
    // }
        
$("#register").click(()=>{
    alert("onclick called");
    var fullName=$("#fullName").val();
    var userName=$("#uName").val();
    var password=$("#upass").val();
    var confirmPass=$("#cPass").val();
    var ageVar=$("#age").val();
    var mobileVar=$("#mobile").val();
    var cityVar=$("#city").val();
   
   // $('#fullName').attr("required",true);
if(fullName==="" || userName==="" || password===""|| ageVar==="" || mobileVar==="" || cityVar===""){
    alert("fill the credentials ");
    return false;
}else if(password!==confirmPass){
        alert("password doesnt match");
        return false;

    }else{
        var myData={
                    fullname:fullName,
                    username:userName,
                    password:confirmPass,
                    age:ageVar,
                    mobile:mobileVar,
                    city:cityVar
                }
                console.log(myData);

    var savedData = $.ajax({
        type: 'POST',
        url: "http://localhost:3000/users",
        data: myData,
        dataType: "text",
        success:()=> { alert("Save Complete"); },
        error:()=>{ alert("post call is not successfull")}
    
    });
   // savedData.error(()=> { alert("Something went wrong"); });
    
    }
})




