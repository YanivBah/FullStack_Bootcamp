class Note {
  static id = 1;

  constructor(taskName,details = '',hashtag = '',color = 'green') {
    this.id = Note.id;
    this.hashtag = hashtag,
    this.taskName = taskName,
    this.details = details,
    this.date = new Date(),
    this.color = color,
    Note.id++;
  }
}

class Notes {
  constructor() {
    this.notes = [];
    this.hashtags = {};
  }

  addNote = (taskName,details,hashtag,color) => {
    const note = new Note(taskName,details,hashtag,color);
    this.notes.push(note);
    this.myLocalStorage('save');
  }

  myLocalStorage = (state) => {
    if (state === 'save') {
      localStorage.setItem('notes',JSON.stringify(this.notes));
      localStorage.setItem('hashtags',JSON.stringify(this.hashtags));
    } else if (state === 'update') {
      const grid = $q('.notes-grid');
      grid.innerHTML = '';
      this.hashtags = JSON.parse(localStorage.getItem('hashtags'));
      this.notes = JSON.parse(localStorage.getItem('notes'));
      this.notes.forEach(note => {
        note.date = new Date(Date.parse(note.date));
        this.createNoteElement(note);
      });
      updateCategories();
    }
  }

  findIndex = (id) => {
    const index = this.notes.findIndex(note => note.id === id);
    return index !== -1 ? index : null;
  }

  deleteNote = (id) => {
    const index = this.findIndex(id);
    const hashtag = this.notes[index].hashtag;
    index !== -1 ? this.notes.splice(index,1) : '';
    $q(`.note[data-id="${id}"]`).remove();
    this.hashtags[hashtag].amount -= 1;
    updateCategories();
    this.myLocalStorage('save');
  }

  editNote = (id,title,paragraph,hashtag) => {
    const index = this.notes.findIndex(note => note.id === id);
    this.notes[index].taskName = title;
    this.notes[index].taskName = paragraph;
    this.notes[index].taskName = hashtag;
    this.myLocalStorage('save');
  }

  createNoteElement = (note) => {
    const noteContainer = document.createElement('div');
    noteContainer.classList.add('note');
    noteContainer.classList.add(note.color);
    noteContainer.setAttribute('data-id',note.id);
    const noteHeader = document.createElement('h3');
    noteHeader.classList.add('note-header');
    noteHeader.textContent = `${note.taskName}`;
    noteContainer.appendChild(noteHeader);

    const meta = document.createElement('div');
    meta.classList.add('meta');
    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = note.date.toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'});
    const time = document.createElement('span');
    time.classList.add('time');
    time.textContent = `${note.date.getHours()}:${note.date.getMinutes().toString().padStart(2,'0')}`;
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
    const hashtag = document.createElement('div');
    hashtag.classList.add('control--hashtag');
    hashtag.innerHTML = `<i class="fas fa-hashtag"></i> ${note.hashtag}`;
  
    control.appendChild(deleteNote);
    control.appendChild(edit);
    control.appendChild(hashtag);
    noteContainer.appendChild(control);
    control.addEventListener('click',(e) => {
      const current = e.target.parentElement;
      const noteid = parseInt(current.parentElement.parentElement.getAttribute('data-id'));
      if (current.classList.contains('control--delete')) {
        this.deleteNote(noteid);
      } else if (current.classList.contains('control--edit')) {
        editNote(this.notes[this.findIndex(noteid)]);
      }
    });
    const grid = document.querySelector('.notes-grid')
    grid.appendChild(noteContainer);
  }
}

let noteColor = 'green';
let currentNote = '';
const $q = document.querySelector.bind(document);
const $qa = document.querySelectorAll.bind(document);
const pickColor = [$q('.color.red'),$q('.color.green'),$q('.color.yellow'),$q('.color.orange'),$q('.color.purple')];

const newNoteBox = () => {
  const box = $q('.newNoteBox');
  box.classList.remove('hidden');
}

const todo = new Notes();
if (localStorage.getItem('notes') === null) {
  localStorage.setItem('notes',JSON.stringify([]));
} else {
  todo.myLocalStorage('update');
}
const createBTN = $q('.create');

const newNoteButton = $q('.newNote-btn');
newNoteButton.addEventListener('click',() => {
  const box = $q('.newNoteBox');
  createBTN.textContent = 'Create';
  $q('.newNoteHeader').textContent = 'New Note';
  box.classList.remove('hidden');
  createBTN.addEventListener('click', newNote);
});

// new note
function newNote() {
  const box = $q('.newNoteBox');
  const title = $q('#title').value;
  $q('#title').value = '';
  const paragraph = $q('#paragraph').value;
  $q('#paragraph').value = '';
  const hashtag = $q('#hashtag').value;
  $q('#hashtag').value = '';
  todo.addNote(title,paragraph,hashtag,noteColor);
  todo.createNoteElement(todo.notes[todo.notes.length - 1]);
  box.classList.add('hidden');
  createBTN.removeEventListener('click',newNote);
  if (todo.hashtags.hasOwnProperty(hashtag)) {
    todo.hashtags[hashtag].amount += 1 
  } else {
    todo.hashtags[hashtag] = {
      amount: 1,
      created: false,
    };
  }
  updateCategories();
}

function updateCategories() {
  const ul = $q('ul');
  for (const key in todo.hashtags) {
    if (todo.hashtags[key].amount === 0) {
      const li = document.querySelector(`.sidebar-${key}`);
      li.remove();
      delete todo.hashtags[key];
    } else if(todo.hashtags[key].amount === 1 && key.length >= 1 && !todo.hashtags[key].created) {
      const li = document.createElement('li');
      li.innerHTML = `<i class="far fa-sticky-note"></i>`;
      li.classList.add(`sidebar-${key}`);
      const span = document.createElement('span');
      span.textContent = `${key} (${todo.hashtags[key].amount})`;
      li.appendChild(span);
      ul.appendChild(li);
      todo.hashtags[key].created = true;
    }
    const li = document.querySelector(`.sidebar-${key}`);
    if (li) {
      const span = li.querySelector('span');
      span ? span.textContent = `${key} (${todo.hashtags[key].amount})` : '';
    }
  }
  const allNotes = document.querySelector('.sidebar-all');
  const allNotesSpan = allNotes.querySelector('span');
  allNotesSpan.textContent = `All Notes (${todo.notes.length})`;
}

// Edit note
function editNote(note) {
  const box = $q('.newNoteBox');
  $q('#title').value = note.taskName;
  $q('#paragraph').value = note.details;
  $q('#hashtag').value = note.hashtag;
  $q('.newNoteHeader').textContent = `Edit Note #${note.id}`;
  createBTN.textContent = 'Edit';
  box.classList.remove('hidden');
  note.taskName = $q('#title').value;
  note.details = $q('#paragraph').value;
  note.hashtag = $q('#hashtag').value;
  currentNote = note;
  pickColor.forEach(color => color.addEventListener('click', changeNoteColor));
  createBTN.addEventListener('click', editNoteDOM);
}
function editNoteDOM() {
  pickColor.forEach(color => color.removeEventListener('click', setNewNoteColor));
  const note = currentNote;
  note.taskName = $q('#title').value;
  note.details = $q('#paragraph').value;
  note.hashtag = $q('#hashtag').value;
  const current = $q(`.note[data-id="${note.id}"]`);
  current.querySelector('h3').textContent = $q('#title').value;
  current.querySelector('p').textContent = $q('#paragraph').value;
  current.querySelector('.control--hashtag').innerHTML = `<i class="fas fa-hashtag"></i>${$q('#hashtag').value}`;
  $q('#title').value = '';
  $q('#paragraph').value = '';
  $q('#hashtag').value = '';
  const box = $q('.newNoteBox');
  box.classList.add('hidden');
  createBTN.removeEventListener('click', editNoteDOM);
  pickColor.forEach(color => color.removeEventListener('click', changeNoteColor));
  pickColor.forEach(color => color.addEventListener('click', setNewNoteColor));
  currentNote = '';
}

function setNewNoteColor(e) {
  noteColor = e.target.classList[1];
}
function changeNoteColor() {
  const current = $q(`.note[data-id="${currentNote.id}"]`);
  current.classList = '';
  current.classList.add('note');
  current.classList.add(noteColor);
}
pickColor.forEach(color => color.addEventListener('click', setNewNoteColor));

const grid = $q('.notes-grid');

function showCategories(e) {
  let current = e.target;
  const tag = e.target.tagName;
  if (tag === 'SPAN' || tag === 'I') {
    current = current.parentElement;
  }
  current.classList.forEach(e => {
    if (e.includes('sidebar')) {
      current = e.replace("sidebar-", "");
      if (current === 'all') {
        grid.innerHTML = '';
         for (let i = 0; i < todo.notes.length;i++) {
           todo.createNoteElement(todo.notes[i]);
         }
      } else {
        grid.innerHTML = '';
        todo.notes.forEach(note => {
          if (note.hashtag === current) {
            todo.createNoteElement(note);
          }
        })
      }
    }
  })
}

const sidebar = $q('.sidebar');
sidebar.addEventListener('click', showCategories);