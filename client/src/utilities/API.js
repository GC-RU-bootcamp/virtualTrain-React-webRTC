// var axios = require('axios');
import axios from "axios";

export default {

  userLogin: function(loginParams) {
    return axios.post('/api/login', loginParams)
  },


  userLogout: function() {
    return axios.get('/api/logout')
  },

  userSignup: function(formData) {
    console.log("userSignup formData:");
    for(var pair of formData.entries()) {
      console.log(pair[0] + ', '+  pair[1]          ); 
    }
    const config = { headers: {
      // Accept: 'application/json',
      'Content-Type': 'multipart/form-data'
    } };

    return axios.post('/api/signup', formData , config )
    
    // axios({
    //   url: '/api/signup',
    //   method: 'POST',
    //   data: formData,
    //   // content: formData,
    //   headers: {
    //     // Accept: 'application/json',
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
  },

 
}
