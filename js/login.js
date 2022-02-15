$.ajax({
    url: "http://localhost:3000/users",
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
                if (username === res[i].username && password === res[i].password) {
                    flag = true;
                    let userInfo = {
                        pId: res[i].id,
                        pName: res[i].fullname,

                    }
                    sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
                    console.log(userInfo);

                    $("#loginForm").attr("action", "appointment.html");

                }


            }
            if (flag == false) {
                alert("invalid credentials");
            }

        })
    }
});