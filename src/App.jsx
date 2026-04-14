import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Section from './components/Section.jsx';
import HistoryCard from './components/HistoryCard.jsx';
import ThingsToSeeCard from './components/ThingsToSeeCard.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header title="Seattle" />
      <Hero />
      <Section title="History Facts">
        <HistoryCard title="Name Origin" content="Seattle got its name from Chief Seattle, a Native American leader who played a key role in the region during the mid-1800s. One interesting historical moment is the Great Seattle Fire, which destroyed much of the city’s downtown. Instead of rebuilding the same way, Seattle raised its street levels and rebuilt with brick and stone—shaping the modern city you see today."/>
        <HistoryCard title="Goldrush" content="During the Klondike Gold Rush, Seattle became the main supply hub for thousands of prospectors heading to Alaska and Canada. The city marketed itself as the “Gateway to the Gold Fields,” and this boom helped transform Seattle into a major economic center almost overnight."/>
      </Section>
      <Section title="Things to See">
        <ThingsToSeeCard title="Thing to see #1" content="Filler Content #1"/>
        <ThingsToSeeCard title="Thing to see #2" content="Filler Content #2"/>
        <ThingsToSeeCard title="Thing to see #3" content="Filler Content #3"/>
      </Section>
      <Footer />
    </>
  )
}

export default App
