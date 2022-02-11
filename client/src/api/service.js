// src/api/service.js

import axios from 'axios';

const service = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: 'http://localhost:5000/api'
  // withCredentials: true // => you might need this when having the users in the app
});

const errorHandler = err => {
  throw err;
};

const handleUpload = file => {
  return service
    .post('/upload', file)
    .then(res => res.data)
    .catch(errorHandler);
};

const saveNewInvader = newInvader => {
  return service
    .post('/invaders', newInvader)
    .then(res => res.data)
    .catch(errorHandler);
};

export default {
  service,
  handleUpload,
  saveNewInvader
};
