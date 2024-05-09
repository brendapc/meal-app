import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs'

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

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`)
  const bufferedImage = await meal.image.arrayBuffer()

  stream.write(Buffer.from(bufferedImage), (error) => {  // save image to file system
    if (error) {
      throw new Error('Saving image failed')
    }
  });

  meal.image = `/images/${fileName}`; // save only image *path* to database

  db.prepare(
    'INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug) VALUES (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)'
  ).run(meal);

}