// Question #3 if-else, funtion, reassign, console.log, compare

let userPassword = "dddffff";

function checkPasswordStrength(userPassword) {
    
    if(userPassword.length>10){
        return "Strong";
    }else if(userPassword.length>=6 && userPassword.length<=10){
        return "Medium";
    }else if(userPassword.length<6){
        return "Weak";
    }
    
}

console.log(checkPasswordStrength(userPassword));
console.log(userPassword.length);

// เริ่มเขียนโค้ดตรงนี้
