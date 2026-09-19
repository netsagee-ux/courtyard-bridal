import type { MetadataRoute } from 'next';
import { site } from '@/lib/bridal';
export default function sitemap():MetadataRoute.Sitemap{return ['','/collections','/experience','/about','/gallery','/kind-words','/appointments'].map(path=>({url:site.origin+path,changeFrequency:'monthly' as const,priority:path===''?1:path==='/appointments'?.9:.8}))}

