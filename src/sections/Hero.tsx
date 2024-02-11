import { NextPage } from "next"
import React from "react"

const Hero:NextPage = () => {
  return (
    <section className="w-[73.25rem] flex flex-row items-start justify-start py-[0rem] px-[1.25rem] box-border relative max-w-full text-left text-[3rem] text-slateblue font-rammetto-one">
    <img
      className="h-[31.88rem] w-[32.81rem] absolute my-0 mx-[!important] top-[-8.19rem] right-[-3.06rem] object-cover"
      loading="eager"
      alt=""
      src="/23842216-6862538removebgpreview-1@2x.png"
    />
    <div className="flex-1 flex flex-row items-start justify-start pt-[0rem] pb-[6.69rem] px-[0rem] box-border max-w-full mq450:pb-[4.38rem] mq450:box-border">
      <div className="w-[38.56rem] flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
        <div className="w-[27.31rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1rem] box-border max-w-full">
          <h1 className="m-0 h-[2.75rem] flex-1 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-[1.81rem] mq1050:text-[2.38rem]">{`Refer & Earn`}</h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.25rem] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.81rem] max-w-full">
            <h1 className="m-0 w-[33.38rem] relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-[1.81rem] mq1050:text-[2.38rem]">
              Unlimited Money
            </h1>
            <div className="self-stretch h-[4.44rem] relative text-[1.25rem] font-poppins text-darkslategray-100 inline-block shrink-0 mq450:text-[1rem]">{`You and your friend will get exciting gift vouchers & heavy discount on Telegram Channel of Index Trading subscription`}</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.44rem]">
          <button className="cursor-pointer [border:none] pt-[0.88rem] pb-[1.38rem] pr-[1.06rem] pl-[1.31rem] bg-slateblue h-[3.69rem] rounded-25xl flex flex-row items-start justify-center box-border whitespace-nowrap hover:bg-mediumslateblue">
            <div className="h-[3.69rem] w-[14.19rem] relative rounded-25xl bg-slateblue hidden" />
            <div className="self-stretch relative text-[1.25rem] font-semibold font-poppins text-white text-left z-[1]">
              % Get Referral Link
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero