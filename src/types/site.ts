export type IconName =
  | 'sparkles'
  | 'shield'
  | 'gem'
  | 'brush'
  | 'palette'
  | 'heart'
  | 'droplets'
  | 'hand'
  | 'message'
  | 'calendar'
  | 'map-pin'

export type AspectRatio = 'portrait' | 'landscape' | 'square' | 'tall'

export interface LinkConfig {
  label: string
  href: string
  external?: boolean
}

export interface SiteInfo {
  name: string
  englishName: string
  logoText: string
  tagline: string
  footerDescription: string
  copyrightText: string
}

export interface NavigationItem {
  label: string
  href: string
}

export interface HeroConfig {
  eyebrow: string
  title: string
  description: string
  image: string
  imageAlt: string
  primaryButton: LinkConfig
  secondaryButton: LinkConfig
  floatingLabel: string
}

export interface BrandFeature {
  number: string
  title: string
  description: string
  icon: IconName
}

export interface PortfolioItem {
  id: string
  title: string
  category: string
  description: string
  image: string
  alt: string
  tags: string[]
  featured: boolean
  aspectRatio: AspectRatio
}

export interface PortfolioConfig {
  eyebrow: string
  title: string
  description: string
  categories: string[]
  items: PortfolioItem[]
}

export interface FeaturedDesign {
  id: string
  number: string
  title: string
  concept: string
  occasion: string
  palette: string
  duration: string
  image: string
  alt: string
  tags: string[]
}

export interface ServiceItem {
  icon: IconName
  title: string
  description: string
  price: string
  duration: string
  note: string
}

export interface AboutStat {
  value: string
  label: string
}

export interface AboutConfig {
  eyebrow: string
  title: string
  name: string
  role: string
  bio: string
  philosophy: string
  experience: string[]
  specialties: string[]
  hygiene: string
  products: string
  image: string
  imageAlt: string
  signature: string
  stats: AboutStat[]
}

export interface BookingStep {
  number: string
  title: string
  description: string
  icon: IconName
}

export interface Testimonial {
  name: string
  rating: number
  content: string
  service: string
  date: string
  avatar: string
}

export interface ContactConfig {
  eyebrow: string
  title: string
  description: string
  lineUrl: string
  instagramUrl: string
  facebookUrl: string
  email: string
  hours: string[]
  location: string
  notes: string[]
}

export interface SocialLink {
  platform: 'LINE' | 'Instagram' | 'Facebook' | 'Email'
  label: string
  href: string
}

export interface InstagramItem {
  image: string
  alt: string
}

export interface InstagramConfig {
  account: string
  title: string
  items: InstagramItem[]
}

export interface SeoConfig {
  title: string
  description: string
  canonicalUrl: string
  ogImage: string
  themeColor: string
}

export interface SiteConfig {
  site: SiteInfo
  navigation: NavigationItem[]
  hero: HeroConfig
  brandFeatures: BrandFeature[]
  portfolio: PortfolioConfig
  featuredDesigns: FeaturedDesign[]
  services: ServiceItem[]
  servicesNote: string
  about: AboutConfig
  bookingSteps: BookingStep[]
  testimonials: Testimonial[]
  testimonialsNotice: string
  instagram: InstagramConfig
  contact: ContactConfig
  socialLinks: SocialLink[]
  seo: SeoConfig
}