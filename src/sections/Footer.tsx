import React from "react"

const Footer = () => {
  return (
    <footer className="self-stretch bg-darkslategray-100 overflow-hidden flex flex-row items-start justify-start pt-[3.5rem] px-[5.5rem] pb-[5.69rem] box-border gap-[15.56rem] max-w-full z-[1] text-left text-[3rem] text-white font-rammetto-one mq750:gap-[15.56rem] mq750:pl-[1.38rem] mq750:pr-[1.38rem] mq750:box-border mq450:gap-[15.56rem] mq1150:flex-wrap mq1150:gap-[15.56rem] mq1150:pl-[2.75rem] mq1150:pr-[2.75rem] mq1150:box-border">
      <div className="w-[27rem] flex flex-col items-start justify-start pt-[0.19rem] px-[0rem] pb-[0rem] box-border max-w-full">
        <div className="self-stretch flex flex-row items-center justify-start gap-[1.31rem] mq450:flex-wrap">
          <h1 className="m-0 h-[5.06rem] relative text-inherit font-normal font-inherit inline-block mq450:text-[1.81rem] mq1050:text-[2.38rem]">
            Logo
          </h1>
          <h2 className="m-0 h-[3rem] flex-1 relative text-[2rem] font-normal font-inherit inline-block min-w-[10.69rem] mq450:text-[1.19rem] mq1050:text-[1.63rem]">
            Brand Name
          </h2>
        </div>
      </div>
      <div className="w-[17.81rem] flex flex-row items-start justify-start gap-[2.88rem] min-w-[17.81rem] text-[1.25rem] font-poppins mq450:gap-[2.88rem] mq1150:flex-1">
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.19rem] px-[0rem] pb-[0rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.81rem] mq1150:self-stretch mq1150:w-auto">
            <div className="h-[1.81rem] relative font-semibold inline-block shrink-0 mq450:text-[1rem]">
              About Us
            </div>
            <div className="w-[7.81rem] h-[1.81rem] relative font-semibold inline-block shrink-0 mq450:text-[1rem]">
              Contact Us
            </div>
            <div className="h-[1.81rem] relative font-semibold inline-block shrink-0 mq450:text-[1rem]">
              Terms Of Service
            </div>
            <div className="self-stretch relative font-semibold mq450:text-[1rem]">
              Privacy
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[0.56rem]">
          <img
            className="w-[3.44rem] h-[2.5rem] relative object-cover"
            loading="eager"
            alt=""
            src="/v982d304removebgpreview-1@2x.png"
          />
          <img
            className="w-[3.75rem] h-[3.75rem] relative object-cover"
            loading="eager"
            alt=""
            src="/fbremovebgpreview-1@2x.png"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer