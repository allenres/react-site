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
      <Section title="History">
        <HistoryCard />
        <HistoryCard />
      </Section>
      <Section title="Things to See">
        <ThingsToSeeCard />
        <ThingsToSeeCard />
        <ThingsToSeeCard />
      </Section>
      <Footer />
    </>
  )
}

export default App
