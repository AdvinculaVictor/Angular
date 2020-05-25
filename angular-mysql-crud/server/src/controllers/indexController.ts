import {Request, Response} from 'express';

class IndexController{
    public index(req: Request, res: Response){
        res.json({text:'API is at /api/games'});
    }
}

const indexController = new IndexController();
export default indexController;