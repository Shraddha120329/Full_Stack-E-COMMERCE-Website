import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VarticleCardProduct from '../components/VarticleCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"airpodes"} heading={"Best Airpodes"}/>
      <HorizontalCardProduct category={"watches"} heading={"Popular Watches"}/>

      <VarticleCardProduct category={"mobiles"} heading={"Mobiles"}/>
      <VarticleCardProduct category={"mouse"} heading={"Mouse"}/>
      <VarticleCardProduct category={"televisions"} heading={"Televisions"}/>
      <VarticleCardProduct category={"camera"} heading={"Camera & Photography"}/>
      <VarticleCardProduct category={"earphones"} heading={" Wired Earphones"}/>
      <VarticleCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
      <VarticleCardProduct category={"refrigerator"} heading={"Refrigerator"}/>
      <VarticleCardProduct category={"trimmers"} heading={"Trimmers"}/>
    </div>
  )
}

export default Home
