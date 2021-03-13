import {generateFakeMessages} from "../../utils/fakerGenerator";

export default async function getMoreFakeMessages(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({
            data: generateFakeMessages(20)
        });
    } else {
        res.status(405).json({ message: 'We only support GET' });
    }
}