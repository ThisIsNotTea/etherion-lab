// declare const self: ServiceWorkerGlobalScope

// // https://stackoverflow.com/questions/35758584/cannot-redeclare-block-scoped-variable
// export {}

// // To disable all Workbox logging during development, you can set self.__WB_DISABLE_DEV_LOGS to true
// // https://developer.chrome.com/docs/workbox/troubleshooting-and-logging/#turn-off-logging-in-development-builds-in-any-workflow
// //
// // self.__WB_DISABLE_DEV_LOGS = true

// // listen to message event from window
// self.addEventListener('message', (event) => {
//   // HOW TO TEST THIS?
//   // Run this in your browser console:
//   //     window.navigator.serviceWorker.controller.postMessage({command: 'log', message: 'hello world'})
//   // OR use next-pwa injected Workbox object
//   //     window.workbox.messageSW({command: 'log', message: 'hello world'})
//   console.log(event?.data)
// })

// self.addEventListener('message', (event) => {
//   if (event.data && event.data.type === 'SKIP_WAITING') {
//     // Use this, and not workbox.skipWaiting()
//     self.skipWaiting()
//   }
// })
