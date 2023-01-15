function getIdFromUrl(url) {
  return url.split('/')[2] || null;
}

export { getIdFromUrl }