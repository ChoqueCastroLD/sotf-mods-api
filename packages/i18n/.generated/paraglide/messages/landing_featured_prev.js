/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Featured_PrevInputs */

const en_landing_featured_prev = /** @type {(inputs: Landing_Featured_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Previous mods`)
};

const es_landing_featured_prev = /** @type {(inputs: Landing_Featured_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods anteriores`)
};

const de_landing_featured_prev = /** @type {(inputs: Landing_Featured_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorherige Mods`)
};

const fr_landing_featured_prev = /** @type {(inputs: Landing_Featured_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods précédents`)
};

const it_landing_featured_prev = /** @type {(inputs: Landing_Featured_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod precedenti`)
};

const nl_landing_featured_prev = /** @type {(inputs: Landing_Featured_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorige mods`)
};

const pl_landing_featured_prev = /** @type {(inputs: Landing_Featured_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poprzednie mody`)
};

const pt_landing_featured_prev = /** @type {(inputs: Landing_Featured_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods anteriores`)
};

const ru_landing_featured_prev = /** @type {(inputs: Landing_Featured_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предыдущие моды`)
};

const sv_landing_featured_prev = /** @type {(inputs: Landing_Featured_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Föregående mods`)
};

const tr_landing_featured_prev = /** @type {(inputs: Landing_Featured_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önceki modlar`)
};

const zh_landing_featured_prev = /** @type {(inputs: Landing_Featured_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上一组模组`)
};

const ja_landing_featured_prev = /** @type {(inputs: Landing_Featured_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前のMOD`)
};

/**
* | output |
* | --- |
* | "Previous mods" |
*
* @param {Landing_Featured_PrevInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_featured_prev = /** @type {((inputs?: Landing_Featured_PrevInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Featured_PrevInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_featured_prev(inputs)
	if (locale === "de") return de_landing_featured_prev(inputs)
	if (locale === "fr") return fr_landing_featured_prev(inputs)
	if (locale === "it") return it_landing_featured_prev(inputs)
	if (locale === "nl") return nl_landing_featured_prev(inputs)
	if (locale === "pl") return pl_landing_featured_prev(inputs)
	if (locale === "pt") return pt_landing_featured_prev(inputs)
	if (locale === "ru") return ru_landing_featured_prev(inputs)
	if (locale === "sv") return sv_landing_featured_prev(inputs)
	if (locale === "tr") return tr_landing_featured_prev(inputs)
	if (locale === "zh") return zh_landing_featured_prev(inputs)
	if (locale === "ja") return ja_landing_featured_prev(inputs)
	return en_landing_featured_prev(inputs)
});
