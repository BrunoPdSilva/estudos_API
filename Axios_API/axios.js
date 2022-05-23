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
  axios.get(url).then(res => userData.textContent = JSON.stringify(res.data))
    .catch(err => console.error(err));
};

const postUsers = newUser => 
  axios.post(url, newUser).then(res => console.log(res)).catch(err => console.error(err));

//postUsers(newUser)

const getUser = id => {
  axios.get(`${url}/${id}`).then(res => {
    userName.textContent = res.data.name
    userCity.textContent = res.data.city
    userID.textContent = res.data.id
    userAvatar.src = res.data.avatar
  }).catch(error => console.error(error));
}

const updateUser = (id, updatedUser) => 
  axios.put(`${url}/${id}`, updatedUser).then(res => console.log(res)).catch(err => console.error(err));

//updateUser(2, newUser)

const deleteUser = id => 
  axios.delete(`${url}/${id}`).then(res => console.log(res)).catch(err => console.error(err))

//deleteUser(3)

getUser(2)
getUsersList()