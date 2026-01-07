import { HeaderActions } from '../Header/HeaderActions'
import { Navigation } from '../Header/Navigation'
import { Logo } from '@/components/Header/Logo'

export function Header() {
  return (
    <header className="flex justify-between items-center p-15 px-20">
      <Logo />
      <Navigation />
      <HeaderActions />
    </header>
  )
}
