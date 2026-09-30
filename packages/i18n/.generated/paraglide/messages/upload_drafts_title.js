/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Drafts_TitleInputs */

const en_upload_drafts_title = /** @type {(inputs: Upload_Drafts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drafts`)
};

const es_upload_drafts_title = /** @type {(inputs: Upload_Drafts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borradores`)
};

const de_upload_drafts_title = /** @type {(inputs: Upload_Drafts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entwürfe`)
};

const fr_upload_drafts_title = /** @type {(inputs: Upload_Drafts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brouillons`)
};

const it_upload_drafts_title = /** @type {(inputs: Upload_Drafts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bozze`)
};

const nl_upload_drafts_title = /** @type {(inputs: Upload_Drafts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concepten`)
};

const pl_upload_drafts_title = /** @type {(inputs: Upload_Drafts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szkice`)
};

const pt_upload_drafts_title = /** @type {(inputs: Upload_Drafts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rascunhos`)
};

const ru_upload_drafts_title = /** @type {(inputs: Upload_Drafts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Черновики`)
};

const sv_upload_drafts_title = /** @type {(inputs: Upload_Drafts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utkast`)
};

const tr_upload_drafts_title = /** @type {(inputs: Upload_Drafts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taslaklar`)
};

const zh_upload_drafts_title = /** @type {(inputs: Upload_Drafts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`草稿`)
};

const ja_upload_drafts_title = /** @type {(inputs: Upload_Drafts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下書き`)
};

/**
* | output |
* | --- |
* | "Drafts" |
*
* @param {Upload_Drafts_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drafts_title = /** @type {((inputs?: Upload_Drafts_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drafts_title(inputs)
	if (locale === "de") return de_upload_drafts_title(inputs)
	if (locale === "fr") return fr_upload_drafts_title(inputs)
	if (locale === "it") return it_upload_drafts_title(inputs)
	if (locale === "nl") return nl_upload_drafts_title(inputs)
	if (locale === "pl") return pl_upload_drafts_title(inputs)
	if (locale === "pt") return pt_upload_drafts_title(inputs)
	if (locale === "ru") return ru_upload_drafts_title(inputs)
	if (locale === "sv") return sv_upload_drafts_title(inputs)
	if (locale === "tr") return tr_upload_drafts_title(inputs)
	if (locale === "zh") return zh_upload_drafts_title(inputs)
	if (locale === "ja") return ja_upload_drafts_title(inputs)
	return en_upload_drafts_title(inputs)
});
