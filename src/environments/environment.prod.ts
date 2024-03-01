export const environment = {
  production: true,
  awsCognito: {
    userPoolId: import.meta.env["NG_APP_USER_POOL_ID"],
    clientId: import.meta.env["NG_APP_CLIENT_ID"],
  }
};
