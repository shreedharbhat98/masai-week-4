
// console.log(localStorage.setItem("details", JSON.stringify(details)))
function signup() {
    var details = [
        {
             firstName:"Shreedhar", 
             lastName: "Bhat", 
             username: "admin@gmail.com", 
             password:"password" 
            }
    ]
    var details = JSON.parse(localStorage.getItem("details"))

    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    
    // console.log(details)
    if ((fname == "") || (lname == "") || (email == "") || (password == "")) {
        alert("Please Fill All Fields !!")
        return
    }
    
    else {
        
        var user = { firstName: fname, lastName: lname, username: email, password: password }
            
        for(var i=0; i < details.length; i++){
           
            if(details[i].username == user.username ){
                alert("Email Alreday Exits !!")
                return
            }
        }
        
        if(!details){
            details =[]
        }
        details.push(user)
        // console.log(localStorage.getItem('details'))

        console.log(details)
        localStorage.setItem("details",JSON.stringify(details))
        alert("Registration Sucessful, Please Login")
        // console.log(JSON.stringify(details))
        // console.log(userDetails)
        // console.log(userDetails)
        // var data = JSON.stringify("userDetails", userDetails)
        // localStorage.setItem("userDetails",data)
        // console.log(data)
        window.location.href = "/home/shreedhar/Desktop/Employee-Database/Login/login.html"
    }
}
 