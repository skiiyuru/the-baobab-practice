import logo from "../../assets/logo_symbol.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src={logo}
              alt="The Baobab Practice"
              className="h-32 w-auto mb-4"
              // style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-secondary">
              Human-led transformation rooted in trust, clarity, and resilience.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-[family-name:var(--font-headline)]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-secondary">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("about");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-primary-foreground hover:cursor-pointer transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("services");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-primary-foreground hover:cursor-pointer transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("founder");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-primary-foreground hover:cursor-pointer transition-colors"
                >
                  Founder
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-primary-foreground hover:cursor-pointer transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-[family-name:var(--font-headline)]">
              Contact Info
            </h4>
            <ul className="space-y-2 text-secondary">
              <li>+254 722 289642</li>
              <li>hello@baobabpractice.com</li>
              <li>24808 00502</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-secondary border-t border-white/20">
          <p>
            &copy; {new Date().getFullYear()} The Baobab Practice. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
