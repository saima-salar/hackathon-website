import React from 'react'
import Header from "./components/Header";
import Hero from "./components/Hero";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";
import TopPicks from "./components/TopPicks";
import Heading from "./components/Heading";
import NewArrival from "./components/NewArrival";
import Blogs from "@/app/components/Blog"
import Instagram from "./components/Instagram";



const page = () => {
  return (
    <div>

<Header />
        <Hero />
        <CardSection />
        <Heading />
        <TopPicks />
        <NewArrival />
        <Blogs />
        <Instagram />
        <Footer />

    </div>
  )
}

export default page
