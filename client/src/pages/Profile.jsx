import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Accounts from '../components/Accounts'

import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from '../redux/user/userSlice'
import Cookies from 'js-cookie'

import FetchUpdateProfile from '../api/FetchUpdateProfile'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState()
  //const [updateSuccess, setUpdateSuccess] = useState(false)
  const { currentUser, loading, error } = useSelector((state) => state.user)
  // console.log({ currentUser })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = JSON.stringify(formData)
    const token = Cookies.get('mytoken')
    dispatch(updateUserStart())
    const result = await FetchUpdateProfile('Profile', token, data)
    console.log('result', result)
    if (result.status === 200) {
      dispatch(updateUserSuccess(result))
      navigate('/user')
    } else {
      dispatch(updateUserFailure(result))
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
                placeholder={currentUser.body.userName}
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
          </form>
        </div>
        <p className="text-red-700 mt-5">
          {error && 'Une erreur est survenue !'}
        </p>
      </div>
      <Accounts aspect={2} />
    </div>
  )
}

export default Profile
/* const res = await fetch('http://localhost:3001/api/v1/user/profile/', {
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
 */
