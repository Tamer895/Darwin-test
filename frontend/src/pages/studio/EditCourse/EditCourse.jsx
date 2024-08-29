import React, { useState} from 'react'
import { useTranslation } from 'react-i18next';

import Flexbox from '@components/layouts/Stacks/Flexbox/Flexbox';
import Sidebar from '@components/layouts/Sidebar/Sidebar';
import Content from '@components/layouts/Stacks/Content/Content';



export default function EditCourse() {

  const { t } = useTranslation('studio');

  return (
    <Flexbox direction="row" items="flex-start" justify="space-between" className="px-40 py-16 bg-light_bg">
      
      <Sidebar focused="0"/>
      
      <Content width="78%" height="500px" className="bg-white border-black-10 border-solid border-2 rounded-xl"> asd</Content>

    </Flexbox>
  )
}
