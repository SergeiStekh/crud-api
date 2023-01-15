function getIdFromUrl(url: string | undefined) {
  return url?.split('/')[2] || null;
}

export { getIdFromUrl }