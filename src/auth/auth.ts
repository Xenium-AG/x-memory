import { PublicClientApplication } from '@azure/msal-browser'
import { msalConfig, loginRequest, tokenRequest } from './config/authConfig'
import { graphConfig } from './config/graphConfig'
const myMSALObj = new PublicClientApplication(msalConfig)

;(async () => {
  handleResponse(await myMSALObj.handleRedirectPromise())
})()

function handleResponse(response) {
  const currentAccounts = myMSALObj.getAllAccounts()

  if (currentAccounts.length === 0) {
    myMSALObj.loginRedirect(loginRequest)
  } else {
    myMSALObj.setActiveAccount(myMSALObj.getAllAccounts()[0])
  }
}
export async function signIn() {
  const loginResponse = await myMSALObj.loginRedirect(loginRequest)

  console.log('id_token acquired at: ' + new Date().toString())
  myMSALObj.setActiveAccount(myMSALObj.getAllAccounts()[0])
  return loginResponse
}

export async function signOut() {
  return myMSALObj.logoutRedirect()
}
export function isSignedIn() {
  return !!myMSALObj.getActiveAccount()
}

async function callMSGraph(method, headers, endpoint, body, accessToken) {
  const options = {
    method,
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
      ...headers,
    }),
  }

  if (['patch', 'post'].some((m) => m === method.toLowerCase())) {
    options['body'] = JSON.stringify(body)
  }

  return (await fetch(endpoint, options)).json()
}

async function getTokenPopup(request) {
  try {
    return await myMSALObj.acquireTokenSilent(request)
  } catch (error) {
    console.error(error)
    return myMSALObj.acquireTokenRedirect(request)
  }
}
async function getToken(request) {
  if (!myMSALObj.getActiveAccount()) {
    await signIn()
  }
  const { accessToken } = (await getTokenPopup(request)) as any
  return accessToken
}

export async function getAccount() {
  if (!myMSALObj.getActiveAccount()) {
    await getTokenPopup(loginRequest) //await signIn()
  }
  return myMSALObj.getActiveAccount().username
}
let sessionId = ''
export async function createSession() {
  const { id } = await callMSGraph(
    'POST',
    {
      persistChanges: true,
    },
    graphConfig.graphExcelEndpoint + `/createSession`,
    {},
    await getToken(tokenRequest),
  )

  sessionId = id
}
export async function queryExcel(method, query, body = {}) {
  if (!sessionId) {
    await createSession()
  }
  return callMSGraph(
    method,
    { 'workbook-session-id': sessionId },
    graphConfig.graphExcelEndpoint + '/' + query,
    body,
    await getToken(tokenRequest),
  )
}
