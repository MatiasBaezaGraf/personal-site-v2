import { NextApiHandler, NextApiRequest } from "next";

const deleteFile = (req: NextApiRequest): Promise<{ name: string }> => {
	const imageName = JSON.parse(req.body).imageName;

	return new Promise((resolve, reject) => {
		resolve({ name: imageName as string });
	});
};

const handler: NextApiHandler = async (req, res) => {
	switch (req.method) {
		case "POST":
			await deleteFile(req);
			res.json({ message: "Deleted Image!" });
			break;
		default:
			res.json({ message: "Method not allowed or specified!" });
			break;
	}
};

export default handler;
