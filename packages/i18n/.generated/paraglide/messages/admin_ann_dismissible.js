/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_DismissibleInputs */

const en_admin_ann_dismissible = /** @type {(inputs: Admin_Ann_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can be dismissed`)
};

const es_admin_ann_dismissible = /** @type {(inputs: Admin_Ann_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se puede cerrar`)
};

const de_admin_ann_dismissible = /** @type {(inputs: Admin_Ann_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kann geschlossen werden`)
};

const fr_admin_ann_dismissible = /** @type {(inputs: Admin_Ann_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Peut être fermée`)
};

const it_admin_ann_dismissible = /** @type {(inputs: Admin_Ann_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si può chiudere`)
};

const nl_admin_ann_dismissible = /** @type {(inputs: Admin_Ann_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan worden gesloten`)
};

const pl_admin_ann_dismissible = /** @type {(inputs: Admin_Ann_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Można zamknąć`)
};

const pt_admin_ann_dismissible = /** @type {(inputs: Admin_Ann_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pode ser fechado`)
};

const ru_admin_ann_dismissible = /** @type {(inputs: Admin_Ann_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Можно закрыть`)
};

const sv_admin_ann_dismissible = /** @type {(inputs: Admin_Ann_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan stängas`)
};

const tr_admin_ann_dismissible = /** @type {(inputs: Admin_Ann_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapatılabilir`)
};

const zh_admin_ann_dismissible = /** @type {(inputs: Admin_Ann_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可以关闭`)
};

const ja_admin_ann_dismissible = /** @type {(inputs: Admin_Ann_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`閉じられる`)
};

/**
* | output |
* | --- |
* | "Can be dismissed" |
*
* @param {Admin_Ann_DismissibleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_dismissible = /** @type {((inputs?: Admin_Ann_DismissibleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_DismissibleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_dismissible(inputs)
	if (locale === "de") return de_admin_ann_dismissible(inputs)
	if (locale === "fr") return fr_admin_ann_dismissible(inputs)
	if (locale === "it") return it_admin_ann_dismissible(inputs)
	if (locale === "nl") return nl_admin_ann_dismissible(inputs)
	if (locale === "pl") return pl_admin_ann_dismissible(inputs)
	if (locale === "pt") return pt_admin_ann_dismissible(inputs)
	if (locale === "ru") return ru_admin_ann_dismissible(inputs)
	if (locale === "sv") return sv_admin_ann_dismissible(inputs)
	if (locale === "tr") return tr_admin_ann_dismissible(inputs)
	if (locale === "zh") return zh_admin_ann_dismissible(inputs)
	if (locale === "ja") return ja_admin_ann_dismissible(inputs)
	return en_admin_ann_dismissible(inputs)
});
