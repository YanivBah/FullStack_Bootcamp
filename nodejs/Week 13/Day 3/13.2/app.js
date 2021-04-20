const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'blog';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) return console.log(err);
    const ids = {
      users: {
        one: new ObjectID(),
        two: new ObjectID(),
        three: new ObjectID(),
      },
      posts: {
        one: new ObjectID(),
        two: new ObjectID(),
      },
      comments: {
        one: new ObjectID(),
        two: new ObjectID(),
      },
    };
    const db = client.db(databaseName);
    const users = db.collection("users");
    const posts = db.collection("posts");
    const comments = db.collection("comments");
    
    users.insertMany(
      [
        {
          username: "one",
          email: "one@email.com",
          _id: ids.users.one,
          posts: [
            {
              $ref: "posts",
              $id: ids.posts.one,
            },
          ],
        },
        {
          username: "two",
          email: "two@email.com",
          _id: ids.users.two,
          posts: [
            {
              $ref: "posts",
              $id: ids.posts.two,
            },
          ],
        },
        {
          username: "three",
          email: "three@email.com",
          _id: ids.users.three,
          posts: [],
        },
      ],
      (err, res) => {
        if (err) return console.log(err);
        console.log(res);
      }
    );
    
    posts.insertMany(
      [
        {
          title: "How to sleep better",
          content: "Who I'm joking? each day my sleep getting worser :)",
          creator: {
            $ref: "users",
            $id: ids.users.one,
          },
          comments: {
            $ref: "comments",
            $id: ids.comments.one,
          },
          _id: ids.posts.one,
        },
        {
          title: "My biggest change in my life",
          content: "I moved to blabla and started new job at blabla.",
          creator: {
            $ref: "users",
            $id: ids.users.two,
          },
          comments: {
            $ref: "comments",
            $id: ids.comments.two,
          },
          _id: ids.posts.two,
        },
      ],
      (err, res) => {
        if (err) return console.log(err);
        console.log(res.ops);
      }
    );

    comments.insertMany([
      {
        _id: ids.comments.one,
        post: {
          $ref: "posts",
          $id: ids.posts.one,
        },
        comments: [
          {content: 'Very Nice!', creator: {$ref: ids.users.three}},
          {content: 'Perfect!', creator: {$ref: ids.users.two}},
        ]
      },
      {
        _id: ids.comments.two,
        post: {
          $ref: "posts",
          $id: ids.posts.two,
        },
        comments: [
          {content: 'Very Nice!', creator: {$ref: ids.users.one}},
          {content: 'Perfect!', creator: {$ref: ids.users.three}},
        ]
      },
    ]);
  }


);