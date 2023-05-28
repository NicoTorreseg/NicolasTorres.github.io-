function funcionResumen() {
    //obtengo los datos ingresados por el usuario
    let cant_tickets=document.getElementById("cantidadtickets").value;
    let categoria=document.getElementById("categorias").value;;
    let valorticket=200;
    let resultado=document.getElementById("resultado_text");
    console.log("cant:"+cant_tickets+" cat:"+categoria);
  
    resultado.innerHTML="Total a Pagar: $";//limpio el resultado anterior
    console.log(resultado);
    
    
    
    switch(categoria){
        case "Trainee" : console.log("es trainee");
       
        resultado.value=cant_tickets*(valorticket-(valorticket*0.15))
       
        
        break;
        case "Junior" : console.log("es junior");
        resultado.value=cant_tickets*(valorticket-(valorticket*0.50))
        break;
        case "Estudiante" : console.log("es estudiante");
        resultado.value=cant_tickets*(valorticket-(valorticket*0.80))
        break;
        default:
            alert("No se selecciono ninguna categoria");
        resultado.value="";
    }

    console.log(resultado.value);
    if(resultado.value==""|| resultado.value==undefined|| resultado.value==NaN ||resultado.value=='NaN'|| resultado.value=="NaN"){
        alert("La cantidad ingresada no es un numero");
      
    }
    
    resultado.append(resultado.value);
    
    
}

function funcionBorrar(){
    
    //reseteo el formulario


    alert("Se borro el contenido de los campos");
    document.getElementById("formfin").reset();
   
    const $elemento = document.querySelector("#resultado_text");
    $elemento.innerHTML = "Total a Pagar: $";

}