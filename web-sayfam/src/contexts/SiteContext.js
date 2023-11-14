import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocalStorage } from "../hooks/useLocalStorage";
export const SiteContext = createContext();

const initialDataeng = {
  baslik: {
    hero: "Creative thinker Minimalism lover",
    heroabout:
      "Hello! I'm Mustafa Başar, a graduate of the WorkinTech Full-Stack Developer Program. As a software developer, I possess proficiency in technologies such as Java, React,Redux,Axios,HTML,Css and Spring Boot, honed during my 6-month intensive training.",
    profile: "Profile",
    skills: "Skills",
    projects: "Projects",
    hireme: "Hire Me",
    profile: "Profile",
    aboutme: "About Me",
    birthday: "Birthday",
    city: "City of Residence",
    education: "Education",
    role: "Preference role",
    footer: "Let’s work together on your next product.",
    footerlink: "Personal Blog",
  },
};
const initialDatatr = {
  baslik: {
    hero: "Yaratıcı düşünür Minimalizm aşığı",
    heroabout:
      "Merhaba! Ben WorkinTech Full-Stack Developer Programı mezunu Mustafa Başar. Bir yazılım geliştiricisi olarak Java, React,Redux,Axios,HTML,Css ve Spring Boot gibi teknolojilere hakimiyetimi 6 ay süren yoğun eğitimim boyunca geliştirdim.",
    profile: "Profil",
    skills: "Yetenekler",
    projects: "Projeler",
    hireme: " Beni İşe Al",
    aboutme: "Hakkımda",
    birthday: "Doğum Günü",
    city: "İkametgah Şehri",
    education: "Eğitim Durumu",
    role: "Tercih Ettiği Rol",
    footer: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
    footerlink: "Kişisel Sayfam",
  },
};

export const SiteContextProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage("lang", "TÜRKÇE");
  const [theme, setTheme] = useLocalStorage("theme", "DARK");
  const [store, setStore] = useState(initialDataeng);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get(`https://654b8b475b38a59f28ef48e5.mockapi.io/Projects/`)
      .then((response) => {
        console.log("dataver", response);
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("istek sonlandırıldı");
      });
  }, []);

  useEffect(() => {
    if (lang === "ENG") {
      setStore(initialDatatr);
    }
    if (lang === "TÜRKÇE") {
      setStore(initialDataeng);
    }
  }, [lang]);

  return (
    <SiteContext.Provider
      value={{ lang, theme, setLang, setTheme, store, setStore, projects }}
    >
      {children}
    </SiteContext.Provider>
  );
};
