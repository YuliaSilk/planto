import Link from 'next/link'
import { BiMenuAltRight } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { BsHandbag } from 'react-icons/bs'

export function HeaderActions() {
  return (
    <div className="flex items-center gap-15 text-white/80 hover:text-white transition-cjljrs duration-300">
      <button>
        <BsSearch />
      </button>
      <Link href="#">
        <BsHandbag />
      </Link>
      <button>
        <BiMenuAltRight />
      </button>
    </div>
  )
}
