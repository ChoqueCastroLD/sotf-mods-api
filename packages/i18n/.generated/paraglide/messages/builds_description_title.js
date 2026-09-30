/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Description_TitleInputs */

const en_builds_description_title = /** @type {(inputs: Builds_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`About this build`)
};

const es_builds_description_title = /** @type {(inputs: Builds_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobre esta build`)
};

const de_builds_description_title = /** @type {(inputs: Builds_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Über diesen Build`)
};

const fr_builds_description_title = /** @type {(inputs: Builds_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À propos de cette build`)
};

const it_builds_description_title = /** @type {(inputs: Builds_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informazioni su questa build`)
};

const nl_builds_description_title = /** @type {(inputs: Builds_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Over deze build`)
};

const pl_builds_description_title = /** @type {(inputs: Builds_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O tym buildzie`)
};

const pt_builds_description_title = /** @type {(inputs: Builds_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobre esta build`)
};

const ru_builds_description_title = /** @type {(inputs: Builds_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Об этой постройке`)
};

const sv_builds_description_title = /** @type {(inputs: Builds_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Om bygget`)
};

const tr_builds_description_title = /** @type {(inputs: Builds_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu yapı hakkında`)
};

const zh_builds_description_title = /** @type {(inputs: Builds_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关于此建筑`)
};

const ja_builds_description_title = /** @type {(inputs: Builds_Description_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この建築について`)
};

/**
* | output |
* | --- |
* | "About this build" |
*
* @param {Builds_Description_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_description_title = /** @type {((inputs?: Builds_Description_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Description_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_description_title(inputs)
	if (locale === "de") return de_builds_description_title(inputs)
	if (locale === "fr") return fr_builds_description_title(inputs)
	if (locale === "it") return it_builds_description_title(inputs)
	if (locale === "nl") return nl_builds_description_title(inputs)
	if (locale === "pl") return pl_builds_description_title(inputs)
	if (locale === "pt") return pt_builds_description_title(inputs)
	if (locale === "ru") return ru_builds_description_title(inputs)
	if (locale === "sv") return sv_builds_description_title(inputs)
	if (locale === "tr") return tr_builds_description_title(inputs)
	if (locale === "zh") return zh_builds_description_title(inputs)
	if (locale === "ja") return ja_builds_description_title(inputs)
	return en_builds_description_title(inputs)
});
