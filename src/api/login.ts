import axios from 'axios'

const url = 'localhost:3000/api/login'

const login = (username: string, password: number): Promise<void> => axios.post(url, {
  username,
  password
})

export default login

  