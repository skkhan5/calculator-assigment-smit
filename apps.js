
let num1 = +prompt("enter first value")
let num2 = +prompt("enter second value ")
let oprator = prompt ("enter airtmatic operator")
if (
    oprator === "+" ||
    oprator === "-"  ||
    oprator === "/"  ||
    oprator === "*"
)  {
    console.log("condition block is running")

if (oprator === "*"){
    console.log(num1 * num2)}

    else if (oprator === "-"){
        console.log(num1 - num2)}

    else if (oprator === "/"){
        console.log(num1 / num2)}

        else if (oprator === "+"){
            console.log(num1 + num2)}
        
}else{
    alert("invalid operator")
}