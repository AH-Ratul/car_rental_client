import idp from "../../public/images/icons/idp-ic.svg";
import document from "../../public/images/icons/documents-ic.svg";
import bookingName from "../../public/images/icons/booking-name-ic.svg";
import payment from "../../public/images/icons/payment.svg";

export const driverCardInfo = [
  {
    id: 1,
    title: "Int. Driving licences Not required",
    subtitle: "All local licences accepted",
    icon: idp,
  },
  {
    id: 2,
    title: "Documents",
    subtitle: "Passport + Driving licence",
    icon: document,
  },
  {
    id: 3,
    title: "Booking name",
    subtitle: "Can be different from driver",
    icon: bookingName,
  },
  {
    id: 4,
    title: "Payment",
    subtitle:
      "Online: Debit card & Credit card accepted. Balance paid at pickup",
    icon: payment,
  },
];
