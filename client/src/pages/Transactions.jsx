function Transactions({ view }) {
  const VV = view
  console.log(VV)
  return (
    <div>
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
        {VV === 1 ? (
          <div className="pl-96 mx-44 py-5 w-11/12">
            <button
              type="button"
              className="block w-220px p-2 text-1.1rem  shadow-xs
              font-bold my-4 bg-submit border-green-submit text-grey-fff"
            >
              View transactions
            </button>
          </div>
        ) : (
          <p>blablabla</p>
        )}
      </section>
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
    </div>
  )
}

export default Transactions
