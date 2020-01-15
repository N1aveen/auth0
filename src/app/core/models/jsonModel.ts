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
    // additionalSignUpFields: [
    //     {
    //             type: 'select',
    //             name: 'location',
    //             placeholder: 'choose your location',
    //             options: [
    //               {value: 'us', label: 'United States'},
    //               {value: 'fr', label: 'France'},
    //               {value: 'en', label: 'India'}
    //             ],
    //             ariaLabel: 'Location',
    //             icon: '',
    //             prefill: 'us'
    //     }, {
    //         type: 'checkbox',
    //         name: 'newsletter',
    //         prefill: 'true',
    //         placeholder:
    //             'I hereby agree that I want to receive upgradation emails from your company',
    //         ariaLabel: 'Activate Newsletter',
    //     }
    // ],
    autoclose: true,
    oidcConformant: true
};

export const lock = new Auth0Lock(
    environment.auth0.clientId,
    environment.auth0.domain,
    auth0Options
);

export const clientID = environment.auth0.clientId;
