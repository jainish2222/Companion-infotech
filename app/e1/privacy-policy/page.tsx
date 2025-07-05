"use client";

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white dark:bg-zinc-950 text-gray-800 dark:text-gray-200 px-6 md:px-12 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Privacy Policy</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-12">
        Last updated: 5 July 2025
      </p>

      <div className="space-y-8 text-base leading-relaxed">
        <p>
          <strong>Companion Infotech</strong> ("Companion," "we," "our," or "us") values your privacy and is dedicated to
          safeguarding the personal data you share with us when visiting{" "}
          <a href="https://www.companioninfotech.com" className="text-blue-600 dark:text-blue-400 underline">
            www.companioninfotech.com
          </a>{" "}
          (the "Site") or engaging with our services. This Privacy Policy outlines what information we collect, why we collect it,
          how we use it, and your rights regarding that information.
        </p>

        <div>
          <h2 className="font-semibold text-lg">1. Scope</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Your use of the Site (desktop or mobile versions).</li>
            <li>Contact or inquiry forms, newsletters, or other direct submissions.</li>
            <li>Cookies, analytics, and ad tracking tools.</li>
            <li>Any interaction where this Policy is referenced or linked.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg">2. What We Collect</h2>
          <table className="w-full mt-4 border text-sm text-left border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2 border">Category</th>
                <th className="px-4 py-2 border">Examples</th>
                <th className="px-4 py-2 border">Purpose / Legal Basis*</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Contact Information</td>
                <td className="px-4 py-2 border">Name, email, phone, company name, job title, message content</td>
                <td className="px-4 py-2 border">Respond to inquiries, send requested materials<br />Contract performance / legitimate interest</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Location Permission</td>
                <td className="px-4 py-2 border">Browser-based approximate geolocation (city/region) when enabled</td>
                <td className="px-4 py-2 border">Personalize on-site messaging<br />Improve localization<br />Consent</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Device & Usage Data</td>
                <td className="px-4 py-2 border">IP address, browser details, pages visited, referrer, session data</td>
                <td className="px-4 py-2 border">Analyze behavior, enhance security<br />Legitimate interest</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Cookies & Identifiers</td>
                <td className="px-4 py-2 border">Google Analytics (_ga), Meta Pixel (_fbp), LinkedIn Tag, Ads (_gcl)</td>
                <td className="px-4 py-2 border">Improve marketing and track ad conversions<br />Consent / legitimate interest</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            * Where the EU GDPR applies, lawful bases are indicated. For users in India, we rely on legitimate interests and your express or implied consent.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Site Performance & Improvements – Diagnose technical issues, optimize content delivery.</li>
            <li>User Support & Communication – Respond to queries, requests, or demo scheduling.</li>
            <li>Analytics – Use tools like Google Analytics to understand aggregate usage behavior.</li>
            <li>Advertising & Remarketing – Optimize campaigns and build remarketing audiences.</li>
            <li>Security & Compliance – Prevent misuse, enforce policies, and meet legal obligations.</li>
          </ul>
          <p className="mt-2">
            We do not sell or rent your personal data under any circumstance.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">4. Sharing & Disclosure</h2>
          <table className="w-full mt-4 border text-sm text-left border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2 border">Recipient</th>
                <th className="px-4 py-2 border">Purpose / Data Shared</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Google LLC</td>
                <td className="px-4 py-2 border">Usage analytics, ad attribution data (anonymized/pseudonymized)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Meta Platforms, Inc.</td>
                <td className="px-4 py-2 border">Pixel data for Facebook/Instagram ad performance and targeting</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">LinkedIn Corporation</td>
                <td className="px-4 py-2 border">Insight Tag for B2B marketing analytics and ad conversion tracking</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Service Providers</td>
                <td className="px-4 py-2 border">Hosting, email, CRM, and analytics platforms under confidentiality</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Legal Entities</td>
                <td className="px-4 py-2 border">When required to comply with the law or enforce legal claims</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="font-semibold text-lg">5. Cookies & Tracking Tools</h2>
          <p className="mt-2">
            When you visit the Site, a cookie banner will let you:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Accept all cookies (for marketing and analytics).</li>
            <li>Customize settings to enable or disable non-essential cookies.</li>
            <li>Reject all non-essential tracking.</li>
          </ul>
          <p className="mt-2">
            You can also delete cookies manually or configure your browser to block them.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">6. Data Retention</h2>
          <table className="w-full mt-4 border text-sm text-left border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2 border">Data Type</th>
                <th className="px-4 py-2 border">Retention Period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Contact Form Submissions</td>
                <td className="px-4 py-2 border">Up to 3 years</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Google Analytics Data</td>
                <td className="px-4 py-2 border">26 months (IP anonymized)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Ad Tracking Identifiers</td>
                <td className="px-4 py-2 border">180 days</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Security Logs</td>
                <td className="px-4 py-2 border">Up to 12 months</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="font-semibold text-lg">7. Your Rights</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Access personal data we hold about you</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request data deletion (right to be forgotten)</li>
            <li>Object to or restrict certain types of processing</li>
            <li>Request data portability (machine-readable format)</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p className="mt-2">
            Contact <strong>jainishkoladiya22@gmail.com</strong> to exercise these rights. Identity verification may be required.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">8. International Data Transfers</h2>
          <p className="mt-2">
            Data may be stored or processed in India, the U.S., EU, or other jurisdictions. We implement appropriate safeguards like
            Standard Contractual Clauses to ensure compliance.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">9. Security Measures</h2>
          <p className="mt-2">
            We use HTTPS, firewalls, access controls, and encryption in transit to protect your data. However, no method is 100% secure.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">10. Children's Privacy</h2>
          <p className="mt-2">
            We do not knowingly collect data from children under 16. If submitted in error, please contact us for removal.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">11. External Links</h2>
          <p className="mt-2">
            Our Site may link to external websites. We are not responsible for their privacy practices and encourage you to review their policies.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">12. Policy Updates</h2>
          <p className="mt-2">
            We may update this policy. Changes will appear here with a new “Last updated” date. Continued use implies acceptance.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">13. Contact Us</h2>
          <address className="not-italic space-y-1 mt-2">
            <p><strong>Companion Infotech</strong></p>
            <p>Surat, Gujarat, India</p>
            <p>📧 jainishkoladiya22@gmail.com</p>
            <p>📞 +91 90818 82802</p>
          </address>
        </div>
      </div>
    </section>
  );
}
