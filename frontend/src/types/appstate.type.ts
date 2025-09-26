// Post type
export type Post = {
  id: string;
  author: string;
  content: string;
  timestamp: Date;
  likes: number;
  comments: number;
  shares: number;
  liked?: boolean;
};

// AppState
export type AppState = {
  user: User | null;
  isAuthenticated: boolean;
  selectedGroup: Group | null;
  selectedCar: Car | null;
  posts: Post[];
  isCreatePostOpen: boolean;
  groupList : Group[]
};

// User type (simplified, adjust as needed)
export type User = {
  id: string;
  name: string;
  email: string;
};

// Group type (simplified, adjust as needed)
export type Group = {
  id: string;
  name: string;
};

// Car type (simplified, adjust as needed)
export type Car = {
  id: string;
  make: string;
  model: string;
};

// AppAction
export type AppAction =
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_SELECTED_GROUP'; payload: Group | null }
  | { type: 'SET_SELECTED_CAR'; payload: Car | null }
  | {
      type: 'ADD_POST';
      payload: Omit<Post, 'id' | 'timestamp' | 'likes' | 'comments' | 'shares'>;
    }
  | {
      type: 'TOGGLE_LIKE';
      payload: { postId: string };
    }
  | {
      type: 'SET_CREATE_POST_OPEN';
      payload: boolean;
    }
  | {
      type: 'LOGOUT';
    } | {
        type : "GET_GROUPS";
    };
