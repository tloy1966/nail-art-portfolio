import { useState } from 'react'
import { ImageOff } from 'lucide-react'
import { getAssetPath } from '../../utils/getAssetPath'

interface ImageWithFallbackProps {
  src: string
  alt: string
  label?: string
  className?: string
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
}

export function ImageWithFallback({ src, alt, label = alt, className = '', loading = 'lazy', fetchPriority = 'auto' }: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`image-fallback ${className}`.trim()} role="img" aria-label={`${alt}，圖片暫時無法顯示`}>
        <ImageOff aria-hidden="true" />
        <span>{label}</span>
      </div>
    )
  }

  return (
    <img
      className={className}
      src={getAssetPath(src)}
      alt={alt}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      onError={() => setFailed(true)}
    />
  )
}