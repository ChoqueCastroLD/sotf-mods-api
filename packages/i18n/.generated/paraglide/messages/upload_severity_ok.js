/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Severity_OkInputs */

const en_upload_severity_ok = /** @type {(inputs: Upload_Severity_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OK`)
};

const es_upload_severity_ok = /** @type {(inputs: Upload_Severity_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Correcto`)
};

const de_upload_severity_ok = /** @type {(inputs: Upload_Severity_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OK`)
};

const fr_upload_severity_ok = /** @type {(inputs: Upload_Severity_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OK`)
};

const it_upload_severity_ok = /** @type {(inputs: Upload_Severity_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OK`)
};

const nl_upload_severity_ok = /** @type {(inputs: Upload_Severity_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OK`)
};

const pl_upload_severity_ok = /** @type {(inputs: Upload_Severity_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OK`)
};

const pt_upload_severity_ok = /** @type {(inputs: Upload_Severity_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OK`)
};

const ru_upload_severity_ok = /** @type {(inputs: Upload_Severity_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всё в порядке`)
};

const sv_upload_severity_ok = /** @type {(inputs: Upload_Severity_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OK`)
};

const tr_upload_severity_ok = /** @type {(inputs: Upload_Severity_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamam`)
};

const zh_upload_severity_ok = /** @type {(inputs: Upload_Severity_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正常`)
};

const ja_upload_severity_ok = /** @type {(inputs: Upload_Severity_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OK`)
};

/**
* | output |
* | --- |
* | "OK" |
*
* @param {Upload_Severity_OkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_severity_ok = /** @type {((inputs?: Upload_Severity_OkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Severity_OkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_severity_ok(inputs)
	if (locale === "de") return de_upload_severity_ok(inputs)
	if (locale === "fr") return fr_upload_severity_ok(inputs)
	if (locale === "it") return it_upload_severity_ok(inputs)
	if (locale === "nl") return nl_upload_severity_ok(inputs)
	if (locale === "pl") return pl_upload_severity_ok(inputs)
	if (locale === "pt") return pt_upload_severity_ok(inputs)
	if (locale === "ru") return ru_upload_severity_ok(inputs)
	if (locale === "sv") return sv_upload_severity_ok(inputs)
	if (locale === "tr") return tr_upload_severity_ok(inputs)
	if (locale === "zh") return zh_upload_severity_ok(inputs)
	if (locale === "ja") return ja_upload_severity_ok(inputs)
	return en_upload_severity_ok(inputs)
});
