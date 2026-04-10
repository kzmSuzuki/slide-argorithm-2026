import styles from './InfoBox.module.css'

const VARIANTS = {
  info: { label: 'INFO' },
  warn: { label: 'NOTE' },
  definition: { label: 'DEF' },
}

export default function InfoBox({ variant = 'info', title, children }) {
  const config = VARIANTS[variant] || VARIANTS.info

  return (
    <div className={`${styles.box} ${styles[variant]}`}>
      <div className={styles.header}>
        <span className={styles.label}>{config.label}</span>
        {title && <span className={styles.title}>{title}</span>}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
