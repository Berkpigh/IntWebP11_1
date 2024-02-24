import { useSelector } from 'react-redux'
import arrow from '../assets/img/arrow-left-3099.png'

const Accounts = () => {
  const { defaultUserPage } = useSelector((state) => state.profile)
  return (
    <div>
      {/* SECTION 1 */}
      {defaultUserPage ? (
        <section
          className="bg-fff w-4/5 m-auto p-6 box-border text-left mb-8
                    grid grid-cols-2"
        >
          <div className="flex-un flex-col w-full">
            <h3 className="m-0 p-0 text-base font-normal">
              Argent Bank Checking (x8349)
            </h3>
            <p className="m-0 text-2.5rem">$2,082.79</p>
            <p className="m-0">Available Balance</p>
          </div>
          <div className="pl-96 mx-44 py-5 w-11/12">
            <button
              type="button"
              className="block w-220px p-2 text-1.1rem  shadow-xs
              font-bold my-4 bg-submit border-green-submit text-grey-fff"
            >
              View transactions
            </button>
          </div>
        </section>
      ) : (
        <section
          className="bg-black w-4/5 m-auto p-6 box-border text-left mb-8
                    grid grid-cols-2 items-center text-white"
        >
          <div className="flex-un flex-col w-full">
            <h3 className="m-0 p-0 text-base font-normal">
              Argent Bank Checking (x8349)
            </h3>
            <p className="m-0 text-2.5rem">$2,082.79</p>
            <p className="m-0">Available Balance</p>
          </div>
          <div className="pl-96 mx-44 py-5 w-11/12">
            <img src={arrow} alt="flèche" />
          </div>
        </section>
      )}
      {/* SECTION 2 */}
      {defaultUserPage ? (
        <section
          className="bg-fff w-4/5 m-auto p-6 box-border text-left mb-8
        grid grid-cols-2"
        >
          <div className="flex-un flex-col w-full">
            <h3 className="m-0 p-0 text-base font-normal">
              Argent Bank Savings (x6712)
            </h3>
            <p className="m-0 text-2.5rem">$10,928.42</p>
            <p className="m-0">Available Balance</p>
          </div>
          <div className="pl-96 mx-44 py-5 w-11/12">
            <button
              type="submit"
              className="block w-220px p-2 text-1.1rem  shadow-xs
              font-bold my-4 bg-submit border-green-submit text-grey-fff"
            >
              View transactions
            </button>
          </div>
        </section>
      ) : (
        <section
          className="bg-black w-4/5 m-auto p-6 box-border text-left mb-8
                grid grid-cols-2  items-center text-white"
        >
          <div className="flex-un flex-col w-full">
            <h3 className="m-0 p-0 text-base font-normal">
              Argent Bank Savings (x6712)
            </h3>
            <p className="m-0 text-2.5rem">$10,928.42</p>
            <p className="m-0">Available Balance</p>
          </div>
          <div className="pl-96 mx-44 py-5 w-11/12">
            <img src={arrow} alt="flèche" />
          </div>
        </section>
      )}
      {/* SECTION 3 */}
      {defaultUserPage ? (
        <section
          className="bg-fff w-4/5 m-auto p-6 box-border text-left mb-8
        grid grid-cols-2"
        >
          <div className="flex-un flex-col w-full">
            <h3 className="m-0 p-0 text-base font-normal">
              Argent Bank Credit Card (x8349)
            </h3>
            <p className="m-0 text-2.5rem">$184.30</p>
            <p className="m-0">Current Balance</p>
          </div>
          <div className="pl-96 mx-44 py-5 w-11/12">
            <button
              type="submit"
              className="block w-220px p-2 text-1.1rem  shadow-xs
              font-bold my-4 bg-submit border-green-submit text-grey-fff"
            >
              View transactions
            </button>
          </div>
        </section>
      ) : (
        <section
          className="bg-black w-4/5 m-auto p-6 box-border text-left mb-8
        grid grid-cols-2  items-center text-white"
        >
          <div className="flex-un flex-col w-full">
            <h3 className="m-0 p-0 text-base font-normal">
              Argent Bank Credit Card (x8349)
            </h3>
            <p className="m-0 text-2.5rem">$184.30</p>
            <p className="m-0">Current Balance</p>
          </div>
          <div className="pl-96 mx-44 py-5 w-11/12">
            <img src={arrow} alt="flèche" />
          </div>
        </section>
      )}
    </div>
  )
}

export default Accounts
