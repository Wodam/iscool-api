'use strict';

const database = require('./../database');

exports.create = async (values) => {
	return await database.create('Question', values).then(question => {
		if (values.choices) {
			values.choices.id_question = question.id_question;
			return database.create('Choice',values.choices);
		}
	});
	// return await database.create('Questao', values).then(questao => {
	// 	if (values.alternativas) {
	// 		values.alternativas.map(alternativa => {
	// 			alternativa.id_questao = questao.dataValues.id_questao;
	// 			return database.create('Alternativa', alternativa);
	// 		});
	// 	}
	// })
};

exports.retrieve = async (values) => {
	return await database.retrieve('Question', values);
};

exports.update = async (id, values) => {
	return await database.update('Question', id, values);
};

exports.delete = async (values) => {
	return await database.delete('Question', values);
};

exports.list = async (values) => {
	let questions = await database.list('Question', values);
	// for (var i = 0; i < questions.length; i++) {
	// 	questions[i].dataValues.alternativas = await database.list('Alternativa', {where: {id_questao: questions[i].dataValues.id_questao}});
	// }
	return questions;
};
