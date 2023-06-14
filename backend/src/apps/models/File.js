import Sequelize, { Model } from "sequelize";
import config from "../../config/database";

const sequelize = new Sequelize(config);

class File extends Model {}

File.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: Sequelize.STRING,
    path: Sequelize.STRING,
  },
  {
    sequelize,
    modelName: "File",
    name: {
      singular: "file",
      plural: "files",
    },
  }
);

export default File;
