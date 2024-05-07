'use server'

export async function shareMeal(formData) {
  const meal = {
    title: formData.get('title'), //gets the value of the input with name="title"
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email')
  }
}
