import { useState, useRef, useMemo, useCallback } from "react";

// function fi(n){
//     if(n===1||n===2){
//         return 1;
//     }
//     else {
//         return fi(n-1)+fi(n-2)
//     }
// }

function Counter(){
    const [number, setNumber] = useState(30);
    let num = useRef(0);
    function handleClick(e){
        e.stopPropagation();
        setNumber(number=>number+1);
        num.current++;
        console.log(`Hello: ${num.current}`);
        console.log(number);


    }
    const fibFx = useCallback(function fi(n){
        if(n===1||n===2){
            return 1;
        }
        else {
            return fi(n-1)+fi(n-2)
        }
    },[]);
    
    const fibMemorized = useMemo(()=>fibFx(number),[number,fibFx]);

    return(
        <>
        <h1 style={{color:'white'}}>{number} | {fibMemorized}</h1>
        <button onClick={handleClick}>Add</button>
        </>
    )
}

export default Counter;