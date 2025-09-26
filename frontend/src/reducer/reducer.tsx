// import { AppState } from "@/contexts/AppContext";
// import { Post } from "@/types/post.type";

// function appReducer(state: AppState, action: AppAction): AppState {
//   switch (action.type) {
//     case 'SET_USER':
//       return {
//         ...state,
//         user: action.payload,
//         isAuthenticated: !!action.payload,
//       };
    
//     case 'SET_SELECTED_GROUP':
//       return {
//         ...state,
//         selectedGroup: action.payload,
//       };
    
//     case 'SET_SELECTED_CAR':
//       return {
//         ...state,
//         selectedCar: action.payload,
//       };
    
//     case 'ADD_POST':
//       const newPost: Post = {
//         ...action.payload,
//         id: Date.now().toString(),
//         timestamp: new Date(),
//         likes: 0,
//         comments: 0,
//         shares: 0,
//       };
//       return {
//         ...state,
//         posts: [newPost, ...state.posts],
//         isCreatePostOpen: false,
//       };
    
//     case 'TOGGLE_LIKE':
//       return {
//         ...state,
//         posts: state.posts.map(post =>
//           post.id === action.payload.postId
//             ? {
//                 ...post,
//                 liked: !post.liked,
//                 likes: post.liked ? post.likes - 1 : post.likes + 1,
//               }
//             : post
//         ),
//       };
    
//     case 'SET_CREATE_POST_OPEN':
//       return {
//         ...state,
//         isCreatePostOpen: action.payload,
//       };
    
//     case 'LOGOUT':
//       return {
//         ...state,
//         user: null,
//         isAuthenticated: false,
//       };
    
//     default:
//       return state;
//   }
// }