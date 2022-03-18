import React, { useState, useEffect } from 'react';
import { getDoctors } from '../service/doctorService';
import { useNavigate } from 'react-router-dom';

const DoctorList = () => {
  const [doctorList, setDoctorList] = useState([])
  useEffect(() => {
    setDoctorList(getDoctors())
  }, []);

  const navigate = useNavigate();
  const navigateToDoctorProfile = (id) => {
    navigate(`/doctor/${id}`)
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      {doctorList?.length > 0 ?
        doctorList.map((doctor) => {
          return (
            <div className="w-2/5 flex flex-col mb-4" key={doctor.id}>
              <div
                className="bg-gray-800 rounded-lg p-5 mb-1 cursor-pointer
                hover:shadow-lg transition-all"
                onClick={() => navigateToDoctorProfile(doctor.id)}
              >
                <div className="uppercase text-base text-white"> {doctor.name} </div>
                <div className="flex justify-between">
                  <div className="text-sm text-gray-400 "> {doctor.speciality} </div>
                  <div className="font-bold text-gray-200"> {doctor.fees} </div>
                </div>
              </div>
            </div>
          )
        }) : <div className="text-white"> Loading... </div>
      }
    </div>
  );
}
export default DoctorList;