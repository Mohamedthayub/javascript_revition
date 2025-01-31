// let age = 343443;

// if(age >= 18){
//     if(age >= 60){
//         console.log("senior");
//     }
//     else{
//         console.log("middle");
//     }
// }
// else{
//     console.log("child");
// }
function getData(dataId, getNextData){
    setTimeout (() => {
        console.log("data",dataId);
        if(getNextData()){
            getNextData();
        }
    },2000);
}
getData(1,()=>{
    console.log("getting data 2")
    getData(2,()=>{
        console.log("getting data  3");
        getData(3,()=>{
            console.log("getting data 4");
            getData(4,()=>{   
                console.log("gettting data 5");
                getData(5,()=>{

                })

            })
        })
    })
})
//  This is callback hell  