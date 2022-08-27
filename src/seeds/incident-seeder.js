const mongoose = require('mongoose');
const { Incident } = require('../models');
const logger = require('../config/logger');
const config = require('../config/config');

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  logger.info('Connected to MongoDB for seeding');
});

// create an array of Incidents

const IncidentsList = [
  new Incident({
    status: 'Pending',
    summary: 'My ADSL Not working',
    description: 'My ADSL Not working and i can not continue until I get something to do with this incident',
    reporter: {
      _id: '6309fd19c58d403d5f4f0456',
    },
    priority: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  }),
  new Incident({
    status: 'Pending',
    summary: 'My ADSL Not working 2',
    description: 'My ADSL Not working and i can not continue until I get something to do with this incident',
    reporter: {
      _id: '6309fd19c58d403d5f4f0456',
    },
    priority: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  }),
  new Incident({
    status: 'Pending',
    summary: 'My ADSL Not working 3',
    description: 'My ADSL Not working and i can not continue until I get something to do with this incident',
    reporter: {
      _id: '6309fd19c58d403d5f4f0456',
    },
    priority: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  }),
];

const seedDB = async () => {
  await Incident.deleteMany({});
  await Incident.insertMany(IncidentsList);
};

seedDB().then(() => {
  logger.info('seeding incidents is done');
  mongoose.connection.close();
});
