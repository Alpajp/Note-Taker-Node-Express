$("#createNote").on("click", function () {
    const newNote = `<div  class="newText">
                            <div>
                                <input type="text" class="input-group mb-3 noteTitle">
                                <a class="saveNote"> 💾</a>
                            </div>
                            <div>
                                <input type="textarea" class="input-group mb-3 noteText">
                            </div>
                    </div>`
    $(".noteDiv").append(newNote);
})