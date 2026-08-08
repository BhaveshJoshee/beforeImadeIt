import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, FileText, ArrowLeft, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & Affiliate Disclosure",
  description:
    "Legal compliance, cookie tracking, digital product distribution, and affiliate disclosures for Before I Made It studio.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "August 8, 2026";

  return (
    <div className="min-h-screen py-32 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Top Back Link */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN_TO_STUDIO_OVERVIEW</span>
        </Link>
      </div>

      {/* Header */}
      <div className="border-b border-white/[0.08] pb-8 mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
          <Shield className="w-4 h-4" />
          <span>LEGAL_COMPLIANCE_PROTOCOL</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Privacy Policy & Affiliate Disclosures
        </h1>
        <p className="text-xs font-mono text-zinc-400 mt-2">
          LAST_REVISED: {lastUpdated} // VERSION 2.4 (DIGITAL ASSETS & AFFILIATE COMPLIANT)
        </p>
      </div>

      {/* Main Content Body */}
      <div className="prose prose-invert max-w-none text-zinc-300 text-sm leading-relaxed space-y-10">
        {/* Section 1: Overview */}
        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/[0.06] pb-2 mb-3 font-mono">
            1. Overview & Purpose
          </h2>
          <p>
            Welcome to <strong>Before I Made It</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the Studio&rdquo;).
            This platform operates as an anonymous engineering brand dedicated to creating digital tools,
            open-source automation frameworks, curated technology recommendations, and automated SaaS platforms.
          </p>
          <p className="mt-2">
            We hold a strict principle of data minimization: we do not collect personal names, facial biometrics,
            or intrusive personal identifiers. This Privacy Policy informs you of how we handle information across
            our web applications, public API endpoints, link hubs, and digital assets.
          </p>
        </section>

        {/* Section 2: Affiliate Marketing & Commercial Disclosures */}
        <section id="affiliates" className="p-6 rounded-2xl bg-[#0D1117] border border-emerald-500/20">
          <div className="flex items-center gap-2 text-emerald-400 font-mono font-semibold text-base mb-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>2. Affiliate Marketing & Advertising Disclosures</span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            In compliance with the <strong>Federal Trade Commission (FTC) guidelines</strong> and third-party
            affiliate network standards (including Amazon Services LLC Associates Program, Pinterest Partner guidelines,
            and digital SaaS affiliate agreements):
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-xs text-zinc-300">
            <li>
              Some links on <strong>Before I Made It</strong> (particularly within the Curated Gear and Link Hub sections)
              are affiliate referral links. If you click through and finalize a purchase, we may receive a small commission
              at <em>zero additional cost to you</em>.
            </li>
            <li>
              We only feature hardware, development tools, and software services that are actively integrated into our
              actual engineering stack or verified for technical excellence.
            </li>
            <li>
              We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed
              to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and affiliated sites.
            </li>
          </ul>
        </section>

        {/* Section 3: Information We Collect */}
        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/[0.06] pb-2 mb-3 font-mono">
            3. Information Collected & Processing
          </h2>
          <p>When you browse our websites or interact with our link hubs, we may automatically process non-identifying telemetry:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-emerald-400 font-semibold">Technical Log Data</span>
              <p className="text-zinc-400 mt-1">
                IP addresses (anonymized at edge), browser user-agent, operating system, and referral headers collected for security and DDoS mitigation.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-emerald-400 font-semibold">Click & Conversion Signals</span>
              <p className="text-zinc-400 mt-1">
                Aggregate click events on link items, outbound affiliate routing, and anonymized referral traffic sources (e.g., Pinterest, GitHub).
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Cookies & Tracking Technologies */}
        <section id="cookies">
          <h2 className="text-xl font-bold text-white border-b border-white/[0.06] pb-2 mb-3 font-mono">
            4. Cookie Usage & Local Storage
          </h2>
          <p>
            Our web application uses essential cookies and local storage tokens strictly necessary to maintain
            dark-mode preferences, clipboard interactions, and edge routing performance. We do not sell, rent,
            or trade personal user tracking databases to third-party data brokers.
          </p>
        </section>

        {/* Section 5: Third-Party APIs & Integration Approvals */}
        <section id="apis">
          <h2 className="text-xl font-bold text-white border-b border-white/[0.06] pb-2 mb-3 font-mono">
            5. Third-Party Services & API Compliance
          </h2>
          <p>
            Our infrastructure integrates with reputable cloud providers and developer APIs, including:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-zinc-300">
            <li><strong>Vercel Edge Network:</strong> Hosting, edge caching, serverless routing.</li>
            <li><strong>Cloudflare:</strong> DNS routing, SSL encryption, security firewall.</li>
            <li><strong>GitHub API:</strong> Public repository metrics, release tags, star counts.</li>
            <li><strong>Pinterest & Affiliate APIs:</strong> Visual asset syndication and referral link validation.</li>
          </ul>
        </section>

        {/* Section 6: User Rights & Data Protection (GDPR / CCPA) */}
        <section>
          <h2 className="text-xl font-bold text-white border-b border-white/[0.06] pb-2 mb-3 font-mono">
            6. Rights Under GDPR & CCPA
          </h2>
          <p>
            Depending on your jurisdiction, you have the right to request access to any personal data held about you,
            request deletion, or opt out of non-essential telemetry. Because we enforce zero-identity logging, we do
            not maintain persistent profiles linking back to your personal identity.
          </p>
        </section>

        {/* Section 7: Inquiries & Verification */}
        <section className="pt-4 border-t border-white/[0.08]">
          <h2 className="text-xl font-bold text-white mb-2 font-mono">
            7. Contact & API Verification
          </h2>
          <p className="text-xs text-zinc-400">
            For legal inquiries, developer API compliance verifications, or technical questions regarding this policy,
            contact our automated review desk:
          </p>
          <div className="mt-3 p-3 rounded-lg bg-black border border-white/[0.08] font-mono text-xs text-emerald-400 inline-block">
            legal@beforeimadeit.com
          </div>
        </section>
      </div>
    </div>
  );
}
