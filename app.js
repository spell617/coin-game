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
    re = Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 ?��?��, 최솟값도 ?��?��
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
            alert("Bitecoin : "+B)
        }
        else if(W<bitcoin){
            alert("no,money")
        }
    }
    else if(item==2){
        if(B<=0){
            alert("no,bitcoin")
        }
        else if(B>=1){
            B = B - 1
            W = W + bitcoin
            alert("bitcoin : "+B)
        }
    }
    else if(item==3){
        if(W>=etherium){
            W = W - etherium
            E = E + 1
            alert("Etherium : "+E)
        }
        else if(W<=etherium){
            alert("No,money")
        }
    }
    else if(item==4){
        if(E<=0){
            alert("no,etherium")
        }
        else if(E>=1){
            W = W + etherium
            E = E - 1
            alert("etherium : "+E)
        }
    }
    else if(item==5){
        if(W>=doge){
            W = W - doge
            D = D + 1
            alert("Doge : "+D)
        }
        else if(W<=doge){
            alert("no,money")
        }
    }
    else if(item==6){
        if(D<=0){
            alert("no,doge");
        }
        else if(D>=1){
            W = W + doge
            D = D - 1
            alert("doge : "+D)
        }
    }
}
function wallet(){
    alert("bitcoin : "+B+"   etherium : "+E+"   doge : "+D)
}
function M(){
    alert("?���? : "+W)
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
    console.log("기격변동...")
    await sleep(30000)
    getRandomIntInclusive()
    console.log("기격변동...")
    await sleep(30000)
    getRandomIntInclusive()
    console.log("기격변동...")
    await sleep(30000)
    getRandomIntInclusive()
    console.log("기격변동...")
    await sleep(30000)
    getRandomIntInclusive()
    console.log("기격변동...")
    await sleep(30000)
    getRandomIntInclusive()
    console.log("기격변동...")
    await sleep(30000)
    getRandomIntInclusive()
    console.log("기격변동...")
    await sleep(30000)
    getRandomIntInclusive()
    console.log("기격변동...")
    await sleep(30000)
    getRandomIntInclusive()
    console.log("기격변동...")
    await sleep(30000)
    getRandomIntInclusive()
    console.log("기격변동...")
}
timer()