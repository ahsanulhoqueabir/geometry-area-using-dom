let serial =0;
// document.querySelector('#tbtn').addEventListener('click',(e)=>
// {
//     const pName= Name(e);
//     const value1= firstValue(e);
//     const value2= secondValue(e);
//     if(value1 !='not valid' && value2 !='not valid')
//     {

//         const Area = parseFloat(value1) * parseFloat(value2) * 0.5;
//         displayData(pName,Area)
//         convertButton();
//         console.log('hi')
//     }
//     else
//     {
//         alert('Give a valid  number')
//     }
//     // console.log(Area)
   
// });
const cards= document.querySelectorAll('.card');
for(let card of cards)
{
    card.addEventListener("mouseenter",(e)=>
    {
        let x = e.target;
        const color =randomColor();
        x.style.backgroundColor=color;
    });
}

const allCard=document.querySelectorAll('.btn-info');
for(let card of allCard)
{
    card.addEventListener('click',(e)=>
    {
        const pName= Name(e);
        const value1= firstValue(e);
        const value2= secondValue(e);
        if(value1 !='not valid' && value2 !='not valid')
        {

            const Area = (parseFloat(value1) * parseFloat(value2) * 0.5).toFixed(2);
            displayData(pName,Area)
            convertButton();
        }
        else
        {
            alert('Give a valid  number')
        }
        // console.log(Area)
    });
}



// Useful function 

function Name(e)
{
    const x= e.target.parentNode.parentNode.children[0].innerText;
    return x;
}

function firstValue(e)
{
   let x= e.target.parentNode.parentNode.children[2].children[0].value;
   if(x.length == 0 || (isNaN(x)==true)) 
   {
       x='not valid';
    }
    return x;
}

function secondValue(e)
{
   let x= e.target.parentNode.parentNode.children[2].children[2].value;
   if(x.length == 0 || (isNaN(x)==true)) 
   {
       x='not valid';
    }
   return x;
}

function displayData(name,area)
{
    const table= document.querySelector('#tbody');
    const tr= document.createElement('tr');
    serial++;
    tr.innerHTML=`
    <td> ${serial}</td>
    <td> ${name} </td>
    <td> <span>${area}</span> cm<sup>2</sup> </td>
    <td> <button class="convert btn btn-outline font-extralight text-black-300 p-0 btn-success text-sm"> Convert to m<sup>2</sup> </button> </td>
    `;
    table.appendChild(tr);

    
}

function convertButton()
{
    const allConvert = document.querySelectorAll('.convert');
    for(const value of allConvert)
    {
    value.addEventListener('click',(e)=>
    {
        const x= e.target.parentNode.parentNode;
        const cm = x.children[2].children[0].innerText;
        const result = (parseFloat(cm) * 0.0001).toFixed(3);
        const td = document.createElement('td');
        td.innerHTML=`
        ${result} m<sup>2</sup>
        `; 
        x.appendChild(td);
        // console.log(td);
        e.target.setAttribute('disabled',true);
    });
    }
}

function randomColor()
{
    const Characters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    function getC(i)
    {
        return Characters[i];
    }
    let color="#";
    for (let i=0 ; i<6 ; i++)
    {
        let x= Math.floor(Math.random()*16);
        color+=getC(x)
    }
    return color;
}

// console.log(randomColor());