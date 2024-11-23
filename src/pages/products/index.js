import Head from "next/head"
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/asset/image/Logo.png"
import Espresso from "../../../public/asset/image/Espresso.png"
import IcedClassicChocalate from "../../../public/asset/image/IcedClassicChocolate.png"
import PourOver from "../../../public/asset/image/PourOver.png"
import SignatureChocolate from "../../../public/asset/image/SignatureChocolate.png" 
function products({items}) {
    return (
        <>
            <Head>
                <title>
                    Product Management
                </title>
            </Head>
            <div className="background justify-items-center">
                
                <h1 class="font-bold text-xl pt-4 pb-6">Product for sale</h1>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {items.map((item) => (
                        <Link key={item.id} href={`/products/${item.id}`} className="" >{/*mix-blend-multiply*/}
                            <div className="justify-items-center"> 
                                    <Image src={item.image} alt="" width={250} height={250} className="w-[180px] h-[220px] hover:scale-105"/>
                                    <p class="text-center pt-5">{item.title}</p>
                                    <p class="text-center pb-3">{item.price}$ / {item.price*32}฿ </p>
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-[4px] rounded">Add to Cart</button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const resp = await fetch("https://fakestoreapi.com/products");
    const items = await resp.json();
    return {
        props: { items },
    };
}
export default products