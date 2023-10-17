import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#1e6d6d",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});
export default state;
