/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_Col_ReasonInputs */

const en_admin_awards_col_reason = /** @type {(inputs: Admin_Awards_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reason`)
};

const es_admin_awards_col_reason = /** @type {(inputs: Admin_Awards_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo`)
};

const de_admin_awards_col_reason = /** @type {(inputs: Admin_Awards_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Begründung`)
};

const fr_admin_awards_col_reason = /** @type {(inputs: Admin_Awards_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motif`)
};

const it_admin_awards_col_reason = /** @type {(inputs: Admin_Awards_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo`)
};

const nl_admin_awards_col_reason = /** @type {(inputs: Admin_Awards_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reden`)
};

const pl_admin_awards_col_reason = /** @type {(inputs: Admin_Awards_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powód`)
};

const pt_admin_awards_col_reason = /** @type {(inputs: Admin_Awards_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo`)
};

const ru_admin_awards_col_reason = /** @type {(inputs: Admin_Awards_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Причина`)
};

const sv_admin_awards_col_reason = /** @type {(inputs: Admin_Awards_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivering`)
};

const tr_admin_awards_col_reason = /** @type {(inputs: Admin_Awards_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerekçe`)
};

const zh_admin_awards_col_reason = /** @type {(inputs: Admin_Awards_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`理由`)
};

const ja_admin_awards_col_reason = /** @type {(inputs: Admin_Awards_Col_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`理由`)
};

/**
* | output |
* | --- |
* | "Reason" |
*
* @param {Admin_Awards_Col_ReasonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_col_reason = /** @type {((inputs?: Admin_Awards_Col_ReasonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Col_ReasonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_col_reason(inputs)
	if (locale === "de") return de_admin_awards_col_reason(inputs)
	if (locale === "fr") return fr_admin_awards_col_reason(inputs)
	if (locale === "it") return it_admin_awards_col_reason(inputs)
	if (locale === "nl") return nl_admin_awards_col_reason(inputs)
	if (locale === "pl") return pl_admin_awards_col_reason(inputs)
	if (locale === "pt") return pt_admin_awards_col_reason(inputs)
	if (locale === "ru") return ru_admin_awards_col_reason(inputs)
	if (locale === "sv") return sv_admin_awards_col_reason(inputs)
	if (locale === "tr") return tr_admin_awards_col_reason(inputs)
	if (locale === "zh") return zh_admin_awards_col_reason(inputs)
	if (locale === "ja") return ja_admin_awards_col_reason(inputs)
	return en_admin_awards_col_reason(inputs)
});
