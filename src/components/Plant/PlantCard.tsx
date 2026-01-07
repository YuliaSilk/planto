import { Plant } from '@/features/plants/types/plant'

interface PlantCardProps {
  plant: Plant
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  return (
    <div>
      <h2>{plant.name}</h2>
    </div>
  )
}

export default PlantCard
