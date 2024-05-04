'use client'
import { useRef, useState } from 'react'
import styles from './image-picker.module.css'
import Image from 'next/image'

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState()
  const imageInputRef = useRef()

  function handlePickClick() {
    imageInputRef.current.click()
  }

  function handleImageChange(event) {
    const file = event.target.files[0]

    if (!file) {
      setPickedImage(null)
      return
    }
    const fileReader = new FileReader()
    
    fileReader.readAsDataURL(file)
    fileReader.onload = () => setPickedImage(fileReader.result)
  }

  return <div className={styles.picker}>
    <label htmlFor={name}>{label}</label>
    <div className={styles.controls}>
      <div className={styles.preview}>
        {pickedImage && <Image src={pickedImage} alt="Picked" fill />}
        {!pickedImage && <p>No image picked yet.</p>}
      </div>
      <input
        className={styles.input} // hiding ugly input and using button for better styling
        type="file"
        id={name} // reference to the htmlFor attribute in the label
        accept="image/png, image/jpeg"
        name={name}
        ref={imageInputRef}
        onChange={handleImageChange}
        required
      />
      <button className={styles.button} type='button' onClick={handlePickClick}>Pick an Image</button>
    </div>
  </div>
}
