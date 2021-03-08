class Room {
  constructor(level,amount,roomID) {
    this.level = level;
    this.amount = amount;
    this.roomID = roomID;
    this.isFree = true;
  }
  checkCapacity(amount) {
    // if (amount <= this.amount) {
    //   this.isFree = false;
    // }
    amount <= this.amount ? this.isFree = false : '';
  }
  print() {
    console.log(`Amount: ${this.amount} | Level: ${this.level} | RoomID: ${this.roomID} | Free? ${this.isFree}`);
  }
}

class Hotel {
  constructor(room) {
    this.rooms = [room];
  }
  addRoom(room) {
    const id = room.roomID;
    for (let i = 0; i < this.rooms.length;i++) {
      if (this.rooms[i].roomID === id) {
        return false
      }
    }
    this.rooms.push(room);
    return true
  }
  addNewRoom(level,amount,roomID) {
    for (let i = 0; i < this.rooms.length;i++) {
      if (this.rooms[i].roomID === roomID) {
        return false
      }
    }
    const newRoom = new Room(level,amount,roomID);
    this.rooms.push(newRoom);
  }
  removeRoom(roomID) {
    const room = this.rooms.find(room => room.roomID === roomID);
    if (room.isFree) {
      const index = this.rooms.indexOf(room);
      this.rooms.splice(index,1);
      return true;
    } return false;
  }
  checkFreeRooms(amount) {
    const freeRooms = this.rooms.filter(room => room.amount >= amount && room.isFree);
    return freeRooms;
  }
  checkIn(roomID, amount) {
    // ???
  }
}

const firstRoom = new Room(1,3,0);
const secondRoom = new Room(2,5,1);

firstRoom.checkCapacity(3);
firstRoom.print();

const myHotel = new Hotel(firstRoom);
console.log(myHotel.addRoom(secondRoom));
console.log(myHotel.addNewRoom(1,2,2));