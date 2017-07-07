/*alert("hola");*/
$(document).ready(function() {

    for (var i = 1; i < 719; i++) {
        var pokePic = $("<img src=http://pokeapi.co/media/img/" + i + ".png id=" + i + ">");
        $('div.pokemon').append(pokePic);
    }

    $('img', this).click(function() {

        var uniqueId = $(this).attr('id');

        var webAddress = "http://pokeapi.co/api/v1/pokemon/" + uniqueId;

        var types = " ";

        $.get(webAddress, function(res) {
            for (var j = 0; j < res.types.length; j++) {
                types += "<li>" + res.types[j].name + "</li>";

            }
        }, 'json');

        $.get(webAddress, function(res) {

            $('div.pokedex').html(
                "<h1>" + res.name + "</h1>" +
                "<img src=http://pokeapi.co/media/img/" + uniqueId + ".png>" +
                "<h4>Types:</h4>" +
                "<ul>" +
                types +
                "</ul>" +
                "<h4>Height:</h4>" +
                "<p>" + res.height + "</p>" +
                "<h4>Weight:</h4>" +
                "<p>" + res.weight + "</p>"
            );

        }, 'json');
    });
});
