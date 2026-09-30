/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Related_TitleInputs */

const en_mod_related_title = /** @type {(inputs: Mod_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Related mods`)
};

const es_mod_related_title = /** @type {(inputs: Mod_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods relacionados`)
};

const de_mod_related_title = /** @type {(inputs: Mod_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ähnliche Mods`)
};

const fr_mod_related_title = /** @type {(inputs: Mod_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods similaires`)
};

const it_mod_related_title = /** @type {(inputs: Mod_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod correlate`)
};

const nl_mod_related_title = /** @type {(inputs: Mod_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vergelijkbare mods`)
};

const pl_mod_related_title = /** @type {(inputs: Mod_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podobne mody`)
};

const pt_mod_related_title = /** @type {(inputs: Mod_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods relacionados`)
};

const ru_mod_related_title = /** @type {(inputs: Mod_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Похожие моды`)
};

const sv_mod_related_title = /** @type {(inputs: Mod_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liknande moddar`)
};

const tr_mod_related_title = /** @type {(inputs: Mod_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benzer modlar`)
};

const zh_mod_related_title = /** @type {(inputs: Mod_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`相关模组`)
};

const ja_mod_related_title = /** @type {(inputs: Mod_Related_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`関連 MOD`)
};

/**
* | output |
* | --- |
* | "Related mods" |
*
* @param {Mod_Related_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_related_title = /** @type {((inputs?: Mod_Related_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Related_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_related_title(inputs)
	if (locale === "de") return de_mod_related_title(inputs)
	if (locale === "fr") return fr_mod_related_title(inputs)
	if (locale === "it") return it_mod_related_title(inputs)
	if (locale === "nl") return nl_mod_related_title(inputs)
	if (locale === "pl") return pl_mod_related_title(inputs)
	if (locale === "pt") return pt_mod_related_title(inputs)
	if (locale === "ru") return ru_mod_related_title(inputs)
	if (locale === "sv") return sv_mod_related_title(inputs)
	if (locale === "tr") return tr_mod_related_title(inputs)
	if (locale === "zh") return zh_mod_related_title(inputs)
	if (locale === "ja") return ja_mod_related_title(inputs)
	return en_mod_related_title(inputs)
});
