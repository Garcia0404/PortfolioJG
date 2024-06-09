
export const Slider = ({ imgs }: { imgs: string[] }) => {
  return (
    <>
      <style>
        {`
          .slider::before{
            content:"";
            z-index:2;
            position:absolute;
            top:0;
            left:0;
            width:40px;
            height:100%;
            background:linear-gradient(to left,rgba(213,220,240,0),rgb(213,220,240));
          }
            .slider::after{
            content:"";
            z-index:2;
            position:absolute;
            top:0;
            right:0;
            width:40px;
            height:100%;
            background:linear-gradient(to right,rgba(213,220,240,0),rgb(213,220,240));
          }
        `}
      </style>
      <div className="mt-7 bg-[rgb(213,220,240)] p-3 w-full whitespace-nowrap overflow-hidden slider relative">
        <div className="whitespace-nowrap animate-slider w-max inline-block">
          {
            imgs.map((icon, index) => (
              <img className="mx-2 inline-block" key={index} height='60px' width='50px' src={`/${icon}.svg`} alt={`${icon}-Icon`} />
            ))
          }
        </div>
        <div className="whitespace-nowrap animate-slider w-max inline-block">
          {
            imgs.map((icon, index) => (
              <img className="mx-2 inline-block" key={index} height='60px' width='50px' src={`/${icon}.svg`} alt={`${icon}-Icon`} />
            ))
          }
        </div>
      </div>
    </>
  )
}
