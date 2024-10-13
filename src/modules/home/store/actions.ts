import { Post } from "../types/post";

export type HomeStoreTypes = "SET_POST";

type Action<T> = {
    type: HomeStoreTypes;
    payload: T;
};

interface ISetPosts extends Action<Post[]>{
  type: "SET_POST";
}

export type TAction = ISetPosts;
