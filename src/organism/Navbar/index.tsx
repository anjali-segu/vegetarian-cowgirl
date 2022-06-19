import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import NavbarLink from '../../atom/NavbarLink'
import SocialLink from '../../atom/SocialLink'
import LogoLink from '../../atom/LogoLink'
import {theme} from '../../utils/theme'
import Media from 'react-media';

import Logo3 from '../../assets/images/icons/logos/Logo3.png';

import Email from '../../assets/images/icons/email.png';
import Etsy from '../../assets/images/icons/etsy.png';
import Instagram from '../../assets/images/icons/instagram.png';
import Pinterest from '../../assets/images/icons/pinterest.png';

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
                  src={Logo3}
                  alt='The Vegetarian Cowgirl'
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
                    src={Instagram}
                    alt='Instagram'
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
                    src={Instagram}
                    alt='Instagram'
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
                    src={Etsy}
                    alt='Etsy'
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
                      src={Pinterest}
                      alt='Pinterest'
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
                      src={Email}
                      alt='Email'
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
