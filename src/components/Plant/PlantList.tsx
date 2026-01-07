import { Plant } from '@/features/plants/types/plant'
import PlantCard from './PlantCard'

interface PlantListProps {
  plants: Plant[]
}

const PlantList: React.FC<PlantListProps> = ({ plants }) => {
  return (
    <div>
      {plants.map(plant => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  )
}

export default PlantList
