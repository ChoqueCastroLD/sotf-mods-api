/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Compat_WorksInputs */

const en_explore_compat_works = /** @type {(inputs: Explore_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Works on the current patch`)
};

const es_explore_compat_works = /** @type {(inputs: Explore_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona en el parche actual`)
};

const de_explore_compat_works = /** @type {(inputs: Explore_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läuft auf dem aktuellen Patch`)
};

const fr_explore_compat_works = /** @type {(inputs: Explore_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fonctionne sur le patch actuel`)
};

const it_explore_compat_works = /** @type {(inputs: Explore_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funziona sulla patch attuale`)
};

const nl_explore_compat_works = /** @type {(inputs: Explore_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkt op de huidige patch`)
};

const pl_explore_compat_works = /** @type {(inputs: Explore_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działa na obecnej łatce`)
};

const pt_explore_compat_works = /** @type {(inputs: Explore_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona no patch atual`)
};

const ru_explore_compat_works = /** @type {(inputs: Explore_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работает на текущем патче`)
};

const sv_explore_compat_works = /** @type {(inputs: Explore_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fungerar på aktuell patch`)
};

const tr_explore_compat_works = /** @type {(inputs: Explore_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncel yamada çalışıyor`)
};

const zh_explore_compat_works = /** @type {(inputs: Explore_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可用于当前补丁`)
};

const ja_explore_compat_works = /** @type {(inputs: Explore_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現行パッチで動作`)
};

/**
* | output |
* | --- |
* | "Works on the current patch" |
*
* @param {Explore_Compat_WorksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_compat_works = /** @type {((inputs?: Explore_Compat_WorksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Compat_WorksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_compat_works(inputs)
	if (locale === "de") return de_explore_compat_works(inputs)
	if (locale === "fr") return fr_explore_compat_works(inputs)
	if (locale === "it") return it_explore_compat_works(inputs)
	if (locale === "nl") return nl_explore_compat_works(inputs)
	if (locale === "pl") return pl_explore_compat_works(inputs)
	if (locale === "pt") return pt_explore_compat_works(inputs)
	if (locale === "ru") return ru_explore_compat_works(inputs)
	if (locale === "sv") return sv_explore_compat_works(inputs)
	if (locale === "tr") return tr_explore_compat_works(inputs)
	if (locale === "zh") return zh_explore_compat_works(inputs)
	if (locale === "ja") return ja_explore_compat_works(inputs)
	return en_explore_compat_works(inputs)
});
