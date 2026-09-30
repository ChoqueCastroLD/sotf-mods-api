/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_License_MitInputs */

const en_upload_license_mit = /** @type {(inputs: Upload_License_MitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MIT`)
};

const es_upload_license_mit = /** @type {(inputs: Upload_License_MitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MIT`)
};

const de_upload_license_mit = /** @type {(inputs: Upload_License_MitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MIT`)
};

const fr_upload_license_mit = /** @type {(inputs: Upload_License_MitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MIT`)
};

const it_upload_license_mit = /** @type {(inputs: Upload_License_MitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MIT`)
};

const nl_upload_license_mit = /** @type {(inputs: Upload_License_MitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MIT`)
};

const pl_upload_license_mit = /** @type {(inputs: Upload_License_MitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MIT`)
};

const pt_upload_license_mit = /** @type {(inputs: Upload_License_MitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MIT`)
};

const ru_upload_license_mit = /** @type {(inputs: Upload_License_MitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MIT`)
};

const sv_upload_license_mit = /** @type {(inputs: Upload_License_MitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MIT`)
};

const tr_upload_license_mit = /** @type {(inputs: Upload_License_MitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MIT`)
};

const zh_upload_license_mit = /** @type {(inputs: Upload_License_MitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MIT`)
};

const ja_upload_license_mit = /** @type {(inputs: Upload_License_MitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MIT`)
};

/**
* | output |
* | --- |
* | "MIT" |
*
* @param {Upload_License_MitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_license_mit = /** @type {((inputs?: Upload_License_MitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_License_MitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_license_mit(inputs)
	if (locale === "de") return de_upload_license_mit(inputs)
	if (locale === "fr") return fr_upload_license_mit(inputs)
	if (locale === "it") return it_upload_license_mit(inputs)
	if (locale === "nl") return nl_upload_license_mit(inputs)
	if (locale === "pl") return pl_upload_license_mit(inputs)
	if (locale === "pt") return pt_upload_license_mit(inputs)
	if (locale === "ru") return ru_upload_license_mit(inputs)
	if (locale === "sv") return sv_upload_license_mit(inputs)
	if (locale === "tr") return tr_upload_license_mit(inputs)
	if (locale === "zh") return zh_upload_license_mit(inputs)
	if (locale === "ja") return ja_upload_license_mit(inputs)
	return en_upload_license_mit(inputs)
});
