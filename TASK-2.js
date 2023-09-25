json=[{
    id:101,
    name:"hari",
    active:false,
    department:["d1","d2"],
    address:{
        permanent:"a1",
        temporary:"b1"
    }
},
{
    id:102,
    name:"harold",
    active:false,
    department:["d1","d2"],
    address:{
        permanent:"a1",
        temporary:"b1"
    }
},
{
    id:103,
    name:"george",
    active:false,
    department:["d1","d2"],
    address:{
        permanent:"a1",
        temporary:"b1"
    }
}
]


for(let temp in user){
    
    let temp2=user[temp];
    for(let x in temp2){
        
      if(typeof user[temp][x] == "object"){
        let val = user[temp][x];
        console.log(x+"=")
        if(Array.isArray(val)){
        str=val.toString();
        str2=str.split(",");
        console.log(str2.join("||"));
        }
            else{   
       for(let i in val){
        console.log(i+":"+val[i])
       }
    }

        }  
      
      else{
        console.log(x+"="+user[temp][x]);
      }
      
    }
}
arr=["1"]
arr1=[]
for(let i=0;i<arr.length;i++){
    if(!isNaN(arr[i])){
        arr1.push(Number(arr[i]));
    }
    else if(arr[i]=="c"){
        arr1.pop();
    }
    else if(arr[i]=="d"){
        let x=arr1.pop();
        arr1.push(x);
        arr1.push(x*2);
    }
    else if(arr[i]=="+"){
        let a=arr1.pop();
        let b=arr1.pop();
        arr1.push(b);
        arr1.push(a);
        arr1.push(a+b);
    }

}
let sum=0;
for(let j=0;j<arr1.length;j++){
sum+=arr1[j];
}
console.log(sum)
let json=[];
let k=0;
j="user";
function validate(){
    let b=document.getElementById("fname").value;
    let c=document.getElementById("active").value;
    let d=document.getElementById("department").value;
    let e=document.getElementById("address").value;
    let p=document.getElementById("phone").value;
    let addr=e.split(",");
    let dept=d.split(",");
    let l=dept.length;
    s=[];
    let vehicles=document.querySelectorAll(".vh");
    for(let i=0;i<vehicles.length;i++){
        if(vehicles[i].checked){
            s.push(vehicles[i].value);
        }
    }
    

    obj={};
    obj2={};
    obj.id=k;
    obj.name=b;
    obj.active=c;
    obj.department=dept;
    obj2.temporary=addr[0];
    obj2.permanent=addr[1];
    obj.addr=obj2;
    obj.skills=s;
    obj.phone=p;
    localStorage.setItem(obj.id,JSON.stringify(obj));
    let r=JSON.parse(localStorage.getItem(obj.id))
    let output= '<table border="solid 1px black"><tr><td>ID</td><td>NAME</td><td>ACTIVE</td><td colspan="3">DEPARTMENTS</td><td colspan="2">ADDRESS</td><td>SKILLS</td></tr>'
    output+='<tr><td>'+r.id+'</td><td>'+r.name+'</td><td>'+r.active+'</td><td>';
    for(let i=0;i<l;i++){
        output+= r.department[i]+'</td><td>';
    }
    output+=r.addr["temporary"]+'</td><td>'+r.addr["permanent"]+'</td><td>'+r.skills+'</td></tr></table>';
    document.getElementById("result").innerHTML=output;
    for(let s in str){
        if(str[s].phone!=obj.phone){
            json.push(obj);
            printitem();
        }
    }
    localStorage.setItem("user",JSON.stringify(json));
    
    if(!(b&&c&&dept&&p&&s)){
        let op1='<p>enter details</p>';
        document.getElementById("result").innerHTML=op1;
    }
     else if(check(obj)){
        json.push(obj);
        k++;
        localStorage.setItem("user",JSON.stringify(json));
        printitem();
    }
    else{
        printitem1();
    }
    
}
function check(object){
    let str=JSON.parse(localStorage.getItem("user"));
    let flag=0;
    for(let s in str){
       if(str[s].phone===obj.phone){
                flag=1;
            }
    if(str[s].id===obj.id){
                obj.id+=1;
        }
         }
        
         if(!flag){
            return true;
         }
         else{
            return false;
         }
}
function printitem(){
    json=JSON.parse(localStorage.getItem("user"));
    let output= '<table border="solid 1px black"><tr><td>ID</td><td>NAME</td><td>ACTIVE</td><td>DEPARTMENTS</td><td>ADDRESS</td><td>SKILLS</td><td>PHONE</td><td>update</td><td>Delete</td></tr>';
    for(let r in json){
    output+='<tr><td>'+json[r].id+'</td><td>'+json[r].name+'</td><td>'+json[r].active+'</td><td>'+json[r].department+'</td><td>';
    output+=json[r].addr["temporary"]+json[r].addr["permanent"]+'</td><td>'+json[r].skills+'</td><td>'+json[r].phone+'</td><td><input type="button" value="update" onclick="updated2('+json[r].id+')"></td><td><input type="button" value="delete" onclick="deleted('+json[r].id+')"></td></tr>';  
    }
    output+='</table>';
    document.getElementById("result").innerHTML=output;
}
printitem();    
function printitem1(){
    json=JSON.parse(localStorage.getItem("user"));
    let output= '<table border="solid 1px black"><tr><td>ID</td><td>NAME</td><td>ACTIVE</td><td>DEPARTMENTS</td><td>ADDRESS</td><td>SKILLS</td><td>PHONE</td><td>update</td><td>Delete</td></tr>';
    for(let r in json){
    output+='<tr><td>'+json[r].id+'</td><td>'+json[r].name+'</td><td>'+json[r].active+'</td><td>'+json[r].department+'</td><td>';
    output+=json[r].addr["temporary"]+json[r].addr["permanent"]+'</td><td>'+json[r].skills+'</td><td>'+json[r].phone+'</td><td><input type="button" value="update" onclick="updated2('+json[r].id+')"></td><td><input type="button" value="delete" onclick="deleted('+json[r].id+')"></td></tr>';  
    }
    output+='</table><br>';
    output+='<p>user already exists</p>';
    document.getElementById("result").innerHTML=output;
}
function deleted(id1){
    let str2=JSON.parse(localStorage.getItem("user"));
    localStorage.removeItem("user");
    let arr=[];
    for(let x in str2){
        if(str2[x].id==id1){
            continue;
        }
        else{
            arr.push(str2[x]);
        }
    }
    localStorage.setItem("user",JSON.stringify(arr));
    printitem();
}

function updated2(id2){
    let op3='<br><br><form>NAME&nbsp;&nbsp; <input type="text" id="fname1" placeholder="enter firstname"required><br><br>ACTIVE&nbsp;&nbsp;<input type="text" id="active1" placeholder="enter active status" required><br><br>DEPARTMENTS&nbsp;&nbsp;<input type="text" id="department1" placeholder="enter departments" required><br><br>ADDRESS&nbsp;&nbsp;<input type="text" id="address1" placeholder="enter temporary address" required><br><br>PHONE&nbsp;&nbsp;<input type="text" id="phone1" placeholder="enter phone number" required><br><br><input type="checkbox" id="vehicle1" name="vehicle1" class="vh1" value="HTML"> <label for="vehicle1"> HTML</label><br> <input type="checkbox" id="vehicle2" name="vehicle2" class="vh1" value="REACT"><label for="vehicle2"> REACT</label><br><input type="checkbox" id="vehicle3" name="vehicle3"class="vh1" value="ANGULAR"><label for="vehicle3"> ANGULAR</label><br><input type="checkbox" id="vehicle3" name="vehicle3"class="vh1" value="EXPRESS"><label for="vehicle3"> EXPRESS</label><br><input type="button" value="Submit" onclick="validate2('+id2+')"></form>';
    document.getElementById("update").innerHTML=op3;
}
function validate2(id2){
    
    let b=document.getElementById("fname1").value;
    let c=document.getElementById("active1").value;
    let d=document.getElementById("department1").value;
    let e=document.getElementById("address1").value;
    let p=document.getElementById("phone1").value;
    let addr=e.split(",");
    let dept=d.split(",");
    let l=dept.length;
    s=[];
    let vehicles=document.querySelectorAll(".vh1");
    for(let i=0;i<vehicles.length;i++){
        if(vehicles[i].checked){
            s.push(vehicles[i].value);
        }
    }
    

    obj={};
    obj2={};
    obj.id=id2;
    obj.name=b;
    obj.active=c;
    obj.department=dept;
    obj2.temporary=addr[0];
    obj2.permanent=addr[1];
    obj.addr=obj2;
    obj.skills=s;
    obj.phone=p;

    let str2=JSON.parse(localStorage.getItem("user"));
    localStorage.removeItem("user");
    let arr=[];
    for(let x in str2){
        if(str2[x].id==id2){
        str2[x]=obj;
        arr.push(str2[x]);
        }
        else{
            arr.push(str2[x]);
        }
    }
    localStorage.setItem("user",JSON.stringify(arr));  
    printitem();
}