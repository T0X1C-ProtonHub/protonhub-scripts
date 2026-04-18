import React from "react"; import { ShieldAlert, Lock, Sparkles, ArrowLeft } from "lucide-react";

export default function WarningPage() { return ( <div className="min-h-screen overflow-hidden bg-[#06070b] text-white"> <div className="pointer-events-none absolute inset-0"> <div className="absolute left-[-10rem] top-[-10rem] h-72 w-72 rounded-full bg-red-500/20 blur-3xl" /> <div className="absolute right-[-8rem] top-[12rem] h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" /> <div className="absolute bottom-[-8rem] left-[20%] h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" /> <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_25%)]" /> </div>

<div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 py-10 sm:px-10">
    <div className="grid w-full gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
      <div className="flex flex-col justify-center">
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur">
          <ShieldAlert className="h-4 w-4 text-red-400" />
          Proton Hub Access Notice
        </div>

        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Access blocked for this page.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          Proton Hub has routed you here to protect the script delivery endpoint and discourage unauthorized sharing.
          Please return to the official loader or authorized links only.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/15 text-red-300">
              <Lock className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-medium text-white">Restricted Access</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Direct browsing is disabled on purpose to keep links organized and reduce abuse.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
              <Sparkles className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-medium text-white">Official Route Only</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Use the approved loader and verified URLs to access current versions.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02] hover:bg-white/90"
          >
            <ArrowLeft className="h-4 w-4" />
            Return Home
          </a>
          <span className="text-sm text-white/45">Proton Hub Security Gateway</span>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 mx-auto h-[24rem] w-[24rem] rounded-full bg-red-500/10 blur-3xl" />
        <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">Status</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Protected</h3>
              </div>
              <div className="rounded-2xl border border-red-400/20 bg-red-500/10 px-3 py-2 text-sm text-red-200">
                Restricted
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/55">Endpoint</span>
                  <span className="font-medium text-white">/warning</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/55">Access</span>
                  <span className="font-medium text-white">Denied</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/55">Action</span>
                  <span className="font-medium text-white">Use official links</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

); }
