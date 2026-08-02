import { siteConfig } from '../../data/siteConfig'
import { Container } from '../common/Container'
import { SiteIcon } from '../common/SiteIcon'

export function BrandFeaturesSection() {
  return (
    <section className="brand-features" id="features" aria-labelledby="features-title">
      <Container>
        <div className="brand-features__intro">
          <p className="eyebrow">OUR APPROACH</p>
          <h2 id="features-title">細節，定義一切</h2>
          <p>從設計溝通到最後一筆光澤，讓美感與專業成為同一件事。</p>
        </div>
        <ol className="brand-features__list">
          {siteConfig.brandFeatures.map((feature) => (
            <li key={feature.number}>
              <span className="brand-features__number">{feature.number}</span>
              <SiteIcon name={feature.icon} size={23} strokeWidth={1.4} />
              <div><h3>{feature.title}</h3><p>{feature.description}</p></div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}