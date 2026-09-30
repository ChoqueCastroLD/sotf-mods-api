/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ kind: NonNullable<unknown>, name: NonNullable<unknown> }} Admin_Awards_SavedInputs */

const en_admin_awards_saved = /** @type {(inputs: Admin_Awards_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}: ${i?.name}`)
};

const es_admin_awards_saved = /** @type {(inputs: Admin_Awards_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}: ${i?.name}`)
};

const de_admin_awards_saved = /** @type {(inputs: Admin_Awards_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}: ${i?.name}`)
};

const fr_admin_awards_saved = /** @type {(inputs: Admin_Awards_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind} : ${i?.name}`)
};

const it_admin_awards_saved = /** @type {(inputs: Admin_Awards_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}: ${i?.name}`)
};

const nl_admin_awards_saved = /** @type {(inputs: Admin_Awards_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}: ${i?.name}`)
};

const pl_admin_awards_saved = /** @type {(inputs: Admin_Awards_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}: ${i?.name}`)
};

const pt_admin_awards_saved = /** @type {(inputs: Admin_Awards_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}: ${i?.name}`)
};

const ru_admin_awards_saved = /** @type {(inputs: Admin_Awards_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}: ${i?.name}`)
};

const sv_admin_awards_saved = /** @type {(inputs: Admin_Awards_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}: ${i?.name}`)
};

const tr_admin_awards_saved = /** @type {(inputs: Admin_Awards_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}: ${i?.name}`)
};

const zh_admin_awards_saved = /** @type {(inputs: Admin_Awards_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}：${i?.name}`)
};

const ja_admin_awards_saved = /** @type {(inputs: Admin_Awards_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}：${i?.name}`)
};

/**
* | output |
* | --- |
* | "{kind}: {name}" |
*
* @param {Admin_Awards_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_saved = /** @type {((inputs: Admin_Awards_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_saved(inputs)
	if (locale === "de") return de_admin_awards_saved(inputs)
	if (locale === "fr") return fr_admin_awards_saved(inputs)
	if (locale === "it") return it_admin_awards_saved(inputs)
	if (locale === "nl") return nl_admin_awards_saved(inputs)
	if (locale === "pl") return pl_admin_awards_saved(inputs)
	if (locale === "pt") return pt_admin_awards_saved(inputs)
	if (locale === "ru") return ru_admin_awards_saved(inputs)
	if (locale === "sv") return sv_admin_awards_saved(inputs)
	if (locale === "tr") return tr_admin_awards_saved(inputs)
	if (locale === "zh") return zh_admin_awards_saved(inputs)
	if (locale === "ja") return ja_admin_awards_saved(inputs)
	return en_admin_awards_saved(inputs)
});
