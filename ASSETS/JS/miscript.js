//Solo cuando el DOM está listo, (la parte visual de la página ha cargado)
// se ejecutan las funciones de JavaScript
$(document).ready(function() {
    //Muestra un mensaje de bienvenida mediante un alert

    //Asocia instrucciones que se ejecutarán cuando se haga click en el botón con id = go_top_btn
    $("#go_top_btn").click(() => {
        window.scrollTo(0,0);
      });
    
    $("#show_modal_btn").click(() =>{
        const position_obj = $("#img_2").offset();
        
        
        $('#modal1').css({
            position: "absolute",
            left: position_obj.left*0.475,
            top: position_obj.top*0.96,
          });
        
        $('#modal1').modal('toggle');
        

    });
    
});