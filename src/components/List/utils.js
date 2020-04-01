const funnyPlaceholderById = (id) => {
  if (id === 'media') {
    return 'How I Met Your Father';
  } else if (id === 'internet') {
    return 'Funny Cat Videoz (az uzual)';
  } else if (id === 'weird') {
    return 'Buy some stocks......or some toilet paper';
  }
  return 'Do a Handstand!';
};

export {
  funnyPlaceholderById,
};
