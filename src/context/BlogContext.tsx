import React, { createContext, useReducer, Dispatch } from 'react';
import { BlogPost } from '../types/BlogPost';
import { Action, addBlogPost, deleteBlogPost, editBlogPost } from './actions';
import { ActionTypes } from '../types/actions';

export const BlogContext = createContext({
  state: [] as BlogPost[],
  dispatch: {} as Dispatch<Action>,
});

const initialState: BlogPost[] = [];

const blogReducer = (state: BlogPost[], { type, payload }: Action) => {
  switch (type) {
    case ActionTypes.addBlogPost:
      return addBlogPost(state, payload as BlogPost);
    case ActionTypes.deleteBlogPost:
      return deleteBlogPost(state, payload as number);
    case ActionTypes.editBlogPost:
      let content = payload as BlogPost;
      let { id } = content;
      if (id) return editBlogPost(state, id, content);
      return state;
    default:
      return state;
  }
};

interface BlogProviderProps {
  children: React.ReactNode;
}

export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  const value = { state, dispatch };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
