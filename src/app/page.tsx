import TableReservation from "@/components/TableReservation";
import WeddingQuoteForm from "@/components/WeddingQuoteForm";

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
      <section className="relative min-h-[620px] lg:min-h-[700px] w-full flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-100 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-stone-900/40" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-16 text-white">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/15 text-amber-200 font-serif text-xs sm:text-sm tracking-widest uppercase backdrop-blur-md border border-white/20">
            Historic 1860s Village Pub · Oxley, Victoria
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white mb-4 tracking-tight drop-shadow-md">
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
              className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-medium px-4 py-2 rounded-full transition-colors shadow"
            >
              <span>📞 (03) 5727 3461</span>
            </a>
            <div className="flex items-center gap-2 bg-stone-950/70 backdrop-blur-md px-4 py-2 rounded-full border border-stone-700/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium text-stone-200">Mon 10am–3pm · Tue Closed · Wed–Sun 10am–10pm</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-widest">
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
        </div>
      </section>

      {/* Intro & Heritage Story Section */}
      <section id="story" className="py-20 px-4 sm:px-6 bg-white border-b border-stone-200 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
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
                  Proprietors <strong>Ben and Judy Bonwick</strong> have crafted a warm, unpretentious hospitality rooted in the King Valley&apos;s remarkable Italian-heritage wine and farming community. Whether resting on our shady vine-draped veranda after a morning cycle or enjoying an intimate candlelit dinner beside the roaring fire, you will be cared for with genuine country warmth.
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
                  <span>Rail Trail Veranda Stop</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 flex items-center gap-2">
                  <span className="text-amber-700 font-serif text-base">🎨</span>
                  <span>Rotating Art Gallery</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 flex items-center gap-2">
                  <span className="text-amber-700 font-serif text-base">🍷</span>
                  <span>BYO Wine Welcome</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-300">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
                  alt="King River Cafe rustic interior dining"
                  className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950/80 to-transparent p-6 text-white">
                  <p className="font-serif italic text-sm">
                    &ldquo;Dine surrounded by King Valley wine history and original 1860s brickwork.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Menu Section */}
      <section id="menu" className="py-24 px-4 sm:px-6 bg-[#faf8f5] scroll-mt-20">
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
                <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                        {item.badge}
                      </span>
                      <span className="font-serif font-bold text-stone-900">{item.price}</span>
                    </div>
                    <h3 className="font-serif text-lg text-stone-900 font-semibold mb-2">{item.name}</h3>
                    <p className="text-xs text-stone-600 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
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
                <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-stone-100 text-stone-800 border border-stone-200">
                        {item.badge}
                      </span>
                      <span className="font-serif font-bold text-stone-900">{item.price}</span>
                    </div>
                    <h3 className="font-serif text-lg text-stone-900 font-semibold mb-2">{item.name}</h3>
                    <p className="text-xs text-stone-600 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
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
                <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                        {item.badge}
                      </span>
                      <span className="font-serif font-bold text-stone-900">{item.price}</span>
                    </div>
                    <h3 className="font-serif text-base text-stone-900 font-semibold mb-2">{item.name}</h3>
                    <p className="text-xs text-stone-600 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
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

      {/* Wine & Drinks Section */}
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
            <div className="p-4 bg-[#faf8f5] rounded-xl border border-stone-200">
              <h4 className="font-semibold text-stone-900 uppercase tracking-wider text-[11px] mb-1">🍷 BYO Wine Welcome</h4>
              <p>Bring your favourite King Valley bottle. Corkage fee applies per bottle.</p>
            </div>
            <div className="p-4 bg-[#faf8f5] rounded-xl border border-stone-200">
              <h4 className="font-semibold text-stone-900 uppercase tracking-wider text-[11px] mb-1">🍺 Alpine Craft Beers</h4>
              <p>Fresh on tap &amp; bottles from Bright Brewery and regional High Country brewers.</p>
            </div>
            <div className="p-4 bg-[#faf8f5] rounded-xl border border-stone-200">
              <h4 className="font-semibold text-stone-900 uppercase tracking-wider text-[11px] mb-1">☕ Espresso &amp; Sodas</h4>
              <p>Specialty barista roasted coffee, leaf teas, and house-made fruit spritzers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="py-24 px-4 sm:px-6 bg-[#faf8f5] scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <TableReservation />
        </div>
      </section>

      {/* Weddings & Private Functions Section */}
      <section id="weddings" className="py-24 px-4 sm:px-6 bg-white border-t border-stone-200 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <WeddingQuoteForm />
        </div>
      </section>
    </main>
  );
}
