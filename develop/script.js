const btngenerate = document.getElementById("generate");
const btncopy = document.getElementById("copy");
let displaypassword = document.getElementById("password");
const numbersarr = [0,1,2,3,4,5,6,7,8,9];
const lowercasearr = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'];
const uppercasearr = ['A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'];
const specialarr = ['!,@,#,$,%,^,&,*,.,?,+']


function getCriteria() {

let passwordLength = prompt("What length should the password be? (between 8 and 128)");

    if (passwordLength >= 8 && passwordLength <= 128) {
        
        let containSpecial = confirm("Include special characters? (!@#$%^&*+?)");
        
        let containNumeric = confirm("Include Numbers? (0123456789)");
        
        let containLower = confirm("Include lowercase letters?");

        let containUpper = confirm("Should the password contain uppercase letters?");
        
        if (containSpecial == false && containNumeric == false && containLower == false && containUpper == false) {
            alert("You must select one or more character type!")
        
        }
    }
    else if (passwordLength < 8 || passwordLength > 128) {
        alert("Select a number between 8 and 128!");
        }

    let actualLength = Math.floor(Math.random() * passwordLength);

    for (let i=0; i<actualLength; i++) {
        let special = containSpecial;
        let numeric = containNumeric;
        let lower = containLower;
        let upper = containUpper;
        let vpassword = "";

        if (special == true && numeric == true && lower == true && upper == true) {
            vpassword = specialarr.Math.floor(Math.random() + numbersarr.Math.floor(Math.random() + lowercasearr.Math.floor(Math.random() + uppercasearr.Math.floor(Math.random() * actualLength))));
            password.textContent = vpassword;
        }
        // if (numeric == true) {
        //     vpassword = numericarr.charAt(Math.floor(Math.random() * vpassword.length));

        // }
        // if (numeric == true) {
        //     vpassword = numericarr.charAt(Math.floor(Math.random() * vpassword.length));

        // }
        // if (numeric == true) {
        //     vpassword = numericarr.charAt(Math.floor(Math.random() * vpassword.length));

        // }
        
    }
}

btngenerate.addEventListener("click", getCriteria);
