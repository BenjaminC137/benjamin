export class ArduinoProjectModel {
	id: number;
	title: string;
	description: string;
	dateCreated: string;
	dateCompleted: string;
	imagePath: string;
	moreImagesPath?: string[];
	videoUrl?: string;
	components?: string[];
	libraries?: string[];
}
