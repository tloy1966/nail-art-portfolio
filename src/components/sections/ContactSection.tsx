import { Clock3, Mail, MapPin, MessageCircle, Send } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'
import { Button } from '../common/Button'
import { Container } from '../common/Container'

export function ContactSection() {
  const { contact } = siteConfig
  return (
    <section className="contact-section" id="contact">
      <Container className="contact-section__inner">
        <div className="contact-section__copy"><p className="eyebrow">{contact.eyebrow}</p><h2>{contact.title}</h2><p>{contact.description}</p><div className="contact-section__actions"><Button label="加入 LINE" href={contact.lineUrl} external icon={<MessageCircle aria-hidden="true" size={18} />} /><Button label="Instagram 私訊" href={contact.instagramUrl} external variant="secondary" icon={<Send aria-hidden="true" size={18} />} /><Button label="寄送 Email" href={`mailto:${contact.email}`} external variant="text" icon={<Mail aria-hidden="true" size={18} />} /></div></div>
        <div className="contact-details">
          <div><Clock3 aria-hidden="true" /><div><h3>營業時間</h3>{contact.hours.map((line) => <p key={line}>{line}</p>)}</div></div>
          <div><MapPin aria-hidden="true" /><div><h3>工作室地區</h3><p>{contact.location}</p></div></div>
          <div className="contact-details__notes"><MessageCircle aria-hidden="true" /><div><h3>預約注意事項</h3><ul>{contact.notes.map((note) => <li key={note}>{note}</li>)}</ul></div></div>
        </div>
      </Container>
    </section>
  )
}