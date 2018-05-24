import "reflect-metadata";
import { createConnection } from "typeorm";
import { Story } from "./entity/Story";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const story1 = new Story();
    story1.text = 'There goes some very long test text';
    story1.created = new Date();
    await connection.manager.save(story1);
    console.log("Saved a new user with id: " + story1.id);

    console.log("Loading users from the database...");
    const stories = await connection.manager.find(Story);
    console.log("Loaded users: ", stories);

}).catch(error => console.log(error));
