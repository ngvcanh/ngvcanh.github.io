// components/Item.tsx
import Image from 'next/image'
import { IconType } from 'react-icons'

interface ItemProps {
  title: string;
  description: string;
  imageSrc?: string;
  icon?: IconType;
}

const Item: React.FC<ItemProps> = ({ title, description, imageSrc, icon: Icon }) => (
  <div className="bg-navy-800 rounded-lg overflow-hidden">
    {imageSrc ? (
      <Image src={imageSrc} alt={title} width={400} height={300} objectFit="cover" />
    ) : Icon && (
      <div className="p-6">
        <Icon className="w-12 h-12 text-blue-500 mb-4" />
      </div>
    )}
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
      {imageSrc && (
        <button className="mt-4 text-blue-400 hover:underline text-sm">Read more</button>
      )}
    </div>
  </div>
)

export default Item;
