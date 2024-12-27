import Image from "next/image";
import WishlistHeartButton from "../wishlistButton"
import { useRouter } from "next/navigation";

const ProductCard = ({item}) =>{

    const router = useRouter()
    return(
        <div key={item._id} className="relative h-fit w-full cursor-pointer " onClick={()=> router.push(`/productdetail/${item._id}`)}>
            <div className="w-auto h-52  md:w-full md:h-80 lg:h-[450px] ">
                <Image
                src={item.image.url}
                alt={item.name}
                width={400}
                height={500}
                className="h-full w-full object-cover"
                />
            </div>
            <WishlistHeartButton productId={item._id}/>
            <div className="w-full">
                <div className="flex items-center justify-between">
                <p className="my-3 truncate text-sm md:txt-base">{item.name}</p>
                </div>
                <p className="text-sm md:txt-base">NRs. {item.price}</p>
            </div>
        </div>
    )
}

export default ProductCard;