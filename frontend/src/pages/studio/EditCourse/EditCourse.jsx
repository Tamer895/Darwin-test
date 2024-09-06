import React, {useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Permission from '@utils/auth/Permission';

export default function EditCourse() {
  const { id } = useParams(); 

  Permission(id)

  return (
    <div>
      {id}
    </div>
  )
}
