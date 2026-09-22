import ParallaxHero from "@/components/ParallaxHero";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronDown } from "lucide-react";

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
              href="/reserve"
              className="px-7 py-3.5 bg-stone-100 hover:bg-white text-stone-900 font-semibold rounded-full shadow-lg transition-all hover:scale-105"
            >
              Reserve a Table
            </a>
            <a
              href="/menu"
              className="px-7 py-3.5 bg-stone-900/80 hover:bg-stone-900 text-white font-semibold rounded-full border border-white/20 backdrop-blur-md transition-all hover:scale-105"
            >
              Seasonal Menu ↓
            </a>
            <a
              href="/reserve#weddings"
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
                    src="/images/ben-and-judy.png"
                    alt="Ben and Judy Bonwick"
                    className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700 object-center"
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

    </main>
  );
}
