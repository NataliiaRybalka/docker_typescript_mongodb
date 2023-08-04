import { model, Schema } from 'mongoose';
import { I } from './types';

const USchema = new Schema(
	{},
	{ timestamps: true }
);

export default model<I>('', USchema);