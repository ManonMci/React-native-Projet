import {
  HOST,
  VIMEO_HOST,
  VIMEO_USERS,
  VIMEO_ID_CLIENT,
  VIMEO_PROJECTS,
  VIMEO_VIDEOS,
} from '../../Constants/constants';

export const ApiGetProjects = async () => {
  try {
    const response = await fetch(
      VIMEO_HOST + VIMEO_USERS + '/' + VIMEO_ID_CLIENT + VIMEO_PROJECTS,
      {
        method: 'GET', // request method
        headers: {
          // header request
          Authorization: 'Bearer' + 'ef12d7af78b1489f16489aa55d1e04d5',
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

//https://api.vimeo.com/users/{user_id}/projects/{project_id}/videos
//https://api.vimeo.com/me/projects/{project_id}/videos
//https://api.vimeo.com/users/82799979/projects/10753810/videos

export const ApiGetVideosByFolder = async data => {
  console.log('data', data);
  try {
    const response = await fetch(
      VIMEO_HOST +
        VIMEO_USERS +
        '/' +
        VIMEO_ID_CLIENT +
        VIMEO_PROJECTS +
        '/' +
        data.projectId +
        VIMEO_VIDEOS,
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
    console.log('vvviiviiv', JSON.stringify(result, null, 4));

    return response.ok ? result : false;
  } catch (err) {
    console.log('err', err);
  }
};
