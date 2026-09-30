/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Pin_BuildInputs */

const en_landing_pin_build = /** @type {(inputs: Landing_Pin_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trending build`)
};

const es_landing_pin_build = /** @type {(inputs: Landing_Pin_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build en tendencia`)
};

const de_landing_pin_build = /** @type {(inputs: Landing_Pin_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Angesagter Build`)
};

const fr_landing_pin_build = /** @type {(inputs: Landing_Pin_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build tendance`)
};

const it_landing_pin_build = /** @type {(inputs: Landing_Pin_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build di tendenza`)
};

const nl_landing_pin_build = /** @type {(inputs: Landing_Pin_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Populaire build`)
};

const pl_landing_pin_build = /** @type {(inputs: Landing_Pin_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popularny build`)
};

const pt_landing_pin_build = /** @type {(inputs: Landing_Pin_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build em alta`)
};

const ru_landing_pin_build = /** @type {(inputs: Landing_Pin_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Популярная постройка`)
};

const sv_landing_pin_build = /** @type {(inputs: Landing_Pin_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Populärt bygge`)
};

const tr_landing_pin_build = /** @type {(inputs: Landing_Pin_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popüler yapı`)
};

const zh_landing_pin_build = /** @type {(inputs: Landing_Pin_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`热门建筑`)
};

const ja_landing_pin_build = /** @type {(inputs: Landing_Pin_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`人気の建築`)
};

/**
* | output |
* | --- |
* | "Trending build" |
*
* @param {Landing_Pin_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_pin_build = /** @type {((inputs?: Landing_Pin_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Pin_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_pin_build(inputs)
	if (locale === "de") return de_landing_pin_build(inputs)
	if (locale === "fr") return fr_landing_pin_build(inputs)
	if (locale === "it") return it_landing_pin_build(inputs)
	if (locale === "nl") return nl_landing_pin_build(inputs)
	if (locale === "pl") return pl_landing_pin_build(inputs)
	if (locale === "pt") return pt_landing_pin_build(inputs)
	if (locale === "ru") return ru_landing_pin_build(inputs)
	if (locale === "sv") return sv_landing_pin_build(inputs)
	if (locale === "tr") return tr_landing_pin_build(inputs)
	if (locale === "zh") return zh_landing_pin_build(inputs)
	if (locale === "ja") return ja_landing_pin_build(inputs)
	return en_landing_pin_build(inputs)
});
