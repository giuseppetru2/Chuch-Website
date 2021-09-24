// import Link from 'next/link'
import SocialIcon from './social-icon'

export default function Footer() {
  return (
    <footer className="bg-black ph3 pv4 white">
      <div className="mw7 center pt3">
        <div className="flex-ns justify-between">
          <div>
            <h3 className="f4 b lh-title mb2 primary">Social media</h3>
            <ul className="mhn2">
              <SocialIcon link="#" iconPath="/img/icons-facebook.svg" />
              <SocialIcon link="#" iconPath="/img/icons-twitter.svg" />
              <SocialIcon link="#" iconPath="/img/icons-instagram.svg" />
              <SocialIcon link="#" iconPath="/img/icons-vimeo.svg" />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
