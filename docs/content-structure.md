# Content and language structure

The website uses one shared data source and separate Dutch and English content.
The build process will generate one public URL per language, for example:

```text
/nl/walks/wijgmaalbroek/
/en/walks/wijgmaalbroek/
```

These are generated pages, not two pages that need to be designed and
maintained separately.

## Directory layout

```text
src/
  i18n/
    ui.nl.json
    ui.en.json
  content/
    pages/
      nl/
      en/

data/
  routes_overview.geojson
  <walk-slug>/
    walk.json
    route.geojson
    poi.geojson
    route_download.gpx
    content/
      nl.md
      en.md
    pois/
      nl.yaml
      en.yaml
    images/
    audio/
      nl/
      en/
```

## What is shared

Store language-neutral facts only once in `walk.json`: identifiers, distance,
duration, difficulty codes, surface codes, verification date and asset paths.
Route and POI geometry also remains shared.

Use stable codes such as `easy`, `paved` and `unpaved`. The UI dictionaries
translate those codes for visitors.

## What is translated

- General interface labels are stored in `src/i18n/ui.nl.json` and
  `src/i18n/ui.en.json`.
- Longer walk descriptions are stored in `content/nl.md` and `content/en.md`.
- POI titles, descriptions, image alternative text and transcripts are stored
  in `pois/nl.yaml` and `pois/en.yaml`.
- Spoken narration is stored in the matching `audio/nl/` or `audio/en/`
  directory.

## POI identifiers

Each POI must receive a stable `poi_id` in the authoritative QGIS layer, such
as `start-wijgmaalbroek` or `rietland-viewpoint`. The same identifier is used as
the key in both POI translation files. Avoid using `fid` as a permanent key,
because feature IDs may change after exporting or editing data.

## Adding another walk

1. Create `data/<walk-slug>/` using lowercase letters and hyphens.
2. Add the QGIS exports: `route.geojson`, `poi.geojson` and
   `route_download.gpx`.
3. Add `walk.json` with language-neutral facts and file references.
4. Add both `content/nl.md` and `content/en.md`.
5. Add both POI translation files, even if they initially contain an empty
   object.
6. Put shared photos in `images/` and narration in the appropriate language
   directory.

The website build should fail or report a clear warning when a walk or POI is
missing a Dutch or English translation.
