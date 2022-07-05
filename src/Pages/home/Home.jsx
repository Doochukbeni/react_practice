import EmailList from '../../components/emailList/EmailList';
import Featured from '../../components/featured/Featured';
import Footer from '../../components/footer/Footer';
import FeaturedHotels from '../../components/featuredHotels/FeaturedHotels';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import PropertyList from '../../components/propertyList/PropertyList';
import './home.css';

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Featured />
        <h1 className='homeTitle'>Browse by property type</h1>
        <PropertyList />
        <h1 className='homeTitle'>Home Guests love</h1>
        <FeaturedHotels />
        <EmailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
