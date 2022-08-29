
var products=[
    {
        name:"oppo",
        inventory:"A57",
        unit_price:17000
    },
    {
        name:"Samsung",
        inventory:"A51",
        unit_price:32000
    },
    {
        name:"redme",
        inventory:"Note 5",
        unit_price:19000
    }
]
function listProducts()
{
    for(var i = 0; i < products.length; i++)
    {
        console.log('Name '+(i+1)+":"+products[i].name);
    }
}
function totalValue()
{
    var sum=0;
    for(var i=0;i<products.length;i++)
    {
        sum=sum+products[i].unit_price;
    }
    console.log('sum of all product:'+sum);
}
listProducts()
totalValue()

/*
var readline=require('readline');
var r1=readline.createInterface(process.stdin,process.stdout);
var products=[]
r1.question("how many product do you have?",(n)=>{
    for(var i=0;i<n;i++)
    {
        //const k1= {name:  , inventory:  ,unit_price: },{},{}

       // [camera,45,6000]
        r1.question("Enter product name:",(name)=>{
            r1.question("Enter product Inventory:",(inventory)=>{
                r1.question("Enter Unit price:",(unit_price)=>{
                    products.push(name,inventory,unit_price);
                    console.log("push completed",i+"th time");
                    r1.close()
                    console.log(products)
                });
            });
        });
    }  
    
});

*/