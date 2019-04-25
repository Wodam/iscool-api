'use strict';

const database = require('./../database');

exports.create = async (values) => {
	return await database.create('Choice', values);
};

exports.retrieve = async (values) => {
	return await database.retrieve('Choice', values);
};

exports.update = async (id, values) => {
	return await database.update('Choice', id, values);
};

exports.delete = async (values) => {
	return await database.delete('Choice', values);
};

exports.list = async (values) => {
	let choices = await database.list('Choice', values);
	// for (var i = 0; i < questions.length; i++) {
	// 	questions[i].dataValues.alternativas = await database.list('Alternativa', {where: {id_questao: questions[i].dataValues.id_questao}});
	// }
	return choices;
};
