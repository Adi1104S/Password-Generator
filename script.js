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
inputslider.addEventListener('input', () => {
    slidervalue.textContent = inputslider.value;
});
refbtn.addEventListener('click', () => {
    passbox.value = "";
    copy.innerHTML = "content_copy";
    copy.title = "";
});
genbtn.addEventListener('click', () => {
    passbox.value = generatePassword();
    copy.innerHTML = "content_copy";
    copy.title = "";

});
let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let allsymbols = "@!-&^%$#*";

function generatePassword() {
    let req = "";
    let genPassword = "";
    let arr = [0, 0, 0, 0];
    let cnt = 0;
    if (lowercase.checked) {
        req += lowerchars;
        arr[0] = 1;
        cnt++;
    }
    if (uppercase.checked) {
        req += upperchars;
        arr[1] = 1;
        cnt++;
    }
    if (numbers.checked) {
        req += allnumbers;
        arr[2] = 1;
        cnt++;
    }
    if (symbols.checked) {
        req += allsymbols;
        arr[3] = 1;
        cnt++;
    }
    let i = 0;
    let n = slidervalue.textContent;
    while (i < n) {
        let ind = Math.floor(Math.random() * req.length)
        genPassword += req[ind];
        i++;
    }
    if (cnt > slidervalue.textContent) {
        return genPassword;
    }
    // console.log(genPassword);
    // console.log(cnt);
    let ind1 = [-1];
    for (let j = 0; j < cnt; j++) {
        while (true) {
            let val = Math.floor(Math.random() * n);
            let f = 1;
            for (let k = 0; k < ind1.length; k++) {
                if (ind1[k] == val) {
                    f = 0; break;
                }
            }
            if (f) {
                ind1.push(val);
                break;
            }
        }
    }
    for (let j = 0; j < ind1.length; j++) {
        console.log(ind1[j]);
    }
    let ind2 = 1;
    for (let j = 0; j < 4; j++) {
        if (ind2 >= ind1.length) {
            break;
        }
        if (arr[j] == 1) {
            if (j == 0) {
                let ind = Math.floor(Math.random() * lowerchars.length);
                genPassword = genPassword.split('');
                genPassword.splice(ind1[ind2], 1, lowerchars[ind]);
                genPassword = genPassword.join('');
                ind2++;
                cnt--;
            }
            if (j == 1) {
                let ind = Math.floor(Math.random() * upperchars.length);
                genPassword = genPassword.split('');
                genPassword.splice(ind1[ind2], 1, upperchars[ind]);
                genPassword = genPassword.join('');
                ind2++;
                cnt--;
            }
            if (j == 2) {
                let ind = Math.floor(Math.random() * allnumbers.length);
                genPassword = genPassword.split('');
                genPassword.splice(ind1[ind2], 1, allnumbers[ind]);
                genPassword = genPassword.join('');
                ind2++;
                cnt--;
            }
            if (j == 3) {
                let ind = Math.floor(Math.random() * allsymbols.length);
                genPassword = genPassword.split('');
                genPassword.splice(ind1[ind2], 1, allsymbols[ind]);
                genPassword = genPassword.join('');
                ind2++;
                cnt--;
            }
        }
    }
    console.log(genPassword);
    return genPassword;
}

copy.addEventListener('click', () => {
    if (passbox.value.length >= 1 | passbox.value != "") {
        navigator.clipboard.writeText(passbox.value);
        copy.innerText = "check";
        copy.title = "Password copied";
    }
})