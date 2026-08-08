import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowLeft, Mail, ExternalLink, Globe, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | The Nocturne",
  description:
    "Official Privacy Policy for The Nocturne. Details on data collection, usage, cookies, and privacy rights.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "August 08, 2026";

  return (
    <div className="min-h-screen py-28 sm:py-36 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Top Back Link */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN_TO_HOME</span>
        </Link>
      </div>

      {/* Header Banner */}
      <div className="border-b border-white/[0.08] pb-8 mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
          <Shield className="w-4 h-4" />
          <span>LEGAL_&_COMPLIANCE_PROTOCOL</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs font-mono text-zinc-400 mt-2">
          LAST UPDATED: {lastUpdated} // THE NOCTURNE
        </p>
      </div>

      {/* Main Content Body */}
      <div className="text-zinc-300 text-sm leading-relaxed space-y-10">
        {/* Intro */}
        <section className="bg-[#0D1117]/80 border border-white/[0.08] p-6 rounded-2xl">
          <p>
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
            information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>
          <p className="mt-3 text-zinc-400">
            We use Your Personal Data to provide and improve the Service. We collect, use, and disclose Your information as
            described in this Privacy Policy and, where required by applicable law, only where We have a valid legal basis to
            do so, including Your consent (where consent is required).
          </p>
        </section>

        {/* Interpretation and Definitions */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/[0.06] pb-2 mb-4 font-mono">
            Interpretation and Definitions
          </h2>
          
          <h3 className="text-base font-semibold text-emerald-400 font-mono mb-2">
            Interpretation
          </h3>
          <p className="mb-4 text-zinc-400">
            The words whose initial letters are capitalized have meanings defined under the following conditions. The following
            definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>

          <h3 className="text-base font-semibold text-emerald-400 font-mono mb-3">
            Definitions
          </h3>
          <p className="text-xs text-zinc-400 mb-4">For the purposes of this Privacy Policy:</p>

          <div className="grid grid-cols-1 gap-3 text-xs font-mono">
            {[
              { term: "Account", desc: "A unique account created for You to access Our Service or parts of Our Service." },
              { term: "Affiliate", desc: "An entity that controls, is controlled by, or is under common control with a party, where 'control' means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority." },
              { term: "Application", desc: "Refers to The Nocturne, the software program provided by the Company." },
              { term: "Company", desc: "Refers to The Nocturne (referred to as either 'the Company', 'We', 'Us' or 'Our' in this Privacy Policy)." },
              { term: "Cookies", desc: "Small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website, among its many uses." },
              { term: "Country/State", desc: "Refers to: Maharashtra, India." },
              { term: "Device", desc: "Any device that can access the Service, such as a computer, a cell phone or a digital tablet." },
              { term: "Personal Data", desc: "Any information that relates to an identified or identifiable individual. We use 'Personal Data' and 'Personal Information' interchangeably unless a law uses a specific term." },
              { term: "Service", desc: "Refers to the Application or the Website or both." },
              { term: "Service Provider", desc: "Any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used." },
              { term: "Usage Data", desc: "Data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit)." },
              { term: "User", desc: "Any individual who accesses or uses the Service." },
              { term: "Website", desc: "Refers to The Nocturne, accessible from https://in.pinterest.com/nocturnestudeo" },
              { term: "You", desc: "The individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable." },
            ].map((def, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-white font-semibold text-sm">{def.term}: </span>
                <span className="text-zinc-400 font-sans text-xs">{def.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Collecting and Using Your Personal Information */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/[0.06] pb-2 mb-4 font-mono">
            Collecting and Using Your Personal Information
          </h2>

          <h3 className="text-base font-semibold text-emerald-400 font-mono mb-2">
            Types of Data Collected
          </h3>

          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <h4 className="text-sm font-semibold text-white font-mono mb-1">Personal Data</h4>
              <p className="text-xs text-zinc-400">
                While using Our Service, We may ask You to provide Us with certain personally identifiable information that can
                be used to contact or identify You. Personally identifiable information may include, but is not limited to:
              </p>
              <ul className="list-disc pl-5 mt-2 text-xs text-emerald-400 font-mono">
                <li>Email address</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <h4 className="text-sm font-semibold text-white font-mono mb-1">Usage Data</h4>
              <p className="text-xs text-zinc-400 mb-2">
                Usage Data is collected automatically when using the Service.
              </p>
              <p className="text-xs text-zinc-400 mb-2">
                Usage Data may include information such as Your Device&apos;s Internet Protocol address (e.g. IP address), browser
                type, browser version, the pages of Our Service that You visit, the time and date of Your visit, the time spent on
                those pages, unique device identifiers and other diagnostic data.
              </p>
              <p className="text-xs text-zinc-400">
                When You access the Service by or through a mobile device, We may collect certain information automatically,
                including, but not limited to, the type of mobile device You use, Your mobile device&apos;s unique ID, the IP address
                of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device
                identifiers and other diagnostic data.
              </p>
            </div>
          </div>

          <h3 className="text-base font-semibold text-emerald-400 font-mono mb-2">
            Tracking Technologies and Cookies
          </h3>
          <p className="text-xs text-zinc-400 mb-4">
            We use tracking technologies (such as cookies) to track the activity and to improve Our Service. The technologies We use may include:
          </p>

          <ul className="list-disc pl-5 text-xs text-zinc-300 space-y-2 mb-4">
            <li>
              <strong>Cookies or Browser Cookies:</strong> A cookie is a small file placed on Your Device. You can instruct Your browser
              to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be
              able to use some parts of Our Service.
            </li>
            <li>
              <strong>Web Beacons:</strong> Certain sections of Our Service may contain small electronic files known as web beacons
              (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users
              who have visited those pages and for other related website statistics.
            </li>
          </ul>

          <div className="grid grid-cols-1 gap-3 text-xs mt-4">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-emerald-400 font-mono font-semibold">Necessary / Essential Cookies</span> (Session Cookies)
              <p className="text-zinc-400 mt-1">
                Administered by Us. Purpose: Essential to provide You with services available through the Website and to enable You
                to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-emerald-400 font-mono font-semibold">Cookies Policy / Notice Acceptance Cookies</span> (Persistent Cookies)
              <p className="text-zinc-400 mt-1">
                Administered by Us. Purpose: Identify whether users have accepted the use of cookies on the Website and record the
                consent choices You have made.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-emerald-400 font-mono font-semibold">Functionality Cookies</span> (Persistent Cookies)
              <p className="text-zinc-400 mt-1">
                Administered by Us. Purpose: Allow Us to remember choices You make when You use the Website, such as remembering
                Your Account login details or language preference.
              </p>
            </div>
          </div>
        </section>

        {/* Use of Your Personal Data */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/[0.06] pb-2 mb-4 font-mono">
            Use of Your Personal Data
          </h2>
          <p className="text-xs text-zinc-400 mb-3">The Company may use Personal Data for the following purposes:</p>
          
          <ul className="list-disc pl-5 text-xs text-zinc-300 space-y-2">
            <li><strong>To provide and maintain Our Service</strong>, including to monitor the usage of Our Service.</li>
            <li><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service.</li>
            <li><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us.</li>
            <li><strong>To contact You:</strong> by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as push notifications regarding updates or security notices.</li>
            <li><strong>To provide You</strong> with news, special offers, and general information about other goods, services and events which We offer.</li>
            <li><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</li>
            <li><strong>For business transfers:</strong> To evaluate or conduct a merger, divestiture, restructuring, or sale of assets.</li>
            <li><strong>For other purposes:</strong> Data analysis, identifying usage trends, and evaluating service effectiveness.</li>
          </ul>

          <div className="mt-5 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <h4 className="text-xs font-mono font-semibold text-emerald-400 mb-2">Sharing of Personal Data</h4>
            <p className="text-xs text-zinc-400">
              We may share Your Personal Data with Service Providers to monitor and analyze the use of Our Service, with Affiliates
              (who will be required to honor this Privacy Policy), for business transfers, or with other users in public areas of the Service with Your consent.
            </p>
          </div>
        </section>

        {/* Text Messages Privacy Notice */}
        <section className="p-6 rounded-2xl bg-[#0D1117] border border-emerald-500/30">
          <h3 className="text-base font-semibold text-emerald-400 font-mono mb-2">
            Text Messages Privacy Notice
          </h3>
          <p className="text-xs text-zinc-300 mb-3">
            You have the option to receive text (SMS) messages from Us. If You opt in, We will send You updates, notifications,
            and other communications. When You opt in, We will collect and store information such as Your phone number, the date
            and method of consent, and message delivery info.
          </p>
          <p className="text-xs text-emerald-300 font-medium mb-3">
            No mobile information will be shared with or sold to third parties or affiliates for marketing or promotional purposes.
          </p>
          <ul className="list-disc pl-5 text-xs text-zinc-400 space-y-1 mb-3">
            <li>Customer care and support</li>
            <li>Account notifications, status, or renewal reminders</li>
            <li>Delivery notifications and updates</li>
            <li>Authentication messages (OTP, passcodes)</li>
            <li>Security alerts</li>
            <li>Marketing and promotional offers</li>
          </ul>
          <p className="text-[11px] font-mono text-zinc-500">
            Reply STOP to opt-out. Reply HELP for support. Message & data rates may apply. Messaging frequency may vary.
          </p>
        </section>

        {/* Retention, Transfer, Deletion */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/[0.06] pb-2 mb-3 font-mono">
              Retention of Your Personal Data
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.
              User account information is retained for the duration of Your Account plus up to 24 months after closure. Support tickets and chat
              transcripts are kept for up to 24 months. Website analytics data and server logs are retained for up to 24 months.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/[0.06] pb-2 mb-3 font-mono">
              Transfer of Your Personal Data
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Your information, including Personal Data, is processed at the Company&apos;s operating offices in Maharashtra, India, and in any other places
              where the parties involved in the processing are located. We ensure international transfers are subject to appropriate safeguards.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/[0.06] pb-2 mb-3 font-mono">
              Delete Your Personal Data
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
              You may update, amend, or delete Your information at any time by signing in to Your Account or contacting Us.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/[0.06] pb-2 mb-3 font-mono">
              Disclosure & Security
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Under certain circumstances, We may disclose Personal Data if required by law or in response to valid public authority requests.
              While We strive to use commercially reasonable means to protect Your Personal Data, remember that no method of transmission over
              the Internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/[0.06] pb-2 mb-3 font-mono">
              Children&apos;s Privacy
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Our Service is not directed to anyone under the age of 16. If We become aware that We have collected Personal Information
              from anyone under 16 without parental consent, We take steps to remove that information immediately.
            </p>
          </div>
        </section>

        {/* Contact Us */}
        <section className="pt-6 border-t border-white/[0.08]">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 font-mono">
            Contact Us
          </h2>
          <p className="text-xs text-zinc-400 mb-4">
            If You have any questions about this Privacy Policy, You can contact Us:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
            <a
              href="mailto:mattmurdoxx@gmail.com"
              className="p-4 rounded-xl bg-black border border-white/[0.1] hover:border-emerald-500/40 transition flex items-center gap-3 text-zinc-200 group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-500 uppercase">By Email</span>
                <span className="text-emerald-400 font-semibold">mattmurdoxx@gmail.com</span>
              </div>
            </a>

            <a
              href="https://in.pinterest.com/nocturnestudeo"
              target="_blank"
              rel="external nofollow noopener noreferrer"
              className="p-4 rounded-xl bg-black border border-white/[0.1] hover:border-emerald-500/40 transition flex items-center gap-3 text-zinc-200 group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition">
                <Globe className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-500 uppercase">Official Website</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span>in.pinterest.com/nocturnestudeo</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
