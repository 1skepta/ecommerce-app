const images = import.meta.glob("../assets/**/*", { eager: true, as: "url" });

export function resolveImage(path) {
  const normalized = path.replace("./", "../");
  return images[normalized];
}
