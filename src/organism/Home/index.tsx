import FeaturedPosts from '../../molecule/FeaturedPosts'
import Header from '../../atom/Header'
import TravelGrid from '../../molecule/TravelGrid'
import BioCard from '../../atom/BioCard'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import CarouselHome from '../../atom/CarouselHome'

const Home = () => {

  return (
    <ThemeProvider theme={theme}>
      <CarouselHome />
      <FeaturedPosts />
      <Header id={"travel"} text={"Travel Guides"} />
      <TravelGrid />
      <BioCard />
    </ThemeProvider>

  )
}

export default Home
