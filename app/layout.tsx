import Header from '@/components/Header'
import './globals.css'
import ActiveSectionContextProvider from '@/context/active-section-context'

export const metadata = {
  title: 'Simon | Personal Protfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body className='bg-stone-200 text-stone-800 relative h-[5000px] pt-28 sm:pt-36'>
        <div className='bg-[#e0afa0] absolute top-[-6rem] -z-10 right-[2rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#89986d] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[20rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
