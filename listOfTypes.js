fetch("http://localhost/sokuservicio/types.php")
    .then(function(response){

        if (!response.ok){
            throw new Error("Error en la respuesta del servidor");
        }
        return response.json();
    })
    .then(function(data){
        fillList(data);
        console.log(data); 
    })
    .catch(function(error){
        console.error("Error: "+ error.message);
    });

var dataCategories;
  
function fillList(data){
    dataCategories = data;
    $(data).each(function(index,value){
    var list = "<li>"
    list += "<a class='title-description'>"+value.name+"</a>"
    list += " <span classs='separator'>|</span>"
    list += "</li>";
    $("#tbody-types").append(list);
    });

    $("#tbody-types li a").each(function(index) {
        $(this).attr("data-idtype", dataCategories[index].idType);
    });

    $("#tbody-types li a").click(function(){
         var $a = $(this);
        var idType = $a.data("idtype");

        readProductsByTypes(idType);
    
    })
}

function readProductsByTypes(idType){
    var serviceRoute = "http://localhost/sokuservicio/productosportipo.php";

    //I want to send a variable to the server
    var formData = new FormData();
    formData.append("caty", idType);

    fetch(serviceRoute,
        {
            method: "POST",
            body: formData
        })
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    console.log(data);
                })
                
}



                      
                 