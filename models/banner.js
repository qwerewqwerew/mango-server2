module.exports = (sequelize, DataTypes) => {
	const banner = sequelize.define("Banner", {
		imageUrl: {
			type: dataTypes.STRING(300),
			allowNull: false,
		},
    href:{
      type: dataTypes.STRING(300),
			allowNull: false,
    }
	});

	return banner;
};
