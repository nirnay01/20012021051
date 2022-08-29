var fun=require('./pr3_3fun')
var readline=require('readline');
var r1=readline.createInterface(process.stdin,process.stdout);
r1.question("Enter value of a:",(a)=>{
    r1.question("Enter value of b:",(b)=>{
        console.log("--------------------")
        console.log("Addition: "+fun.f1(parseInt(a),parseInt(b)));
        console.log("Subtraction: "+fun.f2(a,b));
        console.log("Multiplication: "+fun.f3(a,b));
        console.log("Division: "+fun.f4(a,b));
    });
});