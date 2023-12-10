fetch("http://localhost/sokuservicio/productos.php")
    .then(function(response){

        if (!response.ok){
            throw new Error("Error en la respuesta del servidor");
        }
        return response.json();
    })
    .then(function(data){
        fillCard(data);
        console.log(data); 
    })
    .catch(function(error){
        console.error("Error: "+ error.message);
    });
  
function fillCard(data){
    $(data).each(function(index,value){
    var card = "<div class='pro'>";
    card += "<img src='http://localhost/sokuservicio/img/"+value.image+"'>";
    card += "<div class='de' style='text-align: start;padding: 10px;'>";
    card += "<h5>" + value.name + "</h5>";
    card += "<span style='padding-top: 7px;color: #606063;font-size: 13px'>" + value.descriptionMaterial + "</span>";
    card += "<h4 style='padding-top: 7px;font-size: 14px;font-weight: 700;'>$" + value.unitPrice +"</h4>";
    card += "</div>"
    card += "<a href='#'><i class='fa-solid fa-cart-shopping cart'></i></a></div>";
    $("#tbody-productos").append(card);
    });
    console.log(data);
}

