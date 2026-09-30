/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Shortcut_PreviousInputs */

const en_ranger_shortcut_previous = /** @type {(inputs: Ranger_Shortcut_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Previous item`)
};

const es_ranger_shortcut_previous = /** @type {(inputs: Ranger_Shortcut_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elemento anterior`)
};

const de_ranger_shortcut_previous = /** @type {(inputs: Ranger_Shortcut_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorheriger Eintrag`)
};

const fr_ranger_shortcut_previous = /** @type {(inputs: Ranger_Shortcut_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Élément précédent`)
};

const it_ranger_shortcut_previous = /** @type {(inputs: Ranger_Shortcut_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elemento precedente`)
};

const nl_ranger_shortcut_previous = /** @type {(inputs: Ranger_Shortcut_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorig item`)
};

const pl_ranger_shortcut_previous = /** @type {(inputs: Ranger_Shortcut_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poprzedni element`)
};

const pt_ranger_shortcut_previous = /** @type {(inputs: Ranger_Shortcut_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Item anterior`)
};

const ru_ranger_shortcut_previous = /** @type {(inputs: Ranger_Shortcut_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предыдущий элемент`)
};

const sv_ranger_shortcut_previous = /** @type {(inputs: Ranger_Shortcut_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Föregående objekt`)
};

const tr_ranger_shortcut_previous = /** @type {(inputs: Ranger_Shortcut_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önceki öğe`)
};

const zh_ranger_shortcut_previous = /** @type {(inputs: Ranger_Shortcut_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上一项`)
};

const ja_ranger_shortcut_previous = /** @type {(inputs: Ranger_Shortcut_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前の項目`)
};

/**
* | output |
* | --- |
* | "Previous item" |
*
* @param {Ranger_Shortcut_PreviousInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_shortcut_previous = /** @type {((inputs?: Ranger_Shortcut_PreviousInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Shortcut_PreviousInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_shortcut_previous(inputs)
	if (locale === "de") return de_ranger_shortcut_previous(inputs)
	if (locale === "fr") return fr_ranger_shortcut_previous(inputs)
	if (locale === "it") return it_ranger_shortcut_previous(inputs)
	if (locale === "nl") return nl_ranger_shortcut_previous(inputs)
	if (locale === "pl") return pl_ranger_shortcut_previous(inputs)
	if (locale === "pt") return pt_ranger_shortcut_previous(inputs)
	if (locale === "ru") return ru_ranger_shortcut_previous(inputs)
	if (locale === "sv") return sv_ranger_shortcut_previous(inputs)
	if (locale === "tr") return tr_ranger_shortcut_previous(inputs)
	if (locale === "zh") return zh_ranger_shortcut_previous(inputs)
	if (locale === "ja") return ja_ranger_shortcut_previous(inputs)
	return en_ranger_shortcut_previous(inputs)
});
