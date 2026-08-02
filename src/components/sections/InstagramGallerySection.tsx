import { Camera } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { ImageWithFallback } from '../common/ImageWithFallback'

export function InstagramGallerySection() {
  return (
    <section className="instagram-section" aria-labelledby="instagram-title">
      <Container>
        <div className="instagram-section__header"><div><p className="eyebrow">INSTAGRAM</p><h2 id="instagram-title">{siteConfig.instagram.title}</h2><p>{siteConfig.instagram.account}</p></div><Button label="追蹤 Instagram" href={siteConfig.contact.instagramUrl} external variant="secondary" icon={<Camera aria-hidden="true" size={17} />} /></div>
        <div className="instagram-grid">{siteConfig.instagram.items.map((item, index) => <a href={siteConfig.contact.instagramUrl} target="_blank" rel="noopener noreferrer" key={item.image} aria-label={`在 Instagram 查看作品 ${index + 1}`}><ImageWithFallback src={item.image} alt={item.alt} /><span><Camera aria-hidden="true" /></span></a>)}</div>
      </Container>
    </section>
  )
}