import React from 'react'
import {FcGoogle} from 'react-icons/fc'

const OAuth = () => {
  return (
	<>
		<button className="flex items-center justify-center w-full bg-red-600 hover:bg-red-700
			 text-white text-sm px-7 py-3 font-medium uppercase 
			 rounded shadow-medium transition darution-150 ease-in-out hover:shadow-lg active:bg-red-800">
			<FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
			Continue with Google
		</button>
	</>
  )
}

export default OAuth