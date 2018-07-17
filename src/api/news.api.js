// @flow

export function getNews() {
  return fetch('https://api.myjson.com/bins/1cjehy')
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      throw err;
    })
}
export function getNewsById(id: number) {
  return fetch('https://api.myjson.com/bins/eli2m')
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      throw err;
    })
}