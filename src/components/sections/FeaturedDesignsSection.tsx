import { siteConfig } from '../../data/siteConfig'
import { Container } from '../common/Container'
import { ImageWithFallback } from '../common/ImageWithFallback'
import { SectionHeader } from '../common/SectionHeader'

export function FeaturedDesignsSection() {
  return (
    <section className="featured-section" id="featured">
      <Container>
        <SectionHeader eyebrow="FEATURED STORIES" title="設計特寫" description="不只記錄成品，也記錄每一款設計背後的光線、色彩與場合。" />
        <div className="featured-list">
          {siteConfig.featuredDesigns.map((design, index) => (
            <article className={`featured-item featured-item--${index + 1}`} key={design.id}>
              <div className="featured-item__media"><ImageWithFallback src={design.image} alt={design.alt} label={design.title} /></div>
              <div className="featured-item__content">
                <span className="featured-item__number" aria-hidden="true">{design.number}</span>
                <p className="eyebrow">CURATED DESIGN</p>
                <h3>{design.title}</h3>
                <p className="featured-item__concept">{design.concept}</p>
                <dl>
                  <div><dt>適合場合</dt><dd>{design.occasion}</dd></div>
                  <div><dt>色系</dt><dd>{design.palette}</dd></div>
                  <div><dt>製作時間</dt><dd>{design.duration}</dd></div>
                </dl>
                <div className="tag-list">{design.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}