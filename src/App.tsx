import './App.css'
import LearnAboutMintPare from './components/LearnAboutMintPare'
import AboutPresale from './components/about/AboutPresale'
import Banner from './components/banner/Banner'
import SalesSection from './components/sales/SalesSection'

function App() {
  return (
    <div className="min-h-screen">
      <Banner />
      <div className="my-40">
        <SalesSection />
      </div>
      <LearnAboutMintPare />
      <div className="mt-20 lg:mt-60">
        <AboutPresale />
      </div>
    </div>
  )
}

export default App
