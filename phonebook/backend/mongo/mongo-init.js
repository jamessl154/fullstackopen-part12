db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database',
    },
  ],
});

db.createCollection('people');

db.people.insert({ name: "Arto Hellas", number: "040-123456" });
db.people.insert({ name: "Ada Lovelace", number: "39-44-5323523" });
db.people.insert({ name: "Dan Abramov", number: "12-43-234345" });
db.people.insert({ name: "Mary Poppendieck", number: "39-23-6423122" });