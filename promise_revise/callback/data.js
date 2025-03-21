function processData(func,delay){
    setTimeout( () => {
        let data = {Name : "thayub", curios : "computer science"};
        func(data.Name);
    },delay);
}
function showdata(data){
    console.log(data);
}
processData(showdata,2000)