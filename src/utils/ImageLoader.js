// utils/imageLoader.js
const imageModules = import.meta.glob('../assets/ARCLIMAGE/**/*.{jpg,jpeg,png}', { eager: true });

export function getImagesByFolders() {
  const folderMap = {};

  for (const path in imageModules) {
    const parts = path.split('/');
    let folderName = parts[parts.length - 2]; // e.g., 'nature'
    folderName = folderName.replace(/^\d+\./, '');

    if (!folderMap[folderName]) folderMap[folderName] = [];

    folderMap[folderName].push(imageModules[path].default);
  }

  return folderMap;
}
