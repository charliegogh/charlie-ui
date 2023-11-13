export default function loadScript(src, module) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.async = false
    script.onload = () => {
      resolve(window[module].default)
    }
    script.onerror = reject
    document.head.appendChild(script)
  })
}
