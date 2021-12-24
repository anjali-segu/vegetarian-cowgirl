import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import NavbarLink from '../../atom/NavbarLink'
import SocialLink from '../../atom/SocialLink'
import LogoLink from '../../atom/LogoLink'

interface Props {
  position?: 'fixed' | 'absolute' | 'sticky' | 'relative' | undefined,
}


const Navbar = (props:Props) => {
  const {position} = props


  return (
    <AppBar position={position}>
      <Toolbar>
      <LogoLink
          content={
            <img
              style={{height:32}}
              src={`${process.env.PUBLIC_URL}/Logo3.png`}
            />
          }
          url={'/'}
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
        <SocialLink
            content={
              <img
                style={{width:15, paddingLeft:80}}
                src={`${process.env.PUBLIC_URL}/instagram.png`}
              />
            }
            url={'https://www.instagram.com/thevegetariancowgirl/'}
          />
          <SocialLink
              content={
                <img
                  style={{width:14}}
                  src={`${process.env.PUBLIC_URL}/etsy.png`}
                />
              }
              url={'https://www.etsy.com/shop/PrintsbyMinimalist'}
            />
            <SocialLink
                content={
                  <img
                    style={{width:14}}
                    src={`${process.env.PUBLIC_URL}/pinterest.png`}
                  />
                }
                url={'https://www.pinterest.com/PrintsbyMinimalist/'}
              />
              <SocialLink
                  content={
                    <img
                      style={{width:18}}
                      src={`${process.env.PUBLIC_URL}/email.png`}
                    />
                  }
                  url={'https://www.pinterest.com/PrintsbyMinimalist/'}
                />
      </Toolbar>

    </AppBar>
  )
}

Navbar.defaultProps = {
  position: 'absolute',
}

export default Navbar
