import { useTranslation } from "react-i18next"
import MyHOC from "./MyHOC";

function MyContainer() {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t("This is the front page")}</p>
    </div>
  )
}

export default MyContainer