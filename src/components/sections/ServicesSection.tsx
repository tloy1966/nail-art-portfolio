import { siteConfig } from '../../data/siteConfig'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { SiteIcon } from '../common/SiteIcon'

export function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <Container>
        <SectionHeader eyebrow="SERVICES & PRICE" title="服務項目" description="每一次服務都保留充裕時間，從甲況評估、設計討論到細節完成，不急著趕下一位客人。" />
        <div className="services-grid">
          {siteConfig.services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div className="service-card__top"><span>{String(index + 1).padStart(2, '0')}</span><SiteIcon name={service.icon} size={25} strokeWidth={1.35} /></div>
              <h3>{service.title}</h3><p>{service.description}</p>
              <div className="service-card__details"><strong>{service.price}</strong><span>{service.duration}</span></div>
              <small>{service.note}</small>
            </article>
          ))}
        </div>
        <p className="services-note">{siteConfig.servicesNote}</p>
      </Container>
    </section>
  )
}