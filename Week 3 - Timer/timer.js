
function sifirla()
{
  document.getElementById("hour").disabled = false;
  document.getElementById("minute").disabled = false;
  document.getElementById("second").disabled = false;
  document.getElementById("hour").value = "Saati giriniz";
  document.getElementById("minute").value ="Dakikayı giriniz";
  document.getElementById("second").value ="Saniyeyi giriniz";
  document.getElementById("remaining-time").innerHTML = 0;
}

function saniye_azalt(totalsecond) {
    totalsecond = document.getElementById("gizli").innerHTML;
    totalsecond = totalsecond - 1;
    let hour = parseInt(totalsecond / 3600);
    let minute = parseInt(((totalsecond) - (hour*3600)) / 60);
    let second = totalsecond % 60;
    document.getElementById("remaining-time").innerHTML =
      hour + " Saat " + minute + " Dakika " + (second) + " Saniye ";
      document.getElementById("gizli").innerHTML = totalsecond;
    if(totalsecond<=0)
    {
      document.getElementById("remaining-time").innerHTML = "Süre dolduu.";
    }
}


function saniye_hesaplama() {
  let hour = document.getElementById("hour").value;
  let minute = document.getElementById("minute").value;
  let second = document.getElementById("second").value;
  let totalsecond = (parseInt(second) + parseInt(minute) * 60 + parseInt(hour) * 3600);
  document.getElementById("remaining-time").innerHTML =
    hour + " Saat " + minute + " Dakika " + second + " Saniye ";
  document.getElementById("hour").disabled = true;
  document.getElementById("minute").disabled = true;
  document.getElementById("second").disabled = true;
  document.getElementById("gizli").innerHTML = totalsecond;
  setInterval(saniye_azalt, 1000, document.getElementById("gizli").innerHTML);
  
}