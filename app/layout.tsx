import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Clínica Vivace Parauapebas | Saúde integrada',description:'Centro de especialidades médicas, exames e cuidado multidisciplinar em Parauapebas.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
