import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import type { NavigationItem } from '../../types/site'
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock'
import { useEscapeKey } from '../../hooks/useEscapeKey'
import { Button } from '../common/Button'

interface MobileMenuProps {
  open: boolean
  navigation: NavigationItem[]
  activeSection: string
  bookingUrl: string
  onClose: () => void
  triggerRef: React.RefObject<HTMLButtonElement | null>
}

export function MobileMenu({ open, navigation, activeSection, bookingUrl, onClose, triggerRef }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  useBodyScrollLock(open)
  useEscapeKey(onClose, open)

  useEffect(() => {
    if (open) closeRef.current?.focus()
  }, [open])

  const closeAndRestoreFocus = () => {
    onClose()
    requestAnimationFrame(() => triggerRef.current?.focus())
  }

  if (!open) return null

  return (
    <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="網站導覽選單">
      <div className="mobile-menu__top">
        <span className="logo">Lumiere</span>
        <button ref={closeRef} className="icon-button" type="button" onClick={closeAndRestoreFocus} aria-label="關閉導覽選單">
          <X aria-hidden="true" />
        </button>
      </div>
      <nav aria-label="手機版主要導覽">
        <ol>
          {navigation.map((item, index) => {
            const id = item.href.replace('#', '')
            return (
              <li key={item.href}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <a className={activeSection === id ? 'active' : ''} href={item.href} onClick={closeAndRestoreFocus}>{item.label}</a>
              </li>
            )
          })}
        </ol>
      </nav>
      <Button label="立即預約" href={bookingUrl} external className="mobile-menu__cta" />
      <p className="mobile-menu__note">By appointment only · Taipei</p>
    </div>
  )
}