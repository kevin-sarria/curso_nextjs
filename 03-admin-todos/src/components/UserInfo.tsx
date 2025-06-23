import Image from "next/image";

interface Props {
    image?: string | null | undefined
    name?: string | null | undefined
    email?: string | null | undefined
}

export const UserInfo = ({ image, email = "email@example.com", name = "Jhon Doe" }: Props) => {
  return (
    <div className="mt-8 text-center">
      {/* Next/Image */}
      <Image
        src={ image ? image : '/images/avatar.jpg' }
        alt="User Image"
        className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
        width={10}
        height={10}
      />
      <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
        {name}
      </h5>
      <span className="hidden text-gray-400 lg:block">{email}</span>
    </div>
  );
};
