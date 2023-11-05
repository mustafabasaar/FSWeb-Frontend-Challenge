import ModeSwitch from "./components/ModeSwitch";
import Header from "./components/Header";
import { useState } from "react";
import Hero from "./components/Hero";
const initialDAta = {
  name: "Almila Su",
  birthday: "24.03.1996",
  cityofresidence: "Ankara",
  education: "Hacettepe Ünv. Biyoloji Lisans,2016",
  preference: "Frontend, UI",
};
function App() {
  const [profildata, setProfildata] = useState(initialDAta);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
      />

      <ModeSwitch />
      <Header />
      <Hero profildata={profildata} />
    </>
  );
}

export default App;
