export default function Image({imgSrc, ...props}) {
  return(
  <img src={imgSrc} {...props} className="rounded-lg h-[270px] w-64 my-4"/>
)}