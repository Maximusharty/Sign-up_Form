const passcode=document.querySelector("#password");
const passcode2=document.querySelector('#confirm_password')
const password1=document.querySelector('.password1');
const div=document.createElement('div');
const btn=document.querySelector('button');
const input=document.querySelector('input');
btn.disabled=true;
console.log(input.validity.valueMissing);
if(input.validity.valueMissing==true){
    btn.disabled=true;
}
else{
    btn.disabled=false;
}

div.textContent='';



passcode2.addEventListener('keyup',()=>{
    let text=passcode.value;
    let text2=passcode2.value;
   
    if(text==""||text2==""){
        
        
        div.textContent="";
        password1.appendChild(div);

    }
   
   
    if(text===text2&&text!=''&&text2!=''){

        div.textContent='';
        div.classList.remove('no_match');
        div.classList.add('match');
        div.textContent="* The password match";
        password1.appendChild(div);
        console.log("the password match ")
        if(input.validity.valueMissing==true){
            btn.disabled=true;
        }
        else{
            btn.disabled=false;
        }
       

    }
    else{
        
       
        div.classList.add('no_match');
        if(div.textContent==''){
        div.textContent="* The password doesn't match";
        password1.appendChild(div);
        }
        btn.disabled=true;
        
        
        

        
        
        

    }
    
    
    
    
})
passcode.addEventListener('keyup',()=>{
    let text=passcode.value;
    let text2=passcode2.value;
   
    if(text==""||text2==""){
        
        
        div.textContent="";
        password1.appendChild(div);

    }
   
   
    if(text===text2&&text!=''&&text2!=''){

        div.textContent='';
        div.classList.remove('no_match');
        div.classList.add('match');
        div.textContent="* The password match";
        password1.appendChild(div);
       

    }
    else{
        
       
        div.classList.add('no_match');
        if(div.textContent==''){
        div.textContent="* The password doesn't match";
        password1.appendChild(div);
        }
        
        
        

        
        
        

    }
    
    
    
    
})


