'use strict';

const database = require('./../database');

exports.create = async (values) => {
	return await database.create('Test', values);
};

exports.retrieve = async (values) => {
	return await database.retrieve('Test', values);
};

exports.update = async (id, values) => {
	return await database.update('Test', id, values);
};

exports.delete = async (values) => {
	return database.delete('Test', values);
};

exports.list = async (values) => {
	let tests = await database.list('Test', values);
	return tests;
};
