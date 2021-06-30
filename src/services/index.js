export const getTemplate = async (id) => {
  const res = await fetch(`./templates/${id}.json`);
  return res.json();
}