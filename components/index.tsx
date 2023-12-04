
'use client'
import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "./Header";
import Hero from "./Hero";
import styles from "../styles/Home.module.css";
import { Experience, PageInfo, Skill, Project, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperience";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import About from "./About";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";
import Script from "next/script";


type Props = {
    pageInfo: PageInfo[];
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
  };
  

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {

      return (
      <div
        className="bg-lightBackground text-darkBlack h-screen snap-y snap-mandatory
      overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80"
      >
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <title>{"jk's Portfolio"}</title>
        </Head>
  
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LV1LN9VBT0"
          strategy="afterInteractive"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'G-LV1LN9VBT0')`}
          ;
        </Script>
  
        {/* Header */}
        <Header  />
  
        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>
  
        {/* About */}
        <section id="about" className="snap-center">
          <About  />
        </section>
  
        {/* Experiences */}
        {/* <section id="experience" className="snap-center">
          <WorkExperience  />
        </section> */}
  
        {/* Skills */}
        <section id="skills" className="snap-start">
          <Skills  />
        </section>
  
        {/* Projects */}
        <section id="projects" className="snap-start">
          <Projects/>
        </section>
  
        {/* Contact */}
        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
  
        <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <div className="h-10 w-10 bg-darkGreen/80 rounded-full flex items-center justify-center">
                <HomeIcon className="h-7 w-17 pb-0.5 hover:grayscale-100 text-white animate-pulse" />
              </div>
            </div>
          </footer>
        </Link>
      </div>
    );
  };
  
export default Home;


  
  
// export const getServerSideProps: GetServerSideProps <Props> = async () => {
//     const pageInfo:PageInfo = await fetchPageInfo();
//     const experiences:Experience[] = await fetchExperiences();
//     const skills:Skill[] = await fetchSkills();
//     const projects:Project[] = await fetchProjects();
//     const socials:Social[] = await fetchSocials();
//     console.log(socials)
//     return {
//       props: {
//         pageInfo,
//         experiences,
//         skills,
//         projects,
//         socials,
//       },
//       revalidate: 10,
//     };
// };


