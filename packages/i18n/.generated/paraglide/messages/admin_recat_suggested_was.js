/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Admin_Recat_Suggested_WasInputs */

const en_admin_recat_suggested_was = /** @type {(inputs: Admin_Recat_Suggested_WasInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Suggested: ${i?.name}`)
};

const es_admin_recat_suggested_was = /** @type {(inputs: Admin_Recat_Suggested_WasInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sugerida: ${i?.name}`)
};

const de_admin_recat_suggested_was = /** @type {(inputs: Admin_Recat_Suggested_WasInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vorgeschlagen: ${i?.name}`)
};

const fr_admin_recat_suggested_was = /** @type {(inputs: Admin_Recat_Suggested_WasInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Suggérée : ${i?.name}`)
};

const it_admin_recat_suggested_was = /** @type {(inputs: Admin_Recat_Suggested_WasInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Suggerita: ${i?.name}`)
};

const nl_admin_recat_suggested_was = /** @type {(inputs: Admin_Recat_Suggested_WasInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Voorgesteld: ${i?.name}`)
};

const pl_admin_recat_suggested_was = /** @type {(inputs: Admin_Recat_Suggested_WasInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sugerowana: ${i?.name}`)
};

const pt_admin_recat_suggested_was = /** @type {(inputs: Admin_Recat_Suggested_WasInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sugerida: ${i?.name}`)
};

const ru_admin_recat_suggested_was = /** @type {(inputs: Admin_Recat_Suggested_WasInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Предложено: ${i?.name}`)
};

const sv_admin_recat_suggested_was = /** @type {(inputs: Admin_Recat_Suggested_WasInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Föreslagen: ${i?.name}`)
};

const tr_admin_recat_suggested_was = /** @type {(inputs: Admin_Recat_Suggested_WasInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Önerilen: ${i?.name}`)
};

const zh_admin_recat_suggested_was = /** @type {(inputs: Admin_Recat_Suggested_WasInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`建议：${i?.name}`)
};

const ja_admin_recat_suggested_was = /** @type {(inputs: Admin_Recat_Suggested_WasInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`候補：${i?.name}`)
};

/**
* | output |
* | --- |
* | "Suggested: {name}" |
*
* @param {Admin_Recat_Suggested_WasInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_suggested_was = /** @type {((inputs: Admin_Recat_Suggested_WasInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Suggested_WasInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_suggested_was(inputs)
	if (locale === "de") return de_admin_recat_suggested_was(inputs)
	if (locale === "fr") return fr_admin_recat_suggested_was(inputs)
	if (locale === "it") return it_admin_recat_suggested_was(inputs)
	if (locale === "nl") return nl_admin_recat_suggested_was(inputs)
	if (locale === "pl") return pl_admin_recat_suggested_was(inputs)
	if (locale === "pt") return pt_admin_recat_suggested_was(inputs)
	if (locale === "ru") return ru_admin_recat_suggested_was(inputs)
	if (locale === "sv") return sv_admin_recat_suggested_was(inputs)
	if (locale === "tr") return tr_admin_recat_suggested_was(inputs)
	if (locale === "zh") return zh_admin_recat_suggested_was(inputs)
	if (locale === "ja") return ja_admin_recat_suggested_was(inputs)
	return en_admin_recat_suggested_was(inputs)
});
