'use strict';

module.exports = function (sequelize, DataTypes) {
	const Questao = sequelize.define('Questao', {
		id_questao: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		img_questao: {
			type: DataTypes.BLOB
		},
		texto_questao: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		desc_questao: {
			type: DataTypes.TEXT
		},
		letra_alternativa: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		marcada: {
			type: DataTypes.BOOLEAN
		},
		id_prova: {
			type: DataTypes.INTEGER
		},
		id_disciplina: {
			type: DataTypes.INTEGER
		},
		id_professor: {
			type: DataTypes.INTEGER
		}
	});

	Questao.associate = models => {
		Questao.hasMany(models.Alternativa, {
			as: 'alternativas',
			foreignKey: 'id_questao'
		});
		Questao.hasMany(models.QuestaoHabilidade, {
			as: 'questao_habilidade',
			foreignKey: 'id_questao'
		});
		Questao.belongsTo(models.Disciplina, {
			as: 'disciplina',
			foreignKey: 'id_disciplina'
		});
	}

	return Questao;
};
