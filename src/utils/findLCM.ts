function findGCD(A:number, B:number):number{

    if(B===0){
        return A;
    }

    if(B>A){
        findGCD(B, A); 
    }
    return findGCD(B, Math.floor(A%B));
}

// Formula: A*B = LCM(A, B)*GCD(A, B);
// i.e LCM(A, B) = (A*B)/GCD(A, B);
function findLCM(A:number, B:number){
    return Math.floor(A / findGCD(A, B)) * B; 
}

function calculateCount(mid:number, b:number, c:number){
    return (mid/b)+(mid/c)-findLCM(b, c);
}

function findAthMagicalNumber(a:number, b:number, c:number){
    // range  = min(b, c) to a*min(b, c)
    let s = Math.min(b, c);
    let e = a*Math.min(b, c);

    let ans = 0;
    while(s <= e){
        let mid = Math.floor((e-s)/2)+s;
        let count = calculateCount(mid, b, c);
        if(count < a){
            s = mid+1;
        }else if(count > a){
            e = mid-1;
        }else{
            ans = mid;
            e = mid-1;
        }
    }
    return ans;
}

export {
    findAthMagicalNumber,
    findGCD,
    findLCM
}