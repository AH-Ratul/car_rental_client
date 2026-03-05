import Image from "next/image";
import airport from "../../../../public/images/airport.svg";
import car from "../../../../public/images/car.svg";
import card from "../../../../public/images/card.svg";
import commission from "../../../../public/images/commission.svg";
import payment from "../../../../public/images/payment.svg";
import cancellation from "../../../../public/images/freeCancellation.svg";

export default function BenefitSection() {
  return (
    <div className="mt-125 md:mt-80 flex justify-center items-center">
      <div className="flex justify-between lg:justify-center items-center lg:gap-16 xl:gap-24 w-full px-10 sm:px-20 xl:px-0">
        <div className="flex flex-col justify-center items-center">
          <Image src={car} alt="car" className="w-16" />
          <p className="mt-5 text-bluewood text-center text-wrap">
            Comprehensive <br /> Insurance Cover
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={card} alt="card" className="w-16" />
          <p className="mt-5 text-bluewood text-center">
            We Accept Debit <br /> & Credit Card
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={airport} alt="airport" className="w-16" />
          <p className="mt-5 text-bluewood text-center">
            Inside Airport <br /> Terminal
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={commission} alt="commission" className="w-16" />
          <p className="mt-5 text-bluewood text-center">
            Zero <br /> Commission
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={payment} alt="payment" className="w-16" />
          <p className="mt-5 text-bluewood text-center">
            No Access <br /> Pre-Auth
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={cancellation} alt="cancellation" className="w-16" />
          <p className="mt-5 text-bluewood text-center">
            Simple & Fast <br /> Checkout
          </p>
        </div>
      </div>
    </div>
  );
}
