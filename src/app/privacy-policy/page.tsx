const PrivacyPolicyPage = () => {
  return (
    <div>
      <main className="bg-gray-100 min-h-screen py-10 px-5">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-4">
            Welcome to <span className="font-semibold">RobinUp</span>!
            Your privacy is important to us. This policy outlines how we
            collect, use, and protect your information.
          </p>
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              1. Information We Collect
            </h2>
            <p className="text-gray-600">
              When you use our app, we may collect the following information:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Instagram account insights and analytics.</li>
              <li>Basic account information (e.g., profile name and email).</li>
              <li>Access tokens for API integration.</li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600">The data we collect is used to:</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>
                Provide insights and analytics based on Instagram account data.
              </li>
              <li>Improve our app features and performance.</li>
              <li>Ensure the security of your account and data.</li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              3. Sharing Your Information
            </h2>
            <p className="text-gray-600">
              We do not share your information with third parties, except:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>To comply with legal requirements.</li>
              <li>To protect our rights and the security of our users.</li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              4. Your Rights
            </h2>
            <p className="text-gray-600">
              You have the right to access, update, or delete your personal
              data. Contact us at{" "}
              <a
                href="mailto:aksi9665@gmail.com"
                className="text-blue-500 underline"
              >
                support@robinup.com
              </a>{" "}
              for any inquiries.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              5. Data Security
            </h2>
            <p className="text-gray-600">
              We take reasonable measures to protect your data from unauthorized
              access or misuse.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              6. Changes to This Policy
            </h2>
            <p className="text-gray-600">
              We may update this privacy policy from time to time. Changes will
              be posted on this page.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
