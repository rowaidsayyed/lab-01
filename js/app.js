$(document).ready(function() {
    $( window ).resize(function(){
        let windowWidth = $(document).width();
        let color = windowWidth*100/255;
        while(color>255){
            color-=255;
        }
        $('header').css("background-color",`rgb(30,100,${color})`);
        $('.b').css("background-color",`rgb(50,150,${color})`);
        $('.c').css("background-color",`rgb(50,0,${color})`);
        $('.d').css("background-color",`rgb(150,0,${color})`);
        $('.e').css("background-color",`rgb(0,80,${color})`);
        $('.f').css("background-color",`rgb(0,180,${color})`);
        $('.g').css("background-color",`rgb(255,0,${color})`);
        $('.h').css("background-color",`rgb(200,200,${color})`);
        $('.i').css("background-color",`rgb(10,250,${color})`);
    });
});