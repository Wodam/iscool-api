'use strict';

const express = require('express');
const router = express.Router();

const controller = require('./../../../controllers/choice');

// Create
router.post('/', async (req, res) => {
	try {
		res.send(await controller.create(req.body))
	} catch (e) {
		res.status(500).send(e)
	}
});

// Retrieve
router.get('/:id', async (req, res) => {
	try {
		res.send(await controller.retrieve(req.params.id))
	} catch (e) {
		res.status(500).send(e)
	}
});

// Update
router.put('/:id', async (req, res) => {
	try {
		res.send(await controller.update(req.params.id, req.body))
	} catch (e) {
		res.status(500).send(e)
	}
});

// Delete
router.delete('/:id', async (req, res) => {
	try {
		console.log(req.params.id)
		res.send(await controller.delete(req.params.id))
	} catch (e) {
		res.status(500).send(e)
	}
});

// List
router.get('/', async (req, res) => {
	try {
		// JSON parse becaus params return an JSON
		res.send(await controller.list({where: JSON.parse(req.query.where)}))
	} catch (e) {
		res.status(500).send(e)
	}
});

module.exports = router;
