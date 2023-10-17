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
    var list = "<li>";
    list += "<a class='title-description'>"+value.name+"</a>";
    list += " <span classs='separator'>|</span>";
    list += "</li>";
    $("#tbody-types").append(list);
    });
    $("#tbody-types li").click(function(){
    })
}



                      
                 