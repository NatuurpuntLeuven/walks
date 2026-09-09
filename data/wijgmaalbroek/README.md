# Wijgmaalbroek

This directory contains the language-neutral route data and the Dutch and
English content for the Wijgmaalbroek walk.

## Existing route files

- `route.geojson`: route geometry exported from QGIS.
- `poi.geojson`: point geometry exported from QGIS.
- `route_download.gpx`: downloadable route for GPS and walking apps.

QGIS remains the authoritative source for geometries. Do not maintain the
GeoJSON and GPX exports independently by hand.

## Localized content

- `content/nl.md` and `content/en.md`: the main walk description.
- `pois/nl.yaml` and `pois/en.yaml`: localized POI information, keyed by a
  stable `poi_id` from the QGIS data.
- `audio/nl/` and `audio/en/`: language-specific narration.
- `images/`: shared photographs; captions and alternative text are translated
  in the content files.
