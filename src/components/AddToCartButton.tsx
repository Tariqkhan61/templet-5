import Image from "next/image";
import cart from "@/images/icn favorite.png";

interface AddToCartButtonProps {
  itemId: string;
  itemName: string;
  itemPrice: number;
  itemUrl: string;
  itemDescription: string;
  itemImage: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  itemId,
  itemName,
  itemPrice,
  itemUrl,
  itemDescription,
  itemImage,
}) => {
  return (
    <button
      className="px-6 py-2 bg-[#23A6F0] text-white rounded-md hover:bg-blue-600 snipcart-add-item"
      data-item-id={itemId}
      data-item-price={itemPrice}
      data-item-url={itemUrl}
      data-item-description={itemDescription}
      data-item-image={itemImage}
      data-item-name={itemName}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
