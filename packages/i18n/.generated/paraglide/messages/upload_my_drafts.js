/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_My_DraftsInputs */

const en_upload_my_drafts = /** @type {(inputs: Upload_My_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`My drafts`)
};

const es_upload_my_drafts = /** @type {(inputs: Upload_My_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mis borradores`)
};

const de_upload_my_drafts = /** @type {(inputs: Upload_My_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meine Entwürfe`)
};

const fr_upload_my_drafts = /** @type {(inputs: Upload_My_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mes brouillons`)
};

const it_upload_my_drafts = /** @type {(inputs: Upload_My_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le mie bozze`)
};

const nl_upload_my_drafts = /** @type {(inputs: Upload_My_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mijn concepten`)
};

const pl_upload_my_drafts = /** @type {(inputs: Upload_My_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moje szkice`)
};

const pt_upload_my_drafts = /** @type {(inputs: Upload_My_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meus rascunhos`)
};

const ru_upload_my_drafts = /** @type {(inputs: Upload_My_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мои черновики`)
};

const sv_upload_my_drafts = /** @type {(inputs: Upload_My_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mina utkast`)
};

const tr_upload_my_drafts = /** @type {(inputs: Upload_My_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taslaklarım`)
};

const zh_upload_my_drafts = /** @type {(inputs: Upload_My_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我的草稿`)
};

const ja_upload_my_drafts = /** @type {(inputs: Upload_My_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下書き一覧`)
};

/**
* | output |
* | --- |
* | "My drafts" |
*
* @param {Upload_My_DraftsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_my_drafts = /** @type {((inputs?: Upload_My_DraftsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_My_DraftsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_my_drafts(inputs)
	if (locale === "de") return de_upload_my_drafts(inputs)
	if (locale === "fr") return fr_upload_my_drafts(inputs)
	if (locale === "it") return it_upload_my_drafts(inputs)
	if (locale === "nl") return nl_upload_my_drafts(inputs)
	if (locale === "pl") return pl_upload_my_drafts(inputs)
	if (locale === "pt") return pt_upload_my_drafts(inputs)
	if (locale === "ru") return ru_upload_my_drafts(inputs)
	if (locale === "sv") return sv_upload_my_drafts(inputs)
	if (locale === "tr") return tr_upload_my_drafts(inputs)
	if (locale === "zh") return zh_upload_my_drafts(inputs)
	if (locale === "ja") return ja_upload_my_drafts(inputs)
	return en_upload_my_drafts(inputs)
});
