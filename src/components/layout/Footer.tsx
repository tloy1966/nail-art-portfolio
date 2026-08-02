import { ArrowUp, Camera, Mail, MessageCircle, Users } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'
import type { SocialLink } from '../../types/site'
import { Container } from '../common/Container'

const socialIcons = { LINE: MessageCircle, Instagram: Camera, Facebook: Users, Email: Mail }

function SocialLinkItem({ item }: { item: SocialLink }) {
  const Icon = socialIcons[item.platform]
  return (
    <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`${item.label}（在新分頁開啟）`}>
      <Icon aria-hidden="true" size={19} /><span>{item.label}</span>
    </a>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <a className="logo logo--footer" href="#home">{siteConfig.site.logoText}<small>Nail Atelier</small></a>
            <p>{siteConfig.site.footerDescription}</p>
          </div>
          <div>
            <h2>Quick links</h2>
            <nav aria-label="頁尾導覽">{siteConfig.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
          </div>
          <div>
            <h2>Contact</h2>
            <p>{siteConfig.contact.location}</p>
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
          </div>
          <div>
            <h2>Follow</h2>
            <div className="footer-socials">{siteConfig.socialLinks.map((item) => <SocialLinkItem key={item.platform} item={item} />)}</div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} {siteConfig.site.copyrightText}</p>
          <a className="back-to-top" href="#home"><ArrowUp aria-hidden="true" size={16} />回到頂端</a>
        </div>
      </Container>
    </footer>
  )
}