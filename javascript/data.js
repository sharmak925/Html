 const placeorder = (callback) => {
     setTimeout(()=>{
         console.log(" place your order");
         callback();
     },2000);
 };

 const startProduction = (callback) => {
     setTimeout(()=>{
         console.log("start production");
         callback();
     },3000);
 };

 const printID = (callback) => {
     setTimeout(()=>{
         console.log("Id printed");
         callback();
     },5000);
 };

 const ProductName = (callback) => {
     setTimeout(()=>{ 
                console.log("productName printed");
         callback();
     }, 5000);
 }
 const ProductDesc = (callback) => {
     setTimeout(()=>{
                 console.log('product describstion');
         callback();
     }, 5000);
 };


 console.log("order is now going to take");
 placeorder(()=>{
     console.log('pass to production');
     startProduction(()=>{
         console.log('passing to id');
         printID(()=>{
             console.log('pass to product name');
             ProductName(()=>{
                 console.log('pass to product desc');
                 ProductDesc(()=>{
                     console.log('all task done');
                 })
             })
         })
     })
 })


function getallo( callback){
    setTimeout(() => {
        const allo ="🥚";
        console.log("here we got the allo",allo);
        callback(allo);
    },500);
    }

    function makedough(allo,callback){
        setTimeout(() => {
            const dough = allo +"🍩";
            console.log("dough is ready and here is the raw dough",dough);
            callback(dough);
        },1000);

        }
        function makeAlloKulcha( allo,dough,callback){
            setTimeout(() => {
                const kulcha =allo + dough +"🥧";
                console.log("kulcha is ready",kulcha);
                callback(kulcha);
            },150);
        }

            getallo((allo)=>{
                makedough(allo,(dough)=>{
                    makeAlloKulcha(allo,dough,(kulcha)=>{
                        console.log("kuch is served");
                    });
                });
            });
        
