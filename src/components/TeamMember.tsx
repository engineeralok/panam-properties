

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export default function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <div className="relative group">
      <img 
        src={image} 
        alt={name} 
        className="w-full aspect-square object-cover rounded-xl"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
        <h4 className="font-bold text-lg">{name}</h4>
        <p className="text-gray-300">{role}</p>
      </div>
    </div>
  );
}