const Contact = () => {
  return (
    <section className="max-w-[1100px] px-12 mx-auto mb-36 mt-24">
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-10 space-y-10 md:space-y-0">
        <div className="flex-1">
          <h1 className="text-3xl lg:text-3xl font-roboto font-bold text-lightgray">
            We&apos;re the one-stop shop for all your service needs. Come to us
            with anything, and we&apos;ll take care of it
          </h1>
        </div>
        <div className="flex-1 flex flex-col gap-y-8">
          <div className=" flex items-center justify-center">
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
          <div className="flex flex-col gap-y-2">
            <h2 className="text-xl text-green font-bold">
              ATLAS COMPUTER TECHNOLOGY PLC
            </h2>
            <p className="flex flex-row gap-x-2">
              <span className="text-base font-bold">Address:</span> Airport
              Road, Aberus Complex 7th & 9th Floor
            </p>
            <p className="flex flex-row gap-x-2">
              <span className="text-base font-bold">Country:</span>Addis Ababa,
              Ethiopia
            </p>
            <p className="flex flex-row gap-x-2">
              <span className="text-base font-bold">Telephone:</span> +251 11
              869 3096 / +251 911 221671
            </p>
            <p className="flex flex-row gap-x-2">
              <span className="text-base font-bold">E-mail:</span>{" "}
              info@act.com.et
            </p>
            <p className="flex flex-row gap-x-2">
              <span className="text-base font-bold">P.O Box:</span> 8999
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
