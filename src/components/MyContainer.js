import { useTranslation } from "react-i18next"

function MyContainer() {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t("This is the front page")}</p>
    </div>
  )
}

export default MyContainer