import { getPrisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
    const prisma = getPrisma();
    const users = await prisma.user.findMany();
    return Response.json(users);
}