import {Router} from 'express';

const subscriptionRoutes = Router();

subscriptionRoutes.get('/', (req, res) =>
    res.send({title: "Get all Subscriptions"})
);
subscriptionRoutes.get('/:id', (req, res) =>
    res.send({title: "Get subscriptions details"})
);
subscriptionRoutes.post('/', (req, res) =>
    res.send({title: "Create subscription"})
);
subscriptionRoutes.put('/:id', (req, res) =>
    res.send({title: "Update Subscription"})
);
subscriptionRoutes.delete('/:id', (req, res) =>
    res.send({title: "Delete subscription"})
);
subscriptionRoutes.get('/user/:id', (req, res) =>
    res.send({title: "Get all user Subscriptions"})
);
subscriptionRoutes.put('/:id/cancel', (req, res) =>
    res.send({title: "Cancel Subscription"})
);
subscriptionRoutes.get('/upcoming renewals', (req, res) =>
    res.send({title: "get upcoming renewals"})
);


export default subscriptionRoutes;