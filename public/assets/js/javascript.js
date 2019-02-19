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
    $(".createNoteDiv").append(newNote);
});

$(document).on("click", ".saveNote", function () {
    console.log("Pressed saveNote")
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
        .then(() => location.reload());
});

getAndRenderNotes();

// $submitBtn.on("click", handleNoteSubmit);

function getAndRenderNotes() {

    $.ajax({
        url: "/api/notes",
        method: "GET"
    }).then(function (results) {
        console.log(results);

        for (let i = 0; i < results.length; i++) {
            var notes = `<div class="noteDiv" id=${results[i].id}>
                                <div>
                                    <h4>${results[i].title}</h4>
                                    <a class=editNote><i class="far fa-edit"></i></a>
                                </div>
                                <div>
                                    <h6>${results[i].body}</h6>
                                    <a class=deleteNote><i class="far fa-trash-alt"></i></a>
                                </div>
                        </div>`
            $(".dbNotes").prepend(notes);
        }
    })

};

$(document).on("click", ".deleteNote", function () {
    const id = $(this).parents(".noteDiv").attr("id");

    $.ajax({
        url: "/api/notes/" + id,
        method: "DELETE"
    }).then(() => location.reload());
});

$(document).on("click", ".editNote", function () {
    const parent = $(this).parents(".noteDiv");
    var title = parent.children().children("h4").text();
    var body= parent.children().children("h6").text();
    var editTitle = $(`<input class='editTitle' placeholder=${title}>`).text(title);
    var editbody = $("<input type='text' class='noteText>").text(body);
    
    parent.html(editTitle);
    // $.ajax({
    //     url: "/api/notes/" + id,
    //     method: "DELETE"
    // }).then(() => location.reload());
})