
function show_color_theme(){
    if(document.getElementById("color-choose").style.display==="none")
    {
        document.getElementById("color-choose").style.display="block";
    
        document.getElementById("color-choose").style.top="4%";
        
        
    }
    else{
       
        document.getElementById("color-choose").style.display="none";
    }

}

function dark_themef() {
    if(document.querySelector("body").style.backgroundColor =="black")
    {
        document.getElementById("home-ss").setAttribute("class", "main-butnn-sm");;
        document.getElementById('about-ss').setAttribute("class", "main-butnn-sm");;
        document.getElementById("service-ss").setAttribute("class", "main-butnn-sm");
        document.getElementById("potfolio-ss").setAttribute("class", "main-butnn-sm");
        document.getElementById("contact-ss").setAttribute("class", "main-butnn-sm");
        document.querySelector("body").style.backgroundColor = "whitesmoke";
        document.getElementById("mover-in-animation").style.backgroundColor = "whitesmoke";
        document.getElementById("side_menu").style.backgroundColor = "white";
        document.getElementById("side_menu").style.color = "black";
        document.getElementById("home-display").style.color = "black";
        document.getElementById("about-display").style.color = "black";
        document.getElementById("sevice-d").style.color = "black";
        document.getElementById("col0-s").style.backgroundColor="whitesmoke";
        document.getElementById("col1-s").style.backgroundColor="whitesmoke";
        document.getElementById("col2-s").style.backgroundColor="whitesmoke";
        document.getElementById("col3-s").style.backgroundColor="whitesmoke";
        document.getElementById("col4-s").style.backgroundColor="whitesmoke";
        document.getElementById("col5-s").style.backgroundColor="whitesmoke";
        document.getElementById("color-change").style.backgroundColor="whitesmoke";
        document.getElementById("color-change").style.color="black";
        document.getElementById("portfolio-d").style.color = "black";
        document.getElementById("contact-d").style.color = "black";
        document.getElementById("light").style.display="none";
        document.getElementById("dark").style.display="";
        document.getElementById("color-choose").style.backgroundColor="whitesmoke";
        document.getElementById("color-choose").style.color="black";
    }
    else
    {
    document.getElementById("home-ss").setAttribute("class", "dark_color");;
    document.getElementById('about-ss').setAttribute("class", "dark_color");;
    document.getElementById("service-ss").setAttribute("class", "dark_color");
    document.getElementById("potfolio-ss").setAttribute("class", "dark_color");
    document.getElementById("contact-ss").setAttribute("class", "dark_color");
    document.querySelector("a").style.color = "white !important";
    document.querySelector("body").style.backgroundColor = "black";
    document.getElementById("mover-in-animation").style.backgroundColor = "black";
    document.getElementById("side_menu").style.backgroundColor = "#191919";
    document.getElementById("side_menu").style.color = "white";
    document.getElementById("home-display").style.color = "white";
    document.getElementById("about-display").style.color = "white";
    document.getElementById("sevice-d").style.color = "white";
    document.getElementById("col0-s").style.backgroundColor="black";
    document.getElementById("col1-s").style.backgroundColor="black";
    document.getElementById("col2-s").style.backgroundColor="black";
    document.getElementById("col3-s").style.backgroundColor="black";
    document.getElementById("col4-s").style.backgroundColor="black";
    document.getElementById("col5-s").style.backgroundColor="black";
    document.getElementById("color-change").style.backgroundColor="black";
    document.getElementById("color-change").style.color="white";
    document.getElementById("portfolio-d").style.color = "white";
    document.getElementById("contact-d").style.color = "white";
    document.getElementById("dark").style.display="none";
    document.getElementById("light").style.display="block";
    document.getElementById("color-choose").style.backgroundColor="#191919";
    document.getElementById("color-choose").style.color="white";

    }
}
function home_display() {
    document.getElementById("home-display").style.display = "block";
    document.getElementById("about-display").style.display = "none";
    document.getElementById("sevice-d").style.display = "none";
    document.getElementById("portfolio-d").style.display = "none";
    document.getElementById("contact-d").style.display = "none";
}

function about_display() {
    document.getElementById("about-display").style.display = "block";
    document.getElementById("home-display").style.display = "none";
    document.getElementById("sevice-d").style.display = "none";
    document.getElementById("portfolio-d").style.display = "none";
    document.getElementById("contact-d").style.display = "none";
}

function Service_display() {
    document.getElementById("about-display").style.display = "none";
    document.getElementById("home-display").style.display = "none";
    document.getElementById("sevice-d").style.display = "block";
    document.getElementById("portfolio-d").style.display = "none";
    document.getElementById("contact-d").style.display = "none";
}
function portfolio_display() {
    document.getElementById("about-display").style.display = "none";
    document.getElementById("home-display").style.display = "none";
    document.getElementById("sevice-d").style.display = "none";
    document.getElementById("portfolio-d").style.display = "block";
    document.getElementById("contact-d").style.display = "none";
}
function Contact_display() {
    document.getElementById("about-display").style.display = "none";
    document.getElementById("home-display").style.display = "none";
    document.getElementById("sevice-d").style.display = "none";
    document.getElementById("portfolio-d").style.display = "none";
    document.getElementById("contact-d").style.display = "block";

}

function show_menu() {
    document.getElementById("side_menu").style.display = "block";
    document.getElementById("icon-show").style.display = "none";
    document.getElementById("icon-hide").style.display = "block";
}
function hide_menu() {
    document.getElementById("side_menu").style.display = "none";
    document.getElementById("icon-show").style.display = "block";
    document.getElementById("icon-hide").style.display = "none";
}

function red(){
   document.getElementById("cursive").color="black";
}