import { Check } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'
import { Container } from '../common/Container'
import { ImageWithFallback } from '../common/ImageWithFallback'

export function AboutSection() {
  const { about } = siteConfig
  return (
    <section className="about-section" id="about">
      <Container className="about-section__grid">
        <div className="about-visual">
          <div className="about-visual__image"><ImageWithFallback src={about.image} alt={about.imageAlt} label={about.name} /></div>
          <blockquote>“{about.philosophy}”</blockquote>
        </div>
        <div className="about-content">
          <p className="eyebrow">{about.eyebrow}</p><h2>{about.title}</h2>
          <div className="about-content__identity"><h3>{about.name}</h3><span>{about.role}</span></div>
          <p className="about-content__bio">{about.bio}</p>
          <div className="about-content__columns">
            <div><h4>專業經歷</h4><ul>{about.experience.map((item) => <li key={item}><Check aria-hidden="true" size={15} />{item}</li>)}</ul></div>
            <div><h4>擅長風格</h4><ul>{about.specialties.map((item) => <li key={item}><Check aria-hidden="true" size={15} />{item}</li>)}</ul></div>
          </div>
          <div className="about-content__care"><div><h4>衛生管理</h4><p>{about.hygiene}</p></div><div><h4>使用產品</h4><p>{about.products}</p></div></div>
          <div className="about-stats">{about.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
          <p className="about-signature">{about.signature}</p>
        </div>
      </Container>
    </section>
  )
}