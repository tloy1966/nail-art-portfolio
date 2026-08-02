export const getAssetPath = (path: string): string => {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path

  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${normalizedPath}`
}