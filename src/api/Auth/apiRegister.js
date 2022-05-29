import {HOST} from '../../Constants/constants';

export const apiRegister = async data => {
    console.log(data)
    try{
        const response = await fetch(HOST + '', {
            method: 'POST', // request method
            headers: {
              // header request
              'Content-Type': 'application/json', // send JSON in body request
              Accept: 'application/json', // accept response JSON only
            },
            body: JSON.stringify(data), // DATA
        });
        const result = await response.json();
        return response.ok ? result : false
    } catch (err){
        console.log('err', err)
    }
};
