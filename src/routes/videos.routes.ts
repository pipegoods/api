import {Router} from 'express';
import * as videoCrtl from './videos.controller';

const router = Router();

router.get('/', videoCrtl.getVideos);
router.post('/', videoCrtl.createVideos);
router.get('/:id', videoCrtl.getVideo);
router.delete('/:id', videoCrtl.deleteVideos);
router.put('/:id', videoCrtl.updateVideos);

export default router;