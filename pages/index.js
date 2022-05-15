import Layout from "../components/Layout"
import { Fade } from "react-slideshow-image"

const Hero = () => (
  <div id="hero" className="grid place-items-center">
    <div className="bg-gray-700  flex flex-col gap-3 items-center justify-center max-w-[500px] w-full h-full bg-opacity-30 py-4 px-2 text-center">
      <a href="https://la.eater.com/maps/most-important-jonathan-gold-reviews-map/guelaguetza-restaurante">
        <h1 className="text-white drop-shadow-xl font-bold hover:underline">
          "...the best Oaxacan restaurant in the country"
        </h1>
      </a>
      <p className="text-white">Jonathan Gold</p>
    </div>
  </div>
)

const Slideshow = () => {
  const slideImages = [
    {
      url: "images/dining-slideshow/drink.jpeg",
      caption: "Slide 1",
    },
    {
      url: "images/dining-slideshow/food-4.jpeg",
      caption: "Slide 2",
    },
    {
      url: "images/dining-slideshow/inside-1.jpeg",
      caption: "Slide 3",
    },
    {
      url: "images/dining-slideshow/outside-5.jpeg",
      caption: "Slide 3",
    },
    {
      url: "images/dining-slideshow/outside-6.jpeg",
      caption: "Slide 3",
    },
    {
      url: "images/dining-slideshow/outside-7.jpeg",
      caption: "Slide 3",
    },
    {
      url: "images/dining-slideshow/outside-8.jpeg",
      caption: "Slide 3",
    },
    {
      url: "images/dining-slideshow/outside-13.jpeg",
      caption: "Slide 3",
    },
    {
      url: "images/dining-slideshow/night.jpeg",
      caption: "Slide 3",
    },
  ]
  return (
    <div className="flex flex-col gap-5">
      <Fade transitionDuration={500} indicators arrows={false} Easing="ease-in">
        {slideImages.map((slideImage, index) => (
          <div className="" key={index}>
            <div
              className="h-[250px] bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${slideImage.url})` }}
            ></div>
          </div>
        ))}
      </Fade>
      <div className="flex flex-col items-center justify-center gap-6 px-6">
        <h2 className="text-center">DINING ROOM + PATIO ARE NOW OPEN</h2>
        <span className="text-center">
          OUR RESTAURANT FAMILY IS SO EXCITED TO BE ABLE TO WELCOME YOU BACK TO
          OUR BEAUTIFUL PATIO & INDOOR DINING ROOM. WE HAVE TAKEN EVERY
          PRECAUTION NECESSARY TO MAKE SURE BOTH OUR TEAM AND PATRONS ARE SAFE.
          WE ARE FOLLOWING EVERY GUIDELINE ENFORCED BY OUR STATE AND LOCAL
          AUTHORITIES.
          <br />
          <br />
          RESERVATIONS ARE VERY LIMITED AND ARE TAKEN UP TO TWO WEEKS IN
          ADVANCED. WE WELCOME AND{" "}
          <span class="font-bold">HIGHLY ENCOURGE WALK-INS AT ALL TIMES.</span>
          <br />
          <br />
          THANK YOU SO MUCH FOR YOUR CONTINUING SUPPORT AND WE LOOK FORWARD TO
          YOU DINING WITH US!
          <br />
          <br />
          <div class="font-bold">TUESDAY - THURSDAY : 11AM - 9PM</div>
          <div class="font-bold">FRIDAY - SUNDAY : 9AM - 10PM</div>
        </span>
      </div>
    </div>
  )
}

const Goldbelly = () => (
  <div className="flex flex-col gap-6 items-center justify-center px-4">
    <button className="bg-navbar text-white font-medium uppercase px-4 py-3 rounded">
      order delivery or take out
    </button>
    <button className="bg-navbar text-white font-medium uppercase px-4 py-3 rounded">
      book reservation
    </button>
    <button className="bg-navbar text-white font-medium uppercase px-4 py-3 rounded">
      menu
    </button>
    <button className="bg-navbar text-white font-medium uppercase px-4 py-3 rounded">
      buy a gift card
    </button>
    <p className="text-lg text-center">
      We now ship some of our favorite menu items Nationwide through GoldBelly!
    </p>
    <img src="images/gold-belly.png" alt="goldbelly" />
  </div>
)

const Home = () => {
  return (
    <Layout title="Guelaguetza">
      <Hero />
      <Slideshow />
      <Goldbelly />
    </Layout>
  )
}
export default Home
