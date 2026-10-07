/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Unsaved_StayInputs */

const en_admin_unsaved_stay = /** @type {(inputs: Admin_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep editing`)
};

const es_admin_unsaved_stay = /** @type {(inputs: Admin_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguir editando`)
};

const de_admin_unsaved_stay = /** @type {(inputs: Admin_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weiter bearbeiten`)
};

const fr_admin_unsaved_stay = /** @type {(inputs: Admin_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuer à modifier`)
};

const it_admin_unsaved_stay = /** @type {(inputs: Admin_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continua a modificare`)
};

const nl_admin_unsaved_stay = /** @type {(inputs: Admin_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verder bewerken`)
};

const pl_admin_unsaved_stay = /** @type {(inputs: Admin_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytuj dalej`)
};

const pt_admin_unsaved_stay = /** @type {(inputs: Admin_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuar editando`)
};

const ru_admin_unsaved_stay = /** @type {(inputs: Admin_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Продолжить правку`)
};

const sv_admin_unsaved_stay = /** @type {(inputs: Admin_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortsätt redigera`)
};

const tr_admin_unsaved_stay = /** @type {(inputs: Admin_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzenlemeye devam et`)
};

const zh_admin_unsaved_stay = /** @type {(inputs: Admin_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`继续编辑`)
};

const ja_admin_unsaved_stay = /** @type {(inputs: Admin_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`編集を続ける`)
};

/**
* | output |
* | --- |
* | "Keep editing" |
*
* @param {Admin_Unsaved_StayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_unsaved_stay = /** @type {((inputs?: Admin_Unsaved_StayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Unsaved_StayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_unsaved_stay(inputs)
	if (locale === "de") return de_admin_unsaved_stay(inputs)
	if (locale === "fr") return fr_admin_unsaved_stay(inputs)
	if (locale === "it") return it_admin_unsaved_stay(inputs)
	if (locale === "nl") return nl_admin_unsaved_stay(inputs)
	if (locale === "pl") return pl_admin_unsaved_stay(inputs)
	if (locale === "pt") return pt_admin_unsaved_stay(inputs)
	if (locale === "ru") return ru_admin_unsaved_stay(inputs)
	if (locale === "sv") return sv_admin_unsaved_stay(inputs)
	if (locale === "tr") return tr_admin_unsaved_stay(inputs)
	if (locale === "zh") return zh_admin_unsaved_stay(inputs)
	if (locale === "ja") return ja_admin_unsaved_stay(inputs)
	return en_admin_unsaved_stay(inputs)
});
