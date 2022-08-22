var readline=require('readline');
var r1=readline.createInterface(process.stdin,process.stdout);
r1.question('what is your name:',(name)=>{
    r1.question('what is your age:',(age)=>{
        if (age < 18)
        {
            console.log("Minimum required 18 years and your age is "+age+"you should wait at least "+(18-age) +" year(s) more.")
            r1.close();
        }
        else{
            r1.question('what is your email ID:',(email)=>{
                r1.question('what is your mobile No:',(mo)=>{
                    console.log("Great "+name+" you can sign in.")
                    console.log("your name:"+name+"\nyour age:"+age+"\nyour email:"+email+"\nyour mobile no:"+mo);
                    r1.close();
                });
                
            });
            
        }
       
    });
});
