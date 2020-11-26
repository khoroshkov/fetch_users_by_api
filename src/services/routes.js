import React from "react";

export default {
  root: {
    path: "/",
    component: React.lazy(() =>
      import("../components/Pages/UsersList" /* webpackChunkName: "Home" */)
    ),
  },
  editUser: {
    path: "/edit_user/",
    component: React.lazy(() =>
      import("../components/Pages/EditUser" /* webpackChunkName: "EditUser" */)
    ),
  },
  newUser: {
    path: "/new_user",
    component: React.lazy(() =>
      import("../components/Pages/NewUser" /* webpackChunkName: "NewUser" */)
    ),
  },
};
