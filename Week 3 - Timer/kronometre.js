function starttime() {
    let hour,
    minute,
    second,totalsecond;
    totalsecond = parseInt(document.getElementById("gizliss").innerHTML) + 1;
    document.getElementById("gizliss").innerHTML = totalsecond;
    hour = parseInt(totalsecond / 3600);
    minute = parseInt((totalsecond - hour * 3600) / 60);
    second = totalsecond % 60;
    document.getElementById("time").innerHTML = hour + " Saat " + minute + " Dakika " + second + " Saniye ";
}
function startt(){
    document.querySelector("#startt").disabled = true;
    setInterval(starttime, 1000);
}