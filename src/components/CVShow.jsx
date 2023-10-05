import PropTypes from 'prop-types';
import styles from "../styles/CVShow.module.css";

function CVShow({ person }) {
    return <div className={styles.cvShow}>
        <div className={styles.showLeft}>
            <p className={styles.name}>{person.name}</p>
            <p>{person.email}</p>
            <p>{person.phoneNumber}</p>
        </div>
        <div className={styles.showRight}>
            <div>
                <h2>Educational Experience</h2>
                <div className={styles.orgList}>
                    {person.educationalExperience.map((r, i) => <div key={i} className={styles.org}>
                        <p className={styles.date}>{`${r.startDateOfStudy}-${r.endDateOfStudy}`}</p>
                        <div>
                            <p className={styles.orgName}>{r.schoolName}</p>
                            <p>{r.titleOfStudy}</p>
                        </div>
                    </div>)}
                </div>
            </div>
            <div>
                <h2>Practical Experience</h2>
                <div className={styles.orgList}>
                    {person.practicalExperience.map((r, i) => <div key={i} className={styles.org}>
                        <p className={styles.date}>{`${r.dateFrom}-${r.dateUntil}`}</p>
                        <div>
                            <p className={styles.orgName}>{r.companyName}</p>
                            <p className={styles.role}>{r.positionTitle}</p>
                            <p>{r.mainResponsibilitiesOfYourJobs}</p>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    </div>
}

CVShow.propTypes = {
    person: PropTypes.object.isRequired,
}

export default CVShow;