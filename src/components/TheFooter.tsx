import { Link } from '@tanstack/react-router'

export default function TheFooter() {
  const { t, i18n } = useTranslation()

  const toggleLocales = async () => {
    await i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')
  }

  return (
    <nav className="flex gap-4 mt-6 justify-center text-xl">
      <Link to="/">Go</Link>
      <Link onClick={toggleLocales}>{t('language')}</Link>
    </nav>
  )
}
