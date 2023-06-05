let a=10;
let b=0;

let waitingdata=new Promise((resolve, reject) => {
setTimeout(() => {
   resolve(30);
}, 2000);

});

waitingdata.then((data)=>{
    console.log(a+data);
})