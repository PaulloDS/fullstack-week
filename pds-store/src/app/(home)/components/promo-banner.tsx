import { ImageProps } from "next/image";
import Image from "next/image"

const PromoBanner = ({alt, ... props}: ImageProps) => {
    return ( <Image className="w-full h-auto px-5 mt-8" width={0} height={0} alt={alt} sizes="100vw" {... props}/> );
}
 
export default PromoBanner;