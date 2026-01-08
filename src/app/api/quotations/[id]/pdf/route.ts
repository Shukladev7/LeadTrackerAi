import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const isDev = process.env.NODE_ENV !== "production";

    // Narrow test: only load puppeteer-core dynamically and confirm that the
    // import itself does not crash the backend. No @sparticuz/chromium and no
    // browser launch yet.
    const puppeteer = await import("puppeteer-core");

    let puppeteerVersion: string | null = null;
    try {
      if (typeof (puppeteer as any).version === "function") {
        puppeteerVersion = (puppeteer as any).version();
      }
    } catch {
      // ignore
    }

    return NextResponse.json(
      {
        ok: true,
        step: "load-puppeteer-only",
        route: "quotations/[id]/pdf",
        id,
        isDev,
        nodeVersion: process.version,
        env: process.env.NODE_ENV,
        hasPuppeteer: !!puppeteer,
        puppeteerVersion,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error generating quotation PDF via Puppeteer:", error);

    // Surface a concise error message to the client for easier debugging in Firebase
    const message =
      error instanceof Error
        ? `${error.name}: ${error.message}`
        : typeof error === "string"
        ? error
        : "Unknown error";

    return NextResponse.json(
      {
        error: "Failed to generate quotation PDF",
        details: message,
      },
      { status: 500 }
    );
  }
}
