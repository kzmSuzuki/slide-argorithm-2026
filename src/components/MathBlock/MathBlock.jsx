import { useMemo } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import styles from './MathBlock.module.css'

export default function MathBlock({ math, display = true }) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: display,
        throwOnError: false,
        trust: true,
      })
    } catch {
      return math
    }
  }, [math, display])

  if (display) {
    return (
      <div className={styles.block}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    )
  }

  return <span className={styles.inline} dangerouslySetInnerHTML={{ __html: html }} />
}
