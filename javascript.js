$(document).ready(function() {

  $("#addbtn").click(function() {

            //All the different variables
            var listItem = $("<li>");
            var newItem = $("<input>");
            var editButton = $("<input>");
            var deleteButton = $("<input>");
            var finishedButton = $("<input>");

            //Move to the todo list
            $("#itemsToDo").append(listItem);
	        $(listItem).append(newItem, editButton, deleteButton, finishedButton);
           
         

           //All the attributes of the buttons and the todo list
            $(newItem).val($(userInput).val());
            $(newItem).attr("disabled", "disabled"); 
                $(newItem).attr("id", "disabled");
                    $(newItem).attr("type", "text");
            $(editButton).attr("type", "button");
                $(editButton).attr("value", "Redigera");
                    $(editButton).attr("id", "edit");
            $(deleteButton).attr("type", "button");
                $(deleteButton).attr("value", "Ta bort");
                    $(deleteButton).attr("id", "delete");
            $(finishedButton).attr("type", "button");
                $(finishedButton).attr("value", "\u2713");
                    $(finishedButton).attr("id", "finished");
        });

//Move from todo to done
$(function() {  
    $("body").on("click", "#finished", function() {
        $(this).parent().appendTo("#itemsDone");
        $(this).remove();
    });    
});


//Edit button has to work
$(function() {
    $("body").on("click", "#edit", function() {
        $("#disabled").prop("disabled", (_, val) => !val);
    });
});


//Delete button has to work  
$(function() {
    $("body").on("click", "#delete", function() {
        $(this).parent().remove();
    });
});
});


