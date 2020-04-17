import axios from '../axios/axios';
import headers from '../axios/headers';

const postJob = (callback, data) => {
  axios.post(`/careers/jobs/`, data, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  }).then(res => {
    callback(res)
  })
    .catch(err => callback(err))
};

export default postJob