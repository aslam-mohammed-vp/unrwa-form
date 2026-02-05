import { useRef } from 'react';

const Form = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const data = new FormData(form);
    const obj = Object.fromEntries(data.entries());
    console.log('submit', obj);
  };

  const handleReset = () => {
    if (formRef.current) formRef.current.reset();
  };

  return (
    <div className='w-2/3 min-h-screen max-h-screen flex flex-col bg-gray-100 rounded-lg overflow-hidden'>
      <div className='w-full bg-blue-600 text-white rounded-t-lg h-32 flex flex-col justify-center p-8 flex-shrink-0'>
        <h2>United Nations</h2>
        <h4>Humanitarian Assistance Registration</h4>
      </div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='w-full text-gray-600 p-8 flex-1 overflow-auto'
      >
        {/* Personal Information  */}
        <div className='mb-2'>
          <h3 className='font-bold'>Personal Information</h3>
          <hr className='my-2 border-gray-300' />
          <div className='flex gap-4 mb-4'>
            <div className='flex-1'>
              <label
                htmlFor='firstName'
                className='block text-sm font-bold mb-2'
              >
                First Name
              </label>
              <input
                type='text'
                id='firstName'
                className='w-full p-2 border border-gray-300 rounded'
                placeholder='Enter your first name'
              />
            </div>

            <div className='flex-1'>
              <label
                htmlFor='lastName'
                className='block text-sm font-bold mb-2'
              >
                Last Name
              </label>
              <input
                type='text'
                id='lastName'
                className='w-full p-2 border border-gray-300 rounded'
                placeholder='Enter your last name'
              />
            </div>
          </div>

          <div className='flex gap-4 mb-4'>
            <div className='flex-1'>
              <label htmlFor='dob' className='block text-sm font-bold mb-2'>
                Date of Birth
              </label>
              <input
                type='date'
                id='dob'
                className='w-full p-2 border border-gray-300 rounded'
              />
            </div>

            <div className='flex-1'>
              <label htmlFor='gender' className='block text-sm font-bold mb-2'>
                Gender
              </label>
              <select
                id='gender'
                className='w-full p-2 border border-gray-300 rounded'
              >
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contact Information  */}
        <div>
          <h3 className='font-bold'>Contact Information</h3>
          <hr className='my-2 border-gray-300' />
          <div className='flex gap-4 mb-4'>
            <div className='flex-1'>
              <label htmlFor='email' className='block text-sm font-bold mb-2'>
                Email Address
              </label>
              <input
                type='email'
                id='email'
                className='w-full p-2 border border-gray-300 rounded'
                placeholder='Enter your email address'
              />
            </div>
          </div>

          <div className='flex gap-4 mb-4'>
            <div className='flex-1'>
              <label
                htmlFor='country-code'
                className='block text-sm font-bold mb-2'
              >
                Country Code
              </label>
              <input
                type='text'
                id='country-code'
                className='w-full p-2 border border-gray-300 rounded'
                placeholder='Enter your country code'
              />
            </div>

            <div className='flex-1'>
              <label htmlFor='phone' className='block text-sm font-bold mb-2'>
                Phone Number
              </label>
              <input
                type='text'
                id='firstName'
                className='w-full p-2 border border-gray-300 rounded'
                placeholder='Enter your first name'
              />
            </div>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className='font-bold'>Address</h3>
          <hr className='my-2 border-gray-300' />
          <div className='flex gap-4 mb-4'>
            <div className='flex-1'>
              <label htmlFor='street' className='block text-sm font-bold mb-2'>
                Street Address
              </label>
              <input
                type='text'
                id='street'
                className='w-full p-2 border border-gray-300 rounded'
                placeholder='Enter your street address'
              />
            </div>
          </div>

          <div className='flex gap-4 mb-4'>
            <div className='flex-1'>
              <label htmlFor='city' className='block text-sm font-bold mb-2'>
                City
              </label>
              <input
                type='text'
                id='city'
                className='w-full p-2 border border-gray-300 rounded'
                placeholder='Enter your city'
              />
            </div>

            <div className='flex-1'>
              <label htmlFor='state' className='block text-sm font-bold mb-2'>
                State
              </label>
              <input
                type='text'
                id='state'
                className='w-full p-2 border border-gray-300 rounded'
                placeholder='Enter your state'
              />
            </div>
          </div>

          <div className='flex gap-4 mb-4'>
            <div className='flex-1'>
              <label
                htmlFor='postal-code'
                className='block text-sm font-bold mb-2'
              >
                Postal Code
              </label>
              <input
                type='text'
                id='postal-code'
                className='w-full p-2 border border-gray-300 rounded'
                placeholder='Enter your postal code'
              />
            </div>

            <div className='flex-1'>
              <label htmlFor='country' className='block text-sm font-bold mb-2'>
                Country
              </label>
              <input
                type='text'
                id='country'
                className='w-full p-2 border border-gray-300 rounded'
                placeholder='Enter your country'
              />
            </div>
          </div>
        </div>

        {/* Identification */}
        <div>
          <h3 className='font-bold'>Identification</h3>
          <hr className='my-2 border-gray-300' />
          <div className='flex gap-4 mb-4'>
            <div className='flex-1'>
              <label htmlFor='id-type' className='block text-sm font-bold mb-2'>
                ID Type
              </label>
              <select
                id='id-type'
                className='w-full p-2 border border-gray-300 rounded'
              >
                <option value='passport'>Passport</option>
                <option value='national-id'>National ID</option>
              </select>
            </div>
            <div className='flex-1'>
              <label
                htmlFor='id-number'
                className='block text-sm font-bold mb-2'
              >
                ID Number
              </label>
              <input
                type='text'
                id='id-number'
                className='w-full p-2 border border-gray-300 rounded'
                placeholder='Enter your ID number'
              />
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div>
          <h3 className='font-bold'>Preferences</h3>
          <hr className='my-2 border-gray-300' />
          <div className='flex gap-4 mb-4'>
            <div className='flex-1'>
              <label
                htmlFor='language'
                className='block text-sm font-bold mb-2'
              >
                Preferred Language
              </label>
              <select
                id='language'
                className='w-full p-2 border border-gray-300 rounded'
              >
                <option value='english'>English</option>
                <option value='arabic'>Arabic</option>
              </select>
            </div>
            <div className='flex-1 flex items-center mt-6'>
              <input
                type='checkbox'
                id='newsletter'
                className='mr-2 h-4 w-4 align-middle'
              />
              <label htmlFor='newsletter' className='text-sm'>
                Subscribe to Newsletter and Updates
              </label>
            </div>
          </div>
        </div>

        <div className='mt-4 flex justify-end gap-2'>
          <button
            type='button'
            onClick={handleReset}
            className='bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300'
          >
            Reset Form
          </button>
          <button
            type='submit'
            className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
          >
            Submit Registration
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
