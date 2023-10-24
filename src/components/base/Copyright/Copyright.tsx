import type { CopyrightProps } from './Copyright_d'

const Copyright = ({ type, className }: CopyrightProps) => {
  const getText = () => {
    const year = new Date().getFullYear()
    const base = `Phoenix AI Labs ${year}`

    if (type === 'long') return `${base} • All rights reserved`

    return base
  }

  return <span className={className}>&copy; {getText()}</span>
}

export default Copyright
