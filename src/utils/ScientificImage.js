// utils/ScientificImage.js - loading image for scientific page
const imageModules = import.meta.glob('../assets/Scientific-Instruments/**/*.{jpg,jpeg,png}', { eager: true });

export function getImagesByFolders() {
  const folderMap = {};

  for (const path in imageModules) {
    const parts = path.split('/');
    const folderName = parts[parts.length - 2]; // e.g., 'nature'

    if (!folderMap[folderName]) folderMap[folderName] = [];

    folderMap[folderName].push(imageModules[path].default);
  }

  return folderMap;
}
