

    console.log("welcome to java script")


    document.write("<h1>hello  java Script</h1>")

  //  alert("yeah javaScript")

    var a=10;

    console.log(typeof(a))

    console.log(a);
    

    a="javaScript"
    console.log(typeof(a))

    a=true;
    console.log(typeof(a))
    console.log(a)


    var a
    console.log(typeof(a))
    console.log(a)


a=100
    if(a==10){
    console.log("equal")
}
else{
    console.log("not equal")
}

    for(var i=0;i<10;i++){
        console.log(i)
    }


   // var s= 
   // function
    // disp()
     //   console.log("calling disp")
    
   // disp()


    //console.log(disp)

var c=function(){
    console.log("annymous function")
}
console.log(c())



function register(){
    console.log("calling submit");
    var email=document.getElementById("email")
    console.log(email)
    console.log(email.value)
    var message=document.getElementById("message")
    message.innerHTML="adding data from js";


if(email.value==""){
        var err=document.getElementById("m1")
        err.innerHTML="please enter email"
        err.style.color="red"
    }

var password=document.getElementById("pwd").value
if(password==""){
    var err=document.getElementById("mess")
    err.innerHTML="please enter password"
    err.style.color="red"
}



// console.log(document.register.gender)
if(document.registration.gender[0].checked==false &&
    document.registration.gender[1].checked==false &&
    document.registration.gender[2].checked==false)
    {

        console.log("please select gender")
        var err=document.getElementById("errGender")
        err.innerHTML="please select gender"
        err.style.color="red"
    }

if(document.registration.city.value=="0"){
    console.log("pls sel city")
    var err=document.getElementById("errcity")
    err.innerHTML="please select city"
    err.style.color="red"
}


console.log("adding details")
localStorage.setItem("email",email.value)
localStorage.setItem("password",password)
//localStorage.clear()
}
function validateEmail(){
    console.log("validate email")
    var email=document.getElementById("email")
    console.log(email)
    console.log(email.value)
    if(email.value=""){
        var err=document.getElementById("errEmail")
        err.innerHTML="please enter email"
        err.style.color="red"
    }
}






let d;
d=10;
console.log(d)


const X=100;
console.log(X)

    //X=120;

    //var ,let,const
    //array


  //  var z=[]

    var z=[1,2,3,4,5,"java","event"]
    console.log(z)


    for(var i=0;i<z.length;i++){
        console.log(z[i])
    }


    var user=[]
    console.log(user)

    user.push("event")
    console.log(user)

    user.push(1)
    console.log(user)

    user.push("java")
    console.log(user)

    user.pop()
    console.log(user)


    //push will add elemnet at last in array
    //pop will remove last element in an array



user.unshift("javaScript")
console.log(user)

//unshift will add element at beginning of array
//shift will remove element from beginning of array


user.shift()
console.log(user)


//user.splice()

//var ob={}


var tree={name:"cocount",lifespan:100,fruit:function getCoconut(){
    console.log("no cooconut")
}}
console.log(tree)
console.log(tree.name)
console.log(tree.fruit)


var date=Date()
console.log(date)

// how to rertieve data from html to javaScript





//document.getElementById("email")


//block level,inline level element
//div,p -new line
//span a,img -will not create new line


//what is the difference between == and ==== in javaScript?







//localStorage.removeItem("username")
//localStorage.clear()



