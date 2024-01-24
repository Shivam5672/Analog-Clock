function animate(){
    let hr = document.getElementById('hrs');
    let min = document.getElementById('mins');
    let sec = document.getElementById('secs');
    console.log(hr);
    let h = new Date().getHours() * 30;
    let m = new Date().getMinutes() * 6;
    let s = new Date().getSeconds() * 6;

    hr.style.transform = `rotate(${h + (m/12)}deg)`;
    min.style.transform = `rotate(${m}deg)`;
    sec.style.transform = `rotate(${s}deg)`;


    let dh = document.getElementById('hours');
    let dm = document.getElementById('minutes');
    let ds = document.getElementById('seconds');
    let ap= document.getElementById('ampm');
    ap.innerHTML = (h/30 > 12) ? "PM" : "AM";
    let hh = (h/30 > 12) ? h/30 - 12 : h/30;
    let mm = (m/6);
    let ss = (s/6);

    dh.innerHTML = (hh < 10) ? "0" + hh : hh;
    dm.innerHTML = (mm < 10) ? "0" + mm : mm;
    ds.innerHTML = (ss < 10) ? "0" + ss : ss;

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);