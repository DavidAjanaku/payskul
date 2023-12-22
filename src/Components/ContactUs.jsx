import React from "react";

export default function ContactUs() {
  return (
    <div>
      <div>
        <h1 className="uppercase  pt-20 pb-7 font-bold text-xl">contact us!</h1>

        <div className="bg-secondaryy w-10/12 mx-auto rounded-xl p-14">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <div>
                <h1 className="text-start text-5xl font-bold text-white md:w-2/3">
                  Lets discuss and resolve your{" "}
                  <span className="text-customText2">issues</span> together
                </h1>
              </div>
              <div className="mt-20">
                <div className="flex gap-5 py-3 text-white">
                  <span className="text-customText2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M0.075 5.3325C0.226227 4.66986 0.597983 4.07822 1.12938 3.65446C1.66078 3.23071 2.32033 2.99995 3 3H21C21.6797 2.99995 22.3392 3.23071 22.8706 3.65446C23.402 4.07822 23.7738 4.66986 23.925 5.3325L12 12.621L0.075 5.3325ZM0 7.0455V17.7015L8.7045 12.3645L0 7.0455ZM10.1415 13.245L0.2865 19.2855C0.52999 19.7989 0.91429 20.2326 1.39467 20.5362C1.87505 20.8397 2.43176 21.0005 3 21H21C21.5681 21.0001 22.1246 20.8389 22.6048 20.5351C23.0849 20.2313 23.4688 19.7975 23.712 19.284L13.857 13.2435L12 14.379L10.1415 13.2435V13.245ZM15.2955 12.366L24 17.7015V7.0455L15.2955 12.3645V12.366Z"
                        fill="#B800CC"
                      />
                    </svg>
                  </span>
                  <span>
                    <p>payskul@gmail.com</p>
                  </span>
                </div>
                <div className="flex gap-5 py-3 text-white">
                  <span className="text-customText2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2390_979)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.82772 0.766476C3.09018 0.504409 3.40534 0.301114 3.75231 0.170061C4.09929 0.0390087 4.47015 -0.0168078 4.84033 0.00631052C5.2105 0.0294288 5.57154 0.130954 5.89951 0.304158C6.22748 0.477362 6.5149 0.71829 6.74272 1.01098L9.43522 4.46998C9.92872 5.10448 10.1027 5.93098 9.90772 6.71098L9.08722 9.99598C9.0448 10.1661 9.04709 10.3443 9.09387 10.5133C9.14065 10.6823 9.23034 10.8364 9.35422 10.9605L13.0397 14.646C13.164 14.7701 13.3183 14.8599 13.4875 14.9067C13.6568 14.9535 13.8354 14.9557 14.0057 14.913L17.2892 14.0925C17.6741 13.9962 18.0759 13.9888 18.4641 14.0706C18.8524 14.1525 19.2169 14.3215 19.5302 14.565L22.9892 17.256C24.2327 18.2235 24.3467 20.061 23.2337 21.1725L21.6827 22.7235C20.5727 23.8335 18.9137 24.321 17.3672 23.7765C13.409 22.3838 9.81513 20.1177 6.85222 17.1465C3.88115 14.184 1.61513 10.5907 0.222218 6.63298C-0.320782 5.08798 0.166718 3.42748 1.27672 2.31748L2.82772 0.766476Z"
                          fill="#B800CC"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2390_979">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span>
                    <p>+234 891 546 7189</p>
                  </span>
                </div>
                <div className="flex gap-5 py-3 text-white">
                  <span className="text-customText2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="28"
                      viewBox="0 0 24 28"
                      fill="none"
                    >
                      <path
                        d="M12 14C12.825 14 13.5315 13.7256 14.1195 13.1768C14.7065 12.6289 15 11.97 15 11.2C15 10.43 14.7065 9.7706 14.1195 9.2218C13.5315 8.67393 12.825 8.4 12 8.4C11.175 8.4 10.469 8.67393 9.882 9.2218C9.294 9.7706 9 10.43 9 11.2C9 11.97 9.294 12.6289 9.882 13.1768C10.469 13.7256 11.175 14 12 14ZM12 28C7.975 24.8033 4.969 21.8339 2.982 19.0918C0.994 16.3506 0 13.8133 0 11.48C0 7.98 1.2065 5.19167 3.6195 3.115C6.0315 1.03833 8.825 0 12 0C15.175 0 17.9685 1.03833 20.3805 3.115C22.7935 5.19167 24 7.98 24 11.48C24 13.8133 23.0065 16.3506 21.0195 19.0918C19.0315 21.8339 16.025 24.8033 12 28Z"
                        fill="#B800CC"
                      />
                    </svg>
                  </span>
                  <span>
                    <p>Lekki Phase 1, Lagos, Nigeria</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-white rounded-lg p-5">
              <div className="text-start">
                <h1 className="text-lg font-bold py-5">
                  Talk to us, lets resolve your issue together!
                </h1>
                <form action="" className=" w-full">
                  <div className="py-10">
                    <input
                      type="text"
                      placeholder="Your name"
                      name=""
                      id=""
                      className="border-b-2 w-full"
                    />
                  </div>

                  <div className="py-10">
                    <input
                      type="text"
                      placeholder="Your email"
                      name=""
                      id=""
                      className="border-b-2 w-full"
                    />
                  </div>
                  <div className="py-10">
                    <input
                      type="text"
                      placeholder="Your message"
                      name=""
                      id=""
                      className="border-b-2 w-full"
                    />
                  </div>

                  <div>
                    <button className="bg-primaryy text-white rounded-xl flex gap-3 px-16  mt-20 items-center h-16 text-lg ">
                     <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M23.9471 1.02871C24.0017 0.892413 24.015 0.743103 23.9855 0.599288C23.956 0.455474 23.885 0.32348 23.7812 0.21967C23.6774 0.11586 23.5454 0.0448002 23.4015 0.015299C23.2577 -0.0142021 23.1084 -0.000846891 22.9721 0.0537091L1.15162 8.78221H1.15012L0.472125 9.05221C0.34371 9.10343 0.231953 9.18915 0.149198 9.2999C0.0664433 9.41066 0.0159116 9.54213 0.00318483 9.67979C-0.00954198 9.81746 0.0160314 9.95597 0.0770801 10.08C0.138129 10.2041 0.232277 10.3088 0.349125 10.3827L0.964125 10.7727L0.965625 10.7757L8.45812 15.5427L13.2251 23.0352L13.2281 23.0382L13.6181 23.6532C13.6923 23.7696 13.7971 23.8633 13.921 23.924C14.045 23.9846 14.1833 24.0099 14.3207 23.997C14.4581 23.9842 14.5892 23.9336 14.6998 23.851C14.8103 23.7684 14.8959 23.6569 14.9471 23.5287L23.9471 1.02871ZM21.1976 3.86371L9.95662 15.1047L9.63412 14.5977C9.57503 14.5047 9.49616 14.4258 9.40312 14.3667L8.89612 14.0442L20.1371 2.80321L21.9041 2.09671L21.1991 3.86371H21.1976Z" fill="#EEEEEE"/>
</svg></span> Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
