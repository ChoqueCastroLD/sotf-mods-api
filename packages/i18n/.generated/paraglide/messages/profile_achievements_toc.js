/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_TocInputs */

const en_profile_achievements_toc = /** @type {(inputs: Profile_Achievements_TocInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`On this page`)
};

const es_profile_achievements_toc = /** @type {(inputs: Profile_Achievements_TocInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En esta página`)
};

const de_profile_achievements_toc = /** @type {(inputs: Profile_Achievements_TocInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auf dieser Seite`)
};

const fr_profile_achievements_toc = /** @type {(inputs: Profile_Achievements_TocInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sur cette page`)
};

const it_profile_achievements_toc = /** @type {(inputs: Profile_Achievements_TocInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In questa pagina`)
};

const nl_profile_achievements_toc = /** @type {(inputs: Profile_Achievements_TocInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Op deze pagina`)
};

const pl_profile_achievements_toc = /** @type {(inputs: Profile_Achievements_TocInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na tej stronie`)
};

const pt_profile_achievements_toc = /** @type {(inputs: Profile_Achievements_TocInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nesta página`)
};

const ru_profile_achievements_toc = /** @type {(inputs: Profile_Achievements_TocInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На этой странице`)
};

const sv_profile_achievements_toc = /** @type {(inputs: Profile_Achievements_TocInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`På den här sidan`)
};

const tr_profile_achievements_toc = /** @type {(inputs: Profile_Achievements_TocInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sayfada`)
};

const zh_profile_achievements_toc = /** @type {(inputs: Profile_Achievements_TocInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本页内容`)
};

const ja_profile_achievements_toc = /** @type {(inputs: Profile_Achievements_TocInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このページの内容`)
};

/**
* | output |
* | --- |
* | "On this page" |
*
* @param {Profile_Achievements_TocInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_toc = /** @type {((inputs?: Profile_Achievements_TocInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_TocInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_toc(inputs)
	if (locale === "de") return de_profile_achievements_toc(inputs)
	if (locale === "fr") return fr_profile_achievements_toc(inputs)
	if (locale === "it") return it_profile_achievements_toc(inputs)
	if (locale === "nl") return nl_profile_achievements_toc(inputs)
	if (locale === "pl") return pl_profile_achievements_toc(inputs)
	if (locale === "pt") return pt_profile_achievements_toc(inputs)
	if (locale === "ru") return ru_profile_achievements_toc(inputs)
	if (locale === "sv") return sv_profile_achievements_toc(inputs)
	if (locale === "tr") return tr_profile_achievements_toc(inputs)
	if (locale === "zh") return zh_profile_achievements_toc(inputs)
	if (locale === "ja") return ja_profile_achievements_toc(inputs)
	return en_profile_achievements_toc(inputs)
});
