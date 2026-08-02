import { Quote, Star } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'

export function TestimonialsSection() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <Container>
        <div id="testimonials-title"><SectionHeader eyebrow="KIND WORDS" title="來自顧客的話" /></div>
        <div className="testimonials-track">
          {siteConfig.testimonials.map((item) => (
            <article className="testimonial" key={item.name}>
              <Quote className="testimonial__quote" aria-hidden="true" />
              <div className="testimonial__stars" aria-label={`${item.rating} 顆星`}>{Array.from({ length: item.rating }, (_, index) => <Star key={index} aria-hidden="true" size={15} fill="currentColor" />)}</div>
              <p>{item.content}</p>
              <footer><span className="testimonial__avatar" aria-hidden="true">{item.avatar}</span><div><strong>{item.name}</strong><span>{item.service} · {item.date}</span></div></footer>
            </article>
          ))}
        </div>
        <p className="testimonials-notice">{siteConfig.testimonialsNotice}</p>
      </Container>
    </section>
  )
}