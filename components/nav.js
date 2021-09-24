import Link from 'next/link'
import { useRouter } from 'next/router'
import metaData from '../data/meta.json'

export default function Nav({logo}) {
  const router = useRouter()
  const slug = router.pathname.substr(1)
  const navStyle = "overflow-x-scroll overflow-x-visible-ns flex justify-between items-center center bg-white divider-grey relative"
  return (
    <nav 
      className={`${navStyle} on-${slug}`}>
      <div className="center flex justify-between items-center w-100" style={{maxWidth:"1056px"}}>
        <a href="/" className="pa2 db mr2 h-100 w3 flex-none">
        <img src={logo} alt="Kaldi logo" className="br0 db mb0 w-100"/>
        </a>
        <ul className="flex b grey-3">
          {
            metaData.menus.map(m => {
              const mcls = m.url.substr(1)
              return (
                <li className={mcls} key={m.page}>
                  <Link href={m.url}>
                    <a className="pa2 pa3-m no-underline db">{m.page}</a>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}