const images = import.meta.glob("../assets/**/*", { eager: true, as: "url" });

export function resolveImage(path) {
  if (!path || typeof path !== "string") {
    console.warn("resolveImage called with invalid path:", path);
    return "";
  }
  const normalized = path.replace("./", "../");
  return images[normalized] || null;
}
