export type Lang = 'ru' | 'kz' | 'en';
export const languages: Lang[] = ['ru','kz','en'];
export const base = '/Kyzylorda-medical-college-platform';

export const t = {
  ru: {
    name: 'Кызылординский медицинский высший колледж',
    short: 'КМВК',
    about: 'О колледже', specialties: 'Специальности', admissions: 'Абитуриентам', students: 'Студентам', practice: 'Практика', documents: 'Документы', news: 'Новости', contacts: 'Контакты',
    heroTitle: 'Медицинское образование с историей с 1928 года',
    heroText: 'Современный цифровой портал колледжа: поступление, специальности, практика, документы, новости и контакты.',
    apply: 'Подать заявку', choose: 'Выбрать специальность'
  },
  kz: {
    name: 'Қызылорда медициналық жоғары колледжі',
    short: 'ҚМЖК',
    about: 'Колледж туралы', specialties: 'Мамандықтар', admissions: 'Талапкерлерге', students: 'Студенттерге', practice: 'Практика', documents: 'Құжаттар', news: 'Жаңалықтар', contacts: 'Байланыс',
    heroTitle: '1928 жылдан басталған медициналық білім тарихы',
    heroText: 'Колледждің цифрлық порталы: қабылдау, мамандықтар, практика, құжаттар, жаңалықтар және байланыс.',
    apply: 'Өтінім беру', choose: 'Мамандық таңдау'
  },
  en: {
    name: 'Kyzylorda Medical Higher College',
    short: 'KMHC',
    about: 'About', specialties: 'Programs', admissions: 'Admissions', students: 'Students', practice: 'Practice', documents: 'Documents', news: 'News', contacts: 'Contacts',
    heroTitle: 'Medical education with a history since 1928',
    heroText: 'Digital portal of the college: admissions, programs, practice, documents, news and contacts.',
    apply: 'Apply now', choose: 'Choose a program'
  }
} as const;

export const stats = [
  ['1928','history'], ['2071','students'], ['8','programs'], ['33','clinical bases'], ['2021–2026','IQAA']
];
