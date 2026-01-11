import { HeaderActions } from '../Header/HeaderActions'
import { Navigation } from '../Header/Navigation'
import { Logo } from '@/components/Header/Logo'

export function Header() {
  return (
    <header className="h-48 flex justify-between items-center p-20 fixed top-0 left-0 right-0">
      <Logo />
      <Navigation />
      <HeaderActions />
    </header>
  )
}
