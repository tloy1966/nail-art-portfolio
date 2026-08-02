import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { PortfolioItem } from '../../types/site'
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock'
import { ImageWithFallback } from '../common/ImageWithFallback'

interface PortfolioLightboxProps {
  items: PortfolioItem[]
  activeIndex: number
  onChange: (index: number) => void
  onClose: () => void
}

export function PortfolioLightbox({ items, activeIndex, onChange, onClose }: PortfolioLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const touchStart = useRef<number | null>(null)
  const item = items[activeIndex]
  useBodyScrollLock(true)

  const previous = () => onChange((activeIndex - 1 + items.length) % items.length)
  const next = () => onChange((activeIndex + 1) % items.length)

  useEffect(() => {
    closeRef.current?.focus()
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') previous()
      if (event.key === 'ArrowRight') next()
      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button, a[href]'))
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  })

  if (!item) return null

  return (
    <div className="lightbox-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div ref={dialogRef} className="lightbox" role="dialog" aria-modal="true" aria-labelledby="lightbox-title" aria-describedby="lightbox-description">
        <button ref={closeRef} className="lightbox__close icon-button" type="button" onClick={onClose} aria-label="關閉作品預覽"><X aria-hidden="true" /></button>
        <div
          className="lightbox__media"
          onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null }}
          onTouchEnd={(event) => {
            if (touchStart.current === null) return
            const distance = (event.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current
            if (Math.abs(distance) > 50) {
              if (distance > 0) previous()
              else next()
            }
            touchStart.current = null
          }}
        >
          <ImageWithFallback src={item.image} alt={item.alt} label={item.title} loading="eager" />
          <button className="lightbox__arrow lightbox__arrow--left" type="button" onClick={previous} aria-label="上一張作品"><ChevronLeft aria-hidden="true" /></button>
          <button className="lightbox__arrow lightbox__arrow--right" type="button" onClick={next} aria-label="下一張作品"><ChevronRight aria-hidden="true" /></button>
        </div>
        <div className="lightbox__content">
          <div className="lightbox__meta"><span>{item.category}</span><span>{String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span></div>
          <h2 id="lightbox-title">{item.title}</h2>
          <p id="lightbox-description">{item.description}</p>
          <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </div>
      </div>
    </div>
  )
}