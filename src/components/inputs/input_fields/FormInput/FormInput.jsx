import React from 'react';

/**
 * A component for inputs on the login and sign up pages
 * @param {type} label something
 * @param {type} name something
 * @param {type} error something
 * @param {type} value something
 * @param {type} onChange something
 * @param {type} type something
 * @returns {React.ReactElement} a personalized input component 
 */

function FormInput({label, name, error, value, onChange, type = "text"}) {
  return <div>
            <label className="block mb-2 text-teal-500" htmlFor={name}>{label}</label>
            <input
                type={type} 
                name={name}
                value={value} 
                onChange={onChange}
                className={`rounded w-full p-2 border-b-2 ${!error ? "mb-6 border-teal-500 " : "border-red-500 "} text-teal-700 outline-none focus:bg-gray-300`}
            />
            {error && <span className='mb-3 text-red-500' >{error}</span>}
        </div>
}

export default FormInput;
