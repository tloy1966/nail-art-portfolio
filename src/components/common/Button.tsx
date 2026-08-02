import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import type { LinkConfig } from '../../types/site'

interface ButtonProps extends LinkConfig {
  variant?: 'primary' | 'secondary' | 'text'
  icon?: ReactNode
  className?: string
}

export function Button({ label, href, external, variant = 'primary', icon, className = '' }: ButtonProps) {
  const isExternal = external || href.startsWith('http') || href.startsWith('mailto:')

  return (
    <a
      className={`button button--${variant} ${className}`.trim()}
      href={href || '#contact'}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span>{label}</span>
      {icon ?? (isExternal && <ArrowUpRight aria-hidden="true" size={17} />)}
      {isExternal && <span className="sr-only">（在新分頁開啟）</span>}
    </a>
  )
}