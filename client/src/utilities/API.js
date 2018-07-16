// var axios = require('axios');
import axios from "axios";

export default {

  userLogin: function(loginParams) {
    return axios.post('/api/login', loginParams)
  },


  userLogout: function() {
    return axios.get('/api/logout')
  },

  userIsLogggedIn: function() {
    return axios.get('/api/user_data')
  },

  userRegister: function(postParams) {
    return axios.post('/api/client/register', postParams)
  },

  userUnRegister: function(postParams) {
    return axios.post('/api/client/cancel', postParams)
  },

  mySessions: function() {
    return axios.get('/api/client/my-sessions')
  },

  session: function( uuid) {
    return axios.get("/api/session/" + uuid)
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
  getSessons: function() {
    return axios.get('/all-sessions')
  },
 
  getMySessons: function() {
    return axios.get('//api/client/my-sessions')
  },
 
}
