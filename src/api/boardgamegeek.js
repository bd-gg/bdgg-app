import { Games } from '~/data/GameCache';
import { useState } from 'react';

export function getBoardGameInfo(gid) {
  if (Games[gid]) return Promise.resolve(Games[gid]);
  return fetch(`https://bgg-json.azurewebsites.net/thing/${gid}`)
    .then((res) => res.json())
    .then((res) => {
      Games[gid] = res;
      return res;
    })
    .catch((error) => {
      console.error(`Query failed - ${error}`);
    });
}

export function getGroupInfo(userId) {
  const [data, setData] = useState([]);
  fetch(
    `http://ec2-13-125-12-178.ap-northeast-2.compute.amazonaws.com:8080/users/${userId}/groups`,
    {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    }
  )
    .then((res) => {
      console.log('Get group list from server!!');
      return res.json();
    })
    .then((res) => {
      console.log('res.items: ', res.items);
      setData(res.items);
    })
    .catch((err) => {
      console.error(err);
    });
  console.log(`Data`, data);

  return data;
}
