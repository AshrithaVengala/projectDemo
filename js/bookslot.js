$("#date").attr("min",new Date().toISOString().split('T')[0]);

$(document).ready(() => {

// let dt=$('#date').val();
// let setdt=new Date().toISOString().split('.')[0]
// $('#date').on('change',()=>{
//     if(dt<setdt){
//         alert("choose upcoming dates");
//     }
// })

    var dId = sessionStorage.getItem("dId");
    //var did=JSON.parse(dId);
    $.get(`http://localhost:3000/doctors/${dId}`, (res) => {
        // alert("get called")

        for (var i = 0; i < res.slots.length; i++) {
            $('#select').append('<option value="' + res.slots[i] + '">' + res.slots[i] + '</option>');

        }
        //sessionStorage.setItem("dName",JSON.stringify(res.name));



    })
    var uInfo = sessionStorage.getItem("userInfo");
    var userDetails = JSON.parse(uInfo);
    var status = "pending";
    //var dName=JSON.parse(sessionStorage.getItem("dName"));
    $('#bookSlot').click(() => {
        var date = $('#date').val();
        var time = $('#select').val();
        var pid = userDetails.pId;
        var pname = userDetails.pName;
        // alert(date);
        //  alert(time);
        //  alert(pid);
        //  alert(pname);
        //  alert(dId);
        //  alert(status);
        // alert(dName);

        //    var slotData= {
        //         "pId": "1",
        //         "pName": "andrew",
        //         "dId": "234",
        //         "date": "2022-02-08",
        //         "time": "1PM-6PM",
        //         "status": "pending"
        //       }
        var slotData = {
                pId: pid,
                pName: pname,
                dId: dId,
                date: date,
                time: time,
                status: status
            }
            // $.post("http://localhost:3000/appointments",slotData,function(bookingData){
            //     alert("successfull");
            // })
        var savedData = $.ajax({
            type: 'POST',
            url: "http://localhost:3000/appointments",
            data: slotData,
            dataType: "text",
            success: function(slotData) {
                alert("Save Complete")
                console.log(bookingData);

            },
            error: function() { alert("post call is not successfull") }

        })
        window.location.href = "appointment.html"
            // savedData.error(function(){ alert("something went wrong") })
    })

})

$('#userLogout').click(() => {
    confirm("Are you sure you want to logout ? ");
    sessionStorage.removeItem("userInfo");
    sessionStorage.removeItem("dId");
    window.location.href("home.html");
})