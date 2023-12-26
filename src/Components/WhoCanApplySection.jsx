import React from 'react'
import WhoCanApply from './WhoCanApply'

export default function WhoCanApplySection() {
  return (
      <div>     <div className="md:flex hidden md:block grid w-3/4 mx-auto  justify-center gap-5 mt-20">
          <WhoCanApply
              title="Parents"
              description="Parents can now keep their children in school while planing other financial responsibilities with Payskul.
              "
          />

          <WhoCanApply
              title="Students"
              description="Students can also worry less on meeting up with payments for books, handouts among other school requirements."
          />

          <WhoCanApply
              title="Schools"
              description="Schools can now bid farewell to delays in school fees and generate more revenue with Payskul"
          />
      </div></div>
  )
}
