let bitcoin = 51000000;
let etherium = 3000000;
let doge = 200;
let reple = 1000;
let lic = 50000;
var i = 0;
let min = -99;
let max = 99;
let re;
let n;
let B = 0;
let E = 0;
let D = 0;
let R = 0;
let L = 0;
let W = 100000000;
let MM = 0;
let kkk = 0;
function bitcoinPricdChange(){
    min = Math.ceil(min);
    max = Math.floor(max);
    re = Math.floor(Math.random() * (max - min + 1)) + min;
    bitcoin = bitcoin+bitcoin*(re/100);
}
function etheriumPriceChage(){
    min = Math.ceil(min);
    max = Math.floor(max);
    re = Math.floor(Math.random() * (max - min + 1)) + min;
    etherium = etherium+etherium*(re/100);
}
function dogePriceChage(){
    min = Math.ceil(min);
    max = Math.floor(max);
    re = Math.floor(Math.random() * (max - min + 1)) + min;
    doge = doge+doge*(re/100);
}
function allCoinPriceChange(){
    bitcoinPricdChange()
    etheriumPriceChage()
    dogePriceChage()
    console.log("가격변동....")
}
function sellAndBuy(item){
    if(item==1){
        if(W>=bitcoin){
            W = W - bitcoin
            B = B + 1
            console.log("Bitecoin : "+B)
        }
        else if(W<bitcoin){
            console.log("no,money")
        }
    }
    else if(item==2){
        if(B<=0){
            console.log("no,bitcoin")
        }
        else if(B>=1){
            B = B - 1
            W = W + bitcoin
            console.log("bitcoin : "+B)
        }
    }
    else if(item==3){
        if(W>=etherium){
            W = W - etherium
            E = E + 1
            console.log("Etherium : "+E)
        }
        else if(W<=etherium){
            console.log("No,money")
        }
    }
    else if(item==4){
        if(E<=0){
            console.log("no,etherium")
        }
        else if(E>=1){
            W = W + etherium
            E = E - 1
            console.log("etherium : "+E)
        }
    }
    else if(item==5){
        if(W>=doge){
            W = W - doge
            D = D + 1
            console.log("Doge : "+D)
        }
        else if(W<=doge){
            console.log("no,money")
        }
    }
    else if(item==6){
        if(D<=0){
            console.log("no,doge");
        }
        else if(D>=1){
            W = W + doge
            D = D - 1
            console.log("doge : "+D)
        }
    }
}
function wallet(){
    console.log("bitcoin : "+B+"   etherium : "+E+"   doge : "+D)
}
function M(){
    console.log("잔고: "+W)
}
function sleep(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        },ms);
    })
}
async function timer(){
        await sleep(30000)
        allCoinPriceChange()
        await sleep(30000)
        allCoinPriceChange()
        await sleep(30000)
        allCoinPriceChange()
        await sleep(30000)
        allCoinPriceChange()
        await sleep(30000)
        allCoinPriceChange()
        await sleep(30000)
        allCoinPriceChange()
        await sleep(30000)
        allCoinPriceChange()
        await sleep(30000)
        allCoinPriceChange()
        await sleep(30000)
        allCoinPriceChange()
        await sleep(30000)
        allCoinPriceChange()
}
function price(){
    console.log("비트코인은 : ")
    console.log(bitcoin)
    console.log("이더리움은 : ")
    console.log(etherium)
    console.log("도지코인은 : ")
    console.log(doge)
}
timer()
if(M == 100000000){
    console.log("가진돈이 그대로 입니다. ")
}
else if(M > 100000000){
    console.log("you win!!")
}
else if(M < 100000000){
    console.log("you lose!!")
}