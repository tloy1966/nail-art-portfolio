import { useMemo, useRef, useState } from 'react'
import { siteConfig } from '../../data/siteConfig'
import type { PortfolioItem } from '../../types/site'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { PortfolioLightbox } from '../lightbox/PortfolioLightbox'
import { PortfolioCard } from './PortfolioCard'

export function PortfolioSection() {
  const { portfolio } = siteConfig
  const [category, setCategory] = useState('全部')
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const filteredItems = useMemo(() => category === '全部' ? portfolio.items : portfolio.items.filter((item) => item.category === category), [category, portfolio.items])
  const activeIndex = activeItem ? filteredItems.findIndex((item) => item.id === activeItem.id) : -1

  const open = (item: PortfolioItem, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger
    setActiveItem(item)
  }

  const close = () => {
    setActiveItem(null)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }

  return (
    <section className="portfolio-section" id="portfolio">
      <Container>
        <SectionHeader eyebrow={portfolio.eyebrow} title={portfolio.title} description={portfolio.description} />
        <div className="portfolio-filters" aria-label="作品分類篩選">
          {portfolio.categories.map((item) => (
            <button key={item} type="button" className={category === item ? 'active' : ''} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>
          ))}
        </div>
        <div className="portfolio-grid" key={category} aria-live="polite">
          {filteredItems.map((item) => <PortfolioCard key={item.id} item={item} onOpen={open} />)}
        </div>
      </Container>
      {activeItem && activeIndex >= 0 && (
        <PortfolioLightbox items={filteredItems} activeIndex={activeIndex} onChange={(index) => setActiveItem(filteredItems[index] ?? null)} onClose={close} />
      )}
    </section>
  )
}