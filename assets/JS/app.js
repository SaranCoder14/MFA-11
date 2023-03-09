
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

document.getElementById('length').addEventListener('change', charLength);


// function saran(){
// let password ="SARANFREAKY";
// let output = password.toUpperCase();
 
// document.getElementById("saran").innerHTML=output;
// }


// document.getElementById("uppercase").addEventListener('click',function(){
//     let password ="eiplrdsw";
//     let output = password.toUpperCase();
//     document.getElementById('password__result').value=output;

// })

// document.getElementById("lowercase").addEventListener('click',function(){
//     let password ="Wjdjdia";
//     // let output = password();
//     document.getElementById('password__result').value=password;

// })


// document.getElementById("numbers").addEventListener('click',function(){
//     let password ="Wkeido123";
//     // let output = password();
//     document.getElementById('password__result').value=password;

// })



// document.getElementById("symbols").addEventListener('click',function(){
//     let password ="Rew12Fre12$";
//     // let output = password();
//     document.getElementById('password__result').value=password;

// })

let charLengths ;
/*get the number of characters*/
function charLength() {
     charLengths = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLengths;
    console.log(charLengths);
    return charLengths;
}

document.getElementById('length').addEventListener('change', charLength)
function genarate() {
    let saran=charLengths;
    let password;
    let output=" ";
    let capital = document.getElementById("uppercase").checked
    let arr = [...Array(26)].map((_, i) => String.fromCharCode(i + (capital ? 65 : 97)))
    console.log(arr);
}

    
    for( i=1; i<=saran; i++){

    if(capital == true) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
     password=item
     output=output+password
     document.getElementById('password__result').value = output;
    }
}














   

