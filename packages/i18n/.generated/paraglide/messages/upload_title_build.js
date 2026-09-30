/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Title_BuildInputs */

const en_upload_title_build = /** @type {(inputs: Upload_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New build`)
};

const es_upload_title_build = /** @type {(inputs: Upload_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nueva build`)
};

const de_upload_title_build = /** @type {(inputs: Upload_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neuer Build`)
};

const fr_upload_title_build = /** @type {(inputs: Upload_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveau build`)
};

const it_upload_title_build = /** @type {(inputs: Upload_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuova build`)
};

const nl_upload_title_build = /** @type {(inputs: Upload_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe build`)
};

const pl_upload_title_build = /** @type {(inputs: Upload_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowy build`)
};

const pt_upload_title_build = /** @type {(inputs: Upload_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nova build`)
};

const ru_upload_title_build = /** @type {(inputs: Upload_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новая постройка`)
};

const sv_upload_title_build = /** @type {(inputs: Upload_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nytt bygge`)
};

const tr_upload_title_build = /** @type {(inputs: Upload_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni yapı`)
};

const zh_upload_title_build = /** @type {(inputs: Upload_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新建筑`)
};

const ja_upload_title_build = /** @type {(inputs: Upload_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しい建築`)
};

/**
* | output |
* | --- |
* | "New build" |
*
* @param {Upload_Title_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_title_build = /** @type {((inputs?: Upload_Title_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Title_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_title_build(inputs)
	if (locale === "de") return de_upload_title_build(inputs)
	if (locale === "fr") return fr_upload_title_build(inputs)
	if (locale === "it") return it_upload_title_build(inputs)
	if (locale === "nl") return nl_upload_title_build(inputs)
	if (locale === "pl") return pl_upload_title_build(inputs)
	if (locale === "pt") return pt_upload_title_build(inputs)
	if (locale === "ru") return ru_upload_title_build(inputs)
	if (locale === "sv") return sv_upload_title_build(inputs)
	if (locale === "tr") return tr_upload_title_build(inputs)
	if (locale === "zh") return zh_upload_title_build(inputs)
	if (locale === "ja") return ja_upload_title_build(inputs)
	return en_upload_title_build(inputs)
});
