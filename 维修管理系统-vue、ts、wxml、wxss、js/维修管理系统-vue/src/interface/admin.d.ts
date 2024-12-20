interface Admin {
  id: string
  name: string
  role: string
  username: string
  password: string
  token: string
  avatar: string
}

interface addAdmin {
  id?: string
  name?: string
  role?: string
  username?: string
  password?: string
  token?: string
  avatar?: string
}

interface AdminParams {
  role?: string
}
