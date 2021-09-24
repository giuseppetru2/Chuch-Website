import Link from 'next/link'

export default function TextAndImage({heading, text, image, buttonLink, buttonText}) {
  return (
    <div className="bg-off-white pv4">
      <div className="ph3 mw7 center">
        <div className="flex-l mhn2-l">
          <div className="w-40-l ph2-l">
            <h2 className="f2 b lh-title mb2">{heading}</h2>
            <p>{text}</p>
          </div>
          <div className="w-60-l ph2-l">
            <img src={image} alt="" className="mb3" />
          </div>
        </div>
      </div>
    </div>
  )
}