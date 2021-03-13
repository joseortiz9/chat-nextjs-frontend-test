import {generateDefaultChat, generateFakeData} from "../../utils/fakerGenerator";

export default async function getChats(req, res) {
    if (req.method === 'GET') {
        const fakeData = generateFakeData(15);
        res.status(200).json({
            data: (fakeData.length > 0) ? fakeData : generateDefaultChat()
        });
    } else {
        res.status(405).json({ message: 'We only support GET' });
    }
}