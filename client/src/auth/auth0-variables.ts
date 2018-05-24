interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'UH8vd6z67MhKHHOD6x1sDDptY8bAfAdV',
  domain: 'ng-expose.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
