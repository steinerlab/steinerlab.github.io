---
title: "SARdine: Radar Imagery for Disaster Response, Delivered as a Link"
description: "SARdine 1.0 is an open-source tool that puts NISAR, Sentinel-1 and commercial SAR imagery of floods and ice jams in front of responders through a web link, with no download and no software to install."
date: "2026-10-29"
tags: ["software", "disaster-response", "floods", "sar", "nisar"]
draft: false
---

[![SARdine showing a NISAR L-band dual-pol composite over the Pacaya-Samiria floodplain, Peru](/images/sardine-pacaya.jpg)](https://nicksteiner.github.io/sardine/?cog=https%3A%2F%2Fhuggingface.co%2Fdatasets%2Fnicksteiner%2Fsardine-demo-data%2Fresolve%2Fmain%2Fpacaya_full_hh.tif,https%3A%2F%2Fhuggingface.co%2Fdatasets%2Fnicksteiner%2Fsardine-demo-data%2Fresolve%2Fmain%2Fpacaya_full_hv.tif&comp=dual-pol-h&mode=rgb&db=1&stretch=sigmoid)

*NISAR L-band radar over the Pacaya-Samiria floodplain, Peru (R = HH, G = HV, B = HH/HV, in dB). Click the image to open this scene live; it streams from about 1 GB of Cloud Optimized GeoTIFFs.*

**[Try SARdine now →](https://nicksteiner.github.io/sardine/)** · [Source code](https://github.com/nicksteiner/sardine) · [Cite (DOI 10.5281/zenodo.23345870)](https://doi.org/10.5281/zenodo.23345870)

## Radar sees the flood; responders usually don't

In a flood, the critical hours are often cloudy, dark or both, and optical satellites see nothing. Radar sees the water anyway. NISAR, Sentinel-1 and commercial constellations such as ICEYE, Capella and Umbra can image an event within hours. The bottleneck is no longer getting the image. It is getting the image in front of the person making a decision.

Flood-map products help, but they come later, and nobody can check them against the radar. To look at the radar scene itself, a user still downloads a 2 to 8 GB NISAR file and opens it in GIS or Python software. Incident command posts, tribal and municipal emergency managers and field teams often have slow links, locked-down laptops and no remote-sensing staff.

What's missing is a **first look**: a georeferenced radar view of the event that opens from a link, on an ordinary computer, as soon as the scene is in the archive.

## The link is the product

SARdine (**SAR D**ata **IN**spection and **E**xploration) opens radar imagery in a current web browser, straight from where it is stored. It reads only the part of the scene being viewed and renders it on the laptop's own graphics chip. There is nothing to install. One URL carries the data source, the region, the display settings and, optionally, a model to run.

In an event:

1. **A scene lands** in the NASA archive, or a commercial scene is delivered.
2. **An analyst frames and interprets it.** They zoom to the affected area, choose a composite and contrast, mark features, and copy the link.
3. **A responder opens the link.** The same view appears on their laptop, and only the area in view is downloaded.
4. **They work the scene.** They can compare before and after in synced panels, measure distances and the area of a drawn region, and, on river channels, run our river-ice model in the browser.
5. **The map goes out.** They export a GeoTIFF for the GIS team, with a provenance file recording its source scene and settings, or a briefing figure with scale bar and coordinates.

## Where it fits

SARdine doesn't replace flood-map products. It is the first look before they exist, and the check on them afterwards.

| Existing resource | What responders get | What SARdine adds |
| --- | --- | --- |
| ASF Vertex and HyP3 | Scene search, browse images, on-demand terrain-corrected images and water masks | The scene itself, opened region-only from a link, without waiting for processing or a download |
| NASA OPERA surface-water and disturbance maps | Systematic flood and change products | A view of the radar behind a map, and of scenes before the product is generated |
| NASA Disasters Mapping Portal, Copernicus EMS rapid mapping | Analyst-made maps during activations | Works for any event and any user, with no activation needed |
| Commercial vendor viewers | Each vendor's own imagery | One viewer across NISAR, Sentinel-1 and commercial products |

## Reading radar safely

Radar is easy to misread. That's why, in the workflow above, a remote-sensing analyst interprets the scene and the responder works from the analyst's view and notes.

- **Dark but not water:** radar shadow behind steep terrain, smooth pavement and sand, and wet snow.
- **Water that doesn't look dark:** water roughened by wind or rain, and flooded towns, where buildings make the scene brighter.
- **River ice:** rough ice rubble is bright, while smooth ice can look like open water.
- **Model limits:** the river-ice model is valid only on river channels at full resolution, and it does not identify mixed ice and water.

## Built for the imagery that arrives first

Commercial SAR is often the first imagery over a disaster, so SARdine aims to open commercial formats as easily as NISAR. Today it reads commercial complex data in **SICD** format (uncompressed NITF), and vendor GeoTIFFs open as plain images, alongside NISAR HDF5, Sentinel-1 and OPERA COGs. Next, in the order responders receive them: vendor terrain-corrected products with their metadata and calibration applied, full SICD calibration, **SIDD** detected products, and JPEG 2000-compressed NITF. Results derived from licensed imagery are shared under that imagery's licence.

## Where it stands

SARdine 1.0 is a released research tool, not yet an operational service. It has not yet been used by a response agency during a live event.

| Capability | Status |
| --- | --- |
| Link-based viewing of NISAR, Sentinel-1 and other COG imagery | Released |
| Commercial complex data in SICD (uncompressed NITF) | Released |
| Before/after comparison, measurement, GeoTIFF exports with provenance | Released |
| River ice / open water model, launched from a link | Released (river channels at full resolution) |
| Flood mapping with analyst accept/reject review | In development |
| Vendor metadata and calibration, SIDD, JPEG 2000 NITF | Planned |
| Delivery into ArcGIS and dashboards (tile layer, flood polygons, KMZ) | Planned |
| Measured bandwidth and time-to-image on field connections | Needed before operational use |
| Validated flood accuracy against reference maps | Needed before operational use |

SARdine needs a computer with WebGL2 graphics, and it has been tested in Chromium-based browsers (Chrome, Edge).

## Where it's being used

- **Arctic river breakup and ice-jam floods.** Our NASA [HiFLOWS](/blog/2025-hiflows-rapid-arctic-flood-response) project tasks commercial X-band satellites over Alaskan floods, and SARdine is how we plan to put those scenes in front of responders. Our river ice / open water model, trained for NISAR L-band, runs in the browser on river channels and can be launched from a link.
- **Floods under cloud and canopy.** L-band radar sees water under forest canopy. We use SARdine to follow seasonal inundation across the Pacaya-Samiria floodplain as part of our [NISAR wetlands work](/blog/2025-nisar-wetlands-freeze-thaw).
- **Between events.** The same tool supports NISAR validation and teaching, so analysts already know it when an event starts.

## Pilot partners wanted

We want to run SARdine on one live event during the 2027 Alaska river breakup, with the Alaska Satellite Facility and a response organization. The pilot will measure the time from a scene reaching the archive to a responder seeing it, and check SARdine views against OPERA surface-water maps.

- **Response organizations:** river forecast centers, and tribal and municipal emergency managers, to co-design and run the pilot.
- **Commercial SAR providers:** sample products in each delivery format (SICD, SIDD, terrain-corrected GeoTIFF) to extend format support.
- **NASA archives:** a "view in browser" link on scene pages.

SARdine is open source under the Apache 2.0 licence. Bug reports and format requests are welcome on [GitHub Issues](https://github.com/nicksteiner/sardine/issues). For a demo or to talk about a pilot, [get in touch](mailto:nsteiner@ccny.cuny.edu).

**Cite:** Steiner, N. C. (2026). *SARdine: browser-native SAR data inspection and exploration* [Computer software]. Zenodo. [https://doi.org/10.5281/zenodo.23345870](https://doi.org/10.5281/zenodo.23345870)
