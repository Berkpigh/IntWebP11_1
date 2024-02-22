import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Transactions from './Transactions'

import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from '../redux/user/userSlice'

const Profile = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState()
  const [updateSuccess, setUpdateSuccess] = useState(false)
  const { currentUser, loading, error } = useSelector((state) => state.user)
  console.log({ currentUser })
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(updateUserStart())
      const res = await fetch('http://localhost:3001/api/v1/user/profile/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${currentUser.token}`,
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (data.success === false) {
        dispatch(updateUserFailure(data))
        return
      }
      dispatch(updateUserSuccess(data))
      setUpdateSuccess(true)
    } catch (error) {
      dispatch(updateUserFailure(error))
    }
  }
  return (
    <div className="min-h-80vh flex-1 min-h-screen">
      <div className="">
        <div className="w-80  mx-auto p-2">
          <h1 className="my-4 text-2xl">Edit user info</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className="flex items-center text-left">
              <label className="font-bold mr-2" htmlFor="userName">
                User name:
              </label>
              <input
                className=" rounded border-black border p-5px"
                type="text"
                value={currentUser.body.userName}
                id="userName"
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center text-left">
              <label className="font-bold mr-2" htmlFor="firstName">
                First name:
              </label>
              <input
                className="rounded border-black border p-5px bg-gray-200"
                type="text"
                placeholder={currentUser.body.firstName}
                id="firstName"
                readOnly
              />
            </div>
            <div className="flex items-center text-left">
              <label className="font-bold mr-2" htmlFor="lastName">
                Last name:
              </label>
              <input
                className="rounded border-black border p-5px  bg-gray-200"
                type="text"
                placeholder={currentUser.body.lastName}
                id="lastName"
                readOnly
              />
            </div>
          </form>
          <div className="flex justify-between w-80">
            <button
              type="submit"
              className="rounded text-grey-fff my-4 w-full p-2 text-lg font-bold bg-submit mr-1"
            >
              {loading ? 'Loading...' : 'Save'}
            </button>
            <a
              href="/user"
              className="ml-1 rounded text-grey-fff my-4 w-full p-2 text-lg font-bold bg-submit"
            >
              Cancel
            </a>
          </div>
        </div>
        <p className="text-red-700 mt-5">
          {error && 'Une erreur est survenue !'}
        </p>
      </div>
      <Transactions view={'2'} />
    </div>
  )
}

export default Profile

/*   <input
          type='file'
          ref={fileRef}
          hidden
          accept='image/*'
          onChange={(e) => setImage(e.target.files[0])}
        />
        
      firebase storage rules:  
      allow read;
      allow write: if
      request.resource.size < 2 * 1024 * 1024 &&
      request.resource.contentType.matches('image/.*') 
        <img
          src={formData.profilePicture || currentUser.profilePicture}
          alt='profile'
          className='h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2'
          onClick={() => fileRef.current.click()}
        />
        <p className='text-sm self-center'>
          {imageError ? (
            <span className='text-red-700'>
              Error uploading image (file size must be less than 2 MB)
            </span>
          ) : imagePercent > 0 && imagePercent < 100 ? (
            <span className='text-slate-700'>{`Uploading: ${imagePercent} %`}</span>
          ) : imagePercent === 100 ? (
            <span className='text-green-700'>Image uploaded successfully</span>
          ) : (
            ''
          )}
        </p> */
