//External
import React from 'react'

//Internal
import styles from "./Label.module.scss"

/**
 * A customized Label
 * @param props any children contained in the <Label></Label>
 * @returns {React.ReactElement} a Label
 */


export const Label = (children: any) => {
  return (
    <label className={styles.thelabel}>{children}</label>
  )
}