'use strict';

const database = require('./../database');

exports.create = async (values) => {
	return database.create('Questao', values.questao).then(questao => {
		if (values.alternativas) {
			values.alternativas.map(alternativa => {
				alternativa.id_questao = questao.dataValues.id_questao;
				return database.create('Alternativa', alternativa);
			});
		}
	})
};

exports.retrieve = async (values) => {
	return await database.retrieve('Questao', values);
};

exports.update = async (id, values) => {
	return await database.update('Questao', id, values);
};

exports.delete = async (values) => {
	return await database.delete('Questao', values);
};

exports.list = async (values) => {
	let questions = await database.list('Questao', values);
	for (var i = 0; i < questions.length; i++) {
		questions[i].dataValues.alternativas = await database.list('Alternativa', {where: {id_questao: questions[i].dataValues.id_questao}});
	}
	return questions;
};
