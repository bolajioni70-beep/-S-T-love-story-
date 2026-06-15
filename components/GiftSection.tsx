return (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-wine to-wine-dark" />
    <div className="relative z-10 max-w-md w-full text-center fade-in-section">
      <p className="font-script text-3xl md:text-5xl gold-text mb-2">A Gift of Love</p>
      <div className="w-24 h-px bg-gold mx-auto mb-4" />
      <p className="font-body text-sm text-ivory/70 leading-relaxed mb-10">{gift.note}</p>

      {/* Wishlist items */}
      <div className="space-y-3 mb-8">
        {[
          { item: "Home Essentials Fund", amount: "Any amount" },
          { item: "Landed Property Contribution", amount: "Any amount" },
          { item: "Honeymoon Experience", amount: "Any amount" },
        ].map(({ item, amount }) => (
          <div
            key={item}
            className="flex items-center justify-between rounded-2xl px-5 py-4"
            style={{ background: "rgba(255,248,240,0.06)", border: "1px solid rgba(212,175,55,0.25)" }}
          >
            <div className="text-left">
              <p className="text-ivory font-display font-semibold text-sm">{item}</p>
              <p className="text-ivory/50 text-xs mt-0.5">{amount}</p>
            </div>
            <button
              onClick={handleCopy}
              className="ml-4 px-4 py-2 rounded-full text-wine font-display font-bold text-xs uppercase tracking-wider flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #d4af37, #f0d98c)" }}
            >
              {copied ? "Copied!" : "Send Gift"}
            </button>
          </div>
        ))}
      </div>

      {/* Bank details */}
      <div
        className="rounded-2xl p-5 text-left space-y-3"
        style={{ background: "rgba(212,175,55,0.07)", border: "1px solid rgba(212,175,55,0.3)" }}
      >
        <div>
          <p className="text-ivory/50 text-xs uppercase tracking-widest mb-0.5">Bank</p>
          <p className="text-ivory font-semibold">{gift.bank}</p>
        </div>
        <div>
          <p className="text-ivory/50 text-xs uppercase tracking-widest mb-0.5">Account Number</p>
          <button onClick={handleCopy} className="text-xl font-display font-bold text-gold tracking-widest">
            {gift.accountNumber}
          </button>
          {copied && <p className="text-xs text-gold/70 mt-1">Copied to clipboard!</p>}
        </div>
        <div>
          <p className="text-ivory/50 text-xs uppercase tracking-widest mb-0.5">Account Name</p>
          <p className="text-ivory font-semibold">{gift.accountName}</p>
        </div>
      </div>
    </div>
  </section>
);
