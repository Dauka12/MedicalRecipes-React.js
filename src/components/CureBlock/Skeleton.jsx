import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <div className="pizza-block__wrapper">
  <ContentLoader 
  className="pizza-block"
  speed={2}
  width={300}
  height={500}
  viewBox="0 0 280 500"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
  {...props}
>
  <circle cx="137" cy="134" r="125" /> 
  <rect x="0" y="279" rx="10" ry="10" width="280" height="23" /> 
  <rect x="0" y="326" rx="10" ry="10" width="280" height="88" /> 
  <rect x="0" y="436" rx="10" ry="10" width="95" height="30" /> 
  <rect x="125" y="427" rx="24" ry="24" width="152" height="45" />
    </ContentLoader></div>
)

export default Skeleton
