const url = "http://localhost:5500/api";

const newUser = {
  name: "Bruno Peres",
  city: "Sorocaba - SP",
  avatar: "https://avatars.githubusercontent.com/u/101416108?v=4",
};

const updatedUser = {
  name: "Bruno Peres da Silva",
  city: "Sorocaba - SP",
  avatar: "https://picsum.photos/200/300",
};

const getUsersList = () => {
  fetch(url)
    .then(res => res.json())
    .then(data => (renderApiResult.textContent = JSON.stringify(data)))
    .catch(err => console.error(err));
};

const getUser = id => {
  fetch(`${url}/${id}`)
    .then(res => res.json())
    .then(data => {
      userName.textContent = data.name;
      userCity.textContent = data.city;
      userImage.src = data.avatar;
    })
    .catch(err => console.error(err));
};

const postUser = newUser => {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(res => res.json())
    .then(data => (alertApi.textContent = data))
    .catch(err => console.error(err));
};
//postUser(newUser)

const putUser = updatedUser => {
  fetch(`${url}/2`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(res => res.json())
    .then(data => (alertApi.textContent = data))
    .catch(err => console.error(err));
};
//putUser(updatedUser)

const deleteUser = id => {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      contentType: "application,/json; charset=UTF-8",
    },
  })
    .then(res => res.json())
    .then(data => (alertApi.textContent = data))
    .catch(err => console.error(err));
};
//deleteUser(6);

getUser(2);