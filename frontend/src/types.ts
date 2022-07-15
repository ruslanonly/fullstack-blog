export interface IUser {
  id: number,
  username: string,
  email: string
}

export interface IPost {
  id: number,
  title: string,
  content: string,
  user_id: number,
  author: string,
  data_created: Date,
  likes: number
}