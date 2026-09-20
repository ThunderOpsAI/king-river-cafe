import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "King River Cafe | Oxley, King Valley | Ben & Judy Bonwick",
  description: "Historic 1860s former village pub on Snow Road, Oxley. Seasonal King Valley dining, famous potato rösti, glazed lemon tart, King Valley Italian varietals, and intimate weddings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} h-full antialiased font-sans scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-800 selection:bg-stone-800 selection:text-white">
        {/* Navigation Header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <a href="#" className="flex flex-col group transition-all duration-300">
              <span className="font-serif text-2xl sm:text-3xl text-stone-900 tracking-wide font-normal group-hover:text-stone-600 transition-colors">
                King River Cafe
              </span>
              <span className="text-[11px] uppercase tracking-widest text-stone-500 font-medium">
                Oxley · King Valley Trail · Est. 1998
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-medium text-stone-600">
              <a href="#story" className="hover:text-stone-900 transition-all duration-300">Our Story</a>
              <a href="#menu" className="hover:text-stone-900 transition-all duration-300">Seasonal Menu</a>
              <a href="#wines" className="hover:text-stone-900 transition-all duration-300">Wine &amp; Cellar</a>
              <a href="#reservations" className="hover:text-stone-900 transition-all duration-300">Reserve</a>
              <a href="#weddings" className="hover:text-stone-900 transition-all duration-300">Weddings &amp; Events</a>
            </nav>

            {/* Contact Action */}
            <div className="flex items-center gap-3">
              <a
                href="tel:0357273461"
                aria-label="Call King River Cafe at (03) 5727 3461"
                className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-widest font-medium rounded-full transition-all duration-300 shadow-sm"
              >
                <span>📞 (03) 5727 3461</span>
              </a>
            </div>
          </div>
        </header>

        {children}

        {/* Brand Footer */}
        <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              {/* Col 1 */}
              <div>
                <h4 className="font-serif text-2xl text-white mb-2">King River Cafe</h4>
                <p className="italic text-stone-400 text-sm mb-4 font-serif">
                  &ldquo;Dine like royalty, be treated like family&rdquo;
                </p>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Historic 1860s former village pub nestled on the Murray to Mountains Rail Trail. Handcrafted seasonal food, warm hospitality, and regional King Valley wines by Ben &amp; Judy Bonwick.
                </p>
              </div>

              {/* Col 2 */}
              <div>
                <h5 className="text-xs uppercase tracking-widest text-white font-bold mb-4">Location</h5>
                <p className="text-sm text-stone-300 font-medium mb-1">1143 Snow Road</p>
                <p className="text-xs text-stone-400 mb-3">Oxley, VIC 3678, Australia</p>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Junction of the Milawa Gourmet Region &amp; King Valley Wine Trail. Covered bike veranda on the Rail Trail.
                </p>
              </div>

              {/* Col 3 */}
              <div>
                <h5 className="text-xs uppercase tracking-widest text-white font-bold mb-4">Opening Hours</h5>
                <ul className="text-xs text-stone-300 space-y-2">
                  <li className="flex justify-between">
                    <span className="text-stone-400">Monday:</span>
                    <span>10:00 AM – 3:00 PM</span>
                  </li>
                  <li className="flex justify-between font-semibold text-amber-400">
                    <span>Tuesday:</span>
                    <span>CLOSED</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-stone-400">Wed – Sun:</span>
                    <span>10:00 AM – 10:00 PM</span>
                  </li>
                </ul>
                <p className="text-[11px] text-stone-500 mt-3">
                  Morning tea 10am · Lunch 12–2:30pm · Dinner from 5:30pm
                </p>
              </div>

              {/* Col 4 */}
              <div>
                <h5 className="text-xs uppercase tracking-widest text-white font-bold mb-4">Contact &amp; Bookings</h5>
                <p className="text-sm text-stone-300 mb-1">
                  Phone: <a href="tel:0357273461" aria-label="Call King River Cafe at (03) 5727 3461" className="text-white hover:underline">(03) 5727 3461</a>
                </p>
                <p className="text-xs text-stone-400 mb-3">
                  Email: <a href="mailto:bon@netc.net.au" className="text-stone-300 hover:underline">bon@netc.net.au</a>
                </p>
                <div className="pt-2">
                  <a
                    href="https://www.facebook.com/KingRiverCafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs uppercase tracking-wider text-amber-300 hover:underline"
                  >
                    Facebook: @KingRiverCafe →
                  </a>
                </div>
              </div>
            </div>

            {/* Small decorative divider-ornament above the copyright line */}
            <div className="divider-ornament max-w-xs mx-auto mb-8 opacity-40" aria-hidden="true">
              <span className="text-stone-500 text-xs font-serif">♦</span>
            </div>

            <div className="pt-8 border-t border-stone-800 text-center text-xs tracking-widest uppercase text-stone-500">
              &copy; 2026 King River Cafe · Ben &amp; Judy Bonwick · All Rights Reserved
            </div>
          </div>
        </footer>

        <ThemeSwitcher />
      </body>
    </html>
  );
}
