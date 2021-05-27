const axios = require('axios');

axios.get('http://127.0.0.1:8000/califica').then(resp => {

    console.log(resp.data);
});
