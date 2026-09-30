/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Col_ReasonInputs */

const en_admin_recat_col_reason = /** @type {(inputs: Admin_Recat_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Why`)
};

const es_admin_recat_col_reason = /** @type {(inputs: Admin_Recat_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo`)
};

const de_admin_recat_col_reason = /** @type {(inputs: Admin_Recat_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warum`)
};

const fr_admin_recat_col_reason = /** @type {(inputs: Admin_Recat_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pourquoi`)
};

const it_admin_recat_col_reason = /** @type {(inputs: Admin_Recat_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perché`)
};

const nl_admin_recat_col_reason = /** @type {(inputs: Admin_Recat_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waarom`)
};

const pl_admin_recat_col_reason = /** @type {(inputs: Admin_Recat_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dlaczego`)
};

const pt_admin_recat_col_reason = /** @type {(inputs: Admin_Recat_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo`)
};

const ru_admin_recat_col_reason = /** @type {(inputs: Admin_Recat_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Почему`)
};

const sv_admin_recat_col_reason = /** @type {(inputs: Admin_Recat_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varför`)
};

const tr_admin_recat_col_reason = /** @type {(inputs: Admin_Recat_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neden`)
};

const zh_admin_recat_col_reason = /** @type {(inputs: Admin_Recat_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原因`)
};

const ja_admin_recat_col_reason = /** @type {(inputs: Admin_Recat_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`理由`)
};

/**
* | output |
* | --- |
* | "Why" |
*
* @param {Admin_Recat_Col_ReasonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_col_reason = /** @type {((inputs?: Admin_Recat_Col_ReasonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Col_ReasonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_col_reason(inputs)
	if (locale === "de") return de_admin_recat_col_reason(inputs)
	if (locale === "fr") return fr_admin_recat_col_reason(inputs)
	if (locale === "it") return it_admin_recat_col_reason(inputs)
	if (locale === "nl") return nl_admin_recat_col_reason(inputs)
	if (locale === "pl") return pl_admin_recat_col_reason(inputs)
	if (locale === "pt") return pt_admin_recat_col_reason(inputs)
	if (locale === "ru") return ru_admin_recat_col_reason(inputs)
	if (locale === "sv") return sv_admin_recat_col_reason(inputs)
	if (locale === "tr") return tr_admin_recat_col_reason(inputs)
	if (locale === "zh") return zh_admin_recat_col_reason(inputs)
	if (locale === "ja") return ja_admin_recat_col_reason(inputs)
	return en_admin_recat_col_reason(inputs)
});
