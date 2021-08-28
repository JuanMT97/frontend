import { getInstance } from "./index";
import axios from 'axios';

export const authGuard = (to, from, next) => {
  const authService = getInstance();

  const fn = () => {
    // If the user is authenticated, continue with the route
    if (authService.isAuthenticated) {
      return next();
    }

    // Otherwise, log in
    authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } });
  };

  // If loading has already finished, check our auth state using `fn()`
  if (!authService.loading) {
    return fn();
  }

  // Watch for the loading property to change before we check isAuthenticated
  authService.$watch("loading", loading => {
    if (loading === false) {
      return fn();
    }
  });
};

export const authAdmin = (to, from, next) => {
  const authService = getInstance();

  const fn= () => {
    axios.get("http://localhost:3000/usuarios")
      .then(res => {
        if (authService.isAuthenticated) {
          const usuario = authService.user.email;
          for(var user in res.data){
            if (usuario ==  res.data[user].email && res.data[user].admin)
              return next();
          }
          return next("/");
        }
        return next("/");
    })
  };

  // If loading has already finished, check our auth state using `fn()`
  if (!authService.loading) {
    return fn();
  }

  // Watch for the loading property to change before we check isAuthenticated
  authService.$watch("loading", loading => {
    if (loading === false) {
      return fn();
    }
  });
};
