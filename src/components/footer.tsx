const Footer = () => {
  return (
    <footer className="bg-primary text-black py-10">
      <div className="max-w-[1182px] mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">OUR SERVICES</h1>
            <ul className="mt-4">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Products</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col items-center mt-4 md:mt-0">
            <h1 className="text-2xl font-bold">PRODUCTS</h1>
            <ul className="mt-4">
              <li>Address</li>
              <li>Phone</li>
              <li>Email</li>
            </ul>
          </div>
          <div className="flex flex-col items-center mt-4 md:mt-0">
            <h1 className="text-2xl font-bold">POLICY</h1>
            <ul className="mt-4">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <div className="flex flex-col items-center mt-4 md:mt-0">
            <h1 className="text-2xl font-bold">POLICY</h1>
            <ul className="mt-4">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;