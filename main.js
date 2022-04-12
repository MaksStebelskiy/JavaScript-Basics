
      function maksFunction(){
    
        let inputIn1 = +document.getElementById('text1').value;
        let inputIn2 = +document.getElementById('text2').value;
        let a = inputIn1 + inputIn2;
       
           alert(`Сума: ${a}`);
           document.getElementById("text1").value = "";
           document.getElementById("text2").value = "";
           console.log((a));
    }
  