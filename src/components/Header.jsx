import React from 'react'

export default function Header() {
  return (
    <nav className="bg-white dark:bg-gray-800 border border-b-1 border-t-0 border-gray-300">
        <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between h-16">
                <div className=" flex items-center">
                    <a className="flex-shrink-0" href="/">
                        <img className="h-12 w-12 " src="https://img.icons8.com/external-others-inmotus-design/344/external-G-alphabet-others-inmotus-design-2.png" alt="Workflow"/>
                    </a>
                    <div>
                        <div className="ml-10 flex items-baseline space-x-4">
                            <h3 className="text-gray-800  hover:text-gray-500 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" href="/#">
                                Gallery App
                            </h3>
                        </div>
                    </div>
                </div>    
            </div>
        </div>


       
    </nav>
  )
}
