import React from 'react'
import Skilss from './Skilss'

const AboutMe = () => {
  return (
    <div className="flex w-9/12 h-[60vh] py-10">
    <div className="flex w-6/12 flex-col gap-y-6 p-20 ">
      <h1 className="NSB text-5xl font-bold uppercase text-[#4648f7]">
        About Me
      </h1>
      <p className="NSB text-zinc-400 dark:text-zinc-100 text-justify">
        I am a software development student at ISIL, oriented to web
        development with technologies such as react and the javascript
        language, constantly learning new ways of development to improve my
        products, and my next goal is to become a fullstack developer with
        java in the backend and javascript in the frontend.
      </p>
    </div>

    <Skilss/>
  </div>
  )
}

export default AboutMe