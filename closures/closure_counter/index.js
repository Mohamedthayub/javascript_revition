const display = document.getElementById('display');
const btn_add = document.getElementById("btn_add");
const btn_sub = document.getElementById("btn_sub");
const btn_reset = document.getElementById("btn_reset");
function counterapp(){
    var count = 0;
    return {
        countadd:function(){
            count++;
            display.textContent = count;
        },
        countsub:function(){
            count--;
            display.textContent = count;
        },
        countreset:function(){
            count = 0;
            display.textContent = count;

        }
    }
}
var result = counterapp();
btn_add.addEventListener("click",function(){
    result.countadd();
})
btn_sub.addEventListener("click",function(){
    result.countsub();
})
btn_reset.addEventListener("click",function(){
    result.countreset();
})