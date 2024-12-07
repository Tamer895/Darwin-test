import React from 'react';
import TextInput from '@components/UI/Inputs/TextInput/TextInput';
import InputContainer from '@components/UI/Inputs/InputContainer/InputContainer';
import Textarea from '@components/UI/Inputs/Textarea/Textarea';

export default function FeedbackForm() {
  return (
    <div className="w-[80%] box-border mx-auto rounded-[25px] bg-blue-soft flex flex-col md:flex-row items-start justify-between p-12 gap-8">
      {/* Левая сторона */}
      <div className="flex flex-col md:w-2/3">
        <h1 className="text-[280%] leading-tight font-bold text-white mb-4">
          Добро пожаловать <br/>на наш сайт!
        </h1>
        <p className="text-lg text-white">
          Заполните форму справа, чтобы начать пользоваться нашими услугами. Мы
          обещаем сделать ваш опыт удобным и комфортным.
        </p>
      </div>

      {/* Правая сторона */}
      <div style={{backgroundColor: "rgba(255,255,255, 0.1)"}} className="flex flex-col md:w-1/3 p-6 rounded-lg">
          <TextInput className="w-full" id="name" placeholder="Введите ваше имя" />
          <br />
          <TextInput className="w-full" id="email" placeholder="Введите ваш email" />
          <br />
          <Textarea
          
            id="message"
            placeholder="Введите ваше сообщение"
            className="h-20 w-full"
          />
          <br />
        <button className="h-12 bg-primary-def text-white font-medium rounded-md hover:bg-primary-hover">
          Отправить
        </button>
      </div>
    </div>
  );
}
