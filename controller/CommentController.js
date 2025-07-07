import { CommentModel } from "../models/CommentModel.js";
import { UserModel } from "../models/UserModel.js";

export const saveComments = async(req,res)=>{
    try{
        const {comment, user_id,movie_id}=req.body;
        if(!(comment && user_id && movie_id)){
return res.status(400).json({message:"Todos los campos son obligatorios"})
        }
        const userExists= await UserModel.findOne({where:{id: user_id}});
        if(!userExists){
            return res.status(404).json({message:"Usuario no existe"});
        }
        const newComment = await CommentModel.create({
            description:comment,
            user_id:user_id,
            movie_id:movie_id
        });
        res.status(201).json({message:"Se ha agregado correctamente",newComment});
    } catch (error){
        res.status(500).json({error:error.message});
    }

    
}
export const getComments =async (req,res)=>{
        try{
            const comments= await CommentModel.findAll(
                {
                    where:{movie_id: req.query.movie_id},
                    include:{
                        model :UserModel,
                        attributes:['id','user','email']
                    }
                }
            );

            return res.status(200).json(comments);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }