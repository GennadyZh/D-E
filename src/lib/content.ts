import HomeContent, { frontmatter as homeMeta } from '../content/home.md';
import UslugiContent, { frontmatter as uslugiMeta } from '../content/uslugi.md';
import OboMneContent, { frontmatter as oboMneMeta } from '../content/obo-mne.md';
import GalereyaContent, { frontmatter as galereyaMeta } from '../content/galereya.md';
import OtzyvyContent, { frontmatter as otzyvyMeta } from '../content/otzyvy.md';
import CenyContent, { frontmatter as cenyMeta } from '../content/ceny.md';
import KontaktyContent, { frontmatter as kontaktyMeta } from '../content/kontakty.md';

export const pages = {
	home: { Content: HomeContent, frontmatter: homeMeta },
	uslugi: { Content: UslugiContent, frontmatter: uslugiMeta },
	oboMne: { Content: OboMneContent, frontmatter: oboMneMeta },
	galereya: { Content: GalereyaContent, frontmatter: galereyaMeta },
	otzyvy: { Content: OtzyvyContent, frontmatter: otzyvyMeta },
	ceny: { Content: CenyContent, frontmatter: cenyMeta },
	kontakty: { Content: KontaktyContent, frontmatter: kontaktyMeta },
} as const;
