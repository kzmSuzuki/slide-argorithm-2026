import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock/CodeBlock'
import MathBlock from '../components/MathBlock/MathBlock'
import InfoBox from '../components/InfoBox/InfoBox'
import styles from './StyleGuidePage.module.css'

export default function StyleGuidePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link to="/" className={styles.back}>Home</Link>
          <h1 className={styles.title}>Style Guide</h1>
          <p className={styles.subtitle}>Design system components</p>
        </header>

        {/* Colors */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Color Palette</h2>
          <div className={styles.colorGrid}>
            {[
              { name: 'Background', var: '--color-bg', value: '#e8ecf1' },
              { name: 'Surface', var: '--color-surface', value: '#e0e5ec' },
              { name: 'Raised', var: '--color-surface-raised', value: '#eaeff5' },
              { name: 'Inset', var: '--color-surface-inset', value: '#d1d9e6' },
              { name: 'Text Primary', var: '--color-text-primary', value: '#2c3e50' },
              { name: 'Text Secondary', var: '--color-text-secondary', value: '#5a6a7a' },
              { name: 'Accent', var: '--color-accent', value: '#5b7a9d' },
              { name: 'Accent Dark', var: '--color-accent-dark', value: '#3d5a7a' },
            ].map(c => (
              <div key={c.name} className={styles.colorCard}>
                <div className={styles.colorSwatch} style={{ background: c.value }} />
                <span className={styles.colorName}>{c.name}</span>
                <code className={styles.colorCode}>{c.value}</code>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Typography</h2>
          <div className={styles.typeShowcase}>
            <div className={styles.typeItem}>
              <span className={styles.typeLabel}>H1 / 3.4rem</span>
              <h1>Heading Level 1</h1>
            </div>
            <div className={styles.typeItem}>
              <span className={styles.typeLabel}>H2 / 2.6rem</span>
              <h2>Heading Level 2</h2>
            </div>
            <div className={styles.typeItem}>
              <span className={styles.typeLabel}>H3 / 2rem</span>
              <h3>Heading Level 3</h3>
            </div>
            <div className={styles.typeItem}>
              <span className={styles.typeLabel}>H4 / 1.6rem</span>
              <h4>Heading Level 4</h4>
            </div>
            <div className={styles.typeItem}>
              <span className={styles.typeLabel}>Body / 1.35rem</span>
              <p>Body text for descriptions, explanations, and general content across slides.</p>
            </div>
            <div className={styles.typeItem}>
              <span className={styles.typeLabel}>Mono</span>
              <p style={{ fontFamily: 'var(--font-mono)' }}>JetBrains Mono — 0123456789</p>
            </div>
          </div>
        </section>

        {/* Neumorphic Elements */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Neumorphic Elements</h2>
          <div className={styles.neuGrid}>
            <div className={styles.neuRaised}>
              <span>Raised</span>
            </div>
            <div className={styles.neuInset}>
              <span>Inset</span>
            </div>
            <div className={styles.neuFlat}>
              <span>Flat</span>
            </div>
            <button className={styles.neuButton}>Button</button>
          </div>
        </section>

        {/* Code Block */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Code Block</h2>
          <CodeBlock
            title="binary_search.py"
            language="python"
            code={`def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`}
          />
        </section>

        {/* Math */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Math (KaTeX)</h2>
          <MathBlock math="T(n) = 2T\\left(\\frac{n}{2}\\right) + O(n) = O(n \\log n)" />
          <div style={{ marginTop: '16px' }}>
            <p>
              Inline math: <MathBlock math="O(n \log n)" display={false} /> is the time complexity.
            </p>
          </div>
        </section>

        {/* Info Boxes */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Info Boxes</h2>
          <div className={styles.boxStack}>
            <InfoBox variant="info" title="Tip">
              <p>Binary search requires a sorted array as input.</p>
            </InfoBox>
            <InfoBox variant="warn" title="Important">
              <p>Watch for integer overflow when computing mid = (left + right) / 2.</p>
            </InfoBox>
            <InfoBox variant="definition" title="Definition: Time Complexity">
              <p>The computational complexity that describes the amount of time an algorithm takes to run as a function of the input size.</p>
            </InfoBox>
          </div>
        </section>

        {/* Table */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Table</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Algorithm</th>
                  <th>Best</th>
                  <th>Average</th>
                  <th>Worst</th>
                  <th>Space</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Merge Sort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n)</td></tr>
                <tr><td>Quick Sort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n²)</td><td>O(log n)</td></tr>
                <tr><td>Heap Sort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>O(1)</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}
