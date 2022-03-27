let bitcoin = 51000000;
let etherium = 3000000;
let doge = 200;
let reple = 1000;
let lic = 50000;
var i = 0;
let min = -60;
let max = 60;
let re;
let n;
let B = 0;
let E = 0;
let D = 0;
let R = 0;
let L = 0;
let W = 100000000;
let MM = 0;
function getRandomIntInclusive(){
    min = Math.ceil(min);
    max = Math.floor(max);
    re = Math.floor(Math.random() * (max - min + 1)) + min; //理쒕뙎媛믩룄 ?占쏙옙?占쏙옙, 理쒖넖媛믩룄 ?占쏙옙?占쏙옙
    while(true){
        if(i === 0){
            bitcoin = bitcoin+bitcoin*(re/100);
        }
        else if(i === 1){
            etherium = etherium+etherium*(re/100);
        }
        else if(i === 2){
            doge = doge+doge*(re/100);
        }
        else if(i == 3){
            return 0;
        }
        i = i + 1;
    }
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
    getRandomIntInclusive()
    console.log("가격변동...")
    await sleep(30000)
    getRandomIntInclusive()
    console.log("가격변동...")
    await sleep(30000)
    getRandomIntInclusive()
    console.log("가격변동...")
    await sleep(30000)
    getRandomIntInclusive()
    console.log("가격변동...")
    await sleep(30000)
    getRandomIntInclusive()
    console.log("가격변동...")
    await sleep(30000)
    getRandomIntInclusive()
    console.log("가격변동...")
    await sleep(30000)
    getRandomIntInclusive()
    console.log("가격변동...")
    await sleep(30000)
    getRandomIntInclusive()
    console.log("가격변동...")
    await sleep(30000)
    getRandomIntInclusive()
    console.log("가격변동...")
    await sleep(30000)
    getRandomIntInclusive()
    console.log("가격변동...")
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