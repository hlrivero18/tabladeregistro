import { Inter } from 'next/font/google'
import './globals.css'
//COMPONENTES
import NavBar from '@/components/NavBar/NavBar'
//GOOGLE FONTS
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RegistroERP',
  description: 'Prueba Tecnica JM Soluciones',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-gray-800`}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
