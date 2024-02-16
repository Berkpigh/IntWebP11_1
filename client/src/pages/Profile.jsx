import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder={currentUser.email}
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          readOnly
        />
        <input
          type="text"
          placeholder={currentUser.firstName}
          id="firstName"
          className="bg-slate-100 p-3 rounded-lg"
          readOnly
        />
        <input
          type="text"
          placeholder={currentUser.lastName}
          id="lastName"
          className="bg-slate-100 p-3 rounded-lg"
          readOnly
        />
        <input
          defaultValue={currentUser.userName}
          type="text"
          id="userName"
          placeholder="Nom d'utilisateur"
          className="bg-slate-100 rounded-lg p-3"
          onChange={handleChange}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading ? 'Loading...' : 'Update'}
        </button>
      </form>
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
