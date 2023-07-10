import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const { default: connect } = require("@/utils/db");

export const POST = async (request) => {
    const { name, email, password } = await request.json();

    await connect();

    const hashedpassword = await bcrypt.hash(password, 5)

    const newUser = new User({
        name,
        email,
        password: hashedpassword
    });
    try {
        await newUser.save();
        return new NextResponse("User has been created.", { status: 201 });

    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}