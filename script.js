function darkbutton(color){
    document.body.style.backgroundColor = color;
}

const themebutton = document.getElementById('thembtn')

themebutton.addEventListener('click',() => {

    const currentcolo = document.body.style.backgroundColor;

    if(currentcolo === "" || currentcolo==='white'){
        darkbutton('black')
        themebutton.innerText = "Dark Mode"
        themebutton.style.backgroundColor = 'white'
        themebutton.style.color = 'black'
        themebutton.style.boxShadow = "0 0px 60px rgba(255, 255, 255, 0.30)";
       
    } else {
        darkbutton('white');
        themebutton.innerText = "Light Mode"
        themebutton.style.backgroundColor = 'black'
        themebutton.style.color = 'white'
        themebutton.style.boxShadow = "0 0px 50px rgb(0, 0, 0)";
        
    }



});
