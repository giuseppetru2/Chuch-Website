import Link from 'next/link'
import DateFormatter from './date-formatter'

export default function PostBlock({ title, date, description, slug }) {
  return (
    <Link href={'#'}>
      <a className="no-underline pa3 bg-grey-1 br1 mb2 db raise w-100">
        <h2 className="f3 b lh-title mb1 primary">{title}</h2>
        {date && 
          <p className="mid-gray lh-title mb2">
            <DateFormatter
              dateString={date}
            />
          </p>
        }
        <p className="mb0">{description}</p>
      </a>
    </Link>
  )
}