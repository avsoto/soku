fetch("http://localhost/sokuservicio/productos.php")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        fillCard(data);
        console.log(data); 
    })
    
    
function fillCard(data){
    $(data).each(function(index,value){
    var card = "<div class='pro'>";
    card += "<img src='img/"+value.image+"'>";
    card += "<div class='de' style='text-align: start;padding: 10px;'>";
    card += "<h5>" + value.name + "</h5>";
    card += "<span style='padding-top: 7px;color: #606063;font-size: 14px'>" + value.descriptionMaterial + "</span>";
    card += "<h4 style='padding-top: 7px;font-size: 15px;font-weight: 700;'>$" + value.unitPrice +"</h4>";
    card += "</div>"
    card += "<a href='#'><i class='fa-solid fa-cart-shopping cart'></i></a></div>";
    $("#tbody-productos").append(card);
    });
}
