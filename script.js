let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genbtn = document.getElementById("genbtn");
let refbtn = document.getElementById("Refresh");
let copy = document.getElementById("copy");

slidervalue.textContent = inputslider.value;
inputslider.addEventListener('input',()=>{
    slidervalue.textContent = inputslider.value;
});
refbtn.addEventListener('click',()=>{
    passbox.value = "";
    copy.innerText = "content_copy";
});
genbtn.addEventListener('click',()=>{
  passbox.value = generatePassword();
});
let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let allsymbols = "@!-&^%$#*";

function generatePassword(){
    let req = "";
    let genPassword = "";
    if(lowercase.checked)
    {
        req += lowerchars;
    }
    if(uppercase.checked){
        req += upperchars;
    }
    if(numbers.checked){
        req += allnumbers;
    }
    if(symbols.checked){
        req += allsymbols;
    }
    let i = 0;
    let n = slidervalue.textContent;
    while(i < n){
        let ind = Math.floor(Math.random()*req.length)
        genPassword += req[ind];
        i++;
    }

    return genPassword;
}

copy.addEventListener('click',()=>{
    if(passbox.value.length>=1 | passbox.value!="")
    {
        navigator.clipboard.writeText(passbox.value);
        copy.innerText = "check";
        copy.title = "Password copied";
    }
})