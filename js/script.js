jQuery(document).ready(function($){

    $('#textForm').on('submit',function(event){
        event.preventDefault(); //prevents refreshing
        var wordText = $('#wordInput').val();
        $('#tasks').prepend(wordText);
       });
       $('#textForm').validate({
        rules:{
            wordInput: "required"
        },
        messages:{
            wordInput: "Please enter a text"
        },
        })
});



