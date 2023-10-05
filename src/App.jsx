import { useState } from 'react'
import styles from './App.module.css'
import CVShow from './components/CVShow'
import Form from './components/Form'

function App() {
  const [person, setPerson] = useState({
    name: "Jkyo",
    email: "example@example.com",
    phoneNumber: "123456789",
    educationalExperience: [
      {
        schoolName: "Tokyo City University",
        titleOfStudy: "Ctrl C",
        startDateOfStudy: "2012/10",
        endDateOfStudy: "2013/10",
      },
      {
        schoolName: "Tokyo City University",
        titleOfStudy: "Ctrl V",
        startDateOfStudy: "2014/10",
        endDateOfStudy: "2015/10",
      },
    ],
    practicalExperience: [
      {
        companyName: "Mario",
        positionTitle: "Senior engineering",
        mainResponsibilitiesOfYourJobs: "PC repair",
        dateFrom: "2020/10",
        dateUntil: "2021/10",
      },
      {
        companyName: "Mario2",
        positionTitle: "Senior engineering",
        mainResponsibilitiesOfYourJobs: "Mac repair",
        dateFrom: "2022/10",
        dateUntil: "2023/10",
      },
    ],
  });

  return (
    <>
      <h1 className={styles.title}>CV Application</h1>
      <div className={styles.container}>
        <div className={styles.left}>
          <Form person={person} setPerson={setPerson} />
        </div>
        <div className={styles.right}>
          <CVShow person={person} />
        </div>
      </div>
    </>
  )
}

export default App
