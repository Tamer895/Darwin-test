import React from 'react'
import classes from "./style.module.css"
import Button from '@components/UI/Buttons/Button/Button'
import study from "@media/images/png/study.webp"
import team from "@media/images/png/Darwin_team.png"

export default function AboutRU() {
  return (
    <div className="w-full pt-5 pb-20">
      <section className={`w-[97%] h-[600px] bg relative mx-auto rounded-[30px] py-14 flex-col-center justify-center mb-32 ${classes.bg}`}>
        <h1 className='text-white text-6xl font-semibold'>О платформе Darwin</h1>
        <p align="center" className='w-[550px] text-white text-md mt-3 mb-5 opacity-70'>
            Нажмите на кнопку, чтобы узнать больше о нашей платформе, её возможностях и познакомиться с преданной командой, стоящей за ней.
        </p>
        <a href="#first_block">
            <Button className="bg-white text-primary-def hover:bg-white hover:text-primary-def">Узнать больше</Button>
        </a>
    </section>


      <section className='w-3/5 mx-auto'>
        <h1 id="first_block" className='font-semibold text-3xl'><span className='text-primary-def'>Darwin</span> - Учеба по новому</h1>
        <br />
        <p className='leading-6 whitespace-pre-wrap text-gray mb-2'>
          В течение учебного года многие из нас сталкиваются с трудностями в обучении. Кому-то сложно самостоятельно подготовиться к экзаменам, другие не знают, с чего начать, что учить, и постепенно теряют мотивацию. Есть и те, кто стремится освоить <strong>новые навыки</strong> в интересующих их сферах. 
        </p>

        <p className='leading-6 whitespace-pre-wrap text-gray mb-2'>
          Платформа <strong>Darwin</strong> создана для того, чтобы сделать процесс обучения доступным и увлекательным. Это проект, который открывает возможности для <strong>массового обмена навыками</strong> в онлайн-пространстве. <strong>Darwin</strong> предоставляет упрощённый доступ к образовательным материалам и курсам, помогая быстро находить нужную информацию. 
        </p>

        <p className='leading-6 whitespace-pre-wrap text-gray mb-2'>
          В отличие от крупных аналогов, таких как <strong>Coursera</strong> и <strong>Udemy</strong>, <strong>Darwin</strong> выделяется своей <strong>простотой и минималистичным подходом</strong>. Интуитивный интерфейс позволяет учащимся сосредоточиться на обучении, не отвлекаясь на сложные настройки, что стимулирует <strong>личное и профессиональное развитие</strong>.
        </p>

        <p className='leading-6 whitespace-pre-wrap text-gray mb-2'>
          Кроме того, наша платформа предлагает удобный функционал для размещения и поиска событий. Проще говоря, на <strong>Bulletin Board</strong> вы можете найти интересующие мероприятия, такие как волонтёрские проекты, олимпиады и многое другое. Вы сможете ознакомиться с подробной информацией о событии и принять в нём участие.
        </p>
        <p className='leading-6 whitespace-pre-wrap text-gray mb-2'>
          Этот функционал помогает активно развиваться в выбранной сфере, приобретать ценный практический опыт и улучшать свои <strong>внеклассные достижения</strong>, что станет значительным преимуществом при поступлении в <strong>университеты</strong>.
        </p>

        <br />

        <div className="w-full h-[500px] flex-center overflow-hidden">
          <img src={study} alt="" />
        </div>


        <br /><br /><br />

        <h1 id="first_block" class="font-semibold text-3xl"><span class="text-primary-def">Darwin</span> - Команда, создающая будущее образования</h1>
        <br />
        <p class="leading-6 whitespace-pre-wrap text-gray mb-2">
          <strong>Darwin</strong> — это онлайн-платформа, стремящаяся изменить подход к обучению в Казахстане. Основная миссия нашей команды заключается в том, чтобы предоставить ученикам и студентам уникальные возможности для продуктивного обучения и мотивации. Мы хотим внедрить инновационный подход в образовательную систему, который поможет учащимся систематизировать знания и готовиться к экзаменам с легкостью и эффективностью.
        </p>

        <p class="leading-6 whitespace-pre-wrap text-gray mb-2">
          Наша платформа помогает решать проблемы, с которыми сталкиваются студенты, такие как несоответствие материалов на уроках и требования экзаменов. Мы создали решение, которое позволяет учителям создавать уроки, организованные по принципу "боксов", чтобы ученики могли легко и эффективно повторять материал, готовиться к экзаменам и улучшать свои знания.
        </p>

        <p class="leading-6 whitespace-pre-wrap text-gray mb-2">
          В команде <strong>Darwin</strong> работают школьники и студенты, объединившиеся ради одной цели — изменить образование в Казахстане. Мы верим, что каждый студент или школьник может внести свой вклад в создание платформы, и именно благодаря открытости и доступности мы стремимся создать платформу, где каждый найдёт поддержку и мотивацию для учебы.
        </p>

        <p class="leading-6 whitespace-pre-wrap text-gray mb-2">
          Наша цель — это не только создать платформу, но и внедрить её в школы, колледжи и университеты Казахстана, чтобы создать активное сообщество учеников и преподавателей. Мы хотим, чтобы <strong>Darwin</strong> стал мощным инструментом для обмена знаниями и опытом между учащимися, создавая тем самым новое сообщество для эффективного обучения.
        </p>

        <p class="leading-6 whitespace-pre-wrap text-gray mb-2">
          Кроме того, мы активно собираем обратную связь от наших пользователей с помощью ежедневных опросов на социальных платформах, что помогает нам улучшать функционал и поддерживать активное взаимодействие с сообществом.
        </p>

        <p class="leading-6 whitespace-pre-wrap text-gray mb-2">
          Мы верим, что с помощью чётких и краткосрочных целей мы сможем развиваться и достигать новых высот. Наша команда мотивирована, и каждый из нас вкладывает свои усилия в создание уникальной образовательной платформы для студентов и учителей.
        </p>

        <p class="leading-6 whitespace-pre-wrap text-gray mb-2">
          В будущем мы планируем внедрить нашу платформу в образовательные учреждения Казахстана, чтобы создать глобальное сообщество, где каждый студент и учитель сможет найти необходимые знания и поддержку.
        </p>

        <br />

        <div className="w-full h-[500px] flex-center overflow-hidden">
          <img src={team} alt="" />
        </div>

        <br /><br /><br />

      </section>

      
    </div>
  )
}