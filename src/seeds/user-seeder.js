const mongoose = require('mongoose');
const { User } = require('../models');
const logger = require('../config/logger');
const config = require('../config/config');

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  logger.info('Connected to MongoDB for seeding');
});

// create an array of users [Normal users,admin users]

const UsersList = [
  new User({
    _id: '6009cb85e65f6dce28fb3e51',
    name: 'unknown',
    email: 'unknown@gmail.com',
    password: 'unknown1111',
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date(),
  }),
  new User({
    name: 'admin',
    email: 'admin@gmail.com',
    password: 'admin1111',
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date(),
  }),
  new User({
    name: 'normal',
    email: 'normal@gmail.com',
    password: 'normal1111',
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date(),
  }),
  new User({
    name: 'callCenter',
    email: 'callCenter@gmail.com',
    password: 'callCenter1111',
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date(),
  }),
];

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(UsersList);
};

seedDB().then(() => {
  logger.info('seeding users is done');
  mongoose.connection.close();
});
