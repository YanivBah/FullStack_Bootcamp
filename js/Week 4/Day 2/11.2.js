const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
        {
      id: 11,
      name: "Howard",
      age: 23,
    },
        {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
        {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
  findPerson(type,id) {
    return this[type].find(item => item.id === id);
  },
  assignStudents(type, id) {
    // const students = this.findPerson(id, 'students')
    const findStudent = this.findPerson('students',id);
    const findCapacity = this.teachers.find(el => el.subjects.includes(type) && el.capacityLeft > 0);
    if (findCapacity) {
      findCapacity.students.push(findStudent.name);
      --findCapacity.capacityLeft;
    } else {console.log(`Sorry, no available teachers left`);}
  },
  assignTeachersSubject(teacherid,newSubject) {
    const findTeacher = this.findPerson('teachers',teacherid);
    const findSubject = findTeacher.subjects.includes(newSubject);
    if (!findSubject) {
      findTeacher.subjects.push(newSubject);
      return `This is now all his subjects: ${findTeacher.subjects}`;
    } else {
      return `ERROR 404: Teacher ID and/or subject exist`
    }
  },
  addStudent(name,age) {
    const id = this.students[this.students.length - 1].id + 1;
    this.students.push({id,name,age})
    return `The new student "${name}" with ID ${id} have been added to the database`
  }
};

console.log(school.findPerson('students',13));
school.assignStudents('history', 13);
console.log(school.assignTeachersSubject(2,'math'));
console.log(school.addStudent('Gogi',28));