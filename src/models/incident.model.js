const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const incidentsSchema = mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
      trim: true,
      default: 'pending',
    },
    summary: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    reporter: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    assignee: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      default: {
        _id: '6009cb85e65f6dce28fb3e51',
      },
    },
    priority: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
incidentsSchema.plugin(toJSON);
incidentsSchema.plugin(paginate);

/**
 * @typedef User
 */
const User = mongoose.model('Incident', incidentsSchema);

module.exports = User;
