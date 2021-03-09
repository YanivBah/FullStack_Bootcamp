class Note {
  static id = 1;

  constructor(taskName,details = '') {
    this.id = Note.id;
    this.taskName = taskName,
    this.details = details,
    this.date = new Date(),
    this.isCompleted = false,
    Note.id++;
  }
}


class Notes {

  constructor() {
    this.notes = [];
  }

  addNote = (taskName,details) => {
    const note = new Note(taskName,details);
    this.notes.push(note);
  }

  findIndex = (id) => {
    const index = this.notes.findIndex(note => note.id === id);
    return index !== -1 ? index : null;
  }

  deleteNote = (id) => {
    const index = this.findIndex(id);
    index ? this.notes.splice(index,1) : '';
  }

  isDone = (id,boolean) => {
    const index = this.findIndex(id);
    index ? this.notes[index].isCompleted = boolean : '';
  }

  // Update 1 note
  // Update all notes
  createNoteElement = (note) => {
    const noteContainer = document.createElement('div');
    noteContainer.classList.add('note');
    noteContainer.classList.add(noteColor)
    const noteHeader = document.createElement('h3');
    noteHeader.classList.add('note-header');
    noteHeader.textContent = `${note.taskName}`;
    noteContainer.appendChild(noteHeader);

    const meta = document.createElement('div');
    meta.classList.add('meta');
    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = note.date.toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'});
    //todo.notes[1].date.toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'});
    const time = document.createElement('span');
    time.classList.add('time');
    time.textContent = `${note.date.getHours()}:${note.date.getMinutes()}`;
    // Date.getHours()
    // Date.getMinutes()
    meta.appendChild(date);
    meta.appendChild(time);
    noteContainer.appendChild(meta);

    const p = document.createElement('p');
    p.textContent = note.details;
    noteContainer.appendChild(p);

    const control = document.createElement('div');
    control.classList.add('control');
    const deleteNote = document.createElement('div');
    deleteNote.classList.add('control--delete');
    deleteNote.innerHTML = `<i class="far fa-trash-alt"></i>`;
    const edit = document.createElement('div');
    edit.classList.add('control--edit');
    edit.innerHTML = `<i class="far fa-edit"></i>`;
    const color = document.createElement('div');
    color.classList.add('control--color');
    color.innerHTML = `<i class="fas fa-palette"></i>`;
    const hashtag = document.createElement('div');
    hashtag.classList.add('control--hashtag');
    hashtag.innerHTML = `<i class="fas fa-hashtag"></i>`;

    control.appendChild(deleteNote);
    control.appendChild(edit);
    control.appendChild(color);
    control.appendChild(hashtag);
    noteContainer.appendChild(control);

    const grid = document.querySelector('.notes-grid')
    grid.appendChild(noteContainer);
  }
}
let noteColor = 'green';
const $q = document.querySelector.bind(document);
const $qa = document.querySelectorAll.bind(document);

const newNoteBox = () => {
  const box = $q('.newNoteBox');
  box.classList.remove('hidden');
}

const todo = new Notes();
todo.addNote('homework',`Math and History`);
todo.addNote('cleaning');
console.log(todo.notes);

const newNoteButton = $q('.newNote-btn');
newNoteButton.addEventListener('click',() => {
  const box = $q('.newNoteBox');
  box.classList.remove('hidden');
});

const createBTN = $q('.create');
createBTN.addEventListener('click', () => {
  const box = $q('.newNoteBox');
  console.log('hello');
  const title = $q('#title').value;
  $q('#title').value = '';
  const paragraph = $q('#paragraph').value;
  $q('#paragraph').value = '';
  const hashtag = $q('#hashtag').value;
  $q('#hashtag').value = '';
  todo.addNote(title,paragraph);
  todo.createNoteElement(todo.notes[todo.notes.length - 1]);
  box.classList.add('hidden');
});

const pickColor = [$q('.color.red'),$q('.color.green'),$q('.color.yellow'),$q('.color.orange'),$q('.color.purple')];
pickColor.forEach(color => {
  color.addEventListener('click', (e) => {
  noteColor = e.target.classList[1];
  console.log(noteColor);
  })
})