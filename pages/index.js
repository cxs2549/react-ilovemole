import Layout from "../components/Layout"

const Hero = () => (
  <div id="hero" className="grid place-items-center">
    <div className="bg-gray-500 border-t-4 border-b-4 border-green-700 flex flex-col gap-3 items-center justify-center max-w-[500px] w-full shadow bg-opacity-30 py-4 px-2 text-center">
      <a href="https://la.eater.com/maps/most-important-jonathan-gold-reviews-map/guelaguetza-restaurante">
        <h1 className="text-white drop-shadow font-bold hover:underline">
          "...the best Oaxacan restaurant in the country"
        </h1>
      </a>
      <p className="text-white drop-shadow-md">Jonathan Gold</p>
    </div>
  </div>
)

const Home = () => {
  return (
    <Layout title="Guelaguetzal">
      <Hero />
    </Layout>
  )
}
export default Home
