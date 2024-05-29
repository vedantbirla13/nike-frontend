import Hero from "./sections/Hero"
import PopularProducts from "./sections/PopularProducts"
import SuperQuality from "./sections/SuperQuality"
import Services from "./sections/Services"
import CustomerReviews from "./sections/CustomerReviews"
import SpecialOffers from "./sections/SpecialOffers"
import Subscribe from "./sections/Subscribe"
import Footer from "./sections/Footer"
import Nav from "./components/Nav"

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l  padding-b ">
        <Hero />
      </section>

      <section className="padding">
        <PopularProducts />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>

      <section className="padding-x py-10">
        <Services />
      </section>

      <section className="padding">
       <SpecialOffers />
      </section>

      <section className="padding">
      <CustomerReviews />
      </section>

      <section className="padding-x sm:py-24 py-10 w-full">
       <Subscribe />
      </section>

      <section className="padding-x padding-t pb-8 bg-black">
       <Footer />
      </section>
    </main>
  )
}

export default App