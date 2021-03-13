import {generateTestUser} from "../../utils/fakerGenerator";

export default async function login(req, res) {
    if (req.method === 'POST') {
        if (req.body.username === "test" && req.body.password === "test")
            res.status(200).json({data: { token: 1, user: generateTestUser() }});
        else
            res.status(401).json({data: "You had the credentials there..."});
    } else {
        res.status(405).json({ message: 'We only support POST' });
    }
}