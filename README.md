# BackendCA3
- we have to first install all the required dependencies
- then run the command node index.js which will start the server
- in any api testing platform like postman bruno you can put the api url and in the /login endpoint add the username and password and do a post request
- this will compare the username and password present in the array and if it matches it will generate a token
- copy the token which is given
- next we have to do a get request to the api url and the endpoint /dashboard
- in the api testing platform go to authorization in that Bearer if the token matches then it will respond with a message "welcome to your dashboard" else it will respond with the message "unauthorized"