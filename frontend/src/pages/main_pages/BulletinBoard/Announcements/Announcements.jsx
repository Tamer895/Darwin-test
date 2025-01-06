import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ANNOUNCEMENTS_API_ROUTES } from '@configs/api/Announcements/announcements';
import Announcement from '@components/UI/Cards/Announcement/Announcement';
import TextWithEllipsis from '@UI/Typography/Text/TextWithEllipsis';
import { Link } from 'react-router-dom';

import TextInput from '@components/UI/Inputs/TextInput/TextInput'; // Импорт новых компонентов
import DateInput from '@components/UI/Inputs/DateInput/DateInput';
import InputContainer from '@components/UI/Inputs/InputContainer/InputContainer';
import Button from '@components/UI/Buttons/Button/Button';
import './styles/style.css';

import { useTranslation } from 'react-i18next'



export default function Announcements() {
  const {t} = useTranslation('bboard')
  const [announcements, setAnnouncements] = useState([]);
  const [filters, setFilters] = useState({
    dateFrom: '',
    dateTo: '',
    category: '',
    keywords: '',
  });

  useEffect(() => {
    fetchAnnouncements();
  }, [filters]);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(ANNOUNCEMENTS_API_ROUTES.GET_ALL, {
        params: {
          date_range_after: filters.dateFrom,
          date_range_before: filters.dateTo,
          category: filters.category,
          keywords: filters.keywords,
        },
      });
      setAnnouncements(response.data.results);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      dateFrom: '',
      dateTo: '',
      category: '',
      keywords: '',
    });
  };

  return (
    <section className="w-4/5 py-10 mx-auto">
      <h1 className="text-2xl mb-5 text-black-def">{t('last_announce')}</h1>

      {/* Filter Form */}
      <div className="flex items-end justify-start mb-5">
        <InputContainer for="dateForm" title={t('filter.from')}>
          <DateInput
            name="dateFrom"
            value={filters.dateFrom}
            onChange={handleFilterChange}
            placeholder="От"
            className="mr-2"
          />
        </InputContainer>

        <InputContainer for="dateForm" title={t('filter.to')}>
          <DateInput
            name="dateTo"
            value={filters.dateTo}
            onChange={handleFilterChange}
            placeholder="До"
            className="mr-2"
        />
        </InputContainer>

        <InputContainer for="dateForm" title={t('filter.category')}>
          <TextInput
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            placeholder="Категория"
            className="mr-2"
          />
        </InputContainer>

        <InputContainer for="dateForm" title={t('filter.keywords')}>
          <TextInput
            name="keywords"
            value={filters.keywords}
            onChange={handleFilterChange}
            placeholder="Ключевые слова"
            className="mr-2"
          />
        </InputContainer>

        <Button
          // className="bg-white hover:bg-white text-black-def"
          onClick={resetFilters}
        >
          {t('reset')}
        </Button>
      </div>

      {/* Announcements List */}
      <div className="w-full announcementsSection">
        {announcements.map((e, index) => (
          <Link className="item" to={`/bulletin_board/${e.id}/`} key={index}>
            <Announcement
              author={e.source_name}
              logo={e.source_avatar}
              img={e.preview}
              datetime={e.created_at}
            >
              <TextWithEllipsis className="" maxLength={65} text={e.title} />
              <br />
              <TextWithEllipsis
                className="font-thin"
                maxLength={110}
                text={e.description}
              />
            </Announcement>
          </Link>
        ))}
      </div>
    </section>
  );
}
