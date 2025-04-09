import prisma from "~/lib/prisma";


export default eventHandler(async(event) =>{
    const body = await readBody(event)
    const location = {
        ...body,
        images: (await Promise.all(
            body.images
                .filter((image:any) => image !== null)
                .map((image:any) => storeFileLocally(image, 8))
                
        )).map((src) => ({ src, alt: '' })),
    }

    const {name, description, tags_id, lon, lat, images} = location

 
    const loc = await prisma.location.create({
        data:{
            name,
            lat,
            lon,
            description,
            location_tag:{
                createMany:{ 
                    data: tags_id.map((v:any)=> ({
                        tag_id:v.id
                    }))

                }
            },
            location_image:{
                create:images.map((v:any)=> ({
                    image:{
                        create:{
                            src:'/images/'+v.src
                        }
                    }
                }))
            }
            
        }
    })
    return loc
})