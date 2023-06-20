function open_win(){
    window.open("index.html","height =100,width = 200")
}
function clockTime() {
    var todayDate=new Date();
    var hrs=todayDate.getHours();
    var mins=todayDate.getMinutes();
    var secs=todayDate.getSeconds();
    mins=check(mins);
    secs=check(secs);
    document.getElementById().innerHTML=hrs+":"+mins+":"+secs;
    T=setTimeout9=('clock()',1000);
}
function check(t){
    if (t < 10)
    {t="0" + t;}
    return t; 
}