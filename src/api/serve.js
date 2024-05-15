import {
  getCorpTicket,
  getAccessToken,
  getAppTicket,
} from './api.js'

getAccessToken({
  corpId: 'ww2c71c4018757ffac',
  secret:
    'e88ySHW0g1eGLlcP3yY0Q8-hAGBcl5KbsO9xQCb4mK0',
}).then((res) => {
  // console.log(res, 'res')
  if (res) {
    const { access_token } = res.data
    getCorpTicket({
      access_token,
    }).then(cur => {
      console.log(cur, 'cur')
    })
  }
})