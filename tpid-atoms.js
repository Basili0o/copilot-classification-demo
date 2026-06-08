// SAMPLE DATA — synthetic, NOT real customer accounts (fictional names only).
// Drop-in shape for exec-portfolio.html · 3-bucket model: Maintain / Expansion Ready / At Risk.
// Per-quarter grain (Q1–Q4) so the QoQ "Bucket movement" matrix + trend strip render.
// minSeats lowered to 10,000 so this small demo set renders; production atoms use 50,000.
//
// Q4 spread: Maintain 2 · Expansion Ready 4 (Pipe+Chat, Pipe, Chat, No-signal) · At Risk 6
//            (best-practice, drive-stickiness ×2, re-engage ×3).
// Q3→Q4 movement: 2 improved (Pied Piper, Northwind), 2 slipped (Globex, Ministero), 8 stable.
// In-scope trend: Q1 9 · Q2 11 · Q3 12 · Q4 12  (a few accounts enter scope over time).
window.ATOMS_DATA = {
  generatedAt: "2026-06-04",
  source: "Synthetic demo data — fictional accounts, for public showcase only.",
  thresholds: { depth: 0.45, pen: 0.50, actEngaged: 0.60, actShallow: 0.20, minSeats: 10000, expiringMin: 0 },
  rows: [
    // ── Litware UK PLC ── EMEA · Q4 Maintain (stable) ────────────────────────────────
    { tpid: 200004, name: "Litware UK PLC", region: "EMEA", area: "UK & Ireland", subRegion: "UK", segment: "Enterprise Commercial", quarter: "Q1", eligibleSeats: 160000, paidSeats:  76000, pau:  70000, pru: 33000, mau:  52000, unpaidChat:  9000, pipeM: 0.60, expiringT12: 16000 },
    { tpid: 200004, name: "Litware UK PLC", region: "EMEA", area: "UK & Ireland", subRegion: "UK", segment: "Enterprise Commercial", quarter: "Q2", eligibleSeats: 165000, paidSeats: 118000, pau: 110000, pru: 70000, mau:  95000, unpaidChat:  1500, pipeM: 0.80, expiringT12: 14000 },
    { tpid: 200004, name: "Litware UK PLC", region: "EMEA", area: "UK & Ireland", subRegion: "UK", segment: "Enterprise Commercial", quarter: "Q3", eligibleSeats: 165000, paidSeats: 128000, pau: 120000, pru: 75000, mau: 104000, unpaidChat:  1300, pipeM: 1.00, expiringT12: 12000 },
    { tpid: 200004, name: "Litware UK PLC", region: "EMEA", area: "UK & Ireland", subRegion: "UK", segment: "Enterprise Commercial", quarter: "Q4", eligibleSeats: 165000, paidSeats: 132000, pau: 124000, pru: 80000, mau: 110000, unpaidChat:  1100, pipeM: 1.20, expiringT12:  9700 },

    // ── Fabrikam KK ── APAC · Q4 Maintain (stable) ───────────────────────────────────
    { tpid: 300001, name: "Fabrikam KK", region: "APAC", area: "Japan", subRegion: "Japan", segment: "Enterprise Commercial", quarter: "Q1", eligibleSeats: 105000, paidSeats: 46000, pau: 42000, pru: 21000, mau: 30000, unpaidChat: 7000, pipeM: 0.15, expiringT12: 13000 },
    { tpid: 300001, name: "Fabrikam KK", region: "APAC", area: "Japan", subRegion: "Japan", segment: "Enterprise Commercial", quarter: "Q2", eligibleSeats: 108000, paidSeats: 55000, pau: 50000, pru: 26000, mau: 40000, unpaidChat: 6000, pipeM: 0.20, expiringT12: 11000 },
    { tpid: 300001, name: "Fabrikam KK", region: "APAC", area: "Japan", subRegion: "Japan", segment: "Enterprise Commercial", quarter: "Q3", eligibleSeats: 110000, paidSeats: 65000, pau: 60000, pru: 38000, mau: 52000, unpaidChat: 5200, pipeM: 0.30, expiringT12:  9000 },
    { tpid: 300001, name: "Fabrikam KK", region: "APAC", area: "Japan", subRegion: "Japan", segment: "Enterprise Commercial", quarter: "Q4", eligibleSeats: 110000, paidSeats: 73000, pau: 68000, pru: 44000, mau: 60000, unpaidChat: 4800, pipeM: 0.27, expiringT12:  7300 },

    // ── Pied Piper Inc ── Americas · Q4 Expansion Ready / Pipe + Chat · IMPROVED (Q3 At Risk → Q4 Expansion); Q1 out of scope ──
    { tpid: 100004, name: "Pied Piper Inc", region: "Americas", area: "US PRO", subRegion: "US PRO", segment: "Enterprise Commercial", quarter: "Q1", eligibleSeats: 115000, paidSeats: 33000, pau: 30000, pru:  8000, mau: 18000, unpaidChat: 2600, pipeM: 0.20, expiringT12:     0 },
    { tpid: 100004, name: "Pied Piper Inc", region: "Americas", area: "US PRO", subRegion: "US PRO", segment: "Enterprise Commercial", quarter: "Q2", eligibleSeats: 118000, paidSeats: 44000, pau: 40000, pru: 12000, mau: 26000, unpaidChat: 2900, pipeM: 0.30, expiringT12:  2400 },
    { tpid: 100004, name: "Pied Piper Inc", region: "Americas", area: "US PRO", subRegion: "US PRO", segment: "Enterprise Commercial", quarter: "Q3", eligibleSeats: 120000, paidSeats: 54000, pau: 50000, pru: 18000, mau: 36000, unpaidChat: 3000, pipeM: 0.35, expiringT12:  1900 },
    { tpid: 100004, name: "Pied Piper Inc", region: "Americas", area: "US PRO", subRegion: "US PRO", segment: "Enterprise Commercial", quarter: "Q4", eligibleSeats: 120000, paidSeats: 58000, pau: 54000, pru: 28000, mau: 40000, unpaidChat: 3200, pipeM: 0.42, expiringT12:  1800 },

    // ── Tailspin AU ── APAC · Q4 Expansion Ready / Pipe only (stable) ─────────────────
    { tpid: 300003, name: "Tailspin AU", region: "APAC", area: "ANZ", subRegion: "ANZ", segment: "Enterprise Public Sector", quarter: "Q1", eligibleSeats: 54000, paidSeats: 20000, pau: 18000, pru:  9000, mau: 12000, unpaidChat: 0, pipeM: 0.05, expiringT12: 8000 },
    { tpid: 300003, name: "Tailspin AU", region: "APAC", area: "ANZ", subRegion: "ANZ", segment: "Enterprise Public Sector", quarter: "Q2", eligibleSeats: 55000, paidSeats: 22000, pau: 20000, pru: 10000, mau: 14000, unpaidChat: 0, pipeM: 0.08, expiringT12: 7000 },
    { tpid: 300003, name: "Tailspin AU", region: "APAC", area: "ANZ", subRegion: "ANZ", segment: "Enterprise Public Sector", quarter: "Q3", eligibleSeats: 56000, paidSeats: 24000, pau: 22000, pru: 11500, mau: 16000, unpaidChat: 0, pipeM: 0.10, expiringT12: 6000 },
    { tpid: 300003, name: "Tailspin AU", region: "APAC", area: "ANZ", subRegion: "ANZ", segment: "Enterprise Public Sector", quarter: "Q4", eligibleSeats: 56000, paidSeats: 26000, pau: 24000, pru: 13000, mau: 18000, unpaidChat: 0, pipeM: 0.11, expiringT12: 4900 },

    // ── Northwind GmbH ── EMEA · Q4 Expansion Ready / Chat only · IMPROVED (Q3 At Risk → Q4 Expansion); Q1 out of scope ──
    { tpid: 200001, name: "Northwind GmbH", region: "EMEA", area: "Germany & Austria", subRegion: "Germany", segment: "Enterprise Commercial", quarter: "Q1", eligibleSeats: 116000, paidSeats: 37000, pau: 34000, pru:  9000, mau: 19000, unpaidChat: 12000, pipeM: 0.00, expiringT12:     0 },
    { tpid: 200001, name: "Northwind GmbH", region: "EMEA", area: "Germany & Austria", subRegion: "Germany", segment: "Enterprise Commercial", quarter: "Q2", eligibleSeats: 118000, paidSeats: 44000, pau: 40000, pru: 12000, mau: 25000, unpaidChat: 13000, pipeM: 0.00, expiringT12: 24000 },
    { tpid: 200001, name: "Northwind GmbH", region: "EMEA", area: "Germany & Austria", subRegion: "Germany", segment: "Enterprise Commercial", quarter: "Q3", eligibleSeats: 120000, paidSeats: 50000, pau: 46000, pru: 16000, mau: 30000, unpaidChat: 14000, pipeM: 0.00, expiringT12: 25000 },
    { tpid: 200001, name: "Northwind GmbH", region: "EMEA", area: "Germany & Austria", subRegion: "Germany", segment: "Enterprise Commercial", quarter: "Q4", eligibleSeats: 120000, paidSeats: 54000, pau: 50000, pru: 24000, mau: 34000, unpaidChat: 14500, pipeM: 0.00, expiringT12: 26500 },

    // ── ACME Corporation ── Americas · Q4 Expansion Ready / No signal yet (stable) ────
    { tpid: 100001, name: "ACME Corporation", region: "Americas", area: "US FSI", subRegion: "US FSI", segment: "Enterprise Commercial", quarter: "Q1", eligibleSeats: 140000, paidSeats: 50000, pau: 46000, pru: 22000, mau: 35000, unpaidChat: 0, pipeM: 0.00, expiringT12: 12000 },
    { tpid: 100001, name: "ACME Corporation", region: "Americas", area: "US FSI", subRegion: "US FSI", segment: "Enterprise Commercial", quarter: "Q2", eligibleSeats: 143000, paidSeats: 56000, pau: 52000, pru: 26000, mau: 41000, unpaidChat: 0, pipeM: 0.00, expiringT12: 10000 },
    { tpid: 100001, name: "ACME Corporation", region: "Americas", area: "US FSI", subRegion: "US FSI", segment: "Enterprise Commercial", quarter: "Q3", eligibleSeats: 145000, paidSeats: 62000, pau: 58000, pru: 29000, mau: 46000, unpaidChat: 0, pipeM: 0.00, expiringT12:  8000 },
    { tpid: 100001, name: "ACME Corporation", region: "Americas", area: "US FSI", subRegion: "US FSI", segment: "Enterprise Commercial", quarter: "Q4", eligibleSeats: 145000, paidSeats: 66000, pau: 62000, pru: 32000, mau: 50000, unpaidChat: 0, pipeM: 0.00, expiringT12:  6200 },

    // ── Contoso India Pvt Ltd ── APAC · Q4 At Risk / Re-engage (stable) ───────────────
    { tpid: 300002, name: "Contoso India Pvt Ltd", region: "APAC", area: "India", subRegion: "India", segment: "Enterprise Commercial", quarter: "Q1", eligibleSeats: 88000, paidSeats: 5800, pau: 5200, pru: 1500, mau: 2700, unpaidChat: 14000, pipeM: 0.00, expiringT12: 3500 },
    { tpid: 300002, name: "Contoso India Pvt Ltd", region: "APAC", area: "India", subRegion: "India", segment: "Enterprise Commercial", quarter: "Q2", eligibleSeats: 90000, paidSeats: 6600, pau: 6000, pru: 1900, mau: 3300, unpaidChat: 15000, pipeM: 0.00, expiringT12: 3300 },
    { tpid: 300002, name: "Contoso India Pvt Ltd", region: "APAC", area: "India", subRegion: "India", segment: "Enterprise Commercial", quarter: "Q3", eligibleSeats: 92000, paidSeats: 7400, pau: 6800, pru: 2200, mau: 3900, unpaidChat: 16000, pipeM: 0.00, expiringT12: 3200 },
    { tpid: 300002, name: "Contoso India Pvt Ltd", region: "APAC", area: "India", subRegion: "India", segment: "Enterprise Commercial", quarter: "Q4", eligibleSeats: 92000, paidSeats: 7700, pau: 7100, pru: 2400, mau: 4200, unpaidChat: 16800, pipeM: 0.00, expiringT12: 3100 },

    // ── Globex Industries ── Americas · Q4 At Risk / Drive stickiness · SLIPPED (Q3 Expansion → Q4 At Risk) ──
    { tpid: 100002, name: "Globex Industries", region: "Americas", area: "US MFM", subRegion: "US MFM", segment: "Enterprise Commercial", quarter: "Q1", eligibleSeats: 82000, paidSeats:  9800, pau:  9000, pru: 4300, mau: 6000, unpaidChat: 8000, pipeM: 0.00, expiringT12: 13000 },
    { tpid: 100002, name: "Globex Industries", region: "Americas", area: "US MFM", subRegion: "US MFM", segment: "Enterprise Commercial", quarter: "Q2", eligibleSeats: 84000, paidSeats: 12000, pau: 11000, pru: 5200, mau: 7300, unpaidChat: 8500, pipeM: 0.00, expiringT12: 12000 },
    { tpid: 100002, name: "Globex Industries", region: "Americas", area: "US MFM", subRegion: "US MFM", segment: "Enterprise Commercial", quarter: "Q3", eligibleSeats: 85000, paidSeats: 13000, pau: 12000, pru: 5600, mau: 8000, unpaidChat: 9000, pipeM: 0.00, expiringT12: 11000 },
    { tpid: 100002, name: "Globex Industries", region: "Americas", area: "US MFM", subRegion: "US MFM", segment: "Enterprise Commercial", quarter: "Q4", eligibleSeats: 85000, paidSeats: 11500, pau: 10500, pru: 3100, mau: 7400, unpaidChat: 9800, pipeM: 0.00, expiringT12: 10000 },

    // ── Adatum SA ── EMEA · Q4 At Risk / Best-practice expansion (stable) ─────────────
    { tpid: 200002, name: "Adatum SA", region: "EMEA", area: "France", subRegion: "France", segment: "Enterprise Commercial", quarter: "Q1", eligibleSeats: 70000, paidSeats: 1400, pau: 1200, pru: 120, mau:  800, unpaidChat: 24000, pipeM: 0.00, expiringT12: 38000 },
    { tpid: 200002, name: "Adatum SA", region: "EMEA", area: "France", subRegion: "France", segment: "Enterprise Commercial", quarter: "Q2", eligibleSeats: 72000, paidSeats: 1700, pau: 1500, pru: 150, mau: 1000, unpaidChat: 26000, pipeM: 0.00, expiringT12: 40000 },
    { tpid: 200002, name: "Adatum SA", region: "EMEA", area: "France", subRegion: "France", segment: "Enterprise Commercial", quarter: "Q3", eligibleSeats: 74000, paidSeats: 2000, pau: 1800, pru: 180, mau: 1200, unpaidChat: 28000, pipeM: 0.00, expiringT12: 41000 },
    { tpid: 200002, name: "Adatum SA", region: "EMEA", area: "France", subRegion: "France", segment: "Enterprise Commercial", quarter: "Q4", eligibleSeats: 74000, paidSeats: 2100, pau: 1900, pru: 200, mau: 1300, unpaidChat: 28100, pipeM: 0.00, expiringT12: 41200 },

    // ── Initech Federal ── Americas · Q4 At Risk / Re-engage · zero-usage, urgent (stable) ──
    { tpid: 100003, name: "Initech Federal", region: "Americas", area: "US NSG", subRegion: "US NSG", segment: "Enterprise Public Sector", quarter: "Q1", eligibleSeats: 215000, paidSeats: 0, pau: 0, pru: 0, mau: 0, unpaidChat: 0, pipeM: 0.00, expiringT12: 212000 },
    { tpid: 100003, name: "Initech Federal", region: "Americas", area: "US NSG", subRegion: "US NSG", segment: "Enterprise Public Sector", quarter: "Q2", eligibleSeats: 218000, paidSeats: 0, pau: 0, pru: 0, mau: 0, unpaidChat: 0, pipeM: 0.00, expiringT12: 210000 },
    { tpid: 100003, name: "Initech Federal", region: "Americas", area: "US NSG", subRegion: "US NSG", segment: "Enterprise Public Sector", quarter: "Q3", eligibleSeats: 220000, paidSeats: 0, pau: 0, pru: 0, mau: 0, unpaidChat: 0, pipeM: 0.00, expiringT12: 205000 },
    { tpid: 100003, name: "Initech Federal", region: "Americas", area: "US NSG", subRegion: "US NSG", segment: "Enterprise Public Sector", quarter: "Q4", eligibleSeats: 220000, paidSeats: 0, pau: 0, pru: 0, mau: 0, unpaidChat: 0, pipeM: 0.00, expiringT12: 198000 },

    // ── Ministero di Esempio ── EMEA · Q4 At Risk / Re-engage · SLIPPED (Q3 Expansion → Q4 At Risk) ──
    { tpid: 200003, name: "Ministero di Esempio", region: "EMEA", area: "Italy", subRegion: "Italy", segment: "Enterprise Public Sector", quarter: "Q1", eligibleSeats: 94000, paidSeats: 13000, pau: 12000, pru: 5800, mau:  8000, unpaidChat: 5500, pipeM: 0.01, expiringT12: 14000 },
    { tpid: 200003, name: "Ministero di Esempio", region: "EMEA", area: "Italy", subRegion: "Italy", segment: "Enterprise Public Sector", quarter: "Q2", eligibleSeats: 96000, paidSeats: 15000, pau: 14000, pru: 6800, mau:  9500, unpaidChat: 6000, pipeM: 0.02, expiringT12: 13000 },
    { tpid: 200003, name: "Ministero di Esempio", region: "EMEA", area: "Italy", subRegion: "Italy", segment: "Enterprise Public Sector", quarter: "Q3", eligibleSeats: 98000, paidSeats: 17000, pau: 16000, pru: 7800, mau: 11000, unpaidChat: 6700, pipeM: 0.02, expiringT12: 12300 },
    { tpid: 200003, name: "Ministero di Esempio", region: "EMEA", area: "Italy", subRegion: "Italy", segment: "Enterprise Public Sector", quarter: "Q4", eligibleSeats: 98000, paidSeats: 16400, pau: 15400, pru: 4800, mau:  8900, unpaidChat: 6700, pipeM: 0.02, expiringT12: 11000 },

    // ── Wingtip Toys APAC ── APAC · Q4 At Risk / Drive stickiness (stable); Q1–Q2 out of scope ──
    { tpid: 300004, name: "Wingtip Toys APAC", region: "APAC", area: "Singapore", subRegion: "Singapore", segment: "Enterprise Commercial", quarter: "Q1", eligibleSeats: 39000, paidSeats: 1200, pau: 1000, pru: 320, mau:  680, unpaidChat: 8000, pipeM: 0.00, expiringT12:     0 },
    { tpid: 300004, name: "Wingtip Toys APAC", region: "APAC", area: "Singapore", subRegion: "Singapore", segment: "Enterprise Commercial", quarter: "Q2", eligibleSeats: 40000, paidSeats: 1400, pau: 1200, pru: 380, mau:  800, unpaidChat: 8500, pipeM: 0.00, expiringT12:     0 },
    { tpid: 300004, name: "Wingtip Toys APAC", region: "APAC", area: "Singapore", subRegion: "Singapore", segment: "Enterprise Commercial", quarter: "Q3", eligibleSeats: 41000, paidSeats: 1600, pau: 1400, pru: 450, mau:  950, unpaidChat: 9000, pipeM: 0.00, expiringT12: 14000 },
    { tpid: 300004, name: "Wingtip Toys APAC", region: "APAC", area: "Singapore", subRegion: "Singapore", segment: "Enterprise Commercial", quarter: "Q4", eligibleSeats: 41000, paidSeats: 1700, pau: 1500, pru: 480, mau: 1000, unpaidChat: 9100, pipeM: 0.00, expiringT12: 14600 }
  ]
};
