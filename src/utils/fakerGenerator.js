import faker from "faker";

class User {
    constructor(index, name) {
        this.id = index
        this.name = name || faker.name.findName()
        this.avatar = faker.internet.avatar()
        this.lastTime = faker.date.recent()
    }
}
export class Message {
    constructor(isMainUser, msg, now) {
        this.id = faker.random.uuid()
        this.msg = msg || faker.lorem.sentences()
        this.isMainUser = isMainUser
        this.date = now ? new Date() : faker.date.recent(4)
    }
}

export const generateDefaultChat = () => new Array({contact: new User(1, "Equipo del Chat"), messages: generateFakeMessages(1)});

export const generateTestUser = () => new User(-1, "test");

export const generateFakeUsers = (nContacts) => [...Array(nContacts).keys()].map((value) => new User(value+1));

export const generateFakeMessages = (nMessages) =>
    [...Array(nMessages).keys()].map((_, i) => {
        return (i + 1) % 3 === 0 ? new Message(true) : new Message(false)
    }).sort((a,b) => a.date.getTime() - b.date.getTime());

export const generateFakeData = (nContacts) => {
    const users = generateFakeUsers(nContacts);
    return users.map(user => {
        return {
            contact: user,
            messages: generateFakeMessages(30)
        }
    });
}