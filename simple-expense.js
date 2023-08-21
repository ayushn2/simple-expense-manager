let month=["January","February","March","April","May","June","July","August","September","October","November","December"];

let incomeDetails=[{
    description:'Income-1',
    cost:289
},{
    description:'Income-2',
    cost:890
}];
let expenseDetails=[{
    description:'Food',
    cost:-230,
},
{
    description:'Entertainment',
    cost:-457
}];

let totalCost={
    income:0,
    expense:0
};

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const liveMonth = currentMonth;

document.querySelector(".monthName").innerHTML=`${month[liveMonth]}`

renderIncomeList();
renderExpenseList();

function renderIncomeList(){

    let updateList='';
    let totalIncomeCost=0;

    for(let i=0;i<incomeDetails.length;i++){
        const incomeObject=incomeDetails[i];
        const {description,cost}=incomeObject;
        totalIncomeCost+=cost;
        const html=`<div style="position:relative;"><p style="box-shadow: 0px 1px 1px rgba(0,0,0,0.1);">${description}</p><span style="position:absolute;
        right:5px;
        bottom:0px;
        color:#28B9B5 ;">+${cost}</span></div>`;
        
        // document.querySelector('.')
        updateList=updateList+html;
        console.log(updateList);
    }

    document.querySelector('.income-value').innerHTML=`+${totalIncomeCost}`;
    totalCost.income=totalIncomeCost;
    let grandTotal=totalCost.income+totalCost.expense;
    
    if(grandTotal>0)
    document.querySelector('.budget-value').innerHTML=`+ ${grandTotal}`;
    else
    document.querySelector('.budget-value').innerHTML=`- ${grandTotal}`;
    
    console.log(totalIncomeCost);
    document.querySelector('.js-income-description').innerHTML=updateList;
    console.log(totalCost);
    
}

function renderExpenseList(){

    let updateList='';
    let totalExpenseCost=0;
    const description=expenseDetails.description;

    for(let i=0;i<expenseDetails.length;i++){
        const expenseObject=expenseDetails[i];
        const {description,cost}=expenseObject;
        totalExpenseCost+=cost;
        const html=`<div style="position:relative;"><p style="box-shadow: 0px 1px 1px rgba(0,0,0,0.1);">${description}</p><span style="position:absolute;
        right:5px;
        bottom:0px;
        color:#FF5049">${cost}</span></div>`;
        updateList=updateList+html;
    }

    document.querySelector('.expense-value').innerHTML=`${totalExpenseCost}`;
    totalCost.expense=totalExpenseCost;
    console.log(totalExpenseCost);
    let grandTotal=totalCost.income+totalCost.expense;

    if(grandTotal>0)
    document.querySelector('.budget-value').innerHTML=`+ ${Math.abs(grandTotal)}`;
    else
    document.querySelector('.budget-value').innerHTML=`- ${Math.abs(grandTotal)}`;
    document.querySelector('.js-expense-description').innerHTML=updateList;
}

function addDetail(){

    let input=document.querySelector('.description-input');
    let description=input.value;
    let decision=document.querySelector('.decidingElement').value;
    let cost=document.querySelector('.value');
    console.log(cost);

    if(decision==='inc'&&cost.value>0&&description!=''){
        let inc_cost=cost.value*+1;
        incomeDetails.push({
            description,
            cost:inc_cost
        });
        input.value='';
        cost.value='';
        renderIncomeList();
    }

    else if(decision==='dec'&&cost.value>0&&description!=''){
        let dec_cost=cost.value*-1;
        expenseDetails.push({
            description,
            cost:dec_cost
        });
        input.value='';
        cost.value='';
        renderExpenseList();
    }
    
    else{
        alert('Check your entries!!');
    }
}