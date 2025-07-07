import InfoSectionLeft from "@/components/infosection/InfoSectionLeft";
import InfoSectionRight from "@/components/infosection/InfoSectionRight";

export default function HomePage() {
  return (
   <>
   {/* web development */}
    <InfoSectionLeft
     imageSrc="/img/website.svg"
  imageAlt="Website Illustration"
  colourfulHeading="Web Development"
  subheading={
    <>
      We Build Fast, Scalable & Modern{" "}
      <span className="text-purple-500">websites</span>
    </>
  }
  description={
    <>
      <span className="font-semibold text-green-600">Companion Infotech</span> is a Surat-based development company delivering high-performance{" "}
      <span className="font-medium text-blue-500">web and app solutions</span> using{" "}
      <span className="font-medium text-blue-500">MERN Stack, Next.js</span>, and{" "}
      <span className="font-medium text-blue-500">Express.js</span>. From idea to deployment, we create SEO-ready, mobile-responsive, and scalable applications. Whether you're a startup or an enterprise, we bring your vision to life with modern tech and reliable support.
    </>
     }
    />
    {/* app development */}
    <InfoSectionRight
     imageSrc="/img/app.svg"
  imageAlt="App Development Illustration"
  colourfulHeading="App Development"
  subheading={
    <>
      We Build Scalable & High-Performance{" "}
      <span className="text-purple-500">Mobile Apps</span>
    </>
  }
  description={
    <>
      <span className="font-semibold text-green-600">Companion Infotech</span> is a Surat-based company specializing in modern{" "}
      <span className="font-medium text-blue-500">mobile app development</span>. We craft fast, secure, and user-friendly{" "}
      <span className="font-medium text-blue-500">iOS, Android, React Native</span>, and{" "}
      <span className="font-medium text-blue-500">Flutter applications</span> tailored to your business needs. Whether you're building a startup MVP or scaling a full product, we deliver end-to-end solutions built with speed, quality, and user experience in mind.
    </>
     }
    />
    {/* Shopify store development */}
     <InfoSectionLeft
     imageSrc="/img/shopifystore.svg"
  imageAlt="Shopify Webstore Illustration"
  colourfulHeading="Shopify Development"
  subheading={
    <>
      We Build Powerful, Scalable &{" "}
      <span className="text-purple-500">Conversion-Focused Stores</span>
    </>
  }
  description={
    <>
      <span className="font-semibold text-green-600">Companion Infotech</span> is a Surat-based team specializing in building professional{" "}
      <span className="font-medium text-blue-500">Shopify webstores</span> tailored for your business needs. We help startups and enterprises create{" "}
      <span className="font-medium text-blue-500">responsive, fast, and sales-driven</span> online stores with custom themes, smooth user experiences, and secure payment integrations. Whether you’re launching a new brand or scaling your existing eCommerce presence, we deliver high-converting Shopify solutions built for long-term growth.
    </>
      }
     />
     {/* Ui/ux services */}
     <InfoSectionRight
      imageSrc="/img/uiux.svg"
  imageAlt="UI/UX Design Illustration"
  colourfulHeading="UI/UX Design Services"
  subheading={
    <>
      Make Your Digital Products{" "}
      <span className="text-purple-500">Easy & Intuitive</span>
    </>
  }
  description={
    <>
      At <span className="font-semibold text-green-600">Companion Infotech</span>, we craft seamless{" "}
      <span className="font-medium text-blue-500">UI/UX experiences</span> that help businesses in Surat and beyond build{" "}
      <span className="font-medium text-blue-500">interactive, user-friendly software</span>. Our design-first approach ensures every screen is optimized for clarity, usability, and business goals. Using modern tools and best practices, we tailor each product to your unique vision — helping you create impactful digital experiences that drive engagement and growth.
    </>
     }
      />
     {/* seo */}
     <InfoSectionLeft
     imageSrc="/img/seo.svg"
  imageAlt="SEO Optimization Illustration"
  colourfulHeading="SEO Optimization Services"
  subheading={
    <>
      We Help You Rank Higher &{" "}
      <span className="text-purple-500">Drive More Traffic</span>
    </>
  }
  description={
    <>
      <span className="font-semibold text-green-600">Companion Infotech</span> is a Surat-based digital solutions company helping businesses improve their{" "}
      <span className="font-medium text-blue-500">online visibility and search engine rankings</span>. Our expert team delivers{" "}
      <span className="font-medium text-blue-500">on-page SEO, technical SEO, keyword strategy</span>, and performance audits that drive real results. Whether you're a local startup or an eCommerce brand, we help you attract more traffic, leads, and customers through smart, sustainable SEO practices.
    </>
     }
     />
    {/* Ai tool */}

     <InfoSectionRight
      imageSrc="/img/ai1.svg"
  imageAlt="AI Automation Illustration"
  colourfulHeading="AI Agents & Automation"
  subheading={
    <>
      Empowering Businesses with{" "}
      <span className="text-purple-500">Intelligent Automation</span>
    </>
  }
  description={
    <>
      We build advanced <span className="font-medium text-blue-500">AI agents</span> and{" "}
      <span className="font-medium text-blue-500">automated systems</span> that streamline operations, boost efficiency, and reduce manual work. 
      From <span className="font-medium text-blue-500">custom GPT-powered tools</span> to fully automated workflows, our solutions help teams scale smarter. 
      Whether you're optimizing internal processes or deploying AI assistants for customer engagement, we deliver future-ready automation built for real impact.
    </>
    }
   />
  {/* devops */}
    <InfoSectionLeft
    imageSrc="/img/devops.svg"
  imageAlt="DevOps Illustration"
  colourfulHeading="DevOps Services"
  subheading={
    <>
      Accelerate Delivery with{" "}
      <span className="text-purple-500">Modern DevOps</span>
    </>
  }
  description={
    <>
      We offer end-to-end <span className="font-medium text-blue-500">DevOps solutions</span> that help shorten your product's development lifecycle 
      without sacrificing quality. Our team automates your entire pipeline—from code integration to deployment—ensuring faster, 
      more reliable releases. By aligning people, processes, and tools, we enable smoother collaboration, continuous delivery, 
      and scalable infrastructure tailored to your business goals.
    </>
    }
   />

   </>
  );
}
