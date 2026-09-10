import './globals.css';
import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';
export const metadata={title:'NovaMath — Everything Mathematics',description:'All-in-one mathematics calculator, solver and formula library.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><header className="nav glass"><div className="container navin"><Link href="/" className="logo brand"><span className="logoMark">√</span>NovaMath</Link><nav className="navlinks"><Link href="/calculator">Calculator</Link><Link href="/formulas">Formulas</Link><Link href="/history">History</Link><Link href="/favorites">Favorites</Link></nav><ThemeToggle /></div></header>{children}<footer className="footer"><div className="container"><div className="brand" style={{fontWeight:700,color:'var(--text)',fontSize:18}}>∞ NovaMath</div><p>Everything Mathematics. One Powerful Calculator.</p></div></footer></body></html>}
