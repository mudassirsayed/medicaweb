import axios from 'axios';

const instance = axios.create({
  // timeout: 2000,
  validateStatus: function validateStatus(status) {
    let server = status >= 200 && status < 300;
    // eslint-disable-next-line eqeqeq
    let extra = status == 404 || status == 400 ;
    return server || extra;
  },
});

export default instance;
