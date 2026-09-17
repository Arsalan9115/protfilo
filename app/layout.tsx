import "./globals.css";
import Navbar from "@/components/Navbar";
export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html>
      <body>
        <Navbar/>
        {children}
        <footer className="text-center text-[10px] text-zinc-600 py-10 border-t border-white/5 mt-10">
          FRONTEND + BACKEND • Next.js API Routes • arsalanbotawala256@gmail.com
        </footer>
      </body>
    </html>
  )
}