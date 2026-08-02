import { useEffect, useMemo, useRef, useState } from 'react'
import { Menu } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'
import { useActiveSection } from '../../hooks/useActiveSection'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const sectionIds = useMemo(() => siteConfig.navigation.map((item) => item.href.slice(1)), [])
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <>
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <Container className="site-header__inner">
          <a className="logo" href="#home" aria-label={`${siteConfig.site.name}首頁`}>
            {siteConfig.site.logoText}<small>Nail Atelier</small>
          </a>
          <nav className="desktop-nav" aria-label="主要導覽">
            {siteConfig.navigation.map((item) => {
              const id = item.href.slice(1)
              return <a key={item.href} href={item.href} className={activeSection === id ? 'active' : ''}>{item.label}</a>
            })}
          </nav>
          <Button label="立即預約" href={siteConfig.contact.lineUrl} external className="header-booking" />
          <button ref={menuButtonRef} className="menu-button" type="button" onClick={() => setMenuOpen(true)} aria-label="開啟導覽選單" aria-expanded={menuOpen}>
            <Menu aria-hidden="true" />
          </button>
        </Container>
      </header>
      <MobileMenu open={menuOpen} navigation={siteConfig.navigation} activeSection={activeSection} bookingUrl={siteConfig.contact.lineUrl} onClose={() => setMenuOpen(false)} triggerRef={menuButtonRef} />
    </>
  )
}