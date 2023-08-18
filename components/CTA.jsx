import React from "react";

const CTA = () => {
  return (
    <section className="flex flex-col">
      <div className="flex-1 flex flex-col md:justify-center items-center justify-left">
        <h2 className="text-3xl font-roboto text-lightgray font-bold mb-3 md:mx-auto md:text-center">
          Now more than ever, IT is a smart investment
        </h2>
        <h3 className="text-2xl font-roboto text-lightgray font-bold mb-3 md:max-w-md md:mx-auto md:text-center">
          Let us handle the technology, so you can focus on what matters
        </h3>
        <button className="btn_md bg-green mb-20 ">Contact Us</button>
      </div>
      <div className="flex-1 flex flex-col md:flex-row gap-x-10 gap-y-10 md:gap-y-0 items-center">
        <div className="flex-1 w-full">
          <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6335029873508!2d38.76499597411307!3d9.005830391054616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b0052ec8cf%3A0x1bf2572894d59929!2zQWJlcnVzIENvbXBsZXggfCBCb2xlIERlbWJlbCB8IOGKoOGJoOGIqeGItSDhiIXhipXhjLsgfCDhiabhiIwg4Yuw4Yid4Ymg4YiN!5e0!3m2!1sen!2set!4v1691567454848!5m2!1sen!2set"
            height={300}
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex-1 flex flex-col gap-y-2 ">
          <h2 className="text-2xl font-bold text-green">
            ATLAS COMPUTER TECHNOLOGY PLC
          </h2>
          <p>
            <span className="text-base font-bold">Address:</span> Airport Road,
            Aberus Complex 7th & 9th Floor
          </p>
          <p>
            <span className="text-base font-bold">Country:</span> Addis Ababa,
            Ethiopia
          </p>
          <p>
            <span className="text-base font-bold">Telephone:</span> +251 11 869
            3096 / +251 911 221671
          </p>
          <p>
            <span className="text-base font-bold">E-Mail:</span> info@act.com.et
          </p>
          <p>
            <span className="text-base font-bold">P.O Box:</span> 8999
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
