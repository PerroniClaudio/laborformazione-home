import Image from "next/image";
type Props = {
  classname?: string;
};

function Logo({ classname }: Props) {
  return (
    <Image
      src="/logo.webp"
      alt="Logo"
      width={291}
      height={89}
      className={classname}
    />
  );
}

export default Logo;
