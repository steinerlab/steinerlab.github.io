// Lab news items, newest first. Edit this array to add or update news entries;
// the homepage renders the full list.

export type NewsItem = {
  /** Display date, e.g. "2025" or "2025-03". */
  date: string;
  /** News text. Simple inline HTML (e.g. <span class="...">) is allowed. */
  html: string;
};

export const NEWS: NewsItem[] = [
  {
    date: "2026",
    html: `<a href="/blog/2026-sardine-sar-in-the-browser" class="font-semibold">SARdine 1.0</a> is released: open-source, link-based radar imagery for flood and ice-jam response. <a href="https://nicksteiner.github.io/sardine/">Try it live</a>.`,
  },
  {
    date: "2025",
    html: "SMAPVEX19-22 field campaign results publish in IEEE JSTARS, highlighting the lab's contributions to forest soil moisture calibration.",
  },
  {
    date: "2025",
    html: `NASA Earth Science to Action funds <span class="font-semibold">HiFLOWS</span> to deliver hourly-scale SAR flood surveillance across Alaska.`,
  },
  {
    date: "2024",
    html: "NISAR Operations Science Team renews our wetlands and freeze/thaw validation work ahead of launch.",
  },
  {
    date: "2023",
    html: "ECOSTRESS urban forest partnership expands with new canopy flux stations in the Bronx and Queens.",
  },
];
