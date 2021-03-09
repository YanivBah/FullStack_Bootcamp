const notes = [];
let id = 1;
let isFinished = false;

const addNote = (taskname) => {
  const note = {
    id,
    taskname,
    isCompleted: false,
  }
  id++
  notes.push(note);
}

const findIndex = (id) => notes.findIndex(note => note.id === id);

const deleteNote = (id) => notes.splice(findIndex(id),1);

const markAsDone = (id, boolean) => notes[findIndex(id)].isCompleted = boolean;

const listing = () => {
  let string = '\n';
  notes.forEach(note => {
    string += `${note.id}. ${note.taskname} ${note.isCompleted ? 'Done' : 'Not Done'}\n`;
  })
  return console.log(string);
}