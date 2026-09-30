const {Product}=require("../model/database")
const getData=async(req,res)=>{
  const products=await Product.find();
  res.status(201).json(products)
}
const postData=async(req,res)=>{
    await Product.insertMany([ {
      
        name:"BIRYANI",
        price:120,
        img:"https://res.cloudinary.com/omqcutsc/image/upload/v1790777015/profile/wvqnflxpens0uimah6zq.jpg",
        rating:4.5

    },
      {
      
        name:"CHICKEN NOODLES",
        price:100,
        img:"https://res.cloudinary.com/omqcutsc/image/upload/v1790777116/profile/rcvskbdb4g3zqmsbv7kw.jpg"


          ,rating:4.5

    },
      {
      
        name:"BURGER",
        price:50,
        img:"https://res.cloudinary.com/omqcutsc/image/upload/v1790777182/profile/y4afrmkfye57hgb6hoef.jpg"

 ,
         rating:4.5
 
    },
      {
      
        name:"CHICKEN CHILLY",
        price:120,
        img:"https://res.cloudinary.com/omqcutsc/image/upload/v1790777233/profile/jxaynvbqnnjkgqsi7k3a.jpg" ,
         rating:4.5

    },
      {
      
        name:"EGG ROLL",
        price:60,
        img:"https://res.cloudinary.com/omqcutsc/image/upload/v1790777387/profile/lnvyx0w0wppbso5ao5ws.jpg" ,
         rating:4.5

    },
      {
      
        name:"FRY MOMO",
        price:90,
        img:"https://res.cloudinary.com/omqcutsc/image/upload/v1790777512/profile/amivadgmjitkhmf6pv2t.jpg"

 ,
         rating:4.5

    },
      {
      
        name:"CHICKEN MOMO",
        price:120,
        img:"https://res.cloudinary.com/omqcutsc/image/upload/v1790777587/profile/zbsuru1qcwjgf7uzssxd.jpg"

 ,
         rating:4.5

    },
      {
      
        name:"CHICKEN KEBAB",
        price:70,
        img:"https://res.cloudinary.com/omqcutsc/image/upload/v1790777633/profile/su9bp6rnj3cbwyoyst6l.jpg"

 ,
         rating:4.5

    },
      {
      
        name:"KOREAN BOWL",
        price:200,
        img:"https://res.cloudinary.com/omqcutsc/image/upload/v1790777685/profile/vcktjvrgf6q0px7kzslv.jpg"

 ,
         rating:4.5

    },
      {
        
        name:"FRIES",
        price:49,
        img: "https://res.cloudinary.com/omqcutsc/image/upload/v1790802949/profile/cxdjs2brgygziqpa9p3b.jpg"



 ,
         rating:4.5

    },
      {
        
        name:"HYDERABADI CHICKEN",
        price:349,
        img:"https://res.cloudinary.com/omqcutsc/image/upload/v1790778816/profile/eawxarkbokmmvgqvhqdl.jpg"



 ,
         rating:4.5

    },
      {
        
        name:"VEG MANCHURIAN",
        price:120,
        img:"https://res.cloudinary.com/omqcutsc/image/upload/v1790777831/profile/shcvbswd9l5zdzt0vruq.jpg"

 ,
         rating:4.5

    },
      {
        
        name:"VEG HAKKA NOODLES",
        price:120,
        img:"https://res.cloudinary.com/omqcutsc/image/upload/v1790777885/profile/f0fy2d8cirsmllrwje2s.jpg"



,
         rating:4.5

    },
      {
        
        name:"TANDOORI CHICKEN",
        price:120,
        img:"https://res.cloudinary.com/omqcutsc/image/upload/v1790777962/profile/p8vvwfsqgbpqjk0s2e08.jpg"

  ,
        rating:4.5

    },
      {
        
        name:"PANEER CHILLY",
        price:150,
        img:"https://res.cloudinary.com/omqcutsc/image/upload/v1790778278/profile/mtddqxzuf9cxdyzhgvjj.jpg"



    },
    {
        
        name:"LITTI CHOKHA",
        price:100,
        img:"https://res.cloudinary.com/omqcutsc/image/upload/v1790778132/profile/s6qn4brk4dgkda4tmrv2.jpg"

 ,
         rating:4.5

    },
    {
        
        name:" DHUSKA",
        price:150,
        img:"https://res.cloudinary.com/omqcutsc/image/upload/v1790778179/profile/lxjxbgnkwsbqiivneqel.jpg"

 ,
         rating:4.5

    },
    {
        
        name:"PANEER TIKKA",
        price:180,
        img:"https://res.cloudinary.com/omqcutsc/image/upload/v1790778227/profile/xntqzhh36xvzllhwfolo.jpg"

,
          rating:4.5

    }])
    res.status(201).json({message:"posted successfully"})
}
const deleteAll=async(req,res)=>{
    await Product.deleteMany()
    res.status(200).json({message:"deleted succesfully"})
}
const updateData=async(req,res)=>{
    await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
        
    )
    res.status(201).json({message:"updated"})

}
module.exports={getData,postData,deleteAll,updateData}