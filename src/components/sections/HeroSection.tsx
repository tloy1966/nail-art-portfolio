import { ArrowDown } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { ImageWithFallback } from '../common/ImageWithFallback'

export function HeroSection() {
  const { hero, site } = siteConfig
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-section__texture" aria-hidden="true" />
      <Container className="hero-section__grid">
        <div className="hero-section__copy">
          <p className="eyebrow hero-section__eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title">{hero.title}</h1>
          <p className="hero-section__description">{hero.description}</p>
          <div className="hero-section__actions">
            <Button {...hero.primaryButton} />
            <Button {...hero.secondaryButton} variant="secondary" />
          </div>
          <p className="hero-section__signature">{site.tagline}</p>
        </div>
        <div className="hero-visual">
          <span className="hero-visual__index" aria-hidden="true">01</span>
          <div className="hero-visual__frame">
            <ImageWithFallback src={hero.image} alt={hero.imageAlt} label={site.name} loading="eager" fetchPriority="high" />
          </div>
          <div className="hero-visual__label"><span aria-hidden="true" />{hero.floatingLabel}</div>
          <p className="hero-visual__caption">Quiet luxury<br />for your fingertips</p>
        </div>
      </Container>
      <a className="hero-scroll" href="#features" aria-label="向下瀏覽品牌特色"><span>Scroll</span><ArrowDown aria-hidden="true" size={15} /></a>
    </section>
  )
}