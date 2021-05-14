import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Topbar from '../component/topbar'
import Header from '../component/header_test'
import Hidden_content from '../component/header_hidden_content'
import Slide_show from '../component/slide_show'
import Home_bottom from '../component/home_bottom'
import Goods_list from '../component/goods_list'
const props=[
  {src:"phone1.png",name:"K40 Pro 系列",price:"2799起"},
  {src:"phone2.png",name:"K40 Pro 系列",price:"2799起"},
  {src:"phone3.png",name:"K40 Pro 系列",price:"2799起"},
  {src:"phone4.png",name:"K40 Pro 系列",price:"2799起"},
  {src:"phone5.png",name:"K40 Pro 系列",price:"2799起"},
  // {src:"phone6.png",name:"K40 Pro 系列",price:"2799起"}
]
function Home({data}) {
  return (
    <div>
        <Topbar/>
        <Header/>
        <Slide_show/>
        <Home_bottom/>
        {Goods_list(props)}
        {Goods_list(props)}
    </div>
 
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  let data={name:"site"}
  // Pass data to the page via props
  return {  props:{data}}
}

export default Home