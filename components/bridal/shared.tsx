import { ArrowUpRight } from 'lucide-react';
import { collections } from '@/lib/bridal';
export function Eyebrow({children}:{children:React.ReactNode}){return <p className="eyebrow">{children}</p>}
export function PageIntro({eyebrow,title,italic,text}:{eyebrow:string,title:string,italic:string,text:string}){return <section className="page-intro"><Eyebrow>{eyebrow}</Eyebrow><h1>{title} <em>{italic}</em></h1><p>{text}</p></section>}
export function CollectionCards(){return <div className="collection-grid">{collections.map((c,i)=><a href={'/collections#'+c.slug} key={c.slug} className="collection-card"><div className="collection-image"><img src={'/images/'+c.image+'.webp'} alt={c.name+' wedding dress from the Courtyard Bridal edit'} width="700" height="980" loading="lazy"/><span className="collection-index">0{i+1}</span><span className="image-arrow"><ArrowUpRight size={22}/></span></div><span className="collection-caption">{c.caption}</span><h3>{c.name}</h3></a>)}</div>}
export function AppointmentBanner(){return <section className="appointment-banner"><Eyebrow>Your next chapter</Eyebrow><h2>Shall we find <em>your dress?</em></h2><p>We’d love to hear what you have in mind.</p><a className="button button-light" href="/appointments">Let’s arrange your visit <ArrowUpRight size={18}/></a><span className="banner-location">19 WEST STREET · TOLLESBURY · ESSEX</span></section>}

