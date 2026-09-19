import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Gallery } from '@/components/bridal/gallery';
import { PageIntro,AppointmentBanner } from '@/components/bridal/shared';
export const metadata:Metadata={title:'Wedding Dress Gallery',description:'Browse genuine designer images from the Courtyard Bridal dress edit. Explore Nicole Milano, Luna Novias, Adriana Alier and White One.',alternates:{canonical:'/gallery'}};
export default function GalleryPage(){return <main id="main-content"><PageIntro eyebrow="A little inspiration" title="Look a little" italic="closer." text="The fall of a skirt. A beautifully cut neckline. The lace you keep coming back to. Explore the dress edit and make a note of your favourites."/><section className="section gallery-section"><Suspense fallback={<p>Opening the dress edit…</p>}><Gallery/></Suspense><p className="gallery-disclaimer">Designer collection photographs, with each gown named below. Ask us about current samples, sizes and availability before your visit.</p></section><AppointmentBanner/></main>}

