/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Sort_NameInputs */

const en_me_sort_name = /** @type {(inputs: Me_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name`)
};

const es_me_sort_name = /** @type {(inputs: Me_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre`)
};

const de_me_sort_name = /** @type {(inputs: Me_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name`)
};

const fr_me_sort_name = /** @type {(inputs: Me_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom`)
};

const it_me_sort_name = /** @type {(inputs: Me_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome`)
};

const nl_me_sort_name = /** @type {(inputs: Me_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naam`)
};

const pl_me_sort_name = /** @type {(inputs: Me_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa`)
};

const pt_me_sort_name = /** @type {(inputs: Me_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome`)
};

const ru_me_sort_name = /** @type {(inputs: Me_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название`)
};

const sv_me_sort_name = /** @type {(inputs: Me_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Namn`)
};

const tr_me_sort_name = /** @type {(inputs: Me_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ad`)
};

const zh_me_sort_name = /** @type {(inputs: Me_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名称`)
};

const ja_me_sort_name = /** @type {(inputs: Me_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前順`)
};

/**
* | output |
* | --- |
* | "Name" |
*
* @param {Me_Sort_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_sort_name = /** @type {((inputs?: Me_Sort_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Sort_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_sort_name(inputs)
	if (locale === "de") return de_me_sort_name(inputs)
	if (locale === "fr") return fr_me_sort_name(inputs)
	if (locale === "it") return it_me_sort_name(inputs)
	if (locale === "nl") return nl_me_sort_name(inputs)
	if (locale === "pl") return pl_me_sort_name(inputs)
	if (locale === "pt") return pt_me_sort_name(inputs)
	if (locale === "ru") return ru_me_sort_name(inputs)
	if (locale === "sv") return sv_me_sort_name(inputs)
	if (locale === "tr") return tr_me_sort_name(inputs)
	if (locale === "zh") return zh_me_sort_name(inputs)
	if (locale === "ja") return ja_me_sort_name(inputs)
	return en_me_sort_name(inputs)
});
