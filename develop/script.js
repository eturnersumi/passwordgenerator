const btngenerate = document.getElementById("generate");
const btncopy = document.getElementById("copy");
let displaypassword = document.getElementById("password");
let userPassword;
// let containSpecial;
const numbers = [0,1,2,3,4,5,6,7,8,9];
const lowercase = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'];
const uppercase = ['A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'];
const special = ['!,@,#,$,%,^,&,*,.,?,+']



let passwordLength = prompt("What length should the password be? (between 8 and 128)");
if (passwordLength < 8 || passwordLength > 128) {
    alert("Select a number between 8 and 128!");
}
else {
    let containSpecial = confirm("Include special characters? (   )");
    console.log(containSpecial);
    
    let containNumeric = confirm("Include Numbers? (0123456789)");
    console.log(containNumeric);
    
    let containLower = confirm("Include lowercase letters?");
    console.log(containLower);

    let containUpper = confirm("Should the password contain uppercase letters?");
    console.log(containUpper);
}
if (containSpecial == false && containNumeric == false && containLower == false && containUpper == false) {
    alert("You must select one or more of the provided criteria!");
}
else {}


function generatePassword() {
    // event.preventDefault(); 

    
   

    // for (i=0; i<50; i++) {
   
    

// var createPassword  
// createPassword();
// function createPassword() {
// // let containSpecial = generatePassword['containSpecial'];       
// }
}


  
//     password.textContent..



function copyPassword(event) {
    event.preventDefault();

}


btngenerate.addEventListener("click", generatePassword);
btncopy.addEventListener("click", copyPassword);