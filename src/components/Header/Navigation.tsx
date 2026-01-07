import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/plants-type', label: 'Plants Type' },
  { href: '/more', label: 'More' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  return (
    <nav className="flex items-center gap-15">
      {navItems.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className="text-2xl font-medium text-white/80 hover:text-white transition-colors duration-300"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
