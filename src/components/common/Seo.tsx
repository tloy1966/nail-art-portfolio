import { useEffect } from 'react'
import { siteConfig } from '../../data/siteConfig'
import { getAssetPath } from '../../utils/getAssetPath'

function setMeta(selector: string, content: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content)
}

export function Seo() {
  useEffect(() => {
    const { seo } = siteConfig
    document.title = seo.title
    setMeta('meta[name="description"]', seo.description)
    setMeta('meta[property="og:title"]', seo.title)
    setMeta('meta[property="og:description"]', seo.description)
    setMeta('meta[property="og:image"]', new URL(getAssetPath(seo.ogImage), window.location.origin).href)
    setMeta('meta[name="twitter:title"]', seo.title)
    setMeta('meta[name="twitter:description"]', seo.description)
    setMeta('meta[name="theme-color"]', seo.themeColor)
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', seo.canonicalUrl)
  }, [])

  return null
}