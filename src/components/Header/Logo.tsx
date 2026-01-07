import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={100}
        height={100}
        className="hover:rotate-10 transition-all duration-300 w-12 h-12"
      />
      <Image
        src="/logo-p.svg"
        alt="Logo"
        width={120}
        height={20}
        className="h-6 w-auto"
      />
    </div>
  )
}
