import knex from "knex";
import path from "path";

const db = knex({
	client: "sqlite3",
	connection: {
		filename: path.resolve(__dirname, "database.sqlite"),
	},
	//sqlite by default doesn't know how to treat null on database
	useNullAsDefault: true,
});

export default db;
