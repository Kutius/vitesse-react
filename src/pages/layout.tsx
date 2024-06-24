import TheFooter from '~/components/TheFooter'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation()
  return (
    <main className="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      {children}
      <TheFooter />
      <div className="mx-auto mt-5 text-center text-sm opacity-50">
        {t('layout.header')}
      </div>
    </main>
  )
}
