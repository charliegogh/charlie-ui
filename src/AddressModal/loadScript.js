import Vue from 'vue'
export default function loadScript(src, module) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.onload = () => {
      if (module) Vue.use(window[module].default)
      resolve()
    }
    script.onerror = reject
    document.head.appendChild(script)
  })
}

