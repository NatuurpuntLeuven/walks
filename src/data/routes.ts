import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

export async function loadOverviewRoutes() {
  const filePath = resolve(process.cwd(), "data/routes_overview.geojson");
  const contents = await readFile(filePath, "utf8");
  return JSON.parse(contents);
}
