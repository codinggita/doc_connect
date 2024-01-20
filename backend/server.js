// dummy database and get requests
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

client.connect(err => {
    if(err) {
        console.log("Error connecting to Database", err);
    } else {
        console.log("Connected to MongoDB");
    }
})

const posts = [
  {
    username: "user1",
    caption: "Chasing sunsets and dreams. 🌅✨",
  },
  {
    username: "user2",
    caption: "Sundays are for coffee and contemplation. ☕️🍃",
  },
  {
    username: "user3",
    caption: "Creating memories one adventure at a time. 🌍👫",
  },
  {
    username: "user4",
    caption: "Life is better in flip-flops. 👣🌴",
  },
  {
    username: "user5",
    caption: "Embracing the glorious mess that I am. 💖😊",
  },
  {
    username: "user6",
    caption: "Do more things that make you forget to check your phone. 📵🌟",
  },
  {
    username: "user7",
    caption: "Turning ordinary into extraordinary. 🌈✨",
  },
  {
    username: "user8",
    caption: "Simplicity is the ultimate sophistication. 💫🌿",
  },
  {
    username: "user9",
    caption: "Capturing moments that take your breath away. 📸🌌",
  },
  {
    username: "user9",
    caption: "Dancing through life's rhythm, one step at a time. 💃🎶",
  },
  {
    username: "user10",
    caption: "In a world full of trends, be a classic. 👗💄",
  },
  {
    username: "user11",
    caption: "Finding joy in the journey. 🚗🌄",
  },
  {
    username: "user12",
    caption: "Love the life you live, and live the life you love. ❤️🌈",
  },
  {
    username: "user13",
    caption: "Exploring the beauty of the unknown. 🗺️👣",
  },
  {
    username: "user14",
    caption: "When nothing goes right, go left. 🔄🛤️",
  },
  {
    username: "user15",
    caption: "Radiate positivity and good vibes. 🌟😊",
  },
  {
    username: "user16",
    caption: "Dress like you're already famous. 👑👗",
  },
  {
    username: "user17",
    caption: "Coffee: because adulting is hard. ☕️😅",
  },
  {
    username: "user18",
    caption: "Happiness is homemade. 🏡❤️",
  },
  {
    username: "user19",
    caption: "Spreading kindness like confetti. 🎉💕",
  },
  {
    username: "user20",
    caption: "Living my story, one adventure at a time. 📖🌟",
  },
];


app.get("/products", async (req, res) => {
    const collection = client.db("shop").collection("products");
    const products = await collection.find().toArray();
    var names = products.map((prod) => prod.name);
    res.send(names);
})

app.get("/", (req, res) => {
  const captions = posts.map((post) => post.caption);
  res.send(captions);
});

app.get("/:username", (req, res) => {
  res.send(req.params.username);
});

app.get("/:username/posts", (req, res) => {
  const post = posts.filter((p) => p.username == req.params.username);
  res.send(post);
});

app.listen(8000, () => {
  console.log(`App listening at port 8000`);
});
