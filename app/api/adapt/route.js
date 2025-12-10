import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const keystrokesPerMinute = Number(body.keystrokesPerMinute || 0);
    const errorsCount = Number(body.errorsCount || 0);
    const mouseSpeed = Number(body.mouseSpeed || 0);

    let stressLevel = "LOW";
    let uiProfileKey = "FOCUS";

    if (errorsCount > 10 || mouseSpeed > 2000) {
      stressLevel = "HIGH";
      uiProfileKey = "ASSISTED";
    } else if (errorsCount > 3 || keystrokesPerMinute < 60) {
      stressLevel = "MEDIUM";
      uiProfileKey = "CALM";
    } else {
      stressLevel = "LOW";
      uiProfileKey = "FOCUS";
    }

    return NextResponse.json({ stressLevel, uiProfileKey });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Adaptation failed" }, { status: 500 });
  }
}
