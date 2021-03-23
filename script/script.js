function show(des, til) {

    state = document.getElementById(des).style.display;
    if(state == "none"){
        document.getElementById(des).style.display = "block";
        document.getElementById(til).style.fontWeight = 700;
    }else{
        document.getElementById(des).style.display = "none";
        document.getElementById(til).style.fontWeight = 400;
    }
}