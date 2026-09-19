import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/bridal/navigation';
import { site } from '@/lib/bridal';
export const metadata: Metadata = {
 metadataBase:new URL(site.origin),title:{default:'Courtyard Bridal | Wedding Dresses in Tollesbury, Essex',template:'%s | Courtyard Bridal'},description:'Discover designer wedding dresses and private bridal appointments at Courtyard Bridal, 19 West Street, Tollesbury, Essex. Browse the collections and arrange your visit.',alternates:{canonical:'/'},openGraph:{title:'Courtyard Bridal — A dress that feels like you',description:'Designer wedding dresses. Personal appointments. Find your bridal style in Tollesbury, Essex.',type:'website',locale:'en_GB',siteName:'Courtyard Bridal'},icons:{icon:'/favicon.svg',shortcut:'/favicon.svg'}
};
export default function RootLayout({children}:{children:React.ReactNode}){
 const schema={'@context':'https://schema.org','@type':'ClothingStore',name:'Courtyard Bridal',url:site.origin,telephone:site.phone,email:site.email,address:{'@type':'PostalAddress',streetAddress:'19 West Street',addressLocality:'Tollesbury',addressRegion:'Essex',postalCode:'CM9 8RJ',addressCountry:'GB'},sameAs:[site.facebook],hasOfferCatalog:{'@type':'OfferCatalog',name:'Bridal collections',itemListElement:['Nicole Milano','Luna Novias','Adriana Alier','White One'].map(name=>({'@type':'OfferCatalog',name}))}};
 return <html lang="en-GB"><head><link rel="stylesheet" href="/fonts/fonts.css"/></head><body><a href="#main-content" className="skip-link">Skip to content</a><Header/>{children}<Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/></body></html>;
}
