import {HOST} from '../../Constants/constants';

export const apiLogin = async data => {
  console.log(data);
  try {
    const response = await fetch(HOST + '/wp-json/jwt-auth/v1/token', {
      method: 'POST', // request method
      headers: {
        // header request
        'Content-Type': 'application/json', // send JSON in body request
        Accept: 'application/json', // accept response JSON only
      },
      body: JSON.stringify(data), // DATA
    });
    const result = await response.json();
    console.log('result', result);
    return response.ok ? result : false;
  } catch (err) {
    console.log('err', err);
  }
};






// export const apiLogin = data => {
//   console.log(data)
//   fetch(HOST + '/wp-json/jwt-auth/v1/token', {
//     method: 'POST', // request method
//     headers: {
//       // header request
//       //"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcG9pbnRzLmNvdXZlZS5jby5pZCIsImlhdCI6MTU4ODQ5OTE0OSwibmJmIjoxNTg4NDk5MTQ5LCJleHAiOjE1ODkxMDM5NDksImRhdGEiOnsidXNlciI6eyJpZCI6MX19fQ.w3pf5PslhviHohmiGF-JlPZV00XWE9c2MfvBK7Su9Fw",
//       'Content-Type': 'application/json', // send JSON in body request
//       Accept: 'application/json', // accept response JSON only
//     },
//     body: JSON.stringify(data), // DATA
//   })
//     .then(res => res.ok ? res.json() : console.log('Bad id'))
//     .then(async result =>{
//          await storeDataObject('@user', result)
//          console.log('result', result)
//          console.log('getDataObject', await getDataObject())
//          return true
//         })
//     .catch(err => console.log('err', err));
// };
