import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from '../redux/user/userSlice'
import userprofile from '../assets/img/userprofile.png'

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
    <div className="min-h-80vh flex-1 bg-dark min-h-screen">
      <div className="p-10">
        <div className="box-border border bg-white w-300px  mx-auto p-8 ">
          <img
            className="w-6 h-6 m-auto"
            src={userprofile}
            alt="profile utilisateur"
          />
          <h1 className="my-4">Update user name</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col text-left mb-4">
              <label className="font-bold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                placeholder={currentUser.email}
                id="email"
                className="border-black border p-5px"
                readOnly
              />
            </div>
            <div className="flex flex-col text-left mb-4">
              <label className="font-bold" htmlFor="password">
                Password
              </label>
              <input
                type="text"
                placeholder={currentUser.password}
                id="password"
                className="border-black border p-5px"
                readOnly
              />
            </div>
            <div className="flex flex-col text-left mb-4">
              <label className="font-bold" htmlFor="firstname">
                First Name
              </label>
              <input
                type="text"
                placeholder={currentUser.firstName}
                id="firstname"
                className="border-black border p-5px"
                readOnly
              />
            </div>
            <div className="flex flex-col text-left mb-4">
              <label className="font-bold" htmlFor="lastname">
                Last Name
              </label>
              <input
                type="text"
                placeholder={currentUser.lastName}
                id="lastname"
                className="border-black border p-5px"
                readOnly
              />
            </div>
            <div className="flex flex-col text-left mb-4">
              <label className="font-bold" htmlFor="username">
                User Name
              </label>
              <input
                type="text"
                placeholder={currentUser.userName}
                id="username"
                className="border-black border p-5px"
                onChange={handleChange}
              />
            </div>
            <button className="text-grey-fff my-4 w-full p-2 text-lg font-bold bg-submit">
              {loading ? 'Loading...' : 'Update'}
            </button>
          </form>
        </div>
      </div>
      <p className="text-red-700 mt-5">
        {error && 'Une erreur est survenue !'}
      </p>
      <p className="text-green-700 mt-5">
        {updateSuccess && 'Le profil a été mis à jour !'}
      </p>
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
