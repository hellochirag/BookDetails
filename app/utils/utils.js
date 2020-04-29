export const fetchBook = async () => {
  return fetch('http://fakerestapi.azurewebsites.net/api/Books', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json());
};

export const fetchAuthor = async () => {
  return fetch('http://fakerestapi.azurewebsites.net/api/Authors', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json());
};
