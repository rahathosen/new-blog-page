import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from './components/nav'
import Footer from './components/footer'
import Blog from './components/blog'
import FeaturePost from './components/featurepost'
import Header from './components/header'
import Divider from './components/divider'
import Test from './components/test'
import SectionLessImage from './components/section-lessImage'
import HighlightNews from './components/highlight-news'
import NewsGrid from './components/news-grid'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <div
      className={`${inter.className}`}
    >
     <Nav/>
     <Header/>  
     <HighlightNews/>
      <SectionLessImage/>
     <Blog/>
     <NewsGrid/>
     <Footer/>
    </div>
  )
}
