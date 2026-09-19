 'use client';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ArrowUpRight, Menu, Phone, MapPin, X } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { navigation, site } from '@/lib/bridal';

export function Wordmark() {
  return <span className="wordmark"><span>Courtyard</span><small>BRIDAL</small></span>;
}

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const menuLinks = [['Home', '/'], ...navigation];
  return <header className="site-header">
    <div className="masthead">
      <span className="masthead-location">A BRIDAL BOUTIQUE<br/><b>Tollesbury, Essex</b></span>
      <a href="/" aria-label="Courtyard Bridal home"><Wordmark/></a>
      <a href="/appointments" className="header-appointment">Book an appointment <ArrowUpRight size={17}/></a>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild><button className="mobile-menu" aria-label="Open navigation menu"><Menu size={24}/></button></SheetTrigger>
        <SheetContent side="top" showCloseButton={false} className="mobile-drawer">
          <div className="drawer-heading">
            <SheetTitle className="drawer-title"><Wordmark/></SheetTitle>
            <SheetClose asChild><button className="drawer-close" aria-label="Close navigation menu"><X size={22}/></button></SheetClose>
          </div>
          <SheetDescription className="sr-only">Explore all seven Courtyard Bridal pages. Select a page to open it.</SheetDescription>
          <nav className="drawer-navigation" aria-label="Mobile navigation">
            {menuLinks.map(([label, url], i) => <a href={url} key={url} onClick={() => setOpen(false)} aria-current={path === url ? 'page' : undefined}>
              <span className="drawer-number">{String(i + 1).padStart(2, '0')}</span>
              <span className="drawer-label">{label}</span>
              <ArrowUpRight size={20}/>
            </a>)}
          </nav>
          <a href="/appointments" className="button drawer-appointment" onClick={() => setOpen(false)} aria-current={path === '/appointments' ? 'page' : undefined}>Book your appointment <ArrowUpRight size={19}/></a>
          <div className="drawer-bottom"><span>Tollesbury, Essex</span><a href={'tel:' + site.phone}><Phone size={14}/>{site.displayPhone}</a></div>
        </SheetContent>
      </Sheet>
    </div>
    <nav className="desktop-navigation" aria-label="Main navigation">{navigation.map(([label, url]) => <a href={url} key={url} aria-current={path === url ? 'page' : undefined}>{label}</a>)}</nav>
  </header>;
}

export function Footer(){return <footer className="site-footer"><div className="footer-top"><div className="footer-brand"><a href="/" aria-label="Courtyard Bridal home"><Wordmark/></a><p>A little space for a very big moment.</p></div><div><h2>Explore</h2>{navigation.map(([label,url])=><a href={url} key={url}>{label}</a>)}</div><div><h2>Come and see us</h2><p>19 West Street<br/>Tollesbury, Essex<br/>CM9 8RJ</p><a href="/appointments" className="footer-contact"><MapPin size={16}/> Plan your visit</a></div><div><h2>Let’s talk dresses</h2><a href={'tel:'+site.phone} className="footer-contact"><Phone size={16}/>{site.displayPhone}</a><a href={'mailto:'+site.email}>{site.email}</a><a href={site.facebook} target="_blank" rel="noreferrer">Find us on Facebook <ArrowUpRight size={15}/></a><p className="footer-hours">Visits by appointment</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Courtyard Bridal</span><span>Made for your moment.</span><a href="/appointments#privacy">Privacy & enquiries</a></div><div data-webora-credit="true" style={{padding:"20px 0",textAlign:"center",fontSize:"13px",color:"#6a635e"}}>Developed by <a href="https://weboradesign.co" target="_blank" rel="noopener noreferrer" style={{color:"#704552",textDecoration:"underline"}}>Webora Design</a></div></footer>}

