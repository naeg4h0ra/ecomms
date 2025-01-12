import FeatureCard from "./FeatureCard";
import { TbTruckDelivery, TbDiscount } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";

const data = [
  {
    icon: <TbTruckDelivery className="text-4xl text-accent" />,
    title: "Free Book Delivery",
    desc: "On all orders above $50",
  },
  {
    icon: <RiRefund2Fill className="text-4xl text-accent" />,
    title: "Easy Returns",
    desc: "Hassle-free book returns",
  },
  {
    icon: <TbDiscount className="text-4xl text-accent" />,
    title: "Exclusive Discounts",
    desc: "Special offers for members",
  },
  {
    icon: <MdSupportAgent className="text-4xl text-accent" />,
    title: "24/7 Customer Support",
    desc: "We're here to help you anytime",
  },
];

const Feature = () => {
  return (
    <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-8">
      {data.map((item) => (
        <FeatureCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default Feature;
