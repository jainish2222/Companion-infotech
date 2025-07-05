"use client";

export default function TermsAndConditionsPage() {
  return (
    <section className="bg-white dark:bg-zinc-950 text-gray-800 dark:text-gray-200 px-6 md:px-12 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Terms and Conditions</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-12">
        Last updated: 5 July 2025
      </p>

      <div className="space-y-6 text-base leading-relaxed">
        <p>
          Welcome to <strong>Companion Infotech</strong> ("Companion," "we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of our website{" "}
          <a href="https://www.companioninfotech.com" className="text-blue-600 dark:text-blue-400 underline">
            www.companioninfotech.com
          </a>{" "}
          and the services we provide. By accessing or using our services, you agree to be bound by these Terms.
        </p>

        <div>
          <h2 className="font-semibold text-lg">1. Acceptance of Terms</h2>
          <p>
            By accessing our website, engaging our services, or entering into any agreement with Companion Infotech, you acknowledge that you have read, understood,
            and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">2. Services</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Web development and design services</li>
            <li>Mobile application development (iOS and Android)</li>
            <li>Software development and consulting</li>
            <li>AI automation and integration services</li>
            <li>Staff augmentation and remote team services</li>
            <li>MVP development and prototyping</li>
            <li>Technical consulting and advisory services</li>
            <li>Website maintenance and support</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg">3. Client Responsibilities</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Provide accurate, complete, and timely information necessary for project completion</li>
            <li>Respond to requests for feedback, approvals, and clarifications in a timely manner</li>
            <li>Make payments according to the agreed payment schedule</li>
            <li>Provide necessary access to systems, accounts, and resources required for project execution</li>
            <li>Respect intellectual property rights and confidentiality</li>
            <li>Use our services only for lawful purposes</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg">4. Payment Terms</h2>
          <h3 className="font-medium mt-2">4.1 Payment Schedule</h3>
          <p>
            Payment terms will be specified in the project agreement or statement of work. Generally, payments are structured as follows:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Initial advance payment upon project commencement</li>
            <li>Milestone-based payments during project execution</li>
            <li>Final payment upon project completion and delivery</li>
          </ul>

          <h3 className="font-medium mt-4">4.2 Late Payments</h3>
          <p>
            Late payments may result in project delays or suspension of services. A late fee may be applied to overdue amounts.
          </p>

          <h3 className="font-medium mt-4">4.3 Currency and Taxes</h3>
          <p>
            All payments are in INR unless otherwise specified. Clients are responsible for any applicable taxes, duties, or fees related to the services.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">5. Intellectual Property</h2>
          <h3 className="font-medium mt-2">5.1 Client Ownership</h3>
          <p>
            Upon full payment, clients will own the custom code, designs, and deliverables specifically created for their project, excluding third-party components and our proprietary tools.
          </p>

          <h3 className="font-medium mt-4">5.2 Third-Party Components</h3>
          <p>
            Projects may include third-party libraries, frameworks, or tools subject to their respective licenses. Clients are responsible for compliance with these licenses.
          </p>

          <h3 className="font-medium mt-4">5.3 Companion Tools and Methodologies</h3>
          <p>
            Companion retains ownership of proprietary tools, methodologies, and general knowledge used in service delivery.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">6. Confidentiality</h2>
          <p>
            We respect the confidential nature of client information and will not disclose confidential information to third parties without explicit consent, except as required by law. Clients similarly agree to maintain confidentiality regarding our proprietary methods and non-public information.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">7. Project Timeline and Delivery</h2>
          <p>Project timelines are estimates based on the information provided and agreed scope. Delays may occur due to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Changes in project scope or requirements</li>
            <li>Delays in client feedback or approvals</li>
            <li>Technical complexities not initially anticipated</li>
            <li>Third-party dependencies beyond our control</li>
            <li>Force majeure events</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg">8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Companion Infotech shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to the use of our services. Our total liability shall not exceed the amount paid by the client for the specific service in question.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">9. Warranty and Support</h2>
          <h3 className="font-medium mt-2">9.1 Warranty Period</h3>
          <p>
            We provide a 30-day warranty period for bug fixes and issues directly related to our development work, starting from the date of final delivery.
          </p>

          <h3 className="font-medium mt-4">9.2 Exclusions</h3>
          <p>
            The warranty does not cover issues arising from:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Third-party service failures or changes</li>
            <li>Client modifications to the delivered code</li>
            <li>Changes in external dependencies or platforms</li>
            <li>Hosting or infrastructure-related issues</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg">10. Termination</h2>
          <p>Either party may terminate a project agreement with written notice:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Clients may terminate for convenience with 7 days written notice</li>
            <li>We may terminate for non-payment or breach of terms</li>
          </ul>
          <p className="mt-2">
            Upon termination, payment is due for all work completed. Deliverables will be provided for work that has been paid for.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">11. Force Majeure</h2>
          <p>
            Neither party shall be liable for delays or failures in performance resulting from acts beyond reasonable control, including but not limited to natural disasters, war, terrorism, pandemics, government actions, or internet service interruptions.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">12. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of India. Any disputes shall be resolved through arbitration or in the courts of Gujarat, India.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">13. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page with a new "Last updated" date. Continued use of our services after an update signifies acceptance of the revised terms.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">14. Contact Information</h2>
          <address className="not-italic space-y-1 mt-2">
            <p><strong>Companion Infotech</strong></p>
            <p>Surat, Gujarat, India</p>
            <p>📧 <a href="mailto:info@companioninfotech.com" className="underline text-blue-600 dark:text-blue-400">info@companioninfotech.com</a></p>
            <p>📞 +91 90818 82802</p>
            {/* <p>🌐 <a href="https://www.companioninfotech.com" className="underline text-blue-600 dark:text-blue-400">www.companioninfotech.com</a></p> */}
          </address>
        </div>

        <p className="mt-6">
          By engaging our services, you acknowledge that you have read and understood these Terms and Conditions and agree to be bound by them.
        </p>
      </div>
    </section>
  );
}
