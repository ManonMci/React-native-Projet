import {HOST} from '../../Constants/constants';

export const apiRegister = async data => {
  console.log(data);
  try {
    const response = await fetch('https://vertical-project.com/wp-json/wp/v2/users', {
      method: 'POST', // request method
      headers: {
        // header request
        'Content-Type': 'application/json', // send JSON in body request
        Accept: 'application/json', // accept response JSON only
        'X-WP-Nonce': '891ad945da',
        Cookie: 
        'wordpress_logged_in_b2cb0d5c6f2f73277f0b537c907b2835=manonM|1654101356|DYg36MBQCX7ocPoakyDyJyW4HFtL5SV2ndx0ynyAnM4|034c3bca8a809433999e5394256fc4d69f62103b2d0b211fe5e39fe2aba24bc5'
      },
      credentials: 'include',
      body: JSON.stringify(data), // DATA
    });
    const result = await response.json();
    console.log('result', result);
    return response.ok ? result : false;
  } catch (err) {
    console.log('err', err);
  }
};
