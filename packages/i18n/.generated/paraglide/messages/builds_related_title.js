/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Related_TitleInputs */

const en_builds_related_title = /** @type {(inputs: Builds_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More builds`)
};

const es_builds_related_title = /** @type {(inputs: Builds_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más builds`)
};

const de_builds_related_title = /** @type {(inputs: Builds_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weitere Builds`)
};

const fr_builds_related_title = /** @type {(inputs: Builds_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus de builds`)
};

const it_builds_related_title = /** @type {(inputs: Builds_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altre build`)
};

const nl_builds_related_title = /** @type {(inputs: Builds_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer builds`)
};

const pl_builds_related_title = /** @type {(inputs: Builds_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Więcej buildów`)
};

const pt_builds_related_title = /** @type {(inputs: Builds_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais builds`)
};

const ru_builds_related_title = /** @type {(inputs: Builds_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другие постройки`)
};

const sv_builds_related_title = /** @type {(inputs: Builds_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fler byggen`)
};

const tr_builds_related_title = /** @type {(inputs: Builds_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha fazla yapı`)
};

const zh_builds_related_title = /** @type {(inputs: Builds_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更多建筑`)
};

const ja_builds_related_title = /** @type {(inputs: Builds_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ほかの建築`)
};

/**
* | output |
* | --- |
* | "More builds" |
*
* @param {Builds_Related_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_related_title = /** @type {((inputs?: Builds_Related_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Related_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_related_title(inputs)
	if (locale === "de") return de_builds_related_title(inputs)
	if (locale === "fr") return fr_builds_related_title(inputs)
	if (locale === "it") return it_builds_related_title(inputs)
	if (locale === "nl") return nl_builds_related_title(inputs)
	if (locale === "pl") return pl_builds_related_title(inputs)
	if (locale === "pt") return pt_builds_related_title(inputs)
	if (locale === "ru") return ru_builds_related_title(inputs)
	if (locale === "sv") return sv_builds_related_title(inputs)
	if (locale === "tr") return tr_builds_related_title(inputs)
	if (locale === "zh") return zh_builds_related_title(inputs)
	if (locale === "ja") return ja_builds_related_title(inputs)
	return en_builds_related_title(inputs)
});
