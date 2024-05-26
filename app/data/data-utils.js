export const getGamesByCategory = (data, category) => {
  return data.filter((game) => {
    return game.category.find((item) => item.name === category);
  });
};

export const getGameById = (data, id) => {
  return data.find((game) => game.id === Number(id));
}