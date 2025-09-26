import { Post } from "./post.type";
import { User } from "./user.type";

type AppAction =
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_SELECTED_GROUP'; payload: string | null }
  | { type: 'SET_SELECTED_CAR'; payload: string | null }
  | { type: 'ADD_POST'; payload: Omit<Post, 'id' | 'timestamp' | 'likes' | 'comments' | 'shares'> }
  | { type: 'TOGGLE_LIKE'; payload: { postId: string } }
  | { type: 'SET_CREATE_POST_OPEN'; payload: boolean }
  | { type: 'LOGOUT' };