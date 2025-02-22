import { useState } from "react";
const  Calculator = () => {
    const [ number, setnumber] = useState('0');
    const buttonValues = [
        "AC", "DE", ".", "/",
        "7", "8", "9", "*",
        "4", "5", "6", "+",
        "1", "2", "3", "-",
        "00", "0", "%", "="
    ];
    const handleClick = (e) => {
        console.log(e.target.value);
        if(e.target.value === "AC"){
             setnumber('');
        }
        else if(e.target.value === "DE"){
            setnumber(number.slice(0, -1) || "0");
        }
        else if(e.target.value ==="="){
            setnumber(eval(number));
        }
        else if(e.target.value === "%"){
            setnumber((prev) => prev / 100);
        }
        else{
            setnumber(number + e.target.value);
        }
      }
    return(
        <div className="container">
            <div className="calculator">
                <div className = "display">
                    {/* <input type="text" />  */}
                    {number}
                </div>
                {/* <div>
                    <input type="button" value="AC" />
                    <input type="button" value="DE" />
                    <input type="button" value="." />
                    <input type="button" value="/" />
                </div>
                <div>
                    <input type="button" value="7" />
                    <input type="button" value="8" />
                    <input type="button" value="9" />
                    <input type="button" value="*" />
                </div>
                <div>
                    <input type="button" value="4" />
                    <input type="button" value="5" />
                    <input type="button" value="6" />
                    <input type="button" value="+" />
                </div>
                <div>
                    <input type="button" value="1" />
                    <input type="button" value="2" />
                    <input type="button" value="3" />
                    <input type="button" value="-" />
                </div>
                <div>
                    <input type="button" value="00" />
                    <input type="button" value="0" />
                    <input type="button" value="%" />
                    <input type="button" value="=" />
                </div> */}
                <div className="calculatorButtons">
                {buttonValues.map((buttonValue, index) => {
                    return <input type="button" value={buttonValue} key={index}  onClick ={handleClick}/>
                })}
                </div>
            </div>
        </div>
    );
}
export default Calculator;