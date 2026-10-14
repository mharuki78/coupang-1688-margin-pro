export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.status(200).end();
    const body = req.method === 'POST' ? (req.body || {}) : (req.query || {});
    const url1688 = String(body.url1688 || '');
    const offerMatch = url1688.match(/offer\/(\d+)/) || url1688.match(/(\d{9,14})/);
    return res.status(200).json({
          ok: true,
          offerId: offerMatch ? offerMatch[1] : 'custom',
          fxRateKrwPerCny: 195.0,
          analyzedAt: new Date().toISOString()
    });
}
