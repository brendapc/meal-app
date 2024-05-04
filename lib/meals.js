import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); //delay for 2 seconds to simulate big request for loading component development
  
  //throw new Error("loading meals failed")

  return db.prepare('SELECT * FROM meals').all();
}

export async function getMealBySlug(slug) {
  await new Promise((resolve) => setTimeout(resolve, 2000)); //delay for 2 seconds to simulate big request for loading component development

  //throw new Error("loading meal failed")

  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}