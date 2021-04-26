function updateTime(){
    var date = new Date();
    var set_time = document.getElementById("set_time");
    var set_date = document.getElementById("set_date");
    set_time.innerHTML = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
    set_date.innerHTML = date.getDay() + "/" + parseInt(date.getMonth() + 1) + "/" + date.getFullYear();
}
setInterval(updateTime , 100)

function send_Codes() {
    document.getElementById("inside_box").style.background = localStorage.getItem("ColorValue");
    document.getElementById("body").style.background = localStorage.getItem("ColorValue");
}
function getColor(){
    var get_color = document.getElementById("set_color").value;
    localStorage.setItem("ColorValue" , get_color);
    send_Codes();
}
onload = ()=>{
    document.getElementById("set_color").value = localStorage.getItem("ColorValue");
    send_Codes();
}