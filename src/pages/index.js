import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from './components/nav'
import Footer from './components/footer'
import Blog from './components/blog'
import Header from './components/header'
import Test from './components/test'
import SectionLessImage from './components/section-lessImage'
import HighlightNews from './components/highlight-news'
import NewsGrid from './components/news-grid'
import NewsFlex from './components/news-flex'
import NewsGridSecond from './components/news-grid-second'
import NewsFlexSecond from './components/news-flex-seond'
import NewsFlexThird from './components/news-flex-third'
import NewsGridAdd from './components/news-grid-add'
import BackToTopButton from './components/BackToTopButton.'
import NewsFlexSecondLeft from './components/news-flex-seond-left'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <div
      className={`${inter.className}`}
    >
     <Nav/>
     <Header/> 
     {/* <Test/>  */}
     <HighlightNews/>
     <NewsFlexSecond/>
     <NewsFlexSecondLeft/>
     <NewsGridSecond/>
      <SectionLessImage/>
     <NewsFlex/>
     <Blog/>
     <NewsGridAdd/>
     {/* <NewsGrid/> */}
     {/* <NewsFlexThird/> */}
     <Footer/>
     <BackToTopButton/>
    </div>
  )
}
