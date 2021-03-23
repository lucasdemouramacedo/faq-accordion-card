function show(e) {

    state = document.getElementById(e).style.display;
    if(state == "block"){
        document.getElementById(e).style.display = "none";
    }else{
        document.getElementById(e).style.display = "block";
    }
}