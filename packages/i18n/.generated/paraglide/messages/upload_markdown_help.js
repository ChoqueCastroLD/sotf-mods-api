/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Markdown_HelpInputs */

const en_upload_markdown_help = /** @type {(inputs: Upload_Markdown_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown: **bold**, _italic_, lists, \`code\`, > quotes, ||spoilers||.`)
};

const es_upload_markdown_help = /** @type {(inputs: Upload_Markdown_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown: **negrita**, _cursiva_, listas, \`código\`, > citas, ||spoilers||.`)
};

const de_upload_markdown_help = /** @type {(inputs: Upload_Markdown_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown: **fett**, _kursiv_, Listen, \`Code\`, > Zitate, ||Spoiler||.`)
};

const fr_upload_markdown_help = /** @type {(inputs: Upload_Markdown_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown : **gras**, _italique_, listes, \`code\`, > citations, ||spoilers||.`)
};

const it_upload_markdown_help = /** @type {(inputs: Upload_Markdown_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown: **grassetto**, _corsivo_, elenchi, \`codice\`, > citazioni, ||spoiler||.`)
};

const nl_upload_markdown_help = /** @type {(inputs: Upload_Markdown_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown: **vet**, _cursief_, lijsten, \`code\`, > citaten, ||spoilers||.`)
};

const pl_upload_markdown_help = /** @type {(inputs: Upload_Markdown_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown: **pogrubienie**, _kursywa_, listy, \`kod\`, > cytaty, ||spoilery||.`)
};

const pt_upload_markdown_help = /** @type {(inputs: Upload_Markdown_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown: **negrito**, _itálico_, listas, \`código\`, > citações, ||spoilers||.`)
};

const ru_upload_markdown_help = /** @type {(inputs: Upload_Markdown_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown: **жирный**, _курсив_, списки, \`код\`, > цитаты, ||спойлеры||.`)
};

const sv_upload_markdown_help = /** @type {(inputs: Upload_Markdown_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown: **fet**, _kursiv_, listor, \`kod\`, > citat, ||spoilers||.`)
};

const tr_upload_markdown_help = /** @type {(inputs: Upload_Markdown_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown: **kalın**, _italik_, listeler, \`kod\`, > alıntılar, ||spoiler||.`)
};

const zh_upload_markdown_help = /** @type {(inputs: Upload_Markdown_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown：**粗体**、_斜体_、列表、\`代码\`、> 引用、||剧透||。`)
};

const ja_upload_markdown_help = /** @type {(inputs: Upload_Markdown_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown：**太字**、_斜体_、リスト、\`コード\`、> 引用、||ネタバレ||。`)
};

/**
* | output |
* | --- |
* | "Markdown: **bold**, _italic_, lists, `code`, > quotes, \|\|spoilers\|\|." |
*
* @param {Upload_Markdown_HelpInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_markdown_help = /** @type {((inputs?: Upload_Markdown_HelpInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Markdown_HelpInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_markdown_help(inputs)
	if (locale === "de") return de_upload_markdown_help(inputs)
	if (locale === "fr") return fr_upload_markdown_help(inputs)
	if (locale === "it") return it_upload_markdown_help(inputs)
	if (locale === "nl") return nl_upload_markdown_help(inputs)
	if (locale === "pl") return pl_upload_markdown_help(inputs)
	if (locale === "pt") return pt_upload_markdown_help(inputs)
	if (locale === "ru") return ru_upload_markdown_help(inputs)
	if (locale === "sv") return sv_upload_markdown_help(inputs)
	if (locale === "tr") return tr_upload_markdown_help(inputs)
	if (locale === "zh") return zh_upload_markdown_help(inputs)
	if (locale === "ja") return ja_upload_markdown_help(inputs)
	return en_upload_markdown_help(inputs)
});
