let number="";
let answer="";
let num1=document.querySelector(".number1");
let answers=document.querySelector(".answer");
function getValue(clickedButton)
{
    if(clickedButton.value=="clear")
    {
        number="";
        num1.innerHTML=number;
        answers.innerHTML="";
    }

    else if(clickedButton.value=="delete")
    {
        number=number.slice(0,-1);
        num1.innerHTML=number;

    }

    else if(clickedButton.value=="=")
    {
        number=number.replace("÷","/");
        number=number.replace("X","*");
        answer=eval((number));
        answers.innerHTML=answer;
    }
    else if((clickedButton.value=="+"||clickedButton.value=="-"||clickedButton.value=="X"||clickedButton.value=="÷")&&
    (number.includes("+")||number.includes("-")||number.includes("X")||number.includes("÷")))
    {
       
        
        if(number.includes("+"))
        {
            
        number=number.replace("+",clickedButton.value);
       
        }
        else if(number.includes("-"))
        {
            number=number.replace("-",clickedButton.value);
        }
        else if(number.includes("X"))
        {
            number=number.replace("X",clickedButton.value);
        }
        else if(number.includes("÷"))
        {
           number=number.replace("÷",clickedButton.value)
        }
        

    }
    else{
    number=number+clickedButton.value;

    }
    if((number.includes("*")||number.includes("/"))==false||(clickedButton.value!="clear")||(clickedButton.value!="delete"))
    {
 
    num1.innerHTML=number;
    }
}



