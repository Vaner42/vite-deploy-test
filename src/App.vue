<script setup>
import HelloWorld from './components/HelloWorld.vue'
import * as ww from '@wecom/jssdk'
import {
  getCorpTicket,
  getAccessToken,
} from './api/api'

getAccessToken({
  corpId: 'ww2c71c4018757ffac',
  secret:
    'e88ySHW0g1eGLlcP3yY0Q8-hAGBcl5KbsO9xQCb4mK0',
}).then((res) => {
  if (res) {
    const { access_token } = res.data
    console.log(access_token, 'access_token')

    getCorpTicket({
      access_token,
    }).then(async cur => {
      console.log(cur, 'cur')
      const { ticket } = cur.data;

      ww.register({
        corpId: 'ww2c71c4018757ffac',
        jsApiList: ['getContext'],
        getConfigSignature: () => {
          return getSign(ticket)
        }
      })
    })
  }
})

async function getSign(ticket) {
 const sign = await ww.getSignature(ticket);

 console.log(sign, 'sign')
 return sign
}

// ww.register({
//   corpId: 'ww2c71c4018757ffac',
//   getConfigSignature() {
//     const timestamp = new Date().getTime()
//     console.log(location.href, 'location.href')
//     console.log(timestamp, 'timestamp')
//     console.log(generateNonceStr(), 'generateNonceStr')
//     return {
//       // url: location.href,
//       url: 'auth.nexttao.com',
//       timestamp: 1715758020228,
//       nonceStr: 'emub70irngo',
//       signature: '91a76b1aebd67eb44fd6b385f71732ee318c84a9',
//     }
//   },
// })
console.log(1111)

function generateNonceStr() {
  return Math.random().toString(36).substr(2, 15)
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img
        src="/vite.svg"
        class="logo"
        alt="Vite logo"
      />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img
        src="./assets/vue.svg"
        class="logo vue"
        alt="Vue logo"
      />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
