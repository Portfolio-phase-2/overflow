import axios from 'axios'
const _url = 'http://localhost:3000'
export default {
  getUserLogin () {
    axios({
      url: _url + `/users/one`,
      method: 'get',
      headers: {
        token: localStorage.getItem('token')
      }
    })
      .then(found => {
        return found.data
      })
      .catch(() => console.log(`failed to get user`))
  }

}
