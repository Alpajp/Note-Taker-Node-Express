$("#createNote").on("click", function () {
    const newNote = `<div  class="newText card">
                            <div>
                                <input type="text" class="card-title m-2 noteTitle">
                                <a class="saveNote"> 💾</a>
                            </div>
                            <div>
                                <input type="textarea" class="card-body m-2 noteText">
                            </div>
                    </div>`
    $(".noteDiv").append(newNote);
});

$(".saveNote").on("click", function () {
    const newNote = { 
        title: $(".noteTitle").val().trim(),
        body: $(".noteText").val().trim()
    }
    
    $(".noteTitle").val("");
    $(".noteText").val("");
    


    $.ajax({
        url: "/api/notes",
        method: "POST",
        data: newNote
    })
    .then(function(response) {
        console.log(response);
    })
});

getAndRenderNotes();

$submitBtn.on("click", handleNoteSubmit);