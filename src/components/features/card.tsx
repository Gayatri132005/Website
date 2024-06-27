import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { useFeatureStore } from "./Store";

type FeatureCardProps = {
  gradient: string;
  children: React.ReactNode;
} & CardProp;

type CardProp = {
  id: string;
};

const FeatureCard = ({ gradient, children, id }: FeatureCardProps) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  return (
    <div
      className={classNames(
        `absolute inset-0 w-full h-full rounded-2xl  bg-gradient-to-br opacity-0 transition-opacity`,
        gradient,
        inViewFeature === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export const Step1 = ({ id }: CardProp) => {
  return (
    <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
      <span />
    </FeatureCard>
  );
};
export const Step2 = ({ id }: CardProp) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <span />
    </FeatureCard>
  );
};
export const Step3 = ({ id }: CardProp) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
      <span />
    </FeatureCard>
  );
};
export const Step4 = ({ id }: CardProp) => {
  return (
    <FeatureCard id={id} gradient="from-[#f7fff5] to-[#adffd8]">
      <span />
    </FeatureCard>
  );
};
