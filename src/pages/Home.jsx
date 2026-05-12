import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Support from '../components/Support';

const Home = ({ isDarkMode }) => {
  return (
    <main>
      <Hero isDarkMode={isDarkMode} />
      {/* We can keep a minimal version or just a link to services here if needed, 
          but the user said "move to separate page". 
          I'll keep it for now but maybe later replace it with a CTA. 
          Actually, I'll remove it from Home to fulfill the "move" request. */}
      <Portfolio />
      <Testimonials />
      <Support />
    </main>
  );
};

export default Home;
