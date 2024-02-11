import { NextPage } from "next"
import React from "react"

const OurServices:NextPage = () => {
  return (
    <section className="self-stretch bg-slateblue overflow-hidden flex flex-col items-center justify-start pt-[3.38rem] pb-[6.44rem] pr-[3.25rem] pl-[1.25rem] box-border gap-[4.56rem] max-w-full text-center text-[2.25rem] text-white font-rammetto-one mq750:gap-[4.56rem] mq750:pt-[1.44rem] mq750:pb-[2.75rem] mq750:box-border mq1150:gap-[4.56rem] mq1150:pt-[2.19rem] mq1150:pr-[1.63rem] mq1150:pb-[4.19rem] mq1150:box-border">
      <div className="w-[48.63rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.94rem] box-border max-w-full shrink-0">
        <h2 className="m-0 h-[2.94rem] flex-1 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-[1.38rem] mq1050:text-[1.81rem]">
          Our Services
        </h2>
      </div>
      <div className="w-[66.88rem] flex flex-col items-start justify-start gap-[1.63rem] max-w-full shrink-0 text-left text-[2rem] font-poppins">
        <div className="w-[63.88rem] flex flex-row items-center justify-between gap-[1.25rem] max-w-full mq1050:flex-wrap mq1050:justify-center">
          <div className="w-[25rem] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[1.69rem] px-[1.06rem] box-border min-w-[25rem] max-w-full mq750:min-w-full mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border mq1050:flex-1">
            <img
              className="h-[17.68rem] w-[20.26rem] relative hidden max-w-full"
              alt=""
              src="/background-simple.svg"
            />
            <div className="h-[21.63rem] flex-1 relative max-w-full">
              <img
                className="absolute top-[-0.01rem] left-[0.93rem] w-[21.91rem] h-[20.97rem]"
                alt=""
                src="/background-complete.svg"
              />
              <img
                className="absolute top-[21.56rem] left-[0.98rem] w-[21.18rem] h-[0.03rem]"
                alt=""
                src="/floor.svg"
              />
              <img
                className="absolute top-[0.64rem] left-[11.21rem] w-[10.2rem] h-[20.9rem] z-[1]"
                loading="eager"
                alt=""
                src="/device.svg"
              />
              <img
                className="absolute top-[18.88rem] left-[3.09rem] w-[2rem] h-[2.71rem] z-[1]"
                loading="eager"
                alt=""
                src="/plant.svg"
              />
              <div className="absolute top-[2.26rem] left-[1.11rem] w-[4.03rem] h-[4.03rem] z-[1]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group.svg"
                />
                <img
                  className="absolute top-[1.81rem] left-[1.04rem] w-[0.41rem] h-[0.41rem] z-[1]"
                  loading="eager"
                  alt=""
                  src="/group-1.svg"
                />
                <img
                  className="absolute top-[1.81rem] left-[1.86rem] w-[0.41rem] h-[0.41rem] z-[1]"
                  loading="eager"
                  alt=""
                  src="/group-2.svg"
                />
                <img
                  className="absolute top-[1.81rem] left-[2.7rem] w-[0.41rem] h-[0.41rem] z-[1]"
                  loading="eager"
                  alt=""
                  src="/group-3.svg"
                />
              </div>
              <img
                className="absolute top-[3.71rem] left-[0.05rem] w-[14.89rem] h-[16.01rem] z-[2]"
                alt=""
                src="/bot.svg"
              />
            </div>
          </div>
          <div className="w-[31.88rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.31rem] box-border min-w-[31.88rem] max-w-full mq750:min-w-full mq1050:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.19rem] max-w-full">
              <h2 className="m-0 self-stretch h-[2.56rem] relative text-inherit font-bold font-inherit inline-block shrink-0 mq450:text-[1.19rem] mq1050:text-[1.63rem]">
                AI Chat Bot
              </h2>
              <div className="w-[30.63rem] h-[6.94rem] relative text-[1.25rem] font-semibold inline-block shrink-0 max-w-full mq450:text-[1rem]">
                Experience our newest chatbot featuring advanced NLP and
                personalized assistance for superior customer support. Elevate
                your service with seamless communication today.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.06rem] box-border max-w-full">
          <div className="flex-1 flex flex-row items-center justify-start gap-[4.19rem] max-w-full mq750:gap-[4.19rem] mq1050:flex-wrap mq1150:gap-[4.19rem]">
            <div className="flex-1 flex flex-col items-start justify-start pt-[3.69rem] px-[0rem] pb-[0rem] box-border min-w-[22.44rem] max-w-full mq750:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.19rem] max-w-full">
                <h2 className="m-0 w-[33.27rem] h-[2.56rem] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full mq450:text-[1.19rem] mq1050:text-[1.63rem]">
                  Image Generator AI
                </h2>
                <div className="self-stretch h-[6.94rem] relative text-[1.25rem] font-semibold inline-block shrink-0 mq450:text-[1rem]">
                  Experience our newest chatbot featuring advanced NLP and
                  personalized assistance for superior customer support. Elevate
                  your service with seamless communication today.
                </div>
              </div>
            </div>
            <img
              className="w-[27.1rem] relative max-h-full object-cover max-w-full mq1050:flex-1"
              loading="eager"
              alt=""
              src="/3dillustrationboywithcamerahishandremovebgpreview-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices