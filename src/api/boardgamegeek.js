import { Games } from '~/data/GameCache';

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
