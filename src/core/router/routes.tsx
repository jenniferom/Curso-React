import { lazy } from "react";

const HomeContainer = lazy(
  () => import("../../modules/home/containers/homecontainer/HomeContainer")
);

const PostDetailContainer = lazy(
  () =>
    import("../../modules/home/modules/post/containers/PostDetailsContainer")
);

const HomeZustandContainer = lazy(
  () => import("../../modules/home/containers/HomeZustandContainer.tsx")
);

export { HomeContainer, HomeZustandContainer, PostDetailContainer };

