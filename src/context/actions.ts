import { ActionTypes } from '../types/actions';
import { BlogPost } from '../types/BlogPost';

export interface addBlogPostAction {
  type: ActionTypes.addBlogPost;
  payload: BlogPost;
}

export interface editBlogPostAction {
  type: ActionTypes.editBlogPost;
  payload: { id: number; content: BlogPost };
}

export interface deleteBlogPostAction {
  type: ActionTypes.deleteBlogPost;
  payload: number;
}

export const addBlogPost = (state: BlogPost[], post: BlogPost) => {
  return [...state, { ...post, id: state.length + 1 }];
};

export const deleteBlogPost = (state: BlogPost[], id: number) => {
  return state.filter((post) => post.id !== id);
};

export const editBlogPost = (
  state: BlogPost[],
  id: number,
  content: BlogPost
) => {
  let shallowCopy = [...state];
  for (let i in shallowCopy) {
    if (shallowCopy[i].id === id) {
      shallowCopy[i].title = content.title;
      break;
    }
  }
  return shallowCopy;
};

export type Action =
  | editBlogPostAction
  | addBlogPostAction
  | deleteBlogPostAction;
