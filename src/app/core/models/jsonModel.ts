
import Auth0Lock from 'auth0-lock';
import { environment } from '../../../environments/environment';

export const auth0Options = {
    theme: {
      logo: '../../../assets/images/images.png',
      primaryColor: '#DFA612'
    },
    auth: {
      redirectUrl: environment.auth0.callbackURL,
      responseType: 'token id_token',
      params: {
        scope: 'openid profile'
      }
    },
    autoclose: true,
    oidcConformant: true,
  };

export const lock = new Auth0Lock(
    environment.auth0.clientId,
    environment.auth0.domain,
    auth0Options
  );

export const clientID = environment.auth0.clientId;