export type subscriptionsPropType = {
    id: number,
    name: string,
    description: string,
    version: string,
    type: string,
    fee: number,
    referenceFee?: number,
    features: string[]
}
export const subscriptions: subscriptionsPropType[] = [
    {
        id: 1,
        name: "Aura Pro Unlimited",
        description: " Complete zero-compromise cryptographic shield",
        version: "V4 ARCH",
        type: "annually",
        fee: 3.99,
        referenceFee: 11.99,
        features: [
            "IO Simultaneous High-Throughput Devices",
            "10 Gbps RAM-Only Ultra Nodes (No Disk Footprint)",
            "WireGuard-X + MultiHop Cloaking Routes",
            "CleanNet Ad, Malware & Tracker Blocker",
            "Dedicated Master Passkey Hardware Enclave"
        ]
    },
    {
        id: 2,
        name: "Aura Sovereign",
        description: "Autonomous 2-year post-quantum privacy suite",
        version: "",
        type: "monthly",
        fee: 2.49,
        referenceFee: 2.49,
        features: [
            "Unlimited Devices Concurrency",
            "Dedicated Static IP Mesh Add-on Included",
            "Post-Quantum PQ-WireGuard Handshake",
        ]
    }
]



export default subscriptions