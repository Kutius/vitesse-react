import { Outlet, createFileRoute } from '@tanstack/react-router'
import TheFooter from '~/components/TheFooter'

export const Route = createFileRoute('/_home')({
  component: LayoutComponent,
})

function LayoutComponent() {
  const { t } = useTranslation()
  return (
    <main className="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <Outlet />
      <TheFooter />
      <div mx-auto mt-5 text-center text-sm opacity-50>
        {t('layout.header')}
      </div>
    </main>
  )
}
