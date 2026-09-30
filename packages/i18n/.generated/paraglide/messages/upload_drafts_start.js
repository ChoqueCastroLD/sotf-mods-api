/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Drafts_StartInputs */

const en_upload_drafts_start = /** @type {(inputs: Upload_Drafts_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start publishing`)
};

const es_upload_drafts_start = /** @type {(inputs: Upload_Drafts_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Empezar a publicar`)
};

const de_upload_drafts_start = /** @type {(inputs: Upload_Drafts_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlichen beginnen`)
};

const fr_upload_drafts_start = /** @type {(inputs: Upload_Drafts_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commencer à publier`)
};

const it_upload_drafts_start = /** @type {(inputs: Upload_Drafts_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inizia a pubblicare`)
};

const nl_upload_drafts_start = /** @type {(inputs: Upload_Drafts_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beginnen met publiceren`)
};

const pl_upload_drafts_start = /** @type {(inputs: Upload_Drafts_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zacznij publikować`)
};

const pt_upload_drafts_start = /** @type {(inputs: Upload_Drafts_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Começar a publicar`)
};

const ru_upload_drafts_start = /** @type {(inputs: Upload_Drafts_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Начать публикацию`)
};

const sv_upload_drafts_start = /** @type {(inputs: Upload_Drafts_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Börja publicera`)
};

const tr_upload_drafts_start = /** @type {(inputs: Upload_Drafts_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayınlamaya başla`)
};

const zh_upload_drafts_start = /** @type {(inputs: Upload_Drafts_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开始发布`)
};

const ja_upload_drafts_start = /** @type {(inputs: Upload_Drafts_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開を始める`)
};

/**
* | output |
* | --- |
* | "Start publishing" |
*
* @param {Upload_Drafts_StartInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drafts_start = /** @type {((inputs?: Upload_Drafts_StartInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_StartInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drafts_start(inputs)
	if (locale === "de") return de_upload_drafts_start(inputs)
	if (locale === "fr") return fr_upload_drafts_start(inputs)
	if (locale === "it") return it_upload_drafts_start(inputs)
	if (locale === "nl") return nl_upload_drafts_start(inputs)
	if (locale === "pl") return pl_upload_drafts_start(inputs)
	if (locale === "pt") return pt_upload_drafts_start(inputs)
	if (locale === "ru") return ru_upload_drafts_start(inputs)
	if (locale === "sv") return sv_upload_drafts_start(inputs)
	if (locale === "tr") return tr_upload_drafts_start(inputs)
	if (locale === "zh") return zh_upload_drafts_start(inputs)
	if (locale === "ja") return ja_upload_drafts_start(inputs)
	return en_upload_drafts_start(inputs)
});
