import { Games } from '~/data/GameCache';
import { useState } from 'react';

export function getBoardGameInfo(gid) {
  if (Games[gid]) {
    return Promise.resolve(Games[gid]);
  }
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

export const getGroupInfo = (userId, getGroupFunction) => {
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
      console.log('Got Data from server res.items: ', res.items);
      getGroupFunction(res.items);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getMatchListInfo = (groupId, getMatchFunction) => {
  console.log(`groupId: ${groupId}`);
  fetch(
    `http://ec2-13-125-12-178.ap-northeast-2.compute.amazonaws.com:8080/groups/${groupId}/matches`,
    {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    }
  )
    .then((res) => {
      console.log('Get match list from server!!');
      return res.json();
    })
    .then((res) => {
      console.log('Got Data from server res.items: ', res.items);
      getMatchFunction(res.items);
    })
    .catch((err) => {
      console.error(err);
    });
};
