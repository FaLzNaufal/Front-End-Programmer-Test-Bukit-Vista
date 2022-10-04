import asyncComponent from "../helpers/AsyncFunc";
//consists of only guest details page
const routes = [
  {
    path: "guest_details",
    component: asyncComponent(() => import("./containers/GuestDetails.js")),
  },
];
export default routes;
