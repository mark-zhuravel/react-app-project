const PhoneNumber = ({ icon, number, description }) => {
  return (
    <div className="flex space-x-5">
      <img src={icon} alt="phone icon" className="w-4 h-4" />
      <div className="flex flex-col space-y-3">
        <a href={`tel:${number}`} className="font-medium text-[#1F1E25] leading-none">
          {number}
        </a>
        <p className="text-xs max-w-[150px]">{description}</p>
      </div>
    </div>
  );
};

export default PhoneNumber;