import axios from 'axios';

const req = axios.create({
    baseURL : 'https://pdv.back-end.com.mx/',
    headers: {'Content-Type': 'application/json'},
})
/*
req.interceptors.response.use(response => response, error => {
    if(!error.response){
        window.location.href = "/logout";
    }
    if(error.response.status === 401 && error.response.data.message.indexOf("The consumer isn't authorized to access") !== -1){
        window.location.href = "/logout";
        return;
    }
    return Promise.reject(error);
});
*/

export default req;