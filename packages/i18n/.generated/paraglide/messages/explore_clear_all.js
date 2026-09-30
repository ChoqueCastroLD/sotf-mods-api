/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Clear_AllInputs */

const en_explore_clear_all = /** @type {(inputs: Explore_Clear_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear all`)
};

const es_explore_clear_all = /** @type {(inputs: Explore_Clear_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar todos`)
};

const de_explore_clear_all = /** @type {(inputs: Explore_Clear_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle entfernen`)
};

const fr_explore_clear_all = /** @type {(inputs: Explore_Clear_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout effacer`)
};

const it_explore_clear_all = /** @type {(inputs: Explore_Clear_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancella tutto`)
};

const nl_explore_clear_all = /** @type {(inputs: Explore_Clear_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles wissen`)
};

const pl_explore_clear_all = /** @type {(inputs: Explore_Clear_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyczyść wszystko`)
};

const pt_explore_clear_all = /** @type {(inputs: Explore_Clear_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpar tudo`)
};

const ru_explore_clear_all = /** @type {(inputs: Explore_Clear_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сбросить всё`)
};

const sv_explore_clear_all = /** @type {(inputs: Explore_Clear_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rensa allt`)
};

const tr_explore_clear_all = /** @type {(inputs: Explore_Clear_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tümünü temizle`)
};

const zh_explore_clear_all = /** @type {(inputs: Explore_Clear_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部清除`)
};

const ja_explore_clear_all = /** @type {(inputs: Explore_Clear_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて解除`)
};

/**
* | output |
* | --- |
* | "Clear all" |
*
* @param {Explore_Clear_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_clear_all = /** @type {((inputs?: Explore_Clear_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Clear_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_clear_all(inputs)
	if (locale === "de") return de_explore_clear_all(inputs)
	if (locale === "fr") return fr_explore_clear_all(inputs)
	if (locale === "it") return it_explore_clear_all(inputs)
	if (locale === "nl") return nl_explore_clear_all(inputs)
	if (locale === "pl") return pl_explore_clear_all(inputs)
	if (locale === "pt") return pt_explore_clear_all(inputs)
	if (locale === "ru") return ru_explore_clear_all(inputs)
	if (locale === "sv") return sv_explore_clear_all(inputs)
	if (locale === "tr") return tr_explore_clear_all(inputs)
	if (locale === "zh") return zh_explore_clear_all(inputs)
	if (locale === "ja") return ja_explore_clear_all(inputs)
	return en_explore_clear_all(inputs)
});
