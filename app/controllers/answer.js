'use strict';

const database = require('./../database');

exports.create = async (values) => {
	return await database.create('Answer', values);
};

exports.retrieve = async (values) => {
	return await database.retrieve('Answer', values);
};

exports.update = async (id, values) => {
	return await database.update('Answer', id, values);
};

exports.delete = async (values) => {
	return database.delete('Answer', values);
};

exports.list = async (values) => {
	let answers = await database.list('Answer', values);
	return answers;
};
