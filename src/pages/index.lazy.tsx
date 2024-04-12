import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  const { t } = useTranslation()

  return (
    <div>
      <div className="text-4xl">
        <div i-carbon-campsite inline-block />
      </div>
      <p>
        <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
          Vitesse
        </a>
      </p>
      <p>
        <em className="text-sm opacity-75">{t('intro.desc')}</em>
      </p>

      <div className="py-4" />
    </div>
  )
}
