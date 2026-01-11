import Button from '../ui/Button'
import { IoPlayCircleOutline } from 'react-icons/io5'

export default function Hero() {
  return (
    <section className="py-15 pt-66.5 h-190">
      <div>
        <h1 className="font-medium text-9xl  text-white/72  w-230">
          Breath Natureal
        </h1>
        <p className="font-medium text-2xl text-white/72 pt-4 w-230">
          Create your own green sanctuary. Discover a curated collection of
          indoor plants designed to bring life, fresh air, and harmony to your
          living space.
        </p>
        <div className="flex gap-5 mt-5">
          <Button className="font-normal text-[28px] opacity-72">
            Explore
          </Button>
          <Button className="w-16 h-16  text-white/72 border-none flex gap-2 items-center">
            <IoPlayCircleOutline size={64} className="opacity-72" />

            <span className="font-normal text-xl text-white/72">
              Live demo...
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
