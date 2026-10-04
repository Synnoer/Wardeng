import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { siteConfig } from './data/site'
import './index.css'

function applySeoMetadata() {
  const siteUrl = siteConfig.productionUrl?.replace(/\/$/, '')
  if (!siteUrl) return

  const ensureMeta = (property: string, content: string, attr: 'property' | 'name' = 'property') => {
    let element = document.head.querySelector(`meta[${attr}="${property}"]`)
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attr, property)
      document.head.appendChild(element)
    }
    element.setAttribute('content', content)
  }

  let canonical = document.head.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', siteUrl)

  ensureMeta('og:url', siteUrl)
  ensureMeta('og:image', siteConfig.heroImage)
  ensureMeta('twitter:image', siteConfig.heroImage, 'name')
}

applySeoMetadata()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
