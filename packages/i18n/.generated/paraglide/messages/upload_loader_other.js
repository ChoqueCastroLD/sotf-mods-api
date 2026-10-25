/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Loader_OtherInputs */

const en_upload_loader_other = /** @type {(inputs: Upload_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other`)
};

const es_upload_loader_other = /** @type {(inputs: Upload_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otro`)
};

const de_upload_loader_other = /** @type {(inputs: Upload_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere`)
};

const fr_upload_loader_other = /** @type {(inputs: Upload_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autre`)
};

const it_upload_loader_other = /** @type {(inputs: Upload_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altro`)
};

const nl_upload_loader_other = /** @type {(inputs: Upload_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anders`)
};

const pl_upload_loader_other = /** @type {(inputs: Upload_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inny`)
};

const pt_upload_loader_other = /** @type {(inputs: Upload_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outro`)
};

const ru_upload_loader_other = /** @type {(inputs: Upload_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другой`)
};

const sv_upload_loader_other = /** @type {(inputs: Upload_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annan`)
};

const tr_upload_loader_other = /** @type {(inputs: Upload_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer`)
};

const zh_upload_loader_other = /** @type {(inputs: Upload_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他`)
};

const ja_upload_loader_other = /** @type {(inputs: Upload_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他`)
};

/**
* | output |
* | --- |
* | "Other" |
*
* @param {Upload_Loader_OtherInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_loader_other = /** @type {((inputs?: Upload_Loader_OtherInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Loader_OtherInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_loader_other(inputs)
	if (locale === "de") return de_upload_loader_other(inputs)
	if (locale === "fr") return fr_upload_loader_other(inputs)
	if (locale === "it") return it_upload_loader_other(inputs)
	if (locale === "nl") return nl_upload_loader_other(inputs)
	if (locale === "pl") return pl_upload_loader_other(inputs)
	if (locale === "pt") return pt_upload_loader_other(inputs)
	if (locale === "ru") return ru_upload_loader_other(inputs)
	if (locale === "sv") return sv_upload_loader_other(inputs)
	if (locale === "tr") return tr_upload_loader_other(inputs)
	if (locale === "zh") return zh_upload_loader_other(inputs)
	if (locale === "ja") return ja_upload_loader_other(inputs)
	return en_upload_loader_other(inputs)
});
