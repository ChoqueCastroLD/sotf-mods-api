/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Compat_UntestedInputs */

const en_explore_compat_untested = /** @type {(inputs: Explore_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not tested on it yet`)
};

const es_explore_compat_untested = /** @type {(inputs: Explore_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún sin probar en él`)
};

const de_explore_compat_untested = /** @type {(inputs: Explore_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Darauf noch nicht getestet`)
};

const fr_explore_compat_untested = /** @type {(inputs: Explore_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore testé dessus`)
};

const it_explore_compat_untested = /** @type {(inputs: Explore_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non ancora testata`)
};

const nl_explore_compat_untested = /** @type {(inputs: Explore_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daar nog niet op getest`)
};

const pl_explore_compat_untested = /** @type {(inputs: Explore_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeszcze na niej nietestowane`)
};

const pt_explore_compat_untested = /** @type {(inputs: Explore_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não testado nele`)
};

const ru_explore_compat_untested = /** @type {(inputs: Explore_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На нём ещё не проверено`)
};

const sv_explore_compat_untested = /** @type {(inputs: Explore_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte testad på den än`)
};

const tr_explore_compat_untested = /** @type {(inputs: Explore_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz test edilmedi`)
};

const zh_explore_compat_untested = /** @type {(inputs: Explore_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`尚未在当前补丁测试`)
};

const ja_explore_compat_untested = /** @type {(inputs: Explore_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現行パッチでは未検証`)
};

/**
* | output |
* | --- |
* | "Not tested on it yet" |
*
* @param {Explore_Compat_UntestedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_compat_untested = /** @type {((inputs?: Explore_Compat_UntestedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Compat_UntestedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_compat_untested(inputs)
	if (locale === "de") return de_explore_compat_untested(inputs)
	if (locale === "fr") return fr_explore_compat_untested(inputs)
	if (locale === "it") return it_explore_compat_untested(inputs)
	if (locale === "nl") return nl_explore_compat_untested(inputs)
	if (locale === "pl") return pl_explore_compat_untested(inputs)
	if (locale === "pt") return pt_explore_compat_untested(inputs)
	if (locale === "ru") return ru_explore_compat_untested(inputs)
	if (locale === "sv") return sv_explore_compat_untested(inputs)
	if (locale === "tr") return tr_explore_compat_untested(inputs)
	if (locale === "zh") return zh_explore_compat_untested(inputs)
	if (locale === "ja") return ja_explore_compat_untested(inputs)
	return en_explore_compat_untested(inputs)
});
