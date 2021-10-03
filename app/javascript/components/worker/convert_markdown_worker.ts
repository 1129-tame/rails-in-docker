import * as marked from 'marked'
import * as sanitizeHtml from 'sanitize-html'

const worker: Worker = self as any  // self as any と書くことで型チェックを回避
  

worker.addEventListener('message', (event) => {  
  const text = event.data
  // const html = marked(text)
  const html = sanitizeHtml(marked(text), { allowedTags: [...sanitizeHtml.defaults.allowedTags, 'h1', 'h2'] })
  worker.postMessage({ html })
})