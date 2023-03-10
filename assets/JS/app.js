
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

document.getElementById('length').addEventListener('change', charLength);



let charLengths ;
/*get the number of characters*/
function charLength() {
     charLengths = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLengths;
    console.log(charLengths);
    return charLengths;
}


document.getElementById('length').addEventListener('change', charLength)

















   

