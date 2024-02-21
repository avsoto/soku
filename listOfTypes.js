fetch("https://sokustore.000webhostapp.com/types.php")
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
    var serviceRoute = "https://sokustore.000webhostapp.com/productosportipo.php";

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
                    $(data).each(function(index,value){
                        $("#tbody-productos").empty();
                        var card = "<div class='pro'>";
                        card += "<img src='https://sokustore.000webhostapp.com/img/"+value.image+"'>";
                        card += "<div class='de' style='text-align: start;padding: 10px;'>";
                        card += "<h5>" + value.name + "</h5>";
                        card += "<span style='padding-top: 7px;color: #606063;font-size: 13px'>" + value.descriptionMaterial + "</span>";
                        card += "<h4 style='padding-top: 7px;font-size: 14px;font-weight: 700;'>$" + value.unitPrice +"</h4>";
                        card += "</div>"
                        card += "<a href='#'><i class='fa-solid fa-cart-shopping cart'></i></a></div>";
                        $("#tbody-productos").append(card);
                        });
                        console.log(data);
                    console.log(data);
                })
}




                      
                 