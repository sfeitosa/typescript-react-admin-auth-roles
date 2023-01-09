import { Admin, Options, Resource, fetchUtils } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList, UserEdit, UserCreate } from "../pages/user";
import { GroupEdit, GroupList, GroupCreate } from "../pages/group";
import UserIcon from "@mui/icons-material/Group";
import GroupIcon from "@mui/icons-material/Groups";
import { Dashboard } from "../pages/dashboard";
import { authProvider } from "../providers/authProvider";
import config from "../config/config";
import {
  GroupPermissionList,
  GroupPermissionEdit,
  GroupPermissionCreate,
} from "../pages/group_permission";
import {
  UserPermissionList,
  UserPermissionEdit,
  UserPermissionCreate,
} from "../pages/user_permission";

const httpClient = (url: any, options = {} as Options) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }

  const auth = localStorage.getItem("auth");

  if (auth) {
    const { token } = JSON.parse(auth);

    const curHeader = new Headers(options.headers);

    curHeader.set("Authorization", `Bearer ${token}`);

    options.headers = curHeader;
  }

  // Refreshing the token on each request
  return fetchUtils.fetchJson(url, options).then((val) => {
    const newToken = `{"token": "${val.headers.get("refreshed-token")}"}`;

    localStorage.setItem("auth", newToken);

    return val;
  });
};

const dataProvider = jsonServerProvider(config.serverAddr + "auth", httpClient);

const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    dashboard={Dashboard}
  >
    <Resource
      name="user"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
      icon={UserIcon}
    />
    <Resource
      name="group"
      list={GroupList}
      edit={GroupEdit}
      create={GroupCreate}
      icon={GroupIcon}
    />
    <Resource
      name="user-permission"
      list={UserPermissionList}
      edit={UserPermissionEdit}
      create={UserPermissionCreate}
    />
    <Resource
      name="group-permission"
      list={GroupPermissionList}
      edit={GroupPermissionEdit}
      create={GroupPermissionCreate}
    />
  </Admin>
);

export default App;
