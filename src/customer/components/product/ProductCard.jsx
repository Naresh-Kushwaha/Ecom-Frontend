


const ProductCard=({product})=>{

    return(
        <div  className="productCard w-[15rem] m-3 transition-all cursor-pointer">
            <div  className="h-[20rem]">
                <img className="h-full w-full object-cover object-left-top " 
                src={product.imageUrl}></img>
            </div>
            <div className="textPart bg-white p-3 transition-all  transform  ease-in-out hover:duration-[.3]  hover:-translate-y-3">
                <p className="font-bold opacity-60">{product.brand}</p>
                <p>{product.title}</p>
                 
            </div>
            <div className="flex  items-center space-x-3">
                <p className="font-semibold">{product.discountedPrice}</p>
                <p className="line-through opacity-60 text-red-700">{product.price}
                     
                </p>
                <p className="text-green-600">{product.discountPersent} %off</p>

            </div>

        </div>


    )
    
}
export default ProductCard