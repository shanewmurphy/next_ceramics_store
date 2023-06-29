import Layout from "@/components/Layout/Layout";

export default function ContactUs() {
  return (
    <Layout>
      <div>
        <div className="lg:w-9/12 md:w-9/12 sm:w-full sm:p-4 mx-auto lg:mt-40 md:mt-32 sm:mt-32 mb-52">
          <h2 className="text-text lg:text-3xl sm:text-2xl font-semibold mb-2 antialiased">
            Conatct Us
          </h2>
          <p className="text-text lg:text-base sm:text-sm lg:w-9/12 sm:w-full">
            We're here if you need us! We love to talk shop. Please get in touch
            with any questions or concerns. We aim to reply within a day during
            working hours. Our working hours are Monday to Friday, 9am-6pm CET.
            Look forward to hearing from you!
          </p>
          <div className="mt-16">
            <form>
              <div>
                <label>
                  <span class="block text-text mb-1">Full Name</span>
                  <input
                    type="text"
                    class="lg:w-2/5 sm:w-11/12 block rounded-md bg-slate-50 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder="Full Name"
                  ></input>
                </label>
                <label>
                  <span class="block text-text mt-4 mb-1">Your Email</span>
                  <input
                    type="email"
                    class="lg:w-2/5 sm:w-11/12 block rounded-md bg-slate-50 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder="john@example.com"
                  ></input>
                </label>
                <div>
                  <label>
                    <span class="block text-text mt-4 mb-1">Enquiry Topic</span>
                  </label>
                  <select
                    class="lg:w-2/5 sm:w-11/12 block text-text rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0"
                  >
                    <option>Where is my order?</option>
                    <option>Damaged, Missing or Wrong items Received</option>
                    <option>Returned & Refund</option>
                  </select>
                </div>
                <div>
                  <label>
                    <span class="block text-text mt-4 mb-1">Your Message</span>
                  </label>
                  <textarea
                    class="mt-1
                    block
                    lg:w-8/12
                    sm:w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0"
                    rows="10"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="mt-6">
                  <button className="lg:px-12 lg:py-4 md:px-12 md:py-4 sm:py-4 sm:px-8 text-text font-semibold bg-white">
                    Send Enquiry
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
