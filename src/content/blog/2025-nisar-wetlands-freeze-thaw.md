---
title: "NISAR Wetlands & Freeze/Thaw Validation"
description: "Operations Science Team plan to validate NISAR wetlands inundation and freeze/thaw products with Amazonian, Arctic, and urban benchmarks."
date: "2025-02-14"
tags: ["project-update", "nisar", "wetlands"]
draft: false
---

## Mission focus

The NASA-ISRO Synthetic Aperture Radar (NISAR) mission will deliver systematic L- and S-band observations of the land surface every 6-12 days. Our Operations Science Team (OST) contribution targets three linked objectives: (1) quantify inundated wetlands extent and dynamics, (2) deliver a new land surface freeze/thaw (FT) algorithm and accompanying Algorithm Theoretical Basis Document (ATBD) for the NISAR Science Data System, and (3) stress-test ecosystem algorithms in complex urban environments where vegetation, infrastructure, and hydrology intersect.

## What we're building

- **Wetland inundation validation:** Assemble benchmark datasets across Pacaya Samiria (Peru), boreal Alaska, and temperate U.S. estuaries by fusing ALOS-2 PALSAR-2, Sentinel-1, UAVSAR, and legacy JERS-1 records with in situ water level transects spaced at NISAR's 1-hectare requirement.
- **Freeze/thaw analytics:** Prototype dual-polarized time-series methods that disaggregate soil, snow, and vegetation signals, drawing on SMAPVEX19-22 field campaigns and High Mountain Asia (HiMAT) heritage to meet the L2 FT accuracy targets.
- **Urban ecosystems testing:** Evaluate how NISAR observables perform over dense canopy mosaics in New York City by pairing L- and S-band scenes with ECOSTRESS temperature retrievals, lidar structure measurements, and municipal datasets.

## Field campaigns & datasets

Ground networks in the Peruvian Amazon (Pacaya Samiria), Alaska's Yukon-Kuskokwim Delta, and NYC parks combine TLS scans, GEDI coincident transects, and water depth gauging to capture canopy structure and inundation stage. These measurements scale to NISAR grid cells via UAVSAR overflights and provide uncertainty characterizations for the global L2 inundation product. Freeze/thaw validation leans on SMAPVEX flux towers, snow pits, and Arctic transects to benchmark landscape transitions -- critical for linking microwave observables to carbon flux models. Urban pilots extend the workflow to mixed-built environments, ensuring NISAR's ecosystem algorithms are resilient to heterogeneous scattering.

## Steiner Lab responsibilities

As CCNY co-investigator, Nick Steiner leads FT algorithm development, co-authors the new ATBD, and manages the integration of Pacaya Samiria/UAVSAR cal/val datasets into the NISAR Science Data System. The lab curates open validation assets, adapts OPERA-style processing pipelines for rapid quality assessment, and partners with NASA ARSET to translate methods into community training modules. Early deliverables include pre-launch prototypes of inundation classification accuracy, FT change detection studies across SMAPVEX sites, and post-launch reporting to the NISAR Program Scientist on mission performance and applications engagement.
