const User = () => {
  return (
    <div className="flex-1 bg-dark min-h-screen">
      <div className="text-grey-fff mb-8">
        <h1 className="block text-2em font-bold p-4">
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="text-grey-fff my-4 w-auto p-2.5 text-lg font-bold bg-submit">
          Edit Name
        </button>
      </div>
      {/* <h2 className="sr-only">Accounts</h2> */}
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
        <div className="pl-96 py-5 w-11/12">
          <button className="block w-full p-2 text-1.1rem font-bold my-4 bg-submit text-grey-fff">
            View transactions
          </button>
        </div>
      </section>
      <section
        className="flex flex-col justify-between items-center bg-fff 
                          w-4/5 m-auto p-6 box-border text-left mb-8"
      >
        <div className="flex w-full">
          <h3 className="m-0 p-0 text-base font-normal">
            Argent Bank Savings (x6712)
          </h3>
          <p className="m-0 text-2.5rem">$10,928.42</p>
          <p className="m-0">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section
        className="flex flex-col justify-between items-center bg-fff 
                          w-4/5 m-auto p-6 box-border text-left mb-8"
      >
        <div className="flex w-full">
          <h3 className="m-0 p-0 text-base font-normal">
            Argent Bank Credit Card (x8349)
          </h3>
          <p className="m-0 text-2.5rem">$184.30</p>
          <p className="m-0">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </div>
  )
}
export default User
