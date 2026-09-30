/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_File_Intro_BuildInputs */

const en_upload_file_intro_build = /** @type {(inputs: Upload_File_Intro_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drop the blueprint .json exported by BuildShare. Its thumbnail, element count and version are read automatically.`)
};

const es_upload_file_intro_build = /** @type {(inputs: Upload_File_Intro_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suelta el plano .json exportado por BuildShare. Su miniatura, número de elementos y versión se leen solos.`)
};

const de_upload_file_intro_build = /** @type {(inputs: Upload_File_Intro_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zieh die von BuildShare exportierte Bauplan-.json hierher. Vorschaubild, Elementanzahl und Version werden automatisch gelesen.`)
};

const fr_upload_file_intro_build = /** @type {(inputs: Upload_File_Intro_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déposez le plan .json exporté par BuildShare. Sa miniature, son nombre d’éléments et sa version sont lus automatiquement.`)
};

const it_upload_file_intro_build = /** @type {(inputs: Upload_File_Intro_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trascina il progetto .json esportato da BuildShare. Miniatura, numero di elementi e versione vengono letti automaticamente.`)
};

const nl_upload_file_intro_build = /** @type {(inputs: Upload_File_Intro_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sleep de door BuildShare geëxporteerde bouwtekening-.json. Miniatuur, aantal elementen en versie worden automatisch gelezen.`)
};

const pl_upload_file_intro_build = /** @type {(inputs: Upload_File_Intro_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upuść plan .json wyeksportowany przez BuildShare. Miniatura, liczba elementów i wersja zostaną odczytane automatycznie.`)
};

const pt_upload_file_intro_build = /** @type {(inputs: Upload_File_Intro_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solte a planta .json exportada pelo BuildShare. A miniatura, o número de elementos e a versão são lidos automaticamente.`)
};

const ru_upload_file_intro_build = /** @type {(inputs: Upload_File_Intro_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перетащите чертёж .json, экспортированный из BuildShare. Миниатюра, число элементов и версия считываются автоматически.`)
};

const sv_upload_file_intro_build = /** @type {(inputs: Upload_File_Intro_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Släpp ritnings-.json som BuildShare exporterade. Miniatyr, antal element och version läses automatiskt.`)
};

const tr_upload_file_intro_build = /** @type {(inputs: Upload_File_Intro_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare’in dışa aktardığı plan .json dosyasını bırak. Küçük resim, öğe sayısı ve sürüm otomatik okunur.`)
};

const zh_upload_file_intro_build = /** @type {(inputs: Upload_File_Intro_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拖入 BuildShare 导出的蓝图 .json。缩略图、元素数量和版本会自动读取。`)
};

const ja_upload_file_intro_build = /** @type {(inputs: Upload_File_Intro_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShareで書き出した設計図 .json をドロップしてください。サムネイル、要素数、バージョンは自動で読み取ります。`)
};

/**
* | output |
* | --- |
* | "Drop the blueprint .json exported by BuildShare. Its thumbnail, element count and version are read automatically." |
*
* @param {Upload_File_Intro_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_file_intro_build = /** @type {((inputs?: Upload_File_Intro_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_File_Intro_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_file_intro_build(inputs)
	if (locale === "de") return de_upload_file_intro_build(inputs)
	if (locale === "fr") return fr_upload_file_intro_build(inputs)
	if (locale === "it") return it_upload_file_intro_build(inputs)
	if (locale === "nl") return nl_upload_file_intro_build(inputs)
	if (locale === "pl") return pl_upload_file_intro_build(inputs)
	if (locale === "pt") return pt_upload_file_intro_build(inputs)
	if (locale === "ru") return ru_upload_file_intro_build(inputs)
	if (locale === "sv") return sv_upload_file_intro_build(inputs)
	if (locale === "tr") return tr_upload_file_intro_build(inputs)
	if (locale === "zh") return zh_upload_file_intro_build(inputs)
	if (locale === "ja") return ja_upload_file_intro_build(inputs)
	return en_upload_file_intro_build(inputs)
});
