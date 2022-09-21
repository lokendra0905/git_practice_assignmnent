// Check Whether num is prime number or not
let num=67
let Factor=0
for(i=1;i<=num;i++){
    if(num%i==0){
       Factor++
       }

if(Factor===2){
    console.log(num,"is a Prime Number")
} else {
    console.log(num,"is not a Prime Number")
}
