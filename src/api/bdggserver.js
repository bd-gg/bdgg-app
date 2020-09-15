export const getMemberList = (groupId, getMemberList) => {
  fetch(
    `http://ec2-13-125-12-178.ap-northeast-2.compute.amazonaws.com:8080/groups/${groupId}`,
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
      getMemberList(res.items);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getUserInfo = (userId) => {
  fetch(
    `http://ec2-13-125-12-178.ap-northeast-2.compute.amazonaws.com:8080/groups/${userId}`,
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
      getMemberList(res.items);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getUserInfoList = (userIds) => {
  fetch(
    `http://ec2-13-125-12-178.ap-northeast-2.compute.amazonaws.com:8080/groups/${userId}`,
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
      getMemberList(res.items);
    })
    .catch((err) => {
      console.error(err);
    });
};
