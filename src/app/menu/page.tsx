import ScrollReveal from "@/components/ScrollReveal";
import MenuCard from "@/components/MenuCard";

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

export default function MenuPage() {
  return (
    <main className="flex-1">
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
    </main>
  );
}
