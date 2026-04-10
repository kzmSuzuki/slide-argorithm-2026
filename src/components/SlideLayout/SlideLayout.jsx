import styles from './SlideLayout.module.css'

export default function SlideLayout({
  children,
  title,
  subtitle,
  lessonTag,
  variant = 'content',
}) {
  return (
    <div className={`${styles.slide} ${styles[variant]}`}>
      {/* Grid decorative pattern */}
      <div className={styles.gridPattern} />

      {variant === 'title' ? (
        <div className={styles.titleCenter}>
          {lessonTag && <span className={styles.tag}>{lessonTag}</span>}
          <h1 className={styles.mainTitle}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {children}
        </div>
      ) : (
        <>
          <header className={styles.header}>
            {lessonTag && <span className={styles.tag}>{lessonTag}</span>}
            {title && <h2 className={styles.heading}>{title}</h2>}
          </header>
          <div className={styles.body}>
            {children}
          </div>
        </>
      )}

      <div className={styles.cornerDecor} />
    </div>
  )
}
