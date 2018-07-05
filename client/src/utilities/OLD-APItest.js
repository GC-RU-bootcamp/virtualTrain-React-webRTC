 var axios = require('axios');
//import axios from "axios";

var API =  {


  loginAPI: function (username, password) {
    const params = {
      logon_id: username,
      logon_pwd: password
    };
    console.log("loginAPI.params", params);
    axios.post('https://dry-woodland-49935.herokuapp.com/api/login', params)
      .then((result) => {
        console.log("result.data:", result.data);
        return result.data;
      })
      .catch((error) => {
        console.log("Error:", error);
        // if(error.response.status === 401) {
        //   return ( '401: Login failed. Username or password invalid.' );
        // }
        return "login api failure"
      });
  },

  loginAPIXX: function (username, password) {
    const params = {
      logon_id: username,
      logon_pwd: password
    };
    console.log("loginAPI.params", params);
    // axios.post('https://dry-woodland-49935.herokuapp.com/api/login', params)
    //   .then((result) => {
    //     console.log(result.data);
    //     return result.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     // if(error.response.status === 401) {
    //     //   return ( '401: Login failed. Username or password invalid.' );
    //     // }
    //     return "login api failure"
    //   });
    return "host";
  }
}

// export default loginAPI;
module.exports = API;