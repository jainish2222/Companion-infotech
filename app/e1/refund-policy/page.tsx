"use client";

export default function RefundPolicyPage() {
  return (
    <section className="bg-white dark:bg-zinc-950 text-gray-800 dark:text-gray-200 px-6 md:px-12 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Refund Policy</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-12">
        Last updated: June 2025
      </p>

      <div className="space-y-8">
        <p>
          <strong>Companion Infotech</strong> ("Companion," "we," "our," or "us") is committed to delivering high-quality services
          to our clients. This Refund Policy outlines the terms and conditions related to refunds for services offered via{" "}
          <a
            href="https://www.companioninfotech.COM"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            www.companioninfotech.in
          </a>.
        </p>

        <div>
          <h2 className="font-semibold text-lg">1. General Refund Policy</h2>
          <p className="mt-2">
            We do not offer refunds once services have been delivered. This applies to all services, including but not limited to:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Web development and design</li>
            <li>Mobile application development</li>
            <li>Software development projects</li>
            <li>Technical consulting and advisory</li>
            <li>Maintenance and support services</li>
            <li>Any custom technical or digital solutions</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg">2. Refund for Terminated Projects</h2>
          <p className="mt-2">
            A refund may be considered if a project is terminated <strong>before</strong> any work has begun, subject to the following:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Written cancellation request before development starts</li>
            <li>No drafts, code, or documentation delivered</li>
            <li>No contract breach by Companion Infotech</li>
            <li>Administrative or transaction fees may apply</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg">3. What Constitutes “Work Started”</h2>
          <p className="mt-2">
            A project is considered started if any of the following have occurred:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Requirements gathering or documentation</li>
            <li>Wireframes, designs, or prototypes</li>
            <li>Development or setup work</li>
            <li>Resource/team allocation</li>
            <li>Delivery of any project element</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg">4. Refund Process</h2>
          <p className="mt-2">
            If you believe you qualify for a refund:
          </p>
          <ol className="list-decimal list-inside mt-2 space-y-1">
            <li>Email <strong>jainishkoladiya22@gmail.com</strong> with your request</li>
            <li>Include your project details and reason</li>
            <li>We’ll review within 5–7 business days</li>
            <li>If approved, refund is processed within 10–15 business days</li>
            <li>Refund will go to the original payment method</li>
          </ol>
        </div>

        <div>
          <h2 className="font-semibold text-lg">5. Partial Deliveries</h2>
          <p className="mt-2">
            If a project has been partially completed and deliverables shared, no refund will be provided. Clients are billed for
            all work completed as per the agreement.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">6. Disputes and Resolution</h2>
          <p className="mt-2">
            Any disputes related to refunds will be handled via direct communication. We aim to resolve concerns in a transparent
            and professional manner.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">7. Changes to This Policy</h2>
          <p className="mt-2">
            We reserve the right to update this Refund Policy. Changes will be reflected on this page with the revised "Last
            updated" date. Continued use of our services implies acceptance of the updated terms.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">8. Contact Us</h2>
          <address className="not-italic space-y-1 mt-2">
            <p><strong>Companion Infotech</strong></p>
            <p>Surat, Gujarat, India</p>
            <p>📧 <a href="mailto:jainishkoladiya22@gmail.com" className="underline text-blue-600 dark:text-blue-400">jainishkoladiya22@gmail.com</a></p>
            <p>📞 +91 90818 82802</p>
            {/* <p>🌐 <a href="https://www.companioninfotech.in" className="underline text-blue-600 dark:text-blue-400">www.companioninfotech.in</a></p> */}
          </address>
        </div>
      </div>

      <p className="mt-12 text-sm text-center text-gray-500 dark:text-gray-400">
        By engaging with our services, you confirm that you have read, understood, and agreed to this Refund Policy.
      </p>
    </section>
  );
}
