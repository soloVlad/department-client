import {
	IconFileTypeDocx,
	IconFileTypeDoc,
	IconFileTypePdf,
	IconFileTypeXls,
	IconFile,
} from "@tabler/icons-react";

const getDocumentIconByExt = (ext: string) => {
	switch (ext) {
		case ".doc":
			return IconFileTypeDoc;
		case ".docx":
			return IconFileTypeDocx;
		case ".pdf":
			return IconFileTypePdf;
		case ".xls":
			return IconFileTypeXls;
		default:
			return IconFile;
	}
};

export default {
	getDocumentIconByExt,
};
