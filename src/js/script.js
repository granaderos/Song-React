$(document).ready(function() {

    $("#date").datepicker({ dateFormat: 'yy-mm-dd' });

    $("#artist").change(function() {
        var artist_val = $("#artist").val();
        if(artist_val == 0) $("#div_artist_other").show();
        else $("#div_artist_other").hide();
    });

    $("#label").change(function() {
        var label_val = $(this).val();
        if(label_val == 0) $("#div_label_other").show();
        else $("#div_label_other").hide();
    });

    $("#genre").change(function() {
        var genre_val = $(this).val();
        if(genre_val == 0) $("#div_genre_other").show();
        else $("#div_genre_other").hide();
    });

    $("#form_song").submit(function(e) {
        e.preventDefault();

        var title = $("#title").val();
        var artist = $("#artist").val();
        var label = $("#label").val();
        var date = $("#date").val();
        var genre = $("#genre").val();

        var artist_other = "", label_other = "", genre_other = "";
        if(artist == "" || artist == null) $("#artist").focus();
        else if(artist == 0) {
            artist_other = $("#artist_other").val();
            if(artist_other == "") $("#artist_other").focus();
        }

        if(label == "" || label == null) $("#label").focus();
        else if(label == 0) {
            label_other = $("#label_other").val();
            if(label_other == "") $("#label_other").focus();
        }

        if(genre == "" || genre == null) $("#genre").focus();
        else if(genre == 0) {
            genre_other = $("#genre_other").val();
            if(genre_other == "") $("#genre_other").focus();
        }

        $("#tbody_songs").append(
            "<tr>" +
                "<td>"+title+"</td>" +
                "<td>"+artist+"</td>" +
                "<td>"+label+"</td>"+ 
                "<td>"+date+"</td>" +
                "<td>"+genre+"</td>" 
            + "</tr>"
        );
        $("#form_song").reset();
        // Add song to database

        var song_data = {
            "id": null,
            "title": title,
            "artist": artist,
            "label": label,
            "date": date,
            "genre": genre
        }
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/rest-song/rest/songs/add_song",
            data: song_data,
            success: function(data) {
                console.log("genres = " + data);
                for(var i = 0; i < data.length; i++) {
                    // var genre = JSON.parse(data[i]);
                    console.log(data[i].name);
                    $("#genre").append("<option value="+data[i].name+">"+data[i].name+"</option>");
                }
            },
            error: function(data) {
                console.log("Error in retrieving data. " + JSON.stringify(data));
            }
        });
    });

    // get genres and display as option
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/rest-song/rest/genres",
        success: function(data) {
            console.log("genres = " + data);
            for(var i = 0; i < data.length; i++) {
                // var genre = JSON.parse(data[i]);
                console.log(data[i].name);
                $("#genre").append("<option value="+data[i].name+">"+data[i].name+"</option>");
            }
        },
        error: function(data) {
            console.log("Error in retrieving data. " + JSON.stringify(data));
        }
    });

    // get artists and display as options
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/rest-song/rest/artists",
        success: function(data) {
            console.log("genres = " + data);
            for(var i = 0; i < data.length; i++) {
                console.log(data[i].name);
                $("#artist").append("<option value="+data[i].name+">"+data[i].name+"</option>");
            }
            $("#artist").append("<option value=0>Other</option>");
        },
        error: function(data) {
            console.log("Error in retrieving data. " + JSON.stringify(data));
        }
    });

    // get labels and display as options
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/rest-song/rest/labels",
        success: function(data) {
            console.log("genres = " + data);
            for(var i = 0; i < data.length; i++) {
                console.log(data[i].name);
                $("#label").append("<option value="+data[i].name+">"+data[i].name+"</option>");
            }
            $("#label").append("<option value=0>Other</option>");
        },
        error: function(data) {
            console.log("Error in retrieving data. " + JSON.stringify(data));
        }
    });

     // display all songs
     $.ajax({
        type: "GET",
        url: "http://localhost:8080/rest-song/rest/songs",
        success: function(data) {
            console.log("genres = " + data);
            for(var i = 0; i < data.length; i++) {
                console.log(data[i].name);
                $("#tbody_songs").append("<tr >"+
                        "<td>"+data[i].title+"</td>" +
                        "<td>"+data[i].artist+"</td>" +
                        "<td>"+data[i].label+"</td>" +
                        "<td>"+data[i].date+"</td>" +
                        "<td>"+data[i].genre+"</td>" +
                    "</tr>");
            }
        },
        error: function(data) {
            console.log("Error in retrieving data. " + JSON.stringify(data));
        }
    });
}); 