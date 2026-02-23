import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <section className="min-h-[85vh] flex flex-col items-center justify-center text-center">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="text-center max-w-5xl mx-auto">
              <div className="reveal reveal-visible">
                <div className="p-6 sm:p-10 md:p-14 backdrop-blur-sm px-10 py-4 mt-20 border-2 border-black text-black font-bold rounded-2xl transition-all shadow-lg shadow-black/10 uppercase tracking-widest text-[16px]">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display tracking-tight text-[#1E2A4A] mb-4 sm:mb-6 leading-tight text-center">
                    Din nya hemsida är bara <span className="text-red-500">en konversation </span>bort
                  </h1>
                  <p className="text-base sm:text-lg md:text-2xl font-display tracking-tight text-gray-700 mb-6 sm:mb-10 leading-relaxed mx-auto max-w-3xl text-center">
                    Vi hjälper företag att skapa fantastiska webbplatser som inte bara ser bra ut, utan verkligen fungerar.
                    <br />
                    Enkelt, transparant och till fast pris.
                  </p>
                  <div>
                  <div className="flex justify-center">
                    
                     
                    
                  </div>
                  <div className="flex justify-center">
                    
                     
                    
                  </div>
                  </div>
                  <div className="flex justify-center">
                    
                      
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
