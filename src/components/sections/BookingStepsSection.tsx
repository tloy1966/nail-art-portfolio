import { siteConfig } from '../../data/siteConfig'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { SiteIcon } from '../common/SiteIcon'

export function BookingStepsSection() {
  return (
    <section className="booking-section" id="booking">
      <Container>
        <SectionHeader eyebrow="HOW TO BOOK" title="預約流程" description="四個簡單步驟，開始你的專屬設計。" align="center" />
        <ol className="booking-timeline">
          {siteConfig.bookingSteps.map((step) => (
            <li key={step.number}>
              <span className="booking-timeline__icon"><SiteIcon name={step.icon} size={22} strokeWidth={1.5} /></span>
              <span className="booking-timeline__number">STEP {step.number}</span>
              <h3>{step.title}</h3><p>{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}