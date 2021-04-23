import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Player from '../component/player'
import Music_list from '../component/music_list'
import MainContent from '../component/mainContent'
import app from './_app'
export default function Home() {
  let player_props={
    img_src:"fig.jpg",
    singer:"Taylor Swift",
    music_name:"Love Story"
  }
  let music_list_props=[
    {music_name:"Red",singer:"Taylor Swift",time:"3:43"},
    {music_name:"Welcome to New York",singer:"Taylor Swift",time:"3:32"},
    {music_name:"Love Story",singer:"Taylor Swift",time:"3:31"}
  ]
  let main_props={
    album_fig_src:"fig.jpg",
    album_name:"Fearless",
    singer:"Taylor Swift",
    music_list:[
        {music_name:"Red",singer:"Taylor Swift",time:"3:43"},
        {music_name:"Welcome to New York",singer:"Taylor Swift",time:"3:32"},
        {music_name:"Love Story",singer:"Taylor Swift",time:"3:31"}
      ]
}


  return (
    <main>
        {MainContent(main_props)}
        {Player(player_props)}
    </main>
  )
}
