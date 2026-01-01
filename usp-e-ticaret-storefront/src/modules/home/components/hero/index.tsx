import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ArrowRight, Box, Settings } from "lucide-react"

const Hero = () => {
  return (
    <div className="flex flex-col bg-gray-100">
      
      {/* ANA TEKNİK VİTRİN */}
      <div className="content-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[500px]">
          
          {/* SOL: Büyük Mesaj (8 birim) */}
          <div className="lg:col-span-8 bg-ptm-dark text-white relative overflow-hidden p-8 md:p-12 flex flex-col justify-center items-start border-l-8 border-ptm-orange">
             {/* Arka plan dekoru */}
             <Settings className="absolute -right-10 -bottom-10 text-white/5 w-64 h-64 animate-spin-slow" />
             
             <span className="bg-ptm-orange text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
                Profesyonel Çözümler
             </span>
             
             <Heading level="h1" className="text-4xl md:text-6xl font-black uppercase leading-tight mb-6 z-10">
                Mekanik Sistemlerin <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ptm-orange to-white">Kalbi Burada Atıyor</span>
             </Heading>
             
             <p className="text-gray-400 text-lg max-w-lg mb-8 z-10 font-light">
                7/24 Teknik destek, orijinal yedek parça ve endüstriyel pompa gruplarında Türkiye'nin en geniş stok ağı.
             </p>

             <div className="flex flex-wrap gap-4 z-10">
               <LocalizedClientLink href="/store">
                  <Button className="bg-white text-ptm-dark hover:bg-gray-200 border-none rounded-none px-8 py-3 h-auto text-base font-bold uppercase flex items-center gap-2">
                    Kataloğu İncele <ArrowRight size={18} />
                  </Button>
               </LocalizedClientLink>
             </div>
          </div>

          {/* SAĞ: Öne Çıkanlar (4 birim - Üst üste 2 kutu) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Kutu 1 */}
            
            <div className="flex-1 bg-white border border-gray-200 p-6 flex flex-row items-center justify-between hover:border-ptm-orange transition-colors group cursor-pointer relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-2xl font-black text-ptm-dark uppercase italic">Pompalar</h3>
                 <LocalizedClientLink href="/store"><span className="text-sm text-gray-500 font-medium group-hover:text-ptm-orange transition-colors mt-2 inline-block">Stokları Gör →</span></LocalizedClientLink>
               </div>
               <Box className="text-gray-200 group-hover:text-ptm-orange/20 transition-colors w-24 h-24 absolute right-[-10px] bottom-[-10px]" />
            </div>

            {/* Kutu 2 (Turuncu) */}
            <div className="flex-1 bg-ptm-orange p-6 flex flex-row items-center justify-between text-white hover:bg-orange-600 transition-colors cursor-pointer group relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-2xl font-black uppercase italic">Yedek<br/>Parça</h3>
                 <LocalizedClientLink href="/categories/yedek-parca"><span className="text-sm text-gray-500 font-medium group-hover:text-ptm-orange transition-colors mt-2 inline-block">Stokları Gör →</span></LocalizedClientLink>
               </div>
               <Settings className="text-white/20 w-24 h-24 absolute right-[-10px] bottom-[-10px] group-hover:rotate-45 transition-transform" />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero