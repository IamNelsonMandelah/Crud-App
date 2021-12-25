let btnCreate= document.getElementById("btnCreate");
let frmCreate= document.getElementById("frmCreate");
// in the above lines, I am accessing the  values of btnCreate and frmCreate and storing
//them inthe respective variables
  let isCreateFormDisplaying = false;
  // creating a variable and assigning a boolean value

btnCreate.onclick=()=>{
    if(isCreateFormDisplaying==false)
    {
        // console.log("Function working") if it returns this statement in console log, then the function is working 
        //as required.
        frmCreate.style.display="block";
        isCreateFormDisplaying=true;
    }else{
        frmCreate.style.display="none";
        isCreateFormDisplaying=false;
    }
}