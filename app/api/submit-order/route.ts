import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, whatsapp, email } = body

        // In a real implementation, you would send this data to Google Sheets
        // using Google Sheets API or a webhook service like Zapier

        // Example webhook URL format:
        const webhookUrl = 'https://script.google.com/macros/s/AKfycbwk-L9nGNTY9eoc8tRpPo_ljSpUmdNR1G271KmcrHwngaLFkWyh9lIYgdxW2ivp-uUn/exec'

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                whatsapp,
                email,
                timestamp: new Date().toISOString(),
                product: 'RitzGlam Lip Serum'
            })
        })

        // For demo purposes, we'll just log the data
        console.log("Order received:", { name, whatsapp, email, timestamp: new Date().toISOString() })

        return NextResponse.json({
            success: true,
            message: "Order submitted successfully",
        })
    } catch (error) {
        console.error("Error submitting order:", error)
        return NextResponse.json({ success: false, message: "Failed to submit order" }, { status: 500 })
    }
}
