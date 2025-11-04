---
title: "HiFLOWS Rapid Arctic Flood Response"
description: "Earth Science to Action project prototyping 12-hour SAR tasking and flood analytics for Alaska's high-latitude communities."
date: "2025-02-14"
tags: ["project-update", "floods", "sar"]
draft: false
---

## Why HiFLOWS

Alaska now sees close to 18 significant flood events each year spanning ice jams, pluvial storms, rapid snowmelt, and glacial lake outburst floods. Communities face cascading risks from permafrost degradation, coastal erosion, and limited access roads, yet actionable flood maps often arrive days after crest. HiFLOWS (High-Latitude Flood and Open Water Surveillance) closes that gap by directing taskable X-band SAR constellations -- ICEYE, Capella, and Umbra -- to acquire scenes within 12 hours of event triggers and deliver one-meter flood extent products while water is still on the landscape.

## Goals & success metrics

- **Goal 1:** Reduce flood data latency from multi-day waits to sub-12-hour products that inform incident command decisions and protect critical infrastructure.
- **Goal 2:** Build a multi-year, high-resolution archive of Arctic flood dynamics that validates continental-scale models (e.g., NISAR, Sentinel-1, National Water Model) in permafrost terrain.
- **Goal 3:** Operationalize partnerships with the Alaska-Pacific River Forecast Center, NOAA Water Surface Conditions, and tribal and municipal responders by sharing open workflows and scene priorities.

Success is measured through hit rates on event acquisitions (targeting ~40 tasked scenes per year), accuracy benchmarks against in situ depth gauges, and the ability to meet NISAR's Level-2 inundation requirement of 80 percent classification accuracy at 1-hectare scale using HiFLOWS reference data.

## Workflow architecture

1. **Pre-task calibration:** Year 1 calibrates OPERA DSWX-SAR surface water algorithms for commercial X-band data, harmonizing radiometric terrain correction across vendors and integrating Copernicus DEM, HAND, and ArcticDEM inputs.
2. **Rapid tasking:** Event triggers combine APRFC forecasts, USGS gauge exceedances, and NWS alerts. Tasking scripts submit requests within minutes and queue dual acquisitions (rising and falling limb) to capture peak stage.
3. **Automated classification:** Hierarchical split-based thresholding seeds flood candidates. Fuzzy-logic scoring blends radar cross section, HAND, and slope to minimize false positives in heterogeneous tundra. SMAP freeze/thaw masks flag wet snow, and region-growing produces coherent polygons.
4. **Delivery & dissemination:** Products publish as GeoTIFFs and vector layers (flood extent, confidence, change) with metadata suited for ingest by NOAA WSC and Alaska DOT. Quarterly releases push scene catalogs, tasking logs, and evaluation notebooks to Zenodo under TOPS guidelines.

## Steiner Lab's role

Nick Steiner serves as principal investigator, steering requirements with NASA's Earth Science to Action program and ensuring HiFLOWS analytics align with NISAR validation needs. The lab maintains the SAR processing stack (GAMMA, DSWX-SAR, SMAP fusion), coordinates uptake with NOAA and Alaska partners, and develops training materials so state agencies can replicate fast tasking. Deliverables include a latency dashboard, community briefings before 2025 breakup season, and an open science playbook documenting data schemas, code releases, and licensing for commercial scenes shared through NASA agreements.
