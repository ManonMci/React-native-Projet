
// const WooCommerceAPI = new WooCommerceAPI({
//   url: 'https://vertical-project.com/', // Your store URL
//   ssl: true,
//   consumerKey: 'ck_77d129209d9bbd6de8b934f700450b177bcbe7e9', // Your consumer secret
//   consumerSecret: 'ccs_d73b6bd3e2604d93aa83e5bbb4458b49241f031f', // Your consumer secret
//   wpAPI: true, // Enable the WP REST API integration
//   version: 'wc/v2', // WooCommerce WP REST API version
//   queryStringAuth: true
// });

// WooCommerce.get("product/devenir-adherente-mensuel/")
// .then((response) => {
//   console.log(response.data);
// })
// .catch((error) => {
//   console.log(error.response.data);
// });

import {HOST} from '../../Constants/constants';
export const ApiGetProjects = async () => {
  try {
    const response = await fetch(
      VIMEO_HOST + VIMEO_USERS + VIMEO_ID_CLIENT + VIMEO_PROJECTS,
      {
        method: 'GET', // request method
        headers: {
          // header request
          Authorization: 'Bearer ef12d7af78b1489f16489aa55d1e04d5',
          'Content-Type': 'application/json', // send JSON in body request
          Accept: 'application/json', // accept response JSON only
        },
        body: JSON.stringify(data), // DATA
      },
    );
    const result = await response.json();
    console.log('result', result);
    return response.ok ? result : false;
  } catch (err) {
    console.log('err', err);
  }
};
