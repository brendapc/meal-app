'use client'
import { useRef } from 'react'
import styles from './image-picker.module.css'
export default function ImagePicker ({label, name}) {

  const imageInputRef = useRef()

  function handlePickClick() {
    imageInputRef.current.click()
  }

  return <div className={styles.picker}>
    <label htmlFor={name}>{label}</label>
    <div className={styles.controls}>
      <input 
        className={styles.input} // hiding ugly input and using button for better styling
        type="file" 
        id={name} // reference to the htmlFor attribute in the label
        accept="image/png, image/jpeg" 
        name={name}
        ref={imageInputRef}
      />
      <button className={styles.button} type='button' onClick={handlePickClick}>Pick an Image</button>
    </div>
  </div>
}
