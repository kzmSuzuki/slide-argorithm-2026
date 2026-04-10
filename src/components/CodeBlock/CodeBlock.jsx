import { useEffect, useRef } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-javascript'
import styles from './CodeBlock.module.css'

export default function CodeBlock({ code, language = 'python', title }) {
  const codeRef = useRef(null)

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [code])

  return (
    <div className={styles.wrapper}>
      {title && (
        <div className={styles.titleBar}>
          <span className={styles.titleText}>{title}</span>
          <span className={styles.lang}>{language}</span>
        </div>
      )}
      <pre className={styles.pre}>
        <code ref={codeRef} className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
    </div>
  )
}
