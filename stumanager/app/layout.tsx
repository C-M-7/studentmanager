import { Nunito } from 'next/font/google'

import NsForm5 from './components/new-student/NsForm5';
import { Hero } from './components/hero-section/Hero';
import Navbar from '@/app/components/navbar/Navbar';
import LoginModal from '@/app/components/modals/LoginModal';
import RegisterModal from '@/app/components/modals/RegisterModal';

import ToasterProvider from '@/app/providers/ToasterProvider';

import './globals.css'
import getCurrentUser from './actions/getCurrentUser';

export const metadata = {
  title: 'Project',
  description: 'Dev',
}

const font = Nunito({ 
  subsets: ['latin'], 
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />

        <Navbar />

        <div className="pb-20 pt-28 w-30 bg-white">{children}</div>
        {/* <Hero/> */}
        <div className='bg-white' style={{display: "flex",flexDirection : 'column', alignItems:'center', justifyContent:'space-around',height : "100vh"}}>
          <NsForm5 />
        </div>
      </body>
    </html>
  );
}
