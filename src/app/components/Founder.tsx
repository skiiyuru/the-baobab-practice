import founderImage from "../../assets/founder.png";

export function Founder() {
  return (
    <section id="founder" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: "#4A3728", fontFamily: "var(--font-headline)" }}
          >
            Founder's Story
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={founderImage}
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <p
              className="text-base leading-relaxed"
              style={{ color: "#6B5D4F" }}
            >
              I have spent over two decades working with organizations across
              Africa in moments of change when the path forward is not clear and
              what worked before no longer works.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#6B5D4F" }}
            >
              What I have seen is this: most organizations do not lack strategy
              or talent. They lack the space and capability to work through
              change in a way that truly lasts.
            </p>
            <p
              className="text-base leading-relaxed font-semibold"
              style={{ color: "#4A3728" }}
            >
              That is why I founded The Baobab Practice.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#6B5D4F" }}
            >
              As a coach, I work alongside leaders and teams to help them make
              sense of complexity, strengthen how they lead and work together,
              and build practices that sustain growth. My experience spans
              global technology and international development, including
              leadership roles at Microsoft and BroadReach Group.
            </p>
            <p
              className="text-base leading-relaxed font-semibold"
              style={{ color: "#4A3728" }}
            >
              I believe when people lead their own change, they do not just get
              through it, they grow stronger because of it.
            </p>
          </div>
        </div>

        {/* Additional Context Section */}
        <div
          className="rounded-2xl p-8 lg:p-12"
          style={{ backgroundColor: "#F7F4EF" }}
        >
          <h3
            className="text-xl font-bold mb-6"
            style={{ color: "#6F8A6D", fontFamily: "var(--font-headline)" }}
          >
            A Practice Rooted in Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4
                className="text-lg font-bold mb-3"
                style={{ color: "#4A3728" }}
              >
                Global Technology Leadership
              </h4>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5D4F" }}
              >
                My time at Microsoft taught me how organizations navigate rapid
                transformation at scale, and how human-centered leadership makes
                the difference between change that sticks and change that
                fractures.
              </p>
            </div>
            <div>
              <h4
                className="text-lg font-bold mb-3"
                style={{ color: "#4A3728" }}
              >
                International Development Impact
              </h4>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5D4F" }}
              >
                Working with BroadReach Group across Africa showed me the power
                of adaptive systems, collaborative ownership, and the resilience
                that emerges when people lead their own transformation.
              </p>
            </div>
          </div>
          <div
            className="mt-8 pt-8"
            style={{
              borderTopWidth: "1px",
              borderColor: "rgba(74, 55, 40, 0.15)",
            }}
          >
            <p
              className="text-base leading-relaxed"
              style={{ color: "#4A3728" }}
            >
              These experiences shaped my conviction: lasting change happens
              when we stop treating transformation as a problem to solve and
              start treating it as a practice to cultivate. The Baobab Practice
              exists to help organizations and leaders do exactly that.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
