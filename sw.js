/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-fb474fb9d9209f4f2844.js"
  },
  {
    "url": "framework-76768e28ddd4001143e6.js"
  },
  {
    "url": "app-cbdeedc9f0ca6fe6e8ea.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c302f41c046a5567a3dd19d39e9511a1"
  },
  {
    "url": "static/webfonts/s/lato/v17/S6u_w4BMUTPHjxsI9w2_Gwft.woff2"
  },
  {
    "url": "static/webfonts/s/lato/v17/S6u8w4BMUTPHjxsAXC-q.woff2"
  },
  {
    "url": "static/webfonts/s/lato/v17/S6u_w4BMUTPHjxsI5wq_Gwft.woff2"
  },
  {
    "url": "static/webfonts/s/lato/v17/S6u_w4BMUTPHjxsI3wi_Gwft.woff2"
  },
  {
    "url": "static/webfonts/s/lato/v17/S6u9w4BMUTPHh7USSwiPGQ.woff2"
  },
  {
    "url": "static/webfonts/s/lato/v17/S6uyw4BMUTPHjx4wXg.woff2"
  },
  {
    "url": "static/webfonts/s/lato/v17/S6u9w4BMUTPHh6UVSwiPGQ.woff2"
  },
  {
    "url": "static/webfonts/s/lato/v17/S6u9w4BMUTPHh50XSwiPGQ.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc6CsQ.woff2"
  },
  {
    "url": "static/webfonts/s/ptserif/v12/EJRTQgYoZZY2vCFuvAFT_r21cg.woff2"
  },
  {
    "url": "static/webfonts/s/lobster/v23/neILzCirqoswsqX9zoKmMw.woff2"
  },
  {
    "url": "static/webfonts/s/davidlibre/v5/snfus0W_99N64iuYSvp4W8l74J8.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v20/KFOkCnqEu92Fr1Mu51xIIzI.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v20/KFOjCnqEu92Fr1Mu51S7ACc6CsQ.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v20/KFOjCnqEu92Fr1Mu51TzBic6CsQ.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v20/KFOjCnqEu92Fr1Mu51TLBCc6CsQ.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v20/KFOlCnqEu92Fr1MmYUtfBBc4.woff2"
  },
  {
    "url": "static/webfonts/s/ptserif/v12/EJRQQgYoZZY2vCFuvAFT9gaQZynfoA.woff2"
  },
  {
    "url": "static/webfonts/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFWzr8.woff2"
  },
  {
    "url": "static/webfonts/s/ptserif/v12/EJRSQgYoZZY2vCFuvAnt66qSVys.woff2"
  },
  {
    "url": "static/webfonts/s/davidlibre/v5/snfzs0W_99N64iuYSvp4W8GIw4qcQDI.woff2"
  },
  {
    "url": "static/webfonts/s/davidlibre/v5/snfzs0W_99N64iuYSvp4W8HAxYqcQDI.woff2"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-d3ee03be2ef85643f368.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "854eaa5652796abffb457aefee4f0477"
  },
  {
    "url": "polyfill-e9daaff79fbc94879ec2.js"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "3ffbdd73d1760caf9ebc51388233a9a5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-cbdeedc9f0ca6fe6e8ea.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
