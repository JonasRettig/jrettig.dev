import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header highlight={"home"}/>
      <div className="w-4/6 flex flex-col justify-self-center mx-auto max-sm:w-11/12">
        <h1>Hallo mein Name ist Jonas</h1>
        <div>
          Ich liebe es zu programmieren und neue Dinge zu lernen.
        </div>
        <div>
          In letzter Zeit habe ich mich viel mit React und Next.js beschäftigt, eine Übersicht über meine Projekte findest du <a href="/projects">hier</a>.
        </div>
        <div>
          Andere Fähigkeiten von mir findest du <a href="/skills">hier</a>.
        </div>
        <div>
          Meinen Lebenslauf und andere Interssante Dinge über mich findest du <a href="/about">hier</a>.
        </div>
      </div>
      <Footer/>
    </div>
  );
}
