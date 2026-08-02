interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) {
  return (
    <header className={`section-header section-header--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-header__description">{description}</p>}
    </header>
  )
}