import { AuthProvider } from "react-admin";
import config from "../config/config";

export const authProvider: AuthProvider = {
  // called when the user attempts to log in
  login: async ({ username, password }) => {
    const request = new Request(config.serverAddr + "auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: new Headers({ "Content-type": "application/json" }),
    });

    const response = await fetch(request);
    if (response.status < 200 || response.status >= 300) {
      throw new Error("User or password invalid.");
    }
    const auth = await response.json();
    localStorage.setItem("auth", JSON.stringify(auth));
    // .catch(() => {
    //   throw new Error(error);
    // });
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("auth");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("auth") ? Promise.resolve() : Promise.reject();
  },
  // getIdentity: () => {
  //   try {
  //     const { id, fullName } = JSON.parse(localStorage.getItem('auth'));
  //   } catch (error) {
  //     return Promise.reject(error);
  //   }
  // },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};
