import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
background-color: #44624a;

`
export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;

@media screen adn (max-width: 820px) {
    flex-direction: column;
}
`
export const WebsiteRights = styled.small`
color: #fff;
margin-bottom: 16px;
padding-top: 20px;
`
export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`
export const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;
`
export const Message = styled(Link)`
color: white;
padding-top: 10px;
`