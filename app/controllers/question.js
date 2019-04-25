'use strict';

const database = require('./../database');

exports.create = async (values) => {
	return await database.create('Question', values).then(question => {
		if (values.choices) {
			for (var choice in values.choices) {
				// console.log();
				values.choices[choice].id_question = question.id_question;
				database.create('Choice',values.choices[choice]);
			}
		}
	});
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
