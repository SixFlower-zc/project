interface getHouseholdsParams {
  id?: string
  name?: string
  gender?: '男' | '女' | ''
  age?: string
}

interface household {
  id: string
  name: string
  gender: '男' | '女'
  age: number
  phone: string
  address: string
  date: string
  remarks: string
}

interface addhousehold {
  id?: string
  name?: string
  gender?: '男' | '女'
  age?: string
  phone?: string
  address?: string
  date?: string
  remarks?: string
}
