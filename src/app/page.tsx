'use client'

import usePlants from '@/features/plants/hooks/usePlants'
import PlantList from '@/components/Plant/PlantList'

const HomePage = () => {
  const { plants, loading, error } = usePlants()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h1>My Plants</h1>
      <PlantList plants={plants} />
    </div>
  )
}

export default HomePage
