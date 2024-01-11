import { AppBar, Button, Toolbar } from "@mui/material"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

function Header() {
  const {t, i18n } = useTranslation();

  const changeLang = (e) => {
    console.log(e.target.id)
    i18n.changeLanguage(e.target.id)
  }

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Button color="inherit" component={Link} to="/">{t("Home")}</Button>
          <Button color="inherit" component={Link} to="/about" value="help">{t("About")}</Button>
          <div style={{flexGrow: 1}} />
          <Button id="fi" color="inherit" onClick={changeLang} >fi</Button>
          <Button id="en" color="inherit" onClick={changeLang} >en</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header