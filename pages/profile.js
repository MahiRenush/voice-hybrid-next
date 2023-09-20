import styles from '@/styles/Home.module.css'

export default function () {
    return(
        <div className={styles.grid}>
            <div className={styles.card}>
                <h2 className={styles.card}>Mahipas</h2>
                <div className={styles.description}><span>Desc:<p>All about me</p></span></div>
            </div>
        </div>
    )
}