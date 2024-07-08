import React from 'react'
import './History.css'

const History = () => {
  return (
    <section class="feature">
        <div class="feature_container">
          <div class="textContainer">
            <h3 class="heading">History</h3>
            <p class="text">
              <span>
                Saviom is the brainchild of 4 passionate and visionary entrepreneurs who aspired to
                develop a product for increasing business efficiency. Starting as a bootstrapped
                business in 1999 from a Sydney suburban garage, today we are a name to reckon with
                in resource management.
              </span>
              <span>
                Riding on the success of our ERM solution, we were motivated to come up with our
                next offering in the PSA space. There is constant growth in this space, and we
                believe we can make a difference in solving the pertinent challenges faced by
                professional service organizations today.
              </span>
            </p>
          </div>
          <div class="imageContainer">
            <img
              class="imageContainer_image lazy-hidden"
              src="./images/history-about-us.webp"
              alt="history-about-us"
              width="685"
              height="621"
            />
          </div>
        </div>
        <div class="feature_container">
          <div class="imageContainer">
            <img
              class="imageContainer_image lazy-hidden"
              src="./images/Our-Innovation-about-us.webp"
              alt="Our-Innovation-about-us"
              width="685"
              height="640"
            />
          </div>
          <div class="textContainer">
            <h3 class="heading">Our Innovation</h3>
            <p class="text">
              <span>
                At PMEntire, we constantly innovate and develop futuristic solutions to help our
                customers achieve greater operational efficiency and productivity. Besides, our
                intuitive solutions enable businesses to forecast and be proactive. Starting as
                pioneers in resource management, today, our products are several years ahead of the
                market.
              </span>
              <span>
                We foster an innovative culture wherein out-of-the-box ideas are encouraged and
                evaluated. Our range of products is highly configurable to fit every customer's
                unique business needs. Additionally, our future releases are decided after carefully
                understanding various client-centric challenges.
              </span>
            </p>
          </div>
        </div>
      </section>
  )
}

export default History;