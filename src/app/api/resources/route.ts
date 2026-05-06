import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "public", "data", "resources.json");

export async function GET() {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    console.error("Error reading resources data:", error);
    return NextResponse.json(
      { error: "Failed to read resources data" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    // Check authorization
    const adminPassword = process.env.ADMIN_PASSWORD;
    const authHeader = request.headers.get("authorization");

    if (!adminPassword) {
      return NextResponse.json(
        { error: "Admin password not configured on server" },
        { status: 500 }
      );
    }

    if (!authHeader || authHeader !== `Bearer ${adminPassword}`) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();

    // Basic validation
    if (!body.reactNative || !body.categories || !Array.isArray(body.categories)) {
      return NextResponse.json(
        { error: "Invalid data structure" },
        { status: 400 }
      );
    }

    // Write to file
    fs.writeFileSync(DATA_FILE, JSON.stringify(body, null, 2), "utf-8");

    return NextResponse.json({ success: true, message: "Resources updated successfully" });
  } catch (error) {
    console.error("Error updating resources data:", error);
    return NextResponse.json(
      { error: "Failed to update resources data" },
      { status: 500 }
    );
  }
}
