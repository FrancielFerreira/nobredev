// máscara telefone
function maskPhone(i,t){
   
  var v = i.value;
  
  if(isNaN(v[v.length-1])){
      i.value = v.substring(0, v.length-1);
      return;
  }

  if(t === "tel"){
      if (v.length === 1) i.value = "(" + i.value;
      if (v.length === 3) i.value += ") ";
      if(v[5] == 9){
          i.setAttribute("maxlength", "15");
          if (v.length === 10) i.value += "-";
      }else{
          i.setAttribute("maxlength", "14");
          if (v.length === 9) i.value += "-";
      }
      }
  }