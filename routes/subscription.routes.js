import {Router} from 'express';
import authorize from "../middlewares/auth.middleware.js";
import {createSubscription, getAllSubscriptions, getUserSubscriptions} from "../controllers/subscription.controller.js";

const subscriptionRoutes = Router();

subscriptionRoutes.get('/', getAllSubscriptions);
subscriptionRoutes.get('/:id', (req, res) =>
    res.send({title: "Get subscriptions details"})
);
subscriptionRoutes.post('/', authorize, createSubscription);
subscriptionRoutes.put('/:id', (req, res) =>
    res.send({title: "Update Subscription"})
);
subscriptionRoutes.delete('/:id', (req, res) =>
    res.send({title: "Delete subscription"})
);
subscriptionRoutes.get('/user/:id', authorize, getUserSubscriptions);
subscriptionRoutes.put('/:id/cancel', (req, res) =>
    res.send({title: "Cancel Subscription"})
);
subscriptionRoutes.get('/upcoming renewals', (req, res) =>
    res.send({title: "get upcoming renewals"})
);


export default subscriptionRoutes;