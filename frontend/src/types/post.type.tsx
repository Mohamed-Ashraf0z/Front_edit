export interface Post {
  id: string;
  username: string;
  content: string;
  timestamp: Date;
  likes: number;
  comments: number;
  shares: number;
  groupId: string;
  liked?: boolean;
}


