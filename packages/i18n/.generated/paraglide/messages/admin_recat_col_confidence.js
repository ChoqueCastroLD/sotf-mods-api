/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Col_ConfidenceInputs */

const en_admin_recat_col_confidence = /** @type {(inputs: Admin_Recat_Col_ConfidenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confidence`)
};

const es_admin_recat_col_confidence = /** @type {(inputs: Admin_Recat_Col_ConfidenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confianza`)
};

const de_admin_recat_col_confidence = /** @type {(inputs: Admin_Recat_Col_ConfidenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sicherheit`)
};

const fr_admin_recat_col_confidence = /** @type {(inputs: Admin_Recat_Col_ConfidenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confiance`)
};

const it_admin_recat_col_confidence = /** @type {(inputs: Admin_Recat_Col_ConfidenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Affidabilità`)
};

const nl_admin_recat_col_confidence = /** @type {(inputs: Admin_Recat_Col_ConfidenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zekerheid`)
};

const pl_admin_recat_col_confidence = /** @type {(inputs: Admin_Recat_Col_ConfidenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pewność`)
};

const pt_admin_recat_col_confidence = /** @type {(inputs: Admin_Recat_Col_ConfidenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confiança`)
};

const ru_admin_recat_col_confidence = /** @type {(inputs: Admin_Recat_Col_ConfidenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Уверенность`)
};

const sv_admin_recat_col_confidence = /** @type {(inputs: Admin_Recat_Col_ConfidenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Säkerhet`)
};

const tr_admin_recat_col_confidence = /** @type {(inputs: Admin_Recat_Col_ConfidenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güven`)
};

const zh_admin_recat_col_confidence = /** @type {(inputs: Admin_Recat_Col_ConfidenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`置信度`)
};

const ja_admin_recat_col_confidence = /** @type {(inputs: Admin_Recat_Col_ConfidenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`確信度`)
};

/**
* | output |
* | --- |
* | "Confidence" |
*
* @param {Admin_Recat_Col_ConfidenceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_col_confidence = /** @type {((inputs?: Admin_Recat_Col_ConfidenceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Col_ConfidenceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_col_confidence(inputs)
	if (locale === "de") return de_admin_recat_col_confidence(inputs)
	if (locale === "fr") return fr_admin_recat_col_confidence(inputs)
	if (locale === "it") return it_admin_recat_col_confidence(inputs)
	if (locale === "nl") return nl_admin_recat_col_confidence(inputs)
	if (locale === "pl") return pl_admin_recat_col_confidence(inputs)
	if (locale === "pt") return pt_admin_recat_col_confidence(inputs)
	if (locale === "ru") return ru_admin_recat_col_confidence(inputs)
	if (locale === "sv") return sv_admin_recat_col_confidence(inputs)
	if (locale === "tr") return tr_admin_recat_col_confidence(inputs)
	if (locale === "zh") return zh_admin_recat_col_confidence(inputs)
	if (locale === "ja") return ja_admin_recat_col_confidence(inputs)
	return en_admin_recat_col_confidence(inputs)
});
