'use strict';

const database = require('./../database');

exports.create = async (values) => {
	// return await database.create('Answer', values);
	var choice = {where: {}};
	choice.where.id_question = values.id_question;
	return await database.list('Choice', choice).then(choices =>{
		var answer = {choices: [{}]};

		for (var num in choices) {
			answer.choices[num] = values;
			answer.choices[num].id_choice = choices[num].id_choice;
			database.create('Answer', answer.choices[num]);
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
