import axios from 'axios';
import config from '../../../config';

export const FETCH_MISSIONS = 'fetch_articles';

export const fetchMissions = source => async dispatch => {
  let url;
  let params = {...source}

  url = `https://api.spaceXdata.com/v3/launches?limit=100`;
 
  const res = await axios.get(url, {
    params: {
      ...params
    }
  });

  dispatch({
    type: FETCH_MISSIONS,
    payload: res.data
  });
};
