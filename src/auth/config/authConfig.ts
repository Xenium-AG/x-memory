const msalConfig = {
  auth: {
    clientId: '8cb79a95-16ba-4944-ba1f-3eb6aba590af',
    authority: 'https://login.microsoftonline.com/xenium.de/',
    redirectUri: import.meta.env.DEV
      ? 'http://localhost:3000/x-memory/'
      : 'https://xenium-ag.github.io/x-memory/',

    postLogoutRedirectUri: import.meta.env.DEV
      ? 'http://localhost:3000/x-memory/'
      : 'https://xenium-ag.github.io/x-memory/',
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
}

const loginRequest = {
  scopes: ['openid', 'profile', 'User.Read', 'Files.ReadWrite.All'],
}

const tokenRequest = {
  scopes: ['Files.ReadWrite.All'],
}

export { msalConfig, loginRequest, tokenRequest }
