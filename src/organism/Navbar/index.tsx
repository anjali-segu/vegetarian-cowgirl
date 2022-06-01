import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import NavbarLink from '../../atom/NavbarLink'
import SocialLink from '../../atom/SocialLink'
import LogoLink from '../../atom/LogoLink'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Media from 'react-media';

interface Props {
  position?: 'fixed' | 'absolute' | 'sticky' | 'relative' | undefined,
}


const Navbar = (props:Props) => {
  const {position} = props


  return (
    <AppBar position={position} sx={{paddingBottom: theme.spacing(2), backgroundColor:'white'}}>
      <Toolbar>
      <Media query="(min-width: 600px)" render={() =>
        (
          <div>
          <LogoLink
              content={
                <img
                  style={{height:32}}
                  src={`/logos/Logo3.png`}
                />
              }
              url={'/'}
            />

          </div>
        )}
      />

        <NavbarLink
          content={'home'}
          url={'/'}
        />
        <NavbarLink
          content={'Recipes'}
          url={'/recipes'}
        />
        <NavbarLink
          content={'Austin Living'}
          url={'/austin-living'}
        />
        <NavbarLink
          content={'Art'}
          url={'/art'}
        />
        <NavbarLink
          content={'About'}
          url={'/about'}
        />

        <Media query="(max-width: 869px) and (min-width: 600px)" render={() =>
          (
            <div>
            <SocialLink
                content={
                  <img
                    style={{width:15, paddingLeft:1}}
                    src={`/icons/instagram.png`}
                  />
                }
                url={'https://www.instagram.com/thevegetariancowgirl/'}
              />

            </div>
          )}
        />
        <Media query="(min-width: 870px)" render={() =>
          (
            <div>
            <SocialLink
                content={
                  <img
                    style={{width:15, paddingLeft:80}}
                    src={`/icons/instagram.png`}
                  />
                }
                url={'https://www.instagram.com/thevegetariancowgirl/'}
              />

            </div>
          )}
        />
        <Media query="(min-width: 600px)" render={() =>
          (
          <div>
            <SocialLink
                content={
                  <img
                    style={{width:14}}
                    src={`/icons/etsy.png`}
                  />
                }
                url={'https://www.etsy.com/shop/PrintsbyMinimalist'}
              />
          </div>
          )}
          />

          <Media query="(min-width: 600px)" render={() =>
            (
            <div>
              <SocialLink
                  content={
                    <img
                      style={{width:14}}
                      src={`/icons/pinterest.png`}
                    />
                  }
                  url={'https://www.pinterest.com/PrintsbyMinimalist/'}
                />
              </div>
            )}
            />

            <Media query="(min-width: 600px)" render={() =>
              (
              <div>
              <SocialLink
                  content={
                    <img
                      style={{width:18}}
                      src={`/icons/email.png`}
                    />
                  }
                  url={'mailto:TODO'}
                />
              </div>
              )}
            />

      </Toolbar>

    </AppBar>
  )
}

Navbar.defaultProps = {
  position: 'sticky',
}

export default Navbar
