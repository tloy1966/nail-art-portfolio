import { Maximize2 } from 'lucide-react'
import type { PortfolioItem } from '../../types/site'
import { ImageWithFallback } from '../common/ImageWithFallback'

interface PortfolioCardProps {
  item: PortfolioItem
  onOpen: (item: PortfolioItem, trigger: HTMLButtonElement) => void
}

export function PortfolioCard({ item, onOpen }: PortfolioCardProps) {
  return (
    <article className={`portfolio-card portfolio-card--${item.aspectRatio}`}>
      <button type="button" onClick={(event) => onOpen(item, event.currentTarget)} aria-label={`放大檢視作品：${item.title}`}>
        <ImageWithFallback src={item.image} alt={item.alt} label={item.title} />
        <span className="portfolio-card__shine" aria-hidden="true" />
        <span className="portfolio-card__overlay">
          <span className="portfolio-card__category">{item.category}</span>
          <strong>{item.title}</strong>
          <span className="portfolio-card__open"><Maximize2 aria-hidden="true" size={16} />檢視作品</span>
        </span>
      </button>
    </article>
  )
}