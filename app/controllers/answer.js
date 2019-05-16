'use strict';

const database = require('./../database');

exports.create = async (values) => {
	// return await database.create('Answer', values);
	var choice = {};
	choice.where = values.id_test;
	choice.where = values.id_question;
	return await database.list('Choice', choice).then(choices =>{
		for (var choice in choices) {
			var answer = {};
			answer.choices[choice] = values;
			answer.choices[choice].id_choice = choice.id_choice;
			database.createN('Answer', answer.choices);
		}
	});

	// return await database.create('Question', values).then(question => {
	// 	if (values.choices) {
	// 		for (var choice in values.choices) {
	// 			// console.log();
	// 			values.choices[choice].id_question = question.id_question;
	// 			database.create('Choice',values.choices[choice]);
	// 		}
	// 	}
	// });

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
