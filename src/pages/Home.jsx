import React from 'react'
import Bannar from '../components/Bannar'
import BrandCard from '../components/BrandCard'
import Trending from '../components/Treanding'
import BestSale from '../components/BestSale'
import Bannar2 from '../components/Bannar2'
import Reviews from '../components/Reviews'
import ProCards from '../components/ProCards'
import ChooseUs from '../components/ChooseUs'

function Home() {
  return (
    <div>
   <Bannar/>
   <BrandCard/>
   <Trending/>
   <BestSale/>
   <Bannar2/>
   <Reviews/>
   <ProCards/>
   <ChooseUs/>
    </div>
  )
}

export default Home