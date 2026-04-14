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
        <HistoryCard title="History #1" content="Filler Content #1"/>
        <HistoryCard title="History #2" content="Filler Content #2"/>
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
