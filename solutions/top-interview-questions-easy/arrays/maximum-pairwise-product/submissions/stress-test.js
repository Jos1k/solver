
const naiveMax = require('./solution_1/code');
const fastMax = require('./solution_2/code');

(function stressTest(){
    while(true){
        const n = Math.floor(Math.random() * 1000)+2;
        const inputArr = [];
        for (let i=0 ; i < n; i++ ){
            inputArr[i]=Math.floor(Math.random()*1000)+1;
        }
        console.log(`INPUT: ${JSON.stringify(inputArr)}`);
        const maxRes = naiveMax(inputArr);
        const maxFastRes = fastMax(inputArr);
        
        if(maxRes === maxFastRes){
            console.log("OK!")
        } else {
            console.log(`NORMAL: ${maxRes}, FAST: ${maxFastRes}`);
            break;
        }
    }
})();