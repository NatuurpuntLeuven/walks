import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

export type Language = "nl" | "en";

export interface PoiStory {
  id: string;
  sourceName: string;
  label: string;
  title: string;
  text: string;
  imageAlt: string;
}

export const wijgmaalbroekStories: Record<Language, PoiStory[]> = {
  nl: [
    {
      id: "start-wijgmaalbroek",
      sourceName: "Start Wijgmaalbroek",
      label: "Vertrekpunt",
      title: "Welkom in Wijgmaalbroek",
      text: "Natuurgebied Wijgmaalbroek bevindt zich op de grens van Leuven met Rotselaar, ten westen van de Dijle. Het ligt ten noorden van Leuven en maakt deel uit van de zuid-noordelijke as van de Dijlevallei. Deze vallei bevindt zich op een belangrijke trekroute voor vogels.",
      imageAlt: "Lommerrijke dreef met een bank in het groen"
    },
    {
      id: "steenuil",
      sourceName: "Steenuil",
      label: "Waarneming",
      title: "Kleine uil, groot karakter",
      text: "Hier werd een steenuil gemeld op Waarnemingen.be. Deze kleine uil houdt van kleinschalig boerenland met hagen, oude bomen en rustige hoekjes. Zie je hem niet? Kijk dan eens naar de lage paaltjes en oude boomholtes langs open terrein. Waarnemingen zijn momentopnames: geef dieren altijd rust en blijf op het pad.",
      imageAlt: "Steenuil op een houten paal in een bloemrijk landschap"
    },
    {
      id: "icarusblauwtje",
      sourceName: "Icarusblauwtje",
      label: "Waarneming",
      title: "Een blauwe flits boven het gras",
      text: "Ook het icarusblauwtje werd hier waargenomen. Op zonnige dagen kan deze kleine vlinder laag boven bloemrijke graslanden fladderen. Vooral vlinderbloemigen, zoals rolklaver, zijn belangrijk voor de rupsen. Kijk rustig tussen de bloemen: soms zie je eerst een blauwe flits en pas daarna de vlinder.",
      imageAlt: "Icarusblauwtje op een wilde bloem in een grasland"
    },
    {
      id: "koekoek",
      sourceName: "Koekoek",
      label: "Soort in de kijker",
      title: "De roep die iedereen kent",
      text: "De koekoek is een trekvogel die je in het voorjaar kunt horen met zijn bekende tweelettergrepige roep. Hij legt zijn ei in het nest van andere vogels, die het jong vervolgens grootbrengen. Het mozaïek van water, struiken en open grasland in de Dijlevallei biedt veel leven — en maakt deze plek interessant voor vogels op doortocht en in het broedseizoen.",
      imageAlt: "Koekoek op een tak aan de rand van een groen dal"
    }
  ],
  en: [
    {
      id: "start-wijgmaalbroek",
      sourceName: "Start Wijgmaalbroek",
      label: "Starting point",
      title: "Welcome to Wijgmaalbroek",
      text: "The Wijgmaalbroek nature reserve lies on the border between Leuven and Rotselaar, west of the River Dijle. North of Leuven, it forms part of the Dijle valley's north–south axis. This valley lies along an important migration route for birds.",
      imageAlt: "Leafy avenue with a bench in green surroundings"
    },
    {
      id: "steenuil",
      sourceName: "Steenuil",
      label: "Observation",
      title: "A small owl with great character",
      text: "A little owl was reported here on Waarnemingen.be. This small owl favours small-scale farmland with hedgerows, old trees and quiet corners. Cannot spot it? Look at low posts and old tree hollows along open ground. Observations are snapshots: always give wildlife space and stay on the path.",
      imageAlt: "Little owl on a wooden post in a flower-rich landscape"
    },
    {
      id: "icarusblauwtje",
      sourceName: "Icarusblauwtje",
      label: "Observation",
      title: "A blue flash over the grass",
      text: "The common blue butterfly was observed here too. On sunny days, this small butterfly may flutter low over flower-rich grassland. Legumes such as bird's-foot trefoil are especially important to its caterpillars. Look carefully between the flowers: you may first see a flash of blue, then the butterfly.",
      imageAlt: "Common blue butterfly on a wildflower in grassland"
    },
    {
      id: "koekoek",
      sourceName: "Koekoek",
      label: "Species spotlight",
      title: "The call everyone knows",
      text: "The common cuckoo is a migratory bird you may hear in spring through its familiar two-note call. It lays its egg in the nest of another bird, which then raises the chick. The mix of water, shrubs and open grassland in the Dijle valley supports abundant life — and makes this an interesting place for birds in migration and breeding season.",
      imageAlt: "Common cuckoo on a branch at the edge of a green valley"
    }
  ]
};

async function loadGeoJson(path: string) {
  return JSON.parse(await readFile(resolve(process.cwd(), path), "utf8"));
}

export const loadWijgmaalbroekRoute = () => loadGeoJson("data/wijgmaalbroek/route.geojson");
export const loadWijgmaalbroekPois = () => loadGeoJson("data/wijgmaalbroek/pois/poi.geojson");
