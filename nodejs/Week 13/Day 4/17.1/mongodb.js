const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/products", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const Product = mongoose.model('Product', {
  name: {
    type: String,
    required: [true, `Why you don't enter a name?!`],
    unique: true
  },
  category: {
    type: String,
    required: [true, `Enter category please.`]
  },
  isActive: {
    type: Boolean
  },
  details: {
    description: {
      type: String,
      required: true,
      min: [10, 'You need at least 10 letters'],
      trim: true
    },
    price: {
      type: Number,
      required: [true, `You didn't entered a price, you want to give it for free?`]
    },
    discount: {
      type: Number,
      default: 0
    },
    images: {
      type: [Buffer],
      required: [true, 'Enter images please.'],
      validate(value) {
        if (value.length < 2) throw new Error('You need at least 2 images.')
      }
    },
    phoneNumber: {
      type: String,
      required: true,
      validate(value) {
        const regex = /^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/;
        if (!regex.test(value)) throw new Error('Phone number is not valid.')
      }
    },
    dateAdded: {
      type: Date,
      default: new Date()
    }
  },
});

const product1 = new Product({
  name: "Xbox Wireless Controller - Shock Blue",
  category: "Video Games",
  isActive: true,
  details: {
    description:
      "Experience the modernized design of the Xbox Wireless Controller in Shock Blue",
    price: 65,
    images: [Buffer.from("img1", "utf-8"), Buffer.from("img2", "utf-8")],
    phoneNumber: "0542222222",
  },
});

const product2 = new Product({
  name: "SAMSUNG ELECTRONICS EVO Select 256GB MicroSDXC UHS-I U3 100MB/s",
  category: "Cell Phones Accessories",
  isActive: true,
  details: {
    description:
      "Ideal for Recording 4K UHD Video: Samsung micro SD EVO Select is perfect for high res photos, gaming, music, tablets, laptops, action cameras, DSLR's, drones, smartphones",
    price: 30,
    images: [Buffer.from("img1", "utf-8"), Buffer.from("img2", "utf-8")],
    phoneNumber: "0582452232",
  },
});
const product3 = new Product({
  name:
    "Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones",
  category: "Home Audio",
  isActive: true,
  details: {
    description:
      "Hear every word, note, and tune with incredible clarity, no matter your environment. These headphones feature additional microphones that assist in isolating sound while talking on the phone, resulting in improved phone call quality and the reduction of even more high and mid frequency sounds.",
    price: 255,
    images: [Buffer.from("img1", "utf-8"), Buffer.from("img2", "utf-8")],
    phoneNumber: "0523698542",
  },
});

product1.save()
.then(() => {console.log(product1);})
.catch((err) => {console.log(err)});
product2.save()
.then(() => {console.log(product2);})
.catch((err) => {console.log(err)});
product3.save()
.then(() => {console.log(product3);})
.catch((err) => {console.log(err)});