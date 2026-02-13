import React from "react";
import { Tooltip, Button } from "antd";
import { InfoOutlined, ArrowRightOutlined } from "@ant-design/icons";

function App() {
  const projects = [
    {
      name: "Ginti.ai",
      url: "https://demo-pcm.smart-iam.com/",
      image: "/gintiLoginPage.png",
      tagline: "Retail Footfall Analytics",
      info: "Ginit.ai transforms retail data into insights, offering footfall tracking and demographic analytics to enhance customer understanding and business efficiency.",
    },
    {
      name: "Netra.ai",
      url: "https://images1.smart-iam.com/",
      image: "/imagesLoginPage.png",
      tagline: "CCTV Automation",
      info: "Images Service automates SOP-based ticketing via CCTV snapshots, enabling timelapse visualization, HDD/NVR health reporting, and camera monitoring.",
    },
    {
      name: "Vidyutt.io",
      url: "https://app.vidyutt.io/login",
      image: "/bmsloginbg.png",
      tagline: "Smart BMS & Utilities",
      info: "A smart BMS platform, I-BMS enables monitoring of utilities and control of HVAC/AC, offering energy consumption analysis and asset management.",
    },
    // {
    //   name: "CMS Service",
    //   url: "https://cms.admin.smart-iam.com",
    //   image: "/cmsLoginPage.png",
    //   info: "CMS provides always-on monitoring and support, offering consolidated reports, SOP oversight, and Health tracking for CCTV, Intrusion, footfall, energy, HVAC, UPS, DG, and Lighting systems.",
    // },
  ];

  return (
    <div className="h-[100vh] w-full bg-[#020617] text-white selection:bg-blue-500/30 overflow-auto lg:overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className=" fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/40 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-emerald-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8 md:py-10 flex flex-col items-center ">
        {/* Header Section */}
        <div className="text-center mb-8 xl:mb-16 space-y-4 h-[20%] ">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            Retail Ecosystem
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Next-generation AI platforms for Retail Analytics, Energy
            Monitoring, and Asset Management.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full h-[60%]">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative h-[25rem] md:h-[15rem] 2xl:h-[31rem] rounded-[2rem] hover:rounded-[2rem] border border-white/10 bg-zinc-900 shadow-2xl transition-all duration-500 hover:scale-[1.11] hover:border-blue-500/50 cursor-pointer overflow-hidden"
              onClick={() => window.open(p.url, "_blank")}
            >
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 rounded-[2rem] hover:rounded-[2rem] "
                style={{ backgroundImage: `url(${p.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/30 to-transparent opacity-90 group-hover:opacity-80 transition-opacity rounded-[2rem] hover:rounded-[2rem]" />

              {/* Top Action: Info Button */}
              <div className="absolute top-6 right-6 z-20 rounded-[2rem] hover:rounded-[2rem] ">
                <Tooltip
                  title={p.info}
                  placement="left"
                  overlayStyle={{ maxWidth: 400 }}
                >
                  <Button
                    type="text"
                    shape="circle"
                    icon={<InfoOutlined className="text-white" />}
                    className="bg-black/30 backdrop-blur-md border border-white/20 hover:bg-white/20"
                    onClick={(e) => e.stopPropagation()}
                  />
                </Tooltip>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 space-y-2 rounded-[2rem] hover:rounded-[2rem] ">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">
                  {p.tagline}
                </span>
                <div className="flex justify-between items-end">
                  <h2 className="text-3xl font-bold tracking-tight">
                    {p.name}
                  </h2>
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 shadow-xl">
                    <ArrowRightOutlined />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer/CTA for Exhibition */}
        <div className="mt-5 xl:mt-10 py-2 border-t border-white/25 w-full text-center h-[20%]">
          <p className="text-zinc-500 text-sm font-semibold tracking-widest uppercase py-3">
            Powered by
          </p>
          <div className="flex justify-center items-center gap-3 lg:gap-8">
            <img src="/IESG White.png" alt="" className="h-12 lg:h-14 w-auto" />
            |
            <img src="/iam-logo.png" alt="" className="h-12 lg:h-14 w-auto" />|
            <img src="/KIAM-logo.png" alt="" className="h-12 lg:h-14  w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
