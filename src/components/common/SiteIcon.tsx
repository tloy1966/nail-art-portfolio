import {
  Brush, CalendarDays, Droplets, Gem, Hand, Heart, MapPin,
  MessageCircle, Palette, ShieldCheck, Sparkles,
} from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import type { IconName } from '../../types/site'

const icons: Record<IconName, React.ComponentType<LucideProps>> = {
  sparkles: Sparkles,
  shield: ShieldCheck,
  gem: Gem,
  brush: Brush,
  palette: Palette,
  heart: Heart,
  droplets: Droplets,
  hand: Hand,
  message: MessageCircle,
  calendar: CalendarDays,
  'map-pin': MapPin,
}

export function SiteIcon({ name, ...props }: LucideProps & { name: IconName }) {
  const Icon = icons[name]
  return <Icon aria-hidden="true" {...props} />
}