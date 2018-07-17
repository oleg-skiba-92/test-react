// @flow

export function login(loginData: Object) {
  if(loginData.username !== 'Admin' || loginData.password !== '12345'){
    // eslint-disable-next-line
    throw 'Username or password mismatch'
  }
  return fetch('https://api.myjson.com/bins/1fg7na')
    .then((res)=> {
      return res.json();
    })
    .catch((err) => {
      throw err;
    })
}