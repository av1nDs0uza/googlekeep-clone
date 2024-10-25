const addTitle = document.getElementById('addTitle');
const addText = document.getElementById('addText');
const addNoteButton = document.getElementById('addNote');
const notesDiv = document.getElementById('notes');

function addNotes() {
    let notes = localStorage.getItem('notes');
    
    // Initialize notes as an array if it's null (i.e., no notes saved yet)
    if (notes === null) {
        notes = [];
    } else {
        notes = JSON.parse(notes); // Parse notes if they exist
    }

    if (addText.value === '') {
        alert('Add your note');
        return;
    }
    
    const noteObj = {
        title: addTitle.value,
        text: addText.value,
    };

    // Clear input fields after adding the note
    addTitle.value = '';  
    addText.value = '';   

    // Add the new note to the notes array
    notes.push(noteObj);

    // Store the updated notes array back into localStorage
    localStorage.setItem('notes', JSON.stringify(notes));

    // Update the displayed notes
    showNotes();  
}

function showNotes() {
    let notesHTML = '';
    let notes = localStorage.getItem('notes');

    if (notes === null) {
        return;
    } else {
        notes = JSON.parse(notes); // Parse notes
    }

    for (let i = 0; i < notes.length; i++) {
        notesHTML += `<div class="note">
                    <button class="deleteNote" id=${i} onclick="deleteNote(${i})">Delete</button>
                    <span class="title">${notes[i].title === "" ? 'Note' : notes[i].title}</span>
                    <div class="text">${notes[i].text}</div>
                </div>`;
    }

    notesDiv.innerHTML = notesHTML; // Update the notes section with the new HTML
}

function deleteNote(ind) {
    let notes = localStorage.getItem('notes');

    if (notes === null) {
        return;
    } else {
        notes = JSON.parse(notes);
    }

    notes.splice(ind, 1);  // Remove the note at the specified index

    localStorage.setItem('notes', JSON.stringify(notes));  // Update localStorage with the modified notes list
    showNotes();  // Refresh the displayed notes
}

// Event listener to add a note when the button is clicked
addNoteButton.addEventListener('click', addNotes);

// Display notes when the page loads
showNotes();
// assignment

/*
1. delete notes: implementation delete array
2. Archieve Notes: implementation archieve array
3. sorting filter, iterate through all the notes, and check 
4. reminder
5. edit note
*/