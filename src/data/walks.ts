export type WalkType = "wetlands" | "heritage" | "park" | "forest" | "water";

export interface Walk {
  number: number;
  id: string;
  name: string;
  type: WalkType;
  color: string;
}

export const walks: Walk[] = [
  { number: 1, id: "wijgmaalbroek", name: "Wijgmaalbroek", type: "wetlands", color: "#188134" },
  { number: 2, id: "abdij-van-vlierbeek", name: "Abdij van Vlierbeek", type: "heritage", color: "#6f8c2f" },
  { number: 3, id: "provinciaal-domein", name: "Provinciaal Domein", type: "park", color: "#bf7d2c" },
  { number: 4, id: "egenhovenbos", name: "Egenhovenbos", type: "forest", color: "#286a51" },
  { number: 5, id: "abdij-van-park", name: "Abdij van 't Park", type: "heritage", color: "#87643b" },
  { number: 6, id: "heverleebos", name: "Heverleebos", type: "forest", color: "#39784a" },
  { number: 7, id: "vijvers-bellefroid", name: "Vijvers Bellefroid", type: "water", color: "#347f91" }
];
