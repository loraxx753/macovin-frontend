export type SiteExample = {
  id: string;
  title: string;
  summary: string;
  /** shipped = live MVP; idea = coming work. Defaults to idea when omitted. */
  status?: 'shipped' | 'idea';
  url?: string;
};

/** Short blurbs for the Work page. Source: macovin/project-ideas. */
export const siteExamples: SiteExample[] = [
  {
    id: 'shimmering-stars',
    title: 'Shimmering Stars',
    status: 'shipped',
    url: 'https://shimmeringstars.org',
    summary:
      'A live astrology site we already run in the same factory. Birth charts and the product week around them. It shipped. Factory proof, not this season’s voice invoice.',
  },
  {
    id: 'elder-care',
    title: 'Elder care (end of life)',
    status: 'idea',
    summary:
      'Later / secondary site idea. One place with what you need when you’re caring for someone at the end of life. Not a clinic. Not a sales funnel. Not this season’s front door.',
  },
  {
    id: 'texas-workers-rights',
    title: 'Texas workers’ rights (nurses first)',
    status: 'idea',
    summary:
      'Later / secondary site idea. Real answers for specific Texas jobs, starting with nurses. Plain language. Not a law firm. Not this season’s front door.',
  },
];
