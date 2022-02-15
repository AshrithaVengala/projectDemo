//alert("call");
$.ajax({
    url: "http://localhost:3000/doctors",
    type: 'GET',
    success: function(res) {
        console.log(res);

        $("#login").click(() => {
            var username = $("#uname").val();
            var password = $("#pass").val();
            var flag = false;
            if (username == "" || password == "") {
                alert("fill out the credentials");

            }

            for (var i = 0; i < res.length; i++) {
                if (username == res[i].username && password == res[i].password) {
                    flag = true;
                    let doctorInfo = {
                        dId: res[i].id,
                        dName: res[i].name
                    }

                    sessionStorage.setItem("dInfo", JSON.stringify(doctorInfo));
                    console.log(doctorInfo);

                    $("#loginForm").attr("action", "doctorDashboard.html");


                }


            }
            if (flag == false) {
                alert("invalid credentials");
            }

        })
    }
});