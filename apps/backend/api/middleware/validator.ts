import { AnyZodObject, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";

export const validateRequest = (validator: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
	try {
		await validator.parseAsync({
			body: req.body,
			query: req.query,
			params: req.params,
		});

		next();
	} catch (error) {
		if (error instanceof ZodError) {
			res.status(400).send({ msg: error.issues[0].message });
			return
		}
		res.status(500).send("Error making request, contact support");
		return
	}
};
