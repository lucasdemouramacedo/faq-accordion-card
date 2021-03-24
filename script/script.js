function show(des, til, arr){
    state = document.getElementById(des).style.display;

    i = 1;
    for(i = 1; i <= 5; i++){
        d = 'd' + i.toString();   //description ID
        t = 't' + i.toString();   //title ID
        ar = 'ar' + i.toString(); //arrow ID

        if(d != des || (d == des && state == "block")){
            document.getElementById(d).style.display = "none";
            document.getElementById(t).style.fontWeight = 400;
            document.getElementById(ar).style.transform = "rotate(0deg)";
        }else{
            document.getElementById(d).style.display = "block";
            document.getElementById(t).style.fontWeight = 700;
            document.getElementById(a).style.transform = "rotate(180deg)";
        }
    }
}

/*function show(des, til, ar) {

    state = document.getElementById(des).style.display;
    if(state == "none"){
        document.getElementById(des).style.display = "block";
        document.getElementById(til).style.fontWeight = 700;
        document.getElementById(ar).style.transform = "rotate(180deg)";
        state = "block";
    }else{
        document.getElementById(des).style.display = "none";
        document.getElementById(til).style.fontWeight = 400;
        document.getElementById(ar).style.transform = "rotate(0deg)";
        state = "none";
    }

    if(state == "block"){
        document.getElementsByClassName(::)    }
}*/