import type { ButtonProps } from '@/features/plants/types/button'
export default function Button({
  children,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`h-16 w-54 rounded-xl border-2 border-white/50 transition hover:bg-white/10 ${className}`}
    >
      {children}
    </button>
  )
}
