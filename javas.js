let ename=[];
let esalary=9999;

//function for store data
function addemp(name,salary,department){
    salary=Number(salary);

    let emp={
        name:name.trim(),
        salary:salary,
        department:department.trim(),
        result:salary>=esalary? "goodsalary":"badsalary"
    };
    ename.push(emp);
}

//function for validation

document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let salary=document.getElementById("salary").value;
    let department=document.getElementById("department").value;


    if(name===""|| salary===""||department===""){
        alert("Enter Employee Details");
        return;
    }
    addemp(name,salary,department);
    alert("Your details added");

            let okk=document.getElementById("salary").value;
            if(esalary>=okk){
                alert("your salary is low")
            }
            else{
                alert("your salary is high")
            }
        }
    
);

// arrow function for output
const showemp=()=>{
    let output="";

    for(let emp of ename){
        let{ name,salary,department,result}=emp;
        output+= 
        `<br>
        Name :${name.toUpperCase()}<br>
        Salery:${salary}<br>
        Department:${department}<br>
        Result<span class="${result==="good salery"?"goodsalery ":"badsalary"}">${result}</span><br>`;
    }
    let salary=ename.map(s=>s.salary);
    let tsalery =salary.reduce((sum,m)=>sum+m,0);
    let avg = ename.length > 0 ? tsalery / ename.length : 0;
    output+=`Average salary:${avg}`;
    
    document.getElementById("output").innerHTML=output;
}



// delete last entry 
    let chan=()=>{
    ename.pop();
    document.getElementById("dlt");
    alert("Your details are deleted");
    showemp();
}

//time out function
function ajaxx(){
    alert("Your results are loading");
    let a= setTimeout (function( ){ 

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(chan=>chan.json())
    .then(data=>{
        let text="";
        data.slice(0,5).forEach(user=>{
            text+=` Employee Names: ${user.name}<br>`;
        });
        document.getElementById("output").innerHTML=text;   
    })
    },10000)
}

