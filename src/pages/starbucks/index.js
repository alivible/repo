import Head from "next/head"
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/asset/image/Logo.png"
import Espresso from "../../../public/asset/image/Espresso.png"
import IcedClassicChocalate from "../../../public/asset/image/IcedClassicChocolate.png"
import PourOver from "../../../public/asset/image/PourOver.png"
import SignatureChocolate from "../../../public/asset/image/SignatureChocolate.png" 
function products({items}) {
    const products = [
        { id: 1, name: "Espresso", price: 100, image: Espresso },
        { id: 2, name: "Iced Classic Chocolate", price: 120, image: IcedClassicChocalate },
        { id: 3, name: "Pour Over", price: 110, image: PourOver },
        { id: 4, name: "Signature Chocolate", price: 130, image: SignatureChocolate },
    ];
    return (
        <>
            <Head>
                <title>
                    Starbucks
                </title>
            </Head>
            <div className="background justify-items-center">
                {/* Logo Section */}
                <Image src={Logo} alt="Store" width={150} height={150} className="pt-8 hover:scale-105"/>
                <h1 class="font-bold text-xl pt-4 pb-6">Starbucks Coffee Company</h1>

                {/* Product Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    
                    
                </div>
            </div>
        </>
    );
}

export default products