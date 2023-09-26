const connection = require('../config/connection');
const { User, Thought } = require('../models');

console.time('seeding');

connection.once('open', async () => {
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const thoughts = [
    { thoughtText: "This is amazing", username: "Alex" },
    { thoughtText: "Learning MERN stack", username: "Mark" },
    { thoughtText: "GraphQL is so cool", username: "Tamar" },
    { thoughtText: "I love coding", username: "Sarah" },
    { thoughtText: "JavaScript is versatile", username: "Nathaniel" },
  ];

  const users = [
    { username: "Alex", email: "alex@example.com", thoughts: [] },
    { username: "Mark", email: "mark@example.com", thoughts: [] },
    { username: "Tamar", email: "tamar@example.com", thoughts: [] },
    { username: "Sarah", email: "sarah@example.com", thoughts: [] },
    { username: "Nathaniel", email: "nathaniel@example.com", thoughts: [] },
  ];

  await Thought.collection.insertMany(thoughts);
  await User.collection.insertMany(users);

  console.table(thoughts);
  console.table(users);
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});
