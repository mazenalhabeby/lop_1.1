import {useState} from 'react'
import {GiEyeOfHorus} from 'react-icons/gi'

const Input = ({type, inputName, inputTitle}) => {
  const [changeType, setChangetype] = useState(false)

  const changeTypeFunction = () => {
    setChangetype(!changeType)
  }
  return (
    <div>
      <div className="relative w-full leading-[2.75rem]">
        <input
          type={changeType ? 'text' : type}
          name={inputName}
          id={inputName}
          placeholder=" "
          className="peer w-full text-lg p-3 rounded bg-transparent outline-none border-2 border-slate-400 dark:border-slate-500  focus:border-yellow-600 focus:dark:border-yellow-500"
          autoComplete="off"
        />
        <label
          htmlFor={inputName}
          className=" absolute tracking-widest px-2 font-aclonica -top-2 left-3 text-yellow-600 dark:text-yellow-500 text-sm bg-slate-300 dark:bg-slate-700 peer-focus:text-yellow-600 dark:peer-focus:text-yellow-500 peer-focus:bg-slate-300 dark:peer-focus:bg-slate-700 peer-focus:text-sm peer-focus:left-3 peer-focus:-top-2 transition-all duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-placeholder-shown:left-2
          peer-placeholder-shown:text-slate-600 dark:peer-placeholder-shown:text-slate-200 peer-placeholder-shown:bg-transparent capitalize">
          {inputTitle}
        </label>
        {type === 'password' && (
          <GiEyeOfHorus
            className={`${
              changeType
                ? 'text-yellow-600 dark:text-yellow-500'
                : 'text-slate-400 dark:text-slate-500'
            } absolute inset-y-0 text-4xl h-full cursor-pointer ltr:right-2 rtl:left-2`}
            onClick={changeTypeFunction}
          />
        )}
      </div>
    </div>
  )
}

export default Input
