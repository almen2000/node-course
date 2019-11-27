const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your notes...';
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);
        console.log('New note added!');
    } else {
        console.log('Note title taken!');
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title !== title);

    if (duplicateNotes.length !== notes.length) {
        saveNotes(duplicateNotes);
        console.log(chalk.bgGreen('Note is removed'));
    } else {
        console.log(chalk.bgRed('Title not exist'));
    }
}

const listNotes = () => {
    console.log(chalk.green('Your notes'));
    loadNotes().forEach(note => console.log(note.title));
}

const readNote = (title) => {
    const note = loadNotes().find(note => note.title === title);
    if (note) {
        console.log('title is: ' + note.title);
        console.log('body is ' + note.body);
    } else {
        console.log(chalk.red('not find title!'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (err) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}