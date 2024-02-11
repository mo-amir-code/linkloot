import React from "react"

const Header = () => {
  return (
    <section className="flex flex-row items-start justify-end pt-[0rem] pb-[8.19rem] px-[0rem] box-border max-w-full">
      <header className="w-[80.5rem] flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border max-w-full text-left text-[1rem] text-darkslategray-100 font-poppins">
        <div className="flex-1 bg-ghostwhite shadow-[0px_2px_10px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-between pt-[0.5rem] pb-[0.63rem] pr-[5.81rem] pl-[5.13rem] box-border gap-[1.25rem] max-w-full mq750:pl-[2.56rem] mq750:pr-[2.88rem] mq750:box-border mq450:pr-[1.25rem] mq450:box-border">
          <div className="h-[3.5rem] w-[81rem] relative bg-ghostwhite shadow-[0px_2px_10px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
          <div className="h-[2.19rem] flex flex-row items-end justify-start gap-[0.69rem] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[0.88rem] pl-[0rem] text-[1.5rem] text-slateblue font-rammetto-one">
              <h3 className="m-0 flex-1 relative text-inherit font-normal font-inherit whitespace-nowrap z-[1]">
                Logo
              </h3>
            </div>
            <div className="w-[3.44rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border">
              <div className="self-stretch h-[1.44rem] relative font-medium inline-block shrink-0 whitespace-nowrap z-[1]">{`Home `}</div>
            </div>
            <div className="h-[1.63rem] flex flex-col items-start justify-start py-[0rem] pr-[0.56rem] pl-[0rem] box-border">
              <div className="h-[1.44rem] relative font-medium inline-block shrink-0 whitespace-nowrap z-[1]">
                Chat Bot
              </div>
            </div>
            <div className="h-[1.63rem] flex flex-col items-start justify-start py-[0rem] pr-[0.88rem] pl-[0rem] box-border">
              <div className="h-[1.44rem] relative font-medium inline-block shrink-0 z-[1]">
                Profile
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem]">
              <div className="h-[1.44rem] relative font-medium inline-block shrink-0 whitespace-nowrap z-[1]">{`Refer & Earn`}</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.19rem] px-[0rem] pb-[0rem]">
            <div className="flex flex-row items-start justify-start gap-[0.56rem] mq750:hidden">
              <button className="cursor-pointer p-[0.38rem] bg-gray w-[5.75rem] rounded-32xl box-border flex flex-row items-center justify-center whitespace-nowrap z-[1] border-[0.5px] border-solid border-darkslategray-200 hover:bg-dimgray-200 hover:box-border hover:border-[0.5px] hover:border-solid hover:border-dimgray-100">
                <div className="h-[2.19rem] w-[5.75rem] relative rounded-32xl bg-gray box-border hidden border-[0.5px] border-solid border-darkslategray-200" />
                <div className="relative text-[0.94rem] font-semibold font-poppins text-black text-left z-[2]">
                  Sign in
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-[0.38rem] pr-[1.25rem] pl-[1.44rem] bg-slateblue rounded-32xl flex flex-row items-center justify-center whitespace-nowrap z-[1] hover:bg-mediumslateblue">
                <div className="h-[2.19rem] w-[8.56rem] relative rounded-32xl bg-slateblue hidden" />
                <div className="relative text-[0.94rem] font-semibold font-poppins text-white text-left z-[2]">
                  Sign up free
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
    </section>
  )
}

export default Header