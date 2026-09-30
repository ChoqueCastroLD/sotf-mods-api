/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Not_DismissibleInputs */

const en_admin_ann_not_dismissible = /** @type {(inputs: Admin_Ann_Not_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Always visible`)
};

const es_admin_ann_not_dismissible = /** @type {(inputs: Admin_Ann_Not_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siempre visible`)
};

const de_admin_ann_not_dismissible = /** @type {(inputs: Admin_Ann_Not_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Immer sichtbar`)
};

const fr_admin_ann_not_dismissible = /** @type {(inputs: Admin_Ann_Not_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toujours visible`)
};

const it_admin_ann_not_dismissible = /** @type {(inputs: Admin_Ann_Not_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sempre visibile`)
};

const nl_admin_ann_not_dismissible = /** @type {(inputs: Admin_Ann_Not_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altijd zichtbaar`)
};

const pl_admin_ann_not_dismissible = /** @type {(inputs: Admin_Ann_Not_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zawsze widoczne`)
};

const pt_admin_ann_not_dismissible = /** @type {(inputs: Admin_Ann_Not_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sempre visível`)
};

const ru_admin_ann_not_dismissible = /** @type {(inputs: Admin_Ann_Not_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всегда видно`)
};

const sv_admin_ann_not_dismissible = /** @type {(inputs: Admin_Ann_Not_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alltid synligt`)
};

const tr_admin_ann_not_dismissible = /** @type {(inputs: Admin_Ann_Not_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her zaman görünür`)
};

const zh_admin_ann_not_dismissible = /** @type {(inputs: Admin_Ann_Not_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`始终显示`)
};

const ja_admin_ann_not_dismissible = /** @type {(inputs: Admin_Ann_Not_DismissibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`常に表示`)
};

/**
* | output |
* | --- |
* | "Always visible" |
*
* @param {Admin_Ann_Not_DismissibleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_not_dismissible = /** @type {((inputs?: Admin_Ann_Not_DismissibleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Not_DismissibleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_not_dismissible(inputs)
	if (locale === "de") return de_admin_ann_not_dismissible(inputs)
	if (locale === "fr") return fr_admin_ann_not_dismissible(inputs)
	if (locale === "it") return it_admin_ann_not_dismissible(inputs)
	if (locale === "nl") return nl_admin_ann_not_dismissible(inputs)
	if (locale === "pl") return pl_admin_ann_not_dismissible(inputs)
	if (locale === "pt") return pt_admin_ann_not_dismissible(inputs)
	if (locale === "ru") return ru_admin_ann_not_dismissible(inputs)
	if (locale === "sv") return sv_admin_ann_not_dismissible(inputs)
	if (locale === "tr") return tr_admin_ann_not_dismissible(inputs)
	if (locale === "zh") return zh_admin_ann_not_dismissible(inputs)
	if (locale === "ja") return ja_admin_ann_not_dismissible(inputs)
	return en_admin_ann_not_dismissible(inputs)
});
