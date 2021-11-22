import { PublicClientApplication } from '@azure/msal-browser'
import { msalConfig, loginRequest, tokenRequest } from './config/authConfig'
import { graphConfig } from './config/graphConfig'
const myMSALObj = new PublicClientApplication(msalConfig)
function signIn() {
  myMSALObj
    .loginPopup(loginRequest)
    .then((loginResponse) => {
      console.log('id_token acquired at: ' + new Date().toString())
      console.log(loginResponse)

      myMSALObj.setActiveAccount(myMSALObj.getAllAccounts()[0])
      if (myMSALObj.getActiveAccount()) {
        console.log(myMSALObj.getActiveAccount())
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

function signOut() {
  myMSALObj.logoutPopup()
}

function callMSGraph(endpoint, accessToken, callback) {
  const headers = new Headers()
  const bearer = `Bearer ${accessToken}`

  headers.append('Authorization', bearer)

  const options = {
    method: 'GET',
    headers: headers,
  }

  console.log('request made to Graph API at: ' + new Date().toString())

  fetch(endpoint, options)
    .then((response) => response.json())
    .then((response) => callback(response, endpoint))
    .catch((error) => console.log(error))
}

function getTokenPopup(request) {
  return myMSALObj.acquireTokenSilent(request).catch((error) => {
    console.log(error)
    console.log('silent token acquisition fails. acquiring token using popup')

    // fallback to interaction when silent call fails
    return myMSALObj
      .acquireTokenPopup(request)
      .then((tokenResponse) => {
        return tokenResponse
      })
      .catch((error) => {
        console.log(error)
      })
  })
}

function seeProfile() {
  console.log(myMSALObj.getActiveAccount())
  if (myMSALObj.getActiveAccount()) {
    getTokenPopup(loginRequest)
      .then((response) => {
        console.log(response)
        if (response) {
          callMSGraph(
            graphConfig.graphMeEndpoint,
            response.accessToken,
            (data) => console.log(data),
          )
          //profileButton.classList.add('d-none')
          //mailButton.classList.remove('d-none')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

function readExcel() {
  if (myMSALObj.getActiveAccount()) {
    getTokenPopup(tokenRequest)
      .then((response) => {
        if (response) {
          callMSGraph(
            graphConfig.graphExcelEndpoint +
              `me/drive/root:/Book.xlsx:/workbook/worksheets/Sheet2/range(address='A1:C5')`,
            response.accessToken,
            (data) => console.log(data),
          )
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export { signIn, signOut, seeProfile, readExcel }
