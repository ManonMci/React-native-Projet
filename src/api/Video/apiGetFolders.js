import {
    HOST,
    VIMEO_HOST,
    VIMEO_USERS,
    VIMEO_ID_CLIENT,
    VIMEO_PROJECTS,
    VIMEO_ID_FOLDERS,
    VIMEO_VIDEO,
  } from '../../Constants/constants';
  
  
  export const ApiGetFolders = async () => {
    try {
      const response = await fetch(
        VIMEO_HOST + VIMEO_USERS  + VIMEO_ID_CLIENT + VIMEO_PROJECTS + '/' + VIMEO_ID_FOLDERS + '/' + VIMEO_VIDEO,
        {
          method: 'GET', // request method
          headers: {
            // header request
            Authorization: 'Bearer ' + 'ef12d7af78b1489f16489aa55d1e04d5',
            'Content-Type': 'application/json', // send JSON in body request
            Accept: 'application/json', // accept response JSON only
          },
        },
      );
      const result = await response.json();
      return response.ok ? result : false;
    } catch (err) {
      console.log('err', err);
    }
  };
