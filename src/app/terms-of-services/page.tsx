const TermsOfServicePage = () => {
  return (
    <div>
      <main className="bg-gray-100 min-h-screen py-10 px-5">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-4">
            Welcome to <span className="font-semibold">RobinUp</span>! By
            accessing or using our app, you agree to comply with and be bound by
            these Terms of Service.
          </p>
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600">
              By using our app, you acknowledge that you have read, understood,
              and agree to these terms. If you do not agree, you may not use the
              app.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              2. Changes to Terms
            </h2>
            <p className="text-gray-600">
              We reserve the right to update or modify these terms at any time
              without prior notice. Changes will be effective immediately upon
              posting. Your continued use of the app signifies your acceptance
              of the updated terms.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              3. User Responsibilities
            </h2>
            <p className="text-gray-600">By using the app, you agree to:</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>
                Provide accurate and complete information during registration.
              </li>
              <li>Use the app only for lawful purposes.</li>
              <li>
                Not engage in any unauthorized access or misuse of our services.
              </li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              4. Account Termination
            </h2>
            <p className="text-gray-600">
              We reserve the right to suspend or terminate your account if you
              violate these terms or engage in any harmful activity. Any
              decision to terminate your access is at our sole discretion.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              5. Intellectual Property
            </h2>
            <p className="text-gray-600">
              All content, trademarks, and logos on the app are the property of
              <span className="font-semibold"> RobinUp</span> or its licensors.
              You may not use, copy, or distribute this content without
              permission.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-600">
              We are not liable for any direct, indirect, or consequential
              damages resulting from your use of the app. This includes but is
              not limited to loss of data, revenue, or business opportunities.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              7. Governing Law
            </h2>
            <p className="text-gray-600">
              These terms are governed by the laws of the United States. Any
              disputes arising from the use of our app will be resolved in the
              courts of the applicable jurisdiction.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              8. Third-Party Services
            </h2>
            <p className="text-gray-600">
              Our app may include integrations or links to third-party services.
              We are not responsible for the content or policies of these
              third-party providers. Your use of their services is subject to
              their terms.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              9. Contact Information
            </h2>
            <p className="text-gray-600">
              For questions or concerns regarding these terms, please contact us
              at:
            </p>
            <p className="text-gray-600 mt-2">
              Email:{" "}
              <a
                href="mailto:aksi9665@gmail.com"
                className="text-blue-500 underline"
              >
                support@robinup.com
              </a>
            </p>
            <p className="text-gray-600 mt-1">Phone: +91 9805880996</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsOfServicePage;
