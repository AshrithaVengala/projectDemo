$(document).ready(() => {
    var dInfo = JSON.parse(sessionStorage.getItem("dInfo"));
    var dId = dInfo.dId;
    alert(dId);
    var sNo = 0;
    $.ajax({
        url: "http://localhost:3000/appointments",
        type: 'GET',
        success: function(res) {
            for (var i = 0; i < res.length; i++) {

                if (res[i].dId == dId) {

                    // var uid=JSON.parse(res[i].id);
                    // console.log(uid);
                    $('#appointments').append(`<tr>
            <td>${sNo+=1}</td>
            <td>${res[i].dId}</td>
            <td>${res[i].pName}</td>
            <td>${res[i].date}</td>
            <td>${res[i].time}</td>
            <td>${res[i].status}</td>
            <td>${res[i].id}</td>
            <td><button class="btn-success" onclick="accept()">Accept</button></td>
            <td><button class="btn-danger" onclick="decline()">Decline</button></td>`);

                }
            }

        }
    })



})

// var id=$('.btn').attr("id");
// $('.btn').click((id)=>{
//     alert("click called")
// })

