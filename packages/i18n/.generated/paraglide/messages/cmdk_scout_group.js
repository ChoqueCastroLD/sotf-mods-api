/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Scout_GroupInputs */

const en_cmdk_scout_group = /** @type {(inputs: Cmdk_Scout_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout’s picks`)
};

const es_cmdk_scout_group = /** @type {(inputs: Cmdk_Scout_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sugerencias de Scout`)
};

const de_cmdk_scout_group = /** @type {(inputs: Cmdk_Scout_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scouts Vorschläge`)
};

const fr_cmdk_scout_group = /** @type {(inputs: Cmdk_Scout_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suggestions de Scout`)
};

const it_cmdk_scout_group = /** @type {(inputs: Cmdk_Scout_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suggerimenti di Scout`)
};

const nl_cmdk_scout_group = /** @type {(inputs: Cmdk_Scout_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suggesties van Scout`)
};

const pl_cmdk_scout_group = /** @type {(inputs: Cmdk_Scout_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Propozycje Scouta`)
};

const pt_cmdk_scout_group = /** @type {(inputs: Cmdk_Scout_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sugestões do Scout`)
};

const ru_cmdk_scout_group = /** @type {(inputs: Cmdk_Scout_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подборка Scout`)
};

const sv_cmdk_scout_group = /** @type {(inputs: Cmdk_Scout_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scouts förslag`)
};

const tr_cmdk_scout_group = /** @type {(inputs: Cmdk_Scout_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout’un önerileri`)
};

const zh_cmdk_scout_group = /** @type {(inputs: Cmdk_Scout_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout 的推荐`)
};

const ja_cmdk_scout_group = /** @type {(inputs: Cmdk_Scout_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scoutのおすすめ`)
};

/**
* | output |
* | --- |
* | "Scout’s picks" |
*
* @param {Cmdk_Scout_GroupInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_scout_group = /** @type {((inputs?: Cmdk_Scout_GroupInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Scout_GroupInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_scout_group(inputs)
	if (locale === "de") return de_cmdk_scout_group(inputs)
	if (locale === "fr") return fr_cmdk_scout_group(inputs)
	if (locale === "it") return it_cmdk_scout_group(inputs)
	if (locale === "nl") return nl_cmdk_scout_group(inputs)
	if (locale === "pl") return pl_cmdk_scout_group(inputs)
	if (locale === "pt") return pt_cmdk_scout_group(inputs)
	if (locale === "ru") return ru_cmdk_scout_group(inputs)
	if (locale === "sv") return sv_cmdk_scout_group(inputs)
	if (locale === "tr") return tr_cmdk_scout_group(inputs)
	if (locale === "zh") return zh_cmdk_scout_group(inputs)
	if (locale === "ja") return ja_cmdk_scout_group(inputs)
	return en_cmdk_scout_group(inputs)
});
