import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Sorag boş bolmaly däl!" }, { status: 400 });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    // 🆕 SENIOR PROMPT: Gemini-a özüniň kimdigini we nähili gürlemelidigini öwredýäris
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        // System instruction arkaly AI diňe türkmençe we diňe Sumbar dükany barada gürlär
        systemInstruction: `
          Seniň adyň 'Sumbar AI Assistant'. Sen Aşgabatdaky meşhur 'Sumbar Computer' kompýuter we elektronika dükanynyň resmi emeli intellekt konsultanty.
          Berk Düzgünler:
          1. DIŇE WE DIŇE TÜRKMEN DILINDE JOGAP BERMELI. Başga dilde sorasalar hem hökman arassa türkmençe jogap ber.
          2. Özüňi hiç wagt Google tarapyndan öndürilen dil modeli diýip tanyşdyrma. Sen Sumbar Computer-iň kömekçisidiriň.
          3. Müşderilere kompýuterler, noutbuklar, monitorlar, printerler we esbaplar barada gysga, düşnükli we hoşniýetli kömek ber.
          4. Dükanymyzyň salgysy: Aşgabat şäheri, A.Nyýazow (Hudaýberdiýew) köçesi, 99-njy jaý (AŞTU-nyň garşysy).
        `
      }
    });

    return NextResponse.json({ reply: response.text });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Nätanyş ýalňyşlyk";
    console.error("Gemini AI Ýalňyşlygy:", errorMessage);
    return NextResponse.json({ error: "AI jogap bermedi, täzeden ýazyň." }, { status: 500 });
  }
}
