function openMenuMain() {
    document.getElementById("menuMain").style.width = "350px";
}

function closeMenuMain() {
    document.getElementById("menuMain").style.width = "0";
}

function openMenuWeapons() {
    document.getElementById("menuWeapons").style.width = "350px";
}

function closeMenuWeapons() {
    document.getElementById("menuWeapons").style.width = "0";
}

function openMenuMaps() {
    document.getElementById("menuMaps").style.width = "350px";
}

function closeMenuMaps() {
    document.getElementById("menuMaps").style.width = "0";
}

$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1	
        },
        1000:{
            items:3
        }
    }
})
