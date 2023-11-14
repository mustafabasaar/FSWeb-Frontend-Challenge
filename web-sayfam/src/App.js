import ModeSwitch from "./components/ModeSwitch";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useContext } from "react";
import { SiteContext } from "./contexts/SiteContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialDataTR = {
  name: "Mustafa Başar",
  birthday: "11.09.1996",
  cityofresidence: "İzmir",
  education: "Dokuz Eylul Üni. Endüstri Müh",
  preference: "FullStack Developer",
  mail: "mustafabasaaar@gmail.com",
  abouttextone:
    "Problem çözme becerilerim karmaşık projelere etkili çözümler sunmamı sağlıyor. Takım çalışması, iletişim ve liderlik becerileri ile uyumlu bir çalışma ortamı yaratmayı hedefliyorum.",
  abouttexttwo:
    "Müşteri odaklı yaklaşım ve çözüm odaklı düşünce yapısıyla başarılı projelere katkıda bulunmayı hedefliyorum.",
};
const initialDataENG = {
  name: "Mustafa Basar",
  birthday: "11.09.1996",
  cityofresidence: "Izmir",
  education: "Dokuz Eylul Uni. Industrial Eng.",
  preference: "FullStack Developer",
  mail: "mustafabasaaar@gmail.com",
  abouttextone:
    "My problem-solving skills enable me to provide effective solutions for complex projects. I aim to create a harmonious work environment through teamwork, communication, and leadership skills.",
  abouttextwo:
    "With a customer-centric approach and a solution-oriented mindset, I aspire to contribute to successful projects.",
};
function App() {
  const [profildata, setProfildata] = useState(initialDataTR);
  const { theme, lang } = useContext(SiteContext);

  useEffect(() => {
    if (lang === "ENG") {
      setProfildata(initialDataTR);
    }
    if (lang === "TÜRKÇE") {
      setProfildata(initialDataENG);
    }
  }, [lang]);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
      />
      <div className={theme === "LIGHT" ? "dark-mode" : ""}>
        <ModeSwitch />
        <Header />
        <Hero profildata={profildata} />
        <Skills />
        <Profile profildata={profildata} />
        <Projects />
      </div>
      <Footer profildata={profildata} />
      <ToastContainer className="custom-toast-container" />
    </>
  );
}

export default App;
