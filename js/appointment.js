//$("#from, #to").attr("min",new Date().toISOString().split('.')[0]);
$(document).ready(() => {
    $.ajax({
        url: "http://localhost:3000/doctors",
        type: "GET",
        success: function(res) {
            for (var i = 0; i < res.length; i++) {
                $('#tBody').append(`<tr><td>${i+1}</td><td>${res[i].name}</td><td>${res[i].Specialisation}</td><td><input type="button" onclick="sendData(${res[i].id})" class="btn btn-info" value="Book Appointment"></td></tr>`)
                console.log(data);
                //  var dId=res[i].id;
                //  var dName=res[i].name;
                //  var timing=res[i].timing;
                //  var doctorDetails={
                //      did:dId,
                //      dname:dName,
                //      timing:timing
                //  }
                //  var uinfo=sessionStorage.getItem('userInfo');
                // var appointmentInfo={
                //         dId:res[i].id,
                //         dName:res[i].name,
                //         pId:uinfo.pId,
                //         pName:uinfo.fullname


                // }
                //         sessionStorage.setItem("appointmentsInfo",appointmentInfo);
                //  $('.btn').click(()=>{

                //         sessionStorage.setItem("doctorDetails",JSON.stringify(doctorDetails));
                //         window.location.href="status.html";
                //  })


            }
        }
    })

})

function sendData(id) {


    sessionStorage.setItem("dId", id);
    //sessionStorage.setItem("dName",name);
    window.location.href = "bookslot.html"
}
$(document).ready(() => {
    var uInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    var pId = uInfo.pId;
    // alert(pId);
    var sNo = 0;
    $.ajax({
        url: "http://localhost:3000/appointments",
        type: 'GET',
        success: function(res) {
            for (var i = 0; i < res.length; i++) {

                if (res[i].pId === pId) {

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
            <td><input class="btn-info" type="button"   onclick="edit()" value="Edit"></td>
            <td><input class="btn-danger" type="button"  onclick= "deleteEntry()"  value= "Delete"></td></tr>`);

                }
            }

        }
    })


})


function edit() {
    alert("edit is called");

}

