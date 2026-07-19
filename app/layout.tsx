import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Clínica Vivace Parauapebas | Saúde integrada',description:'Centro de especialidades médicas, exames e cuidado multidisciplinar em Parauapebas.',icons:{icon:'/logo.jpg',shortcut:'/logo.jpg',apple:'/logo.jpg'},openGraph:{title:'Clínica Vivace Parauapebas',description:'Centro de especialidades médicas, exames e cuidado multidisciplinar em Parauapebas.',images:['/hero.jpg'],locale:'pt_BR',type:'website'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
