let parentBreed;
let subBreed;

$.ajax({
    url: "https://dog.ceo/api/breeds/list/all",
    method: "GET",
    success: function(data){
        console.log(data.message);
        for(let breed in data.message){
            $("#dog-breed").append($('<option>').text(breed).attr("value", breed));
        }
    }
});

function getList(){
    
    parentBreed = document.getElementById("dog-breed").value;
    console.log(parentBreed);
    $.ajax({
        url: "https://dog.ceo/api/breed/"+parentBreed+"/list",
        method: 'GET',
        success: function(data){
            console.log(data.message);
            if(data.message.length == 0){
                $("#dog-breed-child").text("wertw");
            }
            for(let b in data.message){
                console.log(data.message[b]);
                $("#dog-breed-child").append($('<option>').text(data.message[b]).attr("value", data.message[b]));
                
            }
            
        }
    });

    $.ajax({
        url: "https://dog.ceo/api/breed/"+parentBreed+"/images",
        method: "GET",
        success: function(data){
            console.log(data.message[0]);
            var imgURL = data.message[0];
            $("#dog-img").attr("src", imgURL);
        }
    });

}

function getImg(){
    let subBreed = $("#dog-breed-child").val();
    if(subBreed != null){
        $.ajax({
            url: "https://dog.ceo/api/breed/"+parentBreed+"/"+subBreed+"/images/random",
            method: "GET",
            success: function(data){
                $("#dog-img").attr("src", data.message);
            }
        });
    }else{
        $.ajax({
            url: "https://dog.ceo/api/breed/"+parentBreed+"/images/random",
            method: "GET",
            success: function(data){
                $("#dog-img").attr("src", data.message);
            }
        });
    }
    
}

$("#fetch").click(getList);
$("#next").click(getImg);