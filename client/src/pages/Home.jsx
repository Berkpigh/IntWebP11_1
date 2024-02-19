import React from 'react'

const Home = () => {
  return (
    <React.Fragment>
      <div>
        <div className="bg-[0_33%] bg-hero object-cover bg-cover bg-no-repeat h-[400px] relative">
          <div className="absolute inset-y-8 right-5 h-211px w-364px bg-white p-8 text-left m-8">
            {/* <h2 className="sr-only">Promoted Content</h2> */}
            <p className="font-bold text-xl m-0">No fees.</p>
            <p className="font-bold text-xl m-0">No minimum deposit.</p>
            <p className="font-bold text-xl m-0">High interest rates.</p>
            <p className="mb-0 text-xl mt-4">
              Open a savings account with Argent Bank today!
            </p>
          </div>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <div className="feature-item">
            <img
              src="./img/icon-chat.png"
              alt="Chat Icon"
              className="feature-icon"
            />
            <h3 className="feature-item-title">You are our #1 priority</h3>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>
          <div className="feature-item">
            <img
              src="./img/icon-money.png"
              alt="Chat Icon"
              className="feature-icon"
            />
            <h3 className="feature-item-title">
              More savings means higher rates
            </h3>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>
          <div className="feature-item">
            <img
              src="./img/icon-security.png"
              alt="Chat Icon"
              className="feature-icon"
            />
            <h3 className="feature-item-title">Security you can trust</h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}

export default Home
