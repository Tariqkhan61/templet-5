import Image from "next/image";
import fb from "@/images/facebook.png";
import instagram from "@/images/ant-design_instagram-outlined.png";
import twitter from "@/images/ant-design_twitter-outlined.png";
export default function Footer() {
  return (
    <footer className="bg-white relative flex flex-col py-10">
      <section className="bg-[#ffffff] py-10">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-[#252b42] text-2xl font-bold leading-loose tracking-tight">
              Bandage
            </h1>
          </div>
          <div className="flex gap-6 mt-6 lg:mt-0">
            <Image src={fb} alt="fb" className="w-6 h-6 " />
            <Image src={instagram} alt="insta" className="w-6 h-6 " />
            <Image src={twitter} alt="twitter" className="w-6 h-6 " />
          </div>
        </div>
      </section>

      <div className="border-t border-[#e6e6e6]" />
      <section className="bg-white py-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          <div>
            <h2 className="text-[#252b42] text-base font-bold">Company Info</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <a href="#" className="text-[#727272] text-sm font-bold">
                About Us
              </a>
              <a href="#" className="text-[#727272] text-sm font-bold">
                Careers
              </a>
              <a href="#" className="text-[#727272] text-sm font-bold">
                We Are Hiring
              </a>
              <a href="#" className="text-[#727272] text-sm font-bold">
                Blog
              </a>
            </nav>
          </div>

          <div>
            <h2 className="text-[#252b42] text-base font-bold">Legal</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <a href="#" className="text-[#727272] text-sm font-bold">
                Terms of Service
              </a>
              <a href="#" className="text-[#727272] text-sm font-bold">
                Privacy Policy
              </a>
              <a href="#" className="text-[#727272] text-sm font-bold">
                Cookies
              </a>
              <a href="#" className="text-[#727272] text-sm font-bold">
                Refund Policy
              </a>
            </nav>
          </div>

          <div>
            <h2 className="text-[#252b42] text-base font-bold">Features</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <a href="#" className="text-[#727272] text-sm font-bold">
                Business Marketing
              </a>
              <a href="#" className="text-[#727272] text-sm font-bold">
                User Analytics
              </a>
              <a href="#" className="text-[#727272] text-sm font-bold">
                Live Chat
              </a>
              <a href="#" className="text-[#727272] text-sm font-bold">
                Unlimited Support
              </a>
            </nav>
          </div>

          <div>
            <h2 className="text-[#252b42] text-base font-bold">Resources</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <a href="#" className="text-[#727272] text-sm font-bold">
                iOS & Android
              </a>
              <a href="#" className="text-[#727272] text-sm font-bold">
                Watch a Demo
              </a>
              <a href="#" className="text-[#727272] text-sm font-bold">
                Customers
              </a>
              <a href="#" className="text-[#727272] text-sm font-bold">
                API
              </a>
            </nav>
          </div>

          <div>
            <h2 className="text-[#252b42] text-base font-bold">Get In Touch</h2>
            <div className="mt-3">
              <div className="relative mb-4">
                <input
                  type="email"
                  className="w-full h-12 px-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-sm font-normal"
                  placeholder="Your Email"
                />
                <button className="absolute right-0 top-0 h-12 px-4 bg-[#23a6f0] text-white text-sm font-normal rounded-r-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-[#727272] text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <p className="text-[#727272] text-sm font-extrabold">
            Crafted With Passion By M. Tariq Mahboob (GIAIC). All Rights
            Reserved.
          </p>
          <div className="flex gap-4"></div>
        </div>
      </section>
    </footer>
  );
}
