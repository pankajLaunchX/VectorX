import { HoverEffect } from "./HoverEffect";

export default function CardHoverEffectDemo() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
export const projects = [
  {
    title: "Secure Vector Database ",
    description:
      "VectorX encrypts both the Vector and the respective metadata using a cutting-edge algorithm. So, go ahead and build your RAG application with your data fully-secured at rest.",
    link: "https://stripe.com",
  },
  {
    title: "Zero Network Footprint",
    description:
      "VectorX uses a client-side key for encryption and decryption. So, the data in transit remains encrypted when it is sent for indexing or while being retrieved by the client applications.",
    link: "https://netflix.com",
  },
  {
    title: "Fast Vector Searches",
    description:
      "VectorX Approximate Near Neighbour (ANN) search performance is at par with industry leading Vector databases. Not only that, the searches are faster for very dense vectors.",
    link: "https://google.com",
  },
  // {
  //   title: "Meta",
  //   description:
  //     "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
  //   link: "https://meta.com",
  // },
  // {
  //   title: "Amazon",
  //   description:
  //     "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
  //   link: "https://amazon.com",
  // },
  // {
  //   title: "Microsoft",
  //   description:
  //     "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  //   link: "https://microsoft.com",
  // },
];

