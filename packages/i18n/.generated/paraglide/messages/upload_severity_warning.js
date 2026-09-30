/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Severity_WarningInputs */

const en_upload_severity_warning = /** @type {(inputs: Upload_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warning`)
};

const es_upload_severity_warning = /** @type {(inputs: Upload_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviso`)
};

const de_upload_severity_warning = /** @type {(inputs: Upload_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warnung`)
};

const fr_upload_severity_warning = /** @type {(inputs: Upload_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avertissement`)
};

const it_upload_severity_warning = /** @type {(inputs: Upload_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avviso`)
};

const nl_upload_severity_warning = /** @type {(inputs: Upload_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waarschuwing`)
};

const pl_upload_severity_warning = /** @type {(inputs: Upload_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostrzeżenie`)
};

const pt_upload_severity_warning = /** @type {(inputs: Upload_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviso`)
};

const ru_upload_severity_warning = /** @type {(inputs: Upload_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предупреждение`)
};

const sv_upload_severity_warning = /** @type {(inputs: Upload_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varning`)
};

const tr_upload_severity_warning = /** @type {(inputs: Upload_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyarı`)
};

const zh_upload_severity_warning = /** @type {(inputs: Upload_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`警告`)
};

const ja_upload_severity_warning = /** @type {(inputs: Upload_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`警告`)
};

/**
* | output |
* | --- |
* | "Warning" |
*
* @param {Upload_Severity_WarningInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_severity_warning = /** @type {((inputs?: Upload_Severity_WarningInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Severity_WarningInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_severity_warning(inputs)
	if (locale === "de") return de_upload_severity_warning(inputs)
	if (locale === "fr") return fr_upload_severity_warning(inputs)
	if (locale === "it") return it_upload_severity_warning(inputs)
	if (locale === "nl") return nl_upload_severity_warning(inputs)
	if (locale === "pl") return pl_upload_severity_warning(inputs)
	if (locale === "pt") return pt_upload_severity_warning(inputs)
	if (locale === "ru") return ru_upload_severity_warning(inputs)
	if (locale === "sv") return sv_upload_severity_warning(inputs)
	if (locale === "tr") return tr_upload_severity_warning(inputs)
	if (locale === "zh") return zh_upload_severity_warning(inputs)
	if (locale === "ja") return ja_upload_severity_warning(inputs)
	return en_upload_severity_warning(inputs)
});
