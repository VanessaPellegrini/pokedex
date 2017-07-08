/*alert("hola");*/
$(document).ready(function() {
    pokemon();
});

//obetener pokemones
function pokemon(){
    //recorro las imagenes
    for(var id = 1; id <= 719; id++){
        $("#pokemon").append("<img id=pokeID"+id+" pokeID='"+id+"' src='http://pokeapi.co/media/img/"+id+".png' alt='Pokemon # "+id+" from pokeapi.com'>");
    }
    var pokeId = 1;
    /*obtengo datos ajax para busqueda
    var allPoke = (function(){
        return $.ajax({
            url: 'http://pokeapi.co/api/v2/pokemon/',
            dataType: 'JSON',
            method: 'GET',
            //data: {'limit': '20'}
        });
    });*/
    $.get("http://pokeapi.co/api/v2/pokemon/"+pokeId+"/", function(pokeInfo) {
        var pokeName = pokeInfo.name;
        $("#pokename").append("<h2>"+pokeInfo.name+"</h2>");
        $("#mainpokeimage").attr("src","http://pokeapi.co/media/img/"+pokeId+".png");
        for(var i = 0; i < pokeInfo.types.length; i++){
            $("#poketypes").append("<li>"+pokeInfo.types[i].name+"</li>");
        };
        $("#height").append("<p>"+pokeInfo.height+"</p>");
        $("#weight").append("<p>"+pokeInfo.weight+"</p>");
        for(var i = 0; i < pokeInfo.abilities.length; i++){
            $("#abilities").append("<p>"+pokeInfo.abilities[i].name+"</p>");
        };
        $("#attackdefense").append("<p>"+pokeInfo.attack+" | "+pokeInfo.defense+"</p>");
    }, "json");                
};
//al hacer click al pokemon actualiza el html y muestra la info
$(document).on("click", "img", function(){
    //usa el mismo id que la funcion pokemon
    var pokeId = $(this).attr("id");
    //obtengo info de la API
    $.get("http://pokeapi.co/api/v2/pokemon/"+pokeId+"/", function(pokeInfo) {
        
        var pokeId = pokeInfo.name;
            $("h2").remove;    // why is this line not working? AHHHHHHHHHHHH.
            $("#pokename").append("<h2>"+pokeInfo.name+"</h2>");
            $("#mainpokeimage").attr("src","http://pokeapi.co/media/img/"+pokeId+".png");
            for(var i = 0; i < pokeInfo.types.length; i++){
                $("#poketypes").append("<li>"+pokeInfo.types[i].name+"</li>");
            }
            $("#height").append("<p>"+pokeInfo.height+"</p>");
            $("#weight").append("<p>"+pokeInfo.weight+"</p>");
            for(var i = 0; i < pokeInfo.abilities.length; i++){
                console.log(pokeInfo.abilities[i].name);
                $("#abilities").append("<p>"+pokeInfo.abilities[i].name+"</p>");
            }
            $("#attackdefense").append("<p>"+pokeInfo.attack+" | "+pokeInfo.defense+"</p>");
            }, "json");                
        });
 /*

    /*imagenes solo toma 719 son 811
    var obtenerImg = (function(){
        for (var i = 1; i < 719 ; i++) {
            var pokeImg = $("<img src=http://pokeapi.co/media/img/" + i + ".png id=" + i + ">");
            $('div.pokemon').append(pokeImg);
        };
    });
    /*var datosPokemon = function () {
    $.getJSON("https://pokeapi.co/api/v2/pokemon/",
        function (response) {
            var pokemon = response.results;
            crearPokemons(pokemon);
            console.log(pokemon);
            $(".modal").modal();
            $('.contenedorModal').click(masInformacion);
        });
    };*/

