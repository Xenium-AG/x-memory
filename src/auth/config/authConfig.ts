const msalConfig = {
  auth: {
    clientId: '3704954b-71b4-4289-b03d-3ec278ed8dd9',
    authority: 'https://login.microsoftonline.com/xenium.de/',
    redirectUri: import.meta.env.DEV
      ? 'http://localhost:3000/x-memory/'
      : 'https://xenium-ag.github.io/x-memory/',
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
}

const loginRequest = {
  scopes: ['openid', 'profile' /*'User.Read'*/],
}

const tokenRequest = {
  scopes: ['Files.ReadWrite'],
}

export { msalConfig, loginRequest, tokenRequest }
