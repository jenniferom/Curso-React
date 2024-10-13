import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/loading/Loading";
import { HomeContainer, PostDetailContainer } from "./routes";
import DefaultLayout from "../../modules/home/homeLayout/DefaultLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <DefaultLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <HomeContainer />,
      },
      {
        path: "post/:id/:name",
        element: <PostDetailContainer />,
        children: [],
      },
    ],
  },
]);
