import React from 'react'
import classes from "./style.module.css"
import Button from '@components/UI/Buttons/Button/Button'
import study from "@media/images/png/study.webp"
import team from "@media/images/png/Darwin_team.png"

export default function AboutKZ() {
  return (
    <div className="w-full pt-5 pb-20">
      <section className={`w-[97%] h-[600px] bg relative mx-auto rounded-[30px] py-14 flex-col-center justify-center mb-32 ${classes.bg}`}>
        <h1 className='text-white text-6xl font-semibold'>Darwin платформасы туралы</h1>
        <p align="center" className='w-[400px] text-white text-md mt-3 mb-5 opacity-70'>Платформа туралы, оның мүмкіндіктері мен оны жасаған командамен танысу үшін түймесін басыңыз.</p>
        <a href="#first_block"><Button className="bg-white text-primary-def hover:bg-white hover:text-primary-def">Толығырақ біліңіз</Button></a>
      </section>

      <section className='w-3/5 mx-auto'>
        <h1 id="first_block" className='font-semibold text-3xl'><span className='text-primary-def'>Darwin</span> - Жаңа білім алу жолы</h1>
        <br />
        <p className='leading-6 whitespace-pre-wrap text-gray mb-2'>
          Оқу жылы бойы көпшілігіміз оқу қиындықтарына тап боламыз. Кейбіреулерге емтихандарға дайындалу қиын, басқалар не істеу керектігін білмейді, не оқуға керектігін білмей мотивациясын жоғалтады. Сонымен қатар жаңа дағдыларды меңгергісі келетіндер де бар.
        </p>

        <p className='leading-6 whitespace-pre-wrap text-gray mb-2'>
          <strong>Darwin</strong> платформасы оқуды қолжетімді әрі қызықты ету үшін жасалған. Бұл онлайн кеңістікте дағдыларды белсенді бөлісуге мүмкіндік беретін жоба. <strong>Darwin</strong> білім беру материалдары мен курстарға оңай қол жеткізуді қамтамасыз етеді, қажетті ақпаратты тез табуға көмектеседі.
        </p>

        <p className='leading-6 whitespace-pre-wrap text-gray mb-2'>
          Кішігірім аналогтардан, мысалы <strong>Coursera</strong> мен <strong>Udemy</strong> платформаларынан айырмашылығы, <strong>Darwin</strong> өзінің <strong>қарапайымдылығы мен минималистік тәсілімен</strong> ерекшеленеді. Интуитивті интерфейс оқушыларға оқу процесіне толықтай назар аударуға мүмкіндік береді, күрделі баптауларға алаңдамай, бұл олардың <strong>жеке және кәсіби даму</strong> ынталандырады.
        </p>

        <p className='leading-6 whitespace-pre-wrap text-gray mb-2'>
          Сонымен қатар біздің платформада оқиғаларды орналастыру және іздеу үшін ыңғайлы функционал бар. Яғни, <strong>Bulletin Board</strong> бөлімінде қызықты іс-шараларды табуға болады, мысалы ерікті жобалар, олимпиадалар және басқа да көптеген шаралар. Оқиғаның толық ақпаратын көріп, оған қатысуға болады.
        </p>
        <p className='leading-6 whitespace-pre-wrap text-gray mb-2'>
          Бұл функционал таңдаған салада белсенді дамуға, құнды практикалық тәжірибе алуға және өзіңіздің <strong>қосымша жетістіктеріңізді</strong> арттыруға көмектеседі, бұл университетке түсу кезінде үлкен артықшылық береді.
        </p>

        <br />

        <div className="w-full h-[500px] flex-center overflow-hidden">
          <img src={study} alt="" />
        </div>


        <br /><br /><br />

        <h1 id="first_block" class="font-semibold text-3xl"><span class="text-primary-def">Darwin</span> - Білім беру болашағын жасайтын команда</h1>
        <br />
        <p class="leading-6 whitespace-pre-wrap text-gray mb-2">
          <strong>Darwin</strong> — Қазақстандағы оқу тәсілін өзгертуге ұмтылатын онлайн платформа. Біздің командаымыздың басты миссиясы — оқушылар мен студенттерге тиімді оқу және мотивация мүмкіндіктерін ұсыну. Біз білім беру жүйесіне инновациялық тәсіл енгізуді мақсат етіп отырмыз, бұл студенттерге білімді жүйелендіріп, емтихандарға жеңіл әрі тиімді дайындалуға көмектеседі.
        </p>

        <p class="leading-6 whitespace-pre-wrap text-gray mb-2">
          Біздің платформа студенттердің оқу барысында кездесетін мәселелерді шешуге көмектеседі, мысалы сабақтағы материалдар мен емтихан талаптарының арасындағы сәйкессіздіктер. Біз оқушыларға оқу материалдарын тиімді қайталау және емтихандарға дайындық үшін «қорап» принципі бойынша ұйымдастырылған сабақтарды жасауға мүмкіндік беретін шешім ұсындық.
        </p>

        <p class="leading-6 whitespace-pre-wrap text-gray mb-2">
          <strong>Darwin</strong> командасы мектеп оқушылары мен студенттерден құралған, олар білім беру жүйесін өзгерту үшін бірікті. Біз әрбір оқушының немесе студенттің платформа құруға үлес қоса алатынына сенеміз, және осы ашықтық пен қолжетімділік арқылы біз әркімге оқу үшін қолдау мен мотивация табатын платформа жасауға ұмтыламыз.
        </p>

        <p class="leading-6 whitespace-pre-wrap text-gray mb-2">
          Біздің мақсатымыз — тек платформа құру ғана емес, оны Қазақстанның мектептеріне, колледждеріне және университеттеріне енгізу, оқушылар мен оқытушылардың белсенді қоғамдастығын қалыптастыру. Біз <strong>Darwin</strong> білім мен тәжірибе алмасу үшін қуатты құралға айналуын, осылайша тиімді оқыту үшін жаңа қауымдастық қалыптасуын қалаймыз.
        </p>

        <p class="leading-6 whitespace-pre-wrap text-gray mb-2">
          Сонымен қатар, біз әлеуметтік платформаларда күнделікті сауалнамалар арқылы пайдаланушылардың кері байланысын белсенді түрде жинап отырамыз, бұл бізге функционалдықты жақсартуға және қауымдастықпен белсенді қарым-қатынас орнатуға көмектеседі.
        </p>

        <p class="leading-6 whitespace-pre-wrap text-gray mb-2">
          Біз айқын және қысқа мерзімді мақсаттар арқылы дамып, жаңа белестерге жетеміз деп сенеміз. Біздің команда мотивирован, және әрқайсымыз студенттер мен оқытушылар үшін бірегей білім беру платформасын құруға өз үлесімізді қосудамыз.
        </p>

        <p class="leading-6 whitespace-pre-wrap text-gray mb-2">
          Алдағы уақытта біз өз платформамызды Қазақстанның білім беру мекемелеріне енгізуді жоспарлап отырмыз, осылайша бүкіл әлемде білім мен қолдауды таба алатын студенттер мен мұғалімдерге арналған жаһандық қоғамдастық құрамыз.
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
