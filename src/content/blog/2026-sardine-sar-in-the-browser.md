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

In a flood, the critical hours are often cloudy, dark or both, and optical satellites see nothing. Radar sees the water anyway. NISAR, Sentinel-1 and commercial constellations such as ICEYE, Capella and Umbra can image an event within hours.

Getting that image to the people making decisions is the hard part. A single NISAR granule is a 2 to 8 GB file, and opening it normally means a full download and specialist GIS or Python software. Incident command posts, tribal and municipal emergency managers and field teams often have slow links, locked-down laptops and no remote-sensing staff.

## The link is the product

SARdine (**SAR D**ata **IN**spection and **E**xploration) opens radar imagery in a current web browser, straight from where it is stored. It reads only the part of the scene being viewed and renders it on the laptop's own graphics chip. There is nothing to install and no server to run.

In an event:

1. **A scene lands** in the NASA archive, or a commercial provider posts a scene.
2. **An analyst frames it.** They zoom to the affected area, choose a composite and contrast, and copy the link.
3. **A responder opens the link.** The same view appears on their laptop, and only the area in view is downloaded.
4. **They work the scene.** They can compare before and after in synced panels, measure distances and the area of a drawn region, mark features, and, on river channels, run our river-ice model in the browser.
5. **The map goes out.** They export a GeoTIFF for the GIS team, with a provenance file recording its source scene and settings, or a briefing figure with scale bar and coordinates.

SARdine doesn't replace flood-map products such as NASA's OPERA surface-water maps. It is the first look before they exist, and a way to check them against the radar afterwards.

## Built for the imagery that arrives first

Commercial SAR is often the first imagery over a disaster, so SARdine aims to open commercial formats as easily as NISAR. Today it reads commercial complex data in **SICD** format (uncompressed NITF), and vendor GeoTIFFs open as plain images, alongside NISAR HDF5, Sentinel-1 and OPERA COGs. Next, in the order responders receive them: vendor terrain-corrected products with their metadata and calibration applied, full SICD calibration, **SIDD** detected products, and JPEG 2000-compressed NITF.

## Where it's being used

- **Arctic river breakup and ice-jam floods.** Our NASA [HiFLOWS](/blog/2025-hiflows-rapid-arctic-flood-response) project tasks commercial X-band satellites over Alaskan floods, and SARdine is how we plan to put those scenes in front of responders. Our river ice / open water model, trained for NISAR L-band, runs in the browser on river channels and can be launched from a link.
- **Floods under cloud and canopy.** We use it to follow seasonal inundation across the Pacaya-Samiria floodplain as part of our [NISAR wetlands work](/blog/2025-nisar-wetlands-freeze-thaw).
- **Between events.** The same tool supports NISAR validation and teaching, so analysts already know it when an event starts.

## What's next and how to get involved

We are building a complete flood workflow: automatic flood proposals, analyst accept/reject review, and a labelled export. We are also **looking for a response organization to pilot SARdine with us on a live flood or ice-jam event**. Commercial providers that can share sample products in SICD, SIDD or other delivery formats would help us extend format support.

SARdine is open source under the Apache 2.0 licence. Bug reports and format requests are welcome on [GitHub Issues](https://github.com/nicksteiner/sardine/issues). For a demo or a pilot, [get in touch](mailto:nsteiner@ccny.cuny.edu).

**Cite:** Steiner, N. C. (2026). *SARdine: browser-native SAR data inspection and exploration* [Computer software]. Zenodo. [https://doi.org/10.5281/zenodo.23345870](https://doi.org/10.5281/zenodo.23345870)
