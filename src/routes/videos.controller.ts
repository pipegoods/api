import { RequestHandler } from "express";
import Video from "./video";

export const createVideos: RequestHandler = async (req, res) => {
  console.log(req.body);
  
  const findVideo = await Video.findOne({ url: req.body.url });

  if (findVideo) {
    return res.status(301).json({ msg: "La URL ya existe!" });
  }

  const video = new Video(req.body);

  const newVideo = await video.save();

  res.json(newVideo);
};

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find();
    return res.json(videos);
  } catch (error) {
    res.json(error);
  }
};

export const getVideo: RequestHandler = async (req, res) => {
  const {id} = req.params;
  const findVideo = await Video.findById(id);
  if (!findVideo) {
      return res.status(204).json({msg: 'No se encontró el video!!'});
  }

  res.json(findVideo);
  
};

export const deleteVideos: RequestHandler = async (req, res) => {
    const {id} = req.params;
    const findVideo = await Video.findByIdAndDelete(id);
    if (!findVideo) {
        return res.status(204).json({msg: 'No se encontró el video!!'});
    }
    res.json(findVideo);
};

export const updateVideos: RequestHandler = async (req, res) => {
  const updateVideo = await Video.findByIdAndUpdate(req.params.id, req.body, {new: true});
  if (!updateVideo) {
    return res.status(204).json({msg: 'No se encontró el video!!'});
  }
  res.json(updateVideo);
};
