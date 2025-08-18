import React, { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {

  const { doctors, aToken, getAllDoctors } = useContext(AdminContext)

  return (
    <div>

    </div>
  )
}

export default DoctorsList