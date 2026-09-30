/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ loader: NonNullable<unknown>, build: NonNullable<unknown>, status: NonNullable<unknown> }} Admin_Eco_SavedInputs */

const en_admin_eco_saved = /** @type {(inputs: Admin_Eco_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.loader} on ${i?.build}: ${i?.status}`)
};

const es_admin_eco_saved = /** @type {(inputs: Admin_Eco_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.loader} en ${i?.build}: ${i?.status}`)
};

const de_admin_eco_saved = /** @type {(inputs: Admin_Eco_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.loader} auf ${i?.build}: ${i?.status}`)
};

const fr_admin_eco_saved = /** @type {(inputs: Admin_Eco_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.loader} sur ${i?.build} : ${i?.status}`)
};

const it_admin_eco_saved = /** @type {(inputs: Admin_Eco_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.loader} su ${i?.build}: ${i?.status}`)
};

const nl_admin_eco_saved = /** @type {(inputs: Admin_Eco_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.loader} op ${i?.build}: ${i?.status}`)
};

const pl_admin_eco_saved = /** @type {(inputs: Admin_Eco_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.loader} na ${i?.build}: ${i?.status}`)
};

const pt_admin_eco_saved = /** @type {(inputs: Admin_Eco_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.loader} no ${i?.build}: ${i?.status}`)
};

const ru_admin_eco_saved = /** @type {(inputs: Admin_Eco_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.loader} на ${i?.build}: ${i?.status}`)
};

const sv_admin_eco_saved = /** @type {(inputs: Admin_Eco_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.loader} på ${i?.build}: ${i?.status}`)
};

const tr_admin_eco_saved = /** @type {(inputs: Admin_Eco_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} üzerinde ${i?.loader}: ${i?.status}`)
};

const zh_admin_eco_saved = /** @type {(inputs: Admin_Eco_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.loader} 在 ${i?.build} 上：${i?.status}`)
};

const ja_admin_eco_saved = /** @type {(inputs: Admin_Eco_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} での ${i?.loader}：${i?.status}`)
};

/**
* | output |
* | --- |
* | "{loader} on {build}: {status}" |
*
* @param {Admin_Eco_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_saved = /** @type {((inputs: Admin_Eco_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_saved(inputs)
	if (locale === "de") return de_admin_eco_saved(inputs)
	if (locale === "fr") return fr_admin_eco_saved(inputs)
	if (locale === "it") return it_admin_eco_saved(inputs)
	if (locale === "nl") return nl_admin_eco_saved(inputs)
	if (locale === "pl") return pl_admin_eco_saved(inputs)
	if (locale === "pt") return pt_admin_eco_saved(inputs)
	if (locale === "ru") return ru_admin_eco_saved(inputs)
	if (locale === "sv") return sv_admin_eco_saved(inputs)
	if (locale === "tr") return tr_admin_eco_saved(inputs)
	if (locale === "zh") return zh_admin_eco_saved(inputs)
	if (locale === "ja") return ja_admin_eco_saved(inputs)
	return en_admin_eco_saved(inputs)
});
