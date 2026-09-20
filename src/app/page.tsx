import TableReservation from "@/components/TableReservation";
import WeddingQuoteForm from "@/components/WeddingQuoteForm";
import ParallaxHero from "@/components/ParallaxHero";
import ScrollReveal from "@/components/ScrollReveal";
import MenuCard from "@/components/MenuCard";
import { ChevronDown } from "lucide-react";

const ENTREES = [
  {
    name: "Golden Potato Rösti",
    badge: "House Signature",
    desc: "Crisp golden pan-fried shredded potato rösti served with house sweet chilli relish and cooling sour cream.",
    price: "$18.00"
  },
  {
    name: "Ricotta & Spinach Rotolo",
    badge: "Local Trout",
    desc: "Delicate rolled fresh pasta spiral filled with creamy ricotta, wilted local greens, flaked smoked trout, and crème fraîche.",
    price: "$22.00"
  },
  {
    name: "Seasonal King Valley Soup & Bouillabaisse",
    badge: "Daily Blackboard",
    desc: "Chef Ben's rotating seasonal vegetable soup or regional seafood bouillabaisse served with crusty Italian bread.",
    price: "$16.00"
  }
];

const MAINS = [
  {
    name: "Handmade Beef Lasagne",
    badge: "25-Year Classic",
    desc: "Slow-cooked King Valley beef ragù simmered for hours, layered with handmade fresh pasta sheets and rich silky béchamel.",
    price: "$28.00"
  },
  {
    name: "Rotating Blackboard House Pasta",
    badge: "Made Daily",
    desc: "Hand-rolled tagliatelle, soft potato gnocchi, or seasonal filled ravioli tossed in house sauces and aged parmesan.",
    price: "$29.00"
  },
  {
    name: "Wild Mushroom Risotto",
    badge: "Vegetarian / GF",
    desc: "Creamy Arborio rice with locally foraged pine mushrooms, porcini stock, white wine, thyme, and shaved Grana Padano.",
    price: "$28.00"
  },
  {
    name: "Thin-Crust Woodfired-Style Pizzas",
    badge: "Lunch & Dinner",
    desc: "Crisp blistered crust pizzas featuring prosciutto di Parma, mozzarella, King Valley roasted vegetables, and fresh herbs.",
    price: "$24.00"
  },
  {
    name: "Prime Local Beef Fillet",
    badge: "Victorian Beef",
    desc: "Tender eye fillet of beef seared to your liking, served with layered potato gratin, buttered greens, and rich red wine jus.",
    price: "$42.00"
  },
  {
    name: "Pan-Seared King Valley Lamb",
    badge: "Pasture Raised",
    desc: "Succulent local lamb cutlets and slow-roasted shoulder with sweet baby carrots, mint jus, and rosemary reduction.",
    price: "$38.00"
  }
];

const DESSERTS = [
  {
    name: "Legendary Glazed Lemon Tart",
    badge: "Unmissable Signature",
    desc: "Silky smooth, zesty lemon curd in delicate crisp butter shortcrust with a signature brûléed glazed crown and double cream.",
    price: "$16.00"
  },
  {
    name: "House-Churned Duck Egg Ice Creams",
    badge: "House Specialty",
    desc: "Ultra-rich custard ice creams churned with local farm duck eggs: Rum & Raisin or Honey & Orange Marmalade.",
    price: "$14.00"
  },
  {
    name: "Honey & Cardamom Panna Cotta",
    badge: "GF",
    desc: "Wobbly delicate vanilla bean panna cotta infused with local bush honey and cardamom, served with fresh berry coulis.",
    price: "$15.00"
  },
  {
    name: "Flourless Belgian Chocolate Cake",
    badge: "Gluten-Free",
    desc: "Decadent rich dark chocolate torte served warm with fresh King Valley double cream and raspberry dust.",
    price: "$15.00"
  }
];

const LOCAL_WINERIES = [
  { name: "Dal Zotto Wines", varietal: "Pioneers of Australian Prosecco · Whitfield" },
  { name: "Brown Brothers", varietal: "Historic Milawa cellars, sparkling & Moscato" },
  { name: "Pizzini Wines", varietal: "Sangiovese, Pinot Grigio & Italian varietals" },
  { name: "Symphonia Fine Wines", varietal: "Albarino, Saperavi & boutique cool-climate reds" },
  { name: "Sam Miranda of King Valley", varietal: "Prosecco, Arneis & rich Barbera" },
  { name: "John Gehrig Wines", varietal: "Cool-climate Riesling & Chenin Blanc" }
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <ParallaxHero imageUrl="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=80">
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-16 text-white">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/15 text-amber-200 font-serif text-xs sm:text-sm tracking-widest uppercase backdrop-blur-md border border-white/20">
            Historic 1860s Village Pub · Oxley, Victoria
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white mb-4 tracking-tight hero-text-shadow">
            King River Cafe
          </h1>

          <p className="text-lg sm:text-2xl text-stone-200 font-serif italic mb-6 max-w-2xl mx-auto drop-shadow">
            &ldquo;Dine like royalty, be treated like family&rdquo;
          </p>

          {/* Real Operational Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 text-xs sm:text-sm">
            <div className="flex items-center gap-2 bg-stone-950/70 backdrop-blur-md px-4 py-2 rounded-full border border-stone-700/80">
              <span>📍</span>
              <span className="font-medium text-stone-200">1143 Snow Road, Oxley</span>
            </div>
            <a
              href="tel:0357273461"
              aria-label="Call King River Cafe at (03) 5727 3461"
              className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-medium px-4 py-2 rounded-full transition-colors shadow"
            >
              <span>📞 (03) 5727 3461</span>
            </a>
            <div className="flex items-center gap-2 bg-stone-950/70 backdrop-blur-md px-4 py-2 rounded-full border border-stone-700/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium text-stone-200">Mon 10am–3pm · Tue Closed · Wed–Sun 10am–10pm</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-widest mb-10">
            <a
              href="#reservations"
              className="px-7 py-3.5 bg-stone-100 hover:bg-white text-stone-900 font-semibold rounded-full shadow-lg transition-all hover:scale-105"
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="px-7 py-3.5 bg-stone-900/80 hover:bg-stone-900 text-white font-semibold rounded-full border border-white/20 backdrop-blur-md transition-all hover:scale-105"
            >
              Seasonal Menu ↓
            </a>
            <a
              href="#weddings"
              className="px-7 py-3.5 bg-amber-700/80 hover:bg-amber-700 text-white font-semibold rounded-full border border-amber-500/30 backdrop-blur-md transition-all hover:scale-105"
            >
              Weddings &amp; Events
            </a>
          </div>

          {/* Subtle animated down-arrow indicator */}
          <div className="flex justify-center">
            <a
              href="#story"
              aria-label="Scroll to story section"
              className="inline-flex items-center justify-center p-2 text-stone-300 hover:text-amber-300 transition-colors animate-bounce"
            >
              <ChevronDown className="w-6 h-6 stroke-[1.5]" />
            </a>
          </div>
        </div>
      </ParallaxHero>

      {/* Decorative divider */}
      <div className="divider-ornament max-w-5xl mx-auto px-4 py-8" aria-hidden="true">
        <span className="text-stone-400 font-serif text-xs">❦</span>
      </div>

      {/* Intro & Heritage Story Section */}
      <ScrollReveal delay={0}>
        <section id="story" className="py-20 px-4 sm:px-6 bg-white border-b border-stone-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto">
            {/* Heritage Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
              <div className="lg:col-span-7">
                <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold block mb-2">
                  Oxley &amp; King Valley Heritage
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-6 leading-tight">
                  A Culinary Haven Along the Murray to Mountains Rail Trail
                </h2>
                <div className="space-y-4 text-stone-600 font-light leading-relaxed text-base">
                  <p>
                    Nestled along the Murray to Mountains Rail Trail, our 1860s heritage building — with its original handmade red clay bricks, open log fireplace, and rough-sawn timber walls — has welcomed locals, travellers, and cyclists for over 25 years.
                  </p>
                  <p>
                    Whether resting on our shady vine-draped veranda after a morning cycle or enjoying an intimate candlelit dinner beside the roaring fire, you will be cared for with genuine country warmth. Downstairs, the River Arts Studio buzzes with creativity, while upstairs, the walls are adorned with portraits of local winemaking legends.
                  </p>
                </div>

                {/* Feature Pills */}
                <div className="grid grid-cols-2 gap-3 mt-8 text-xs uppercase tracking-wider font-semibold text-stone-700">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 flex items-center gap-2">
                    <span className="text-amber-700 font-serif text-base">🏛️</span>
                    <span>1860s Heritage Pub</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 flex items-center gap-2">
                    <span className="text-amber-700 font-serif text-base">🚴</span>
                    <span>Rail Trail Veranda</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-300">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                    alt="King River Cafe rustic interior dining"
                    className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950/80 to-transparent p-6 text-white">
                    <p className="font-serif italic text-sm">
                      &ldquo;Dine surrounded by King Valley wine history and original 1860s brickwork.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Who We Are Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-300 bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1581579186913-46ea3db71661?auto=format&fit=crop&w=1200&q=80"
                    alt="Ben and Judy Bonwick"
                    className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700 object-center mix-blend-multiply"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950/90 via-stone-900/60 to-transparent p-6 text-white">
                    <p className="font-serif italic text-sm text-stone-200 drop-shadow-md">
                      &ldquo;If you love people and enjoy seeing the impact you have on their lives, then it&apos;s worth every challenge.&rdquo; — Judy Bonwick
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-7 order-1 lg:order-2">
                <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold block mb-2">
                  Who We Are
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-6 leading-tight">
                  Meet Ben &amp; Judy Bonwick
                </h2>
                <div className="space-y-4 text-stone-600 font-light leading-relaxed text-base">
                  <p>
                    Twenty-five years ago, driven by our dream of owning a small restaurant and a deep love for the North East Victoria region, we returned to our roots in Wangaratta. Both seasoned professionals in hospitality, we discovered the King River Café up for sale in Oxley and decided to take the plunge.
                  </p>
                  <p>
                    It&apos;s been a true family journey. Our son, who was just four when we took over, is now our Head Chef! Running a business while raising a family wasn&apos;t easy, but the community embraced us. 
                  </p>
                  <p>
                    That community spirit was never clearer than in 2013, when a devastating fire forced us to close. We thought it might be the end, but the outpouring of support—people offering to help clean up, store supplies, and get us back on our feet—was overwhelming. It showed us that our café wasn&apos;t just a place to eat; it was a vital part of Oxley. 
                  </p>
                </div>
                
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-amber-500"></div>
                  <span className="font-serif italic text-stone-800 font-medium">A true community business, enriched by creativity and passion.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Decorative divider */}
      <div className="divider-ornament max-w-5xl mx-auto px-4 py-8" aria-hidden="true">
        <span className="text-stone-400 font-serif text-xs">❦</span>
      </div>

      {/* Seasonal Menu Section */}
      <ScrollReveal delay={0.1}>
        <section id="menu" className="py-24 px-4 sm:px-6 bg-stone-50 scroll-mt-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold block mb-2">
                Locally Sourced &amp; Made From Scratch
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 mb-4">
                Seasonal Blackboard Menu
              </h2>
              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                Our menus rotate with what is freshest from King Valley growers and High Country producers. Dietary requirements, vegetarian, and gluten-free choices are lovingly catered for.
              </p>
            </div>

            {/* Entrées */}
            <div className="mb-14">
              <div className="flex items-center gap-4 mb-6 border-b border-stone-300 pb-3">
                <span className="font-serif text-2xl sm:text-3xl text-stone-900">Entrées</span>
                <span className="text-xs uppercase tracking-widest text-stone-500 font-medium">To Begin &amp; Share</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ENTREES.map((item, idx) => (
                  <MenuCard
                    key={idx}
                    name={item.name}
                    badge={item.badge}
                    desc={item.desc}
                    price={item.price}
                  />
                ))}
              </div>
            </div>

            {/* Mains */}
            <div className="mb-14">
              <div className="flex items-center gap-4 mb-6 border-b border-stone-300 pb-3">
                <span className="font-serif text-2xl sm:text-3xl text-stone-900">Mains &amp; Hearth</span>
                <span className="text-xs uppercase tracking-widest text-stone-500 font-medium">Handmade Pastas &amp; Slow Roasts</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MAINS.map((item, idx) => (
                  <MenuCard
                    key={idx}
                    name={item.name}
                    badge={item.badge}
                    desc={item.desc}
                    price={item.price}
                  />
                ))}
              </div>
            </div>

            {/* Desserts */}
            <div className="mb-14">
              <div className="flex items-center gap-4 mb-6 border-b border-stone-300 pb-3">
                <span className="font-serif text-2xl sm:text-3xl text-stone-900">Desserts</span>
                <span className="text-xs uppercase tracking-widest text-stone-500 font-medium">House Churned &amp; Baked</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {DESSERTS.map((item, idx) => (
                  <MenuCard
                    key={idx}
                    name={item.name}
                    badge={item.badge}
                    desc={item.desc}
                    price={item.price}
                  />
                ))}
              </div>
            </div>

            {/* In-Store Pantry Callout */}
            <div className="bg-stone-900 text-white rounded-3xl p-8 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-1">
                  Take Home King River Cafe
                </span>
                <h3 className="font-serif text-2xl text-white">House-Bottled Pantry &amp; Relishes</h3>
                <p className="text-xs text-stone-300 mt-1 max-w-xl font-light">
                  Take home our famous sweet chilli relish, seasonal berry jams, spiced tomato chutneys, and house herb dressings — made fresh in our Oxley kitchen and sold in-store.
                </p>
              </div>
              <div className="shrink-0 text-center sm:text-right">
                <span className="text-xs text-stone-400 block mb-1">Available at reception</span>
                <span className="text-sm font-serif text-amber-300 font-semibold">$9.50 – $14.00 / jar</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Decorative divider */}
      <div className="divider-ornament max-w-5xl mx-auto px-4 py-8" aria-hidden="true">
        <span className="text-stone-400 font-serif text-xs">❦</span>
      </div>

      {/* Wine & Drinks Section */}
      <ScrollReveal delay={0.2}>
        <section id="wines" className="py-20 px-4 sm:px-6 bg-white border-y border-stone-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold block mb-2">
                Cellar Door Partners
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-3">
                King Valley&apos;s Little Italy in Every Glass
              </h2>
              <p className="text-stone-600 font-light text-sm leading-relaxed">
                We proudly feature the pioneering families who made the King Valley famous for Prosecco, Sangiovese, and alpine Italian varietals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {LOCAL_WINERIES.map((winery, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="font-serif text-lg font-bold text-stone-900">{winery.name}</h3>
                  <p className="text-xs text-stone-600 font-light mt-1">{winery.varietal}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-light text-stone-600">
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                <h4 className="font-semibold text-stone-900 uppercase tracking-wider text-[11px] mb-1">🍷 BYO Wine Welcome</h4>
                <p>Bring your favourite King Valley bottle. Corkage fee applies per bottle.</p>
              </div>
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                <h4 className="font-semibold text-stone-900 uppercase tracking-wider text-[11px] mb-1">🍺 Alpine Craft Beers</h4>
                <p>Fresh on tap &amp; bottles from Bright Brewery and regional High Country brewers.</p>
              </div>
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                <h4 className="font-semibold text-stone-900 uppercase tracking-wider text-[11px] mb-1">☕ Espresso &amp; Sodas</h4>
                <p>Specialty barista roasted coffee, leaf teas, and house-made fruit spritzers.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Decorative divider */}
      <div className="divider-ornament max-w-5xl mx-auto px-4 py-8" aria-hidden="true">
        <span className="text-stone-400 font-serif text-xs">❦</span>
      </div>

      {/* Reservations Section */}
      <ScrollReveal delay={0.1}>
        <section id="reservations" className="py-24 px-4 sm:px-6 bg-stone-50 scroll-mt-20">
          <div className="max-w-3xl mx-auto">
            <TableReservation />
          </div>
        </section>
      </ScrollReveal>

      {/* Decorative divider */}
      <div className="divider-ornament max-w-5xl mx-auto px-4 py-8" aria-hidden="true">
        <span className="text-stone-400 font-serif text-xs">❦</span>
      </div>

      {/* Weddings & Private Functions Section */}
      <ScrollReveal delay={0.2}>
        <section id="weddings" className="py-24 px-4 sm:px-6 bg-white border-t border-stone-200 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <WeddingQuoteForm />
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
