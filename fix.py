import re
with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

target = """                </h2>
                <div className="space-y-4 text-stone-600 font-light leading-relaxed text-base">"""

replacement = """                    <p className="font-serif italic text-sm">
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
                <div className="space-y-4 text-stone-600 font-light leading-relaxed text-base">"""

if target in content:
    content = content.replace(target, replacement)
    with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Success")
else:
    print("Target not found")
