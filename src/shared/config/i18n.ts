import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
        'AddButton':'New Article',
        Header: {
            'HeaderLinkOne': 'Home',
            'ChangeLanguage': 'ChangeLanguage',
            'HeaderLinkThree': 'Link',
        },
        AddPost:{
            'Title':'New Article',
            'TitlePlaceholder':'Article Title',
            'DescriptionPlaceholder':'Article Description',
            'FullTextPlaceholder':'Article Text',
            'Button':'Add Article',
        },
        Footer: {
            'Footer':'Test Task'
        },
        Article:{
            'More':'More',
            'Comments':'Comments',
            'AddCommentButton':'New Comment',
            'AddCommentField':'Comment'
        },
        Statistic:{
            'ArticlesCount':'Number of articles',
            'WordsCount':'Number of words',
            'CommentsCount':'Number of comments',
        }
    }
  },
  ru: {
    translation: {
        'AddButton':'Новая статья',
        Header: {
            'HeaderLinkOne': 'Главная',
            'ChangeLanguage': 'Сменить язык',
            'HeaderLinkThree': 'Ссылка',
        },
        AddPost:{
            'Title':'Новая статья',
            'TitlePlaceholder':'Введите заголовок статьи',
            'DescriptionPlaceholder':'Введите описание статьи',
            'FullTextPlaceholder':'Введите текст статьи',
            'Button':'Добавить статью',
        },
        Footer: {
            'Footer':'Тестовое задание'
        },
        Article:{
            'More':'Подробнее',
            'Comments':'Комментарии',
            'AddCommentButton':'Добавить комментарий',
            'AddCommentField':'Введите комментарий'
        },
        Statistic:{
            'ArticlesCount':'Количество статей',
            'WordsCount':'Количество слов в статьях',
            'CommentsCount':'Количество комментариев'
        }
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ru',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default {};
