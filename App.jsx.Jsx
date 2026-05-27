import { useState } from "react";

export default function App() {
  const services = [
    {
      title: "Mortgage Processing",
      description:
        "Complete mortgage processing support with accuracy and compliance.",
      points: [
        "Application Review",
        "Document Verification",
        "Loan Setup",
        "Pre Closing Review",
      ],
    },

    {
      title: "Underwriting Support",
      description:
        "Professional underwriting support services for lenders and brokers.",
      points: [
        "Income Analysis",
        "Asset Verification",
        "Credit Review",
        "Condition Clearing",
      ],
    },

    {
      title: "Closing Support",
      description:
        "Efficient loan closing coordination and support services.",
      points: [
        "Closing Disclosure Review",
        "Settlement Coordination",
        "Final QC Review",
        "Funding Coordination",
      ],
    },

    {
      title: "Post Closing",
      description:
        "Comprehensive post-closing audits and compliance verification.",
      points: [
        "Post Closing Audit",
        "Trailing Documents",
        "Investor Delivery",
        "Compliance Review",
      ],
    },

    {
      title: "Title Search",
      description:
        "Professional title search and property research solutions.",
      points: [
        "Ownership Verification",
        "Lien Search",
        "Property Research",
        "Title Review",
      ],
    },

    {
      title: "Indexing",
      description:
        "Secure mortgage file indexing and document management services.",
      points: [
        "Data Entry",
        "Digital Documentation",
        "Secure Storage",
        "File Management",
      ],
    },
  ];

  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div className="min-h-screen bg-[#071739] text-white">

      {/* Header */}
      <header className="flex items-center justify-between px-10 py-6 border-b border-gray-700">
        <div>
          <h1 className="text-3xl font-bold text-[#F5A623]">
            Shree Sai Info Technologies
          </h1>

          <p className="text-gray-300 mt-1">
            Mortgage Outsourcing Solutions
          </p>
        </div>

        <button className="bg-[#F5A623] text-black px-6 py-3 rounded-xl font-semibold">
          Contact Us
        </button>
      </header>

      {/* Hero */}
      <section className="text-center py-24 px-6">
        <h2 className="text-6xl font-bold leading-tight mb-6">
          Mortgage Processing <br />
          & Outsourcing Services
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          We provide reliable mortgage support services including underwriting,
          closing, post-closing, title search, indexing, and quality control.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white text-black py-20 rounded-t-[50px]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-14">
            <h2 className="text-5xl font-bold text-[#071739] mb-4">
              Our Services
            </h2>

            <p className="text-gray-600 text-lg">
              Professional mortgage outsourcing solutions for lenders and
              financial institutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">

            {/* Left Side Menu */}
            <div className="bg-gray-50 rounded-3xl shadow-lg overflow-hidden border">

              <div className="bg-[#071739] text-white px-6 py-5 text-xl font-semibold">
                Services
              </div>

              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(service)}
                  className={`w-full flex items-center justify-between px-6 py-5 border-b transition-all ${
                    activeService.title === service.title
                      ? "bg-[#F5A623] text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <span>{service.title}</span>

                  <span>➜</span>
                </button>
              ))}
            </div>

            {/* Right Side Content */}
            <div className="lg:col-span-3 bg-white border rounded-3xl shadow-xl p-10">

              <h3 className="text-4xl font-bold text-[#071739] mb-5">
                {activeService.title}
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {activeService.description}
              </p>

              <div className="grid md:grid-cols-2 gap-5 mb-10">

                {activeService.points.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 border rounded-2xl p-5"
                  >
                    <span className="text-[#F5A623] text-2xl">
                      ➜
                    </span>

                    <span className="font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex gap-5">
                <button className="bg-[#071739] text-white px-8 py-4 rounded-2xl">
                  Get Started
                </button>

                <button className="border border-[#F5A623] text-[#F5A623] px-8 py-4 rounded-2xl">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 text-center">

        <h2 className="text-5xl font-bold mb-6">
          Contact Us
        </h2>

        <p className="text-gray-300 text-lg mb-10">
          +91 7893444044 <br />
          shreesaiinfotechnologies@gmail.com
        </p>

        <button className="bg-[#F5A623] text-black px-10 py-4 rounded-2xl font-semibold">
          Send Inquiry
        </button>
      </section>
    </div>
  );
}