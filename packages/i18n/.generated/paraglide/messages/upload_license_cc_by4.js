/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_License_Cc_By4Inputs */

const en_upload_license_cc_by4 = /** @type {(inputs: Upload_License_Cc_By4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CC BY 4.0`)
};

const es_upload_license_cc_by4 = /** @type {(inputs: Upload_License_Cc_By4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CC BY 4.0`)
};

const de_upload_license_cc_by4 = /** @type {(inputs: Upload_License_Cc_By4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CC BY 4.0`)
};

const fr_upload_license_cc_by4 = /** @type {(inputs: Upload_License_Cc_By4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CC BY 4.0`)
};

const it_upload_license_cc_by4 = /** @type {(inputs: Upload_License_Cc_By4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CC BY 4.0`)
};

const nl_upload_license_cc_by4 = /** @type {(inputs: Upload_License_Cc_By4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CC BY 4.0`)
};

const pl_upload_license_cc_by4 = /** @type {(inputs: Upload_License_Cc_By4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CC BY 4.0`)
};

const pt_upload_license_cc_by4 = /** @type {(inputs: Upload_License_Cc_By4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CC BY 4.0`)
};

const ru_upload_license_cc_by4 = /** @type {(inputs: Upload_License_Cc_By4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CC BY 4.0`)
};

const sv_upload_license_cc_by4 = /** @type {(inputs: Upload_License_Cc_By4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CC BY 4.0`)
};

const tr_upload_license_cc_by4 = /** @type {(inputs: Upload_License_Cc_By4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CC BY 4.0`)
};

const zh_upload_license_cc_by4 = /** @type {(inputs: Upload_License_Cc_By4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CC BY 4.0`)
};

const ja_upload_license_cc_by4 = /** @type {(inputs: Upload_License_Cc_By4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CC BY 4.0`)
};

/**
* | output |
* | --- |
* | "CC BY 4.0" |
*
* @param {Upload_License_Cc_By4Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_license_cc_by4 = /** @type {((inputs?: Upload_License_Cc_By4Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_License_Cc_By4Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_license_cc_by4(inputs)
	if (locale === "de") return de_upload_license_cc_by4(inputs)
	if (locale === "fr") return fr_upload_license_cc_by4(inputs)
	if (locale === "it") return it_upload_license_cc_by4(inputs)
	if (locale === "nl") return nl_upload_license_cc_by4(inputs)
	if (locale === "pl") return pl_upload_license_cc_by4(inputs)
	if (locale === "pt") return pt_upload_license_cc_by4(inputs)
	if (locale === "ru") return ru_upload_license_cc_by4(inputs)
	if (locale === "sv") return sv_upload_license_cc_by4(inputs)
	if (locale === "tr") return tr_upload_license_cc_by4(inputs)
	if (locale === "zh") return zh_upload_license_cc_by4(inputs)
	if (locale === "ja") return ja_upload_license_cc_by4(inputs)
	return en_upload_license_cc_by4(inputs)
});
