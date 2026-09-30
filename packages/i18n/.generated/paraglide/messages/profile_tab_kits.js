/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Tab_KitsInputs */

const en_profile_tab_kits = /** @type {(inputs: Profile_Tab_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const es_profile_tab_kits = /** @type {(inputs: Profile_Tab_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const de_profile_tab_kits = /** @type {(inputs: Profile_Tab_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const fr_profile_tab_kits = /** @type {(inputs: Profile_Tab_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const it_profile_tab_kits = /** @type {(inputs: Profile_Tab_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const nl_profile_tab_kits = /** @type {(inputs: Profile_Tab_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const pl_profile_tab_kits = /** @type {(inputs: Profile_Tab_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zestawy`)
};

const pt_profile_tab_kits = /** @type {(inputs: Profile_Tab_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const ru_profile_tab_kits = /** @type {(inputs: Profile_Tab_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Наборы`)
};

const sv_profile_tab_kits = /** @type {(inputs: Profile_Tab_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const tr_profile_tab_kits = /** @type {(inputs: Profile_Tab_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitler`)
};

const zh_profile_tab_kits = /** @type {(inputs: Profile_Tab_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`合集`)
};

const ja_profile_tab_kits = /** @type {(inputs: Profile_Tab_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キット`)
};

/**
* | output |
* | --- |
* | "Kits" |
*
* @param {Profile_Tab_KitsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_tab_kits = /** @type {((inputs?: Profile_Tab_KitsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Tab_KitsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_tab_kits(inputs)
	if (locale === "de") return de_profile_tab_kits(inputs)
	if (locale === "fr") return fr_profile_tab_kits(inputs)
	if (locale === "it") return it_profile_tab_kits(inputs)
	if (locale === "nl") return nl_profile_tab_kits(inputs)
	if (locale === "pl") return pl_profile_tab_kits(inputs)
	if (locale === "pt") return pt_profile_tab_kits(inputs)
	if (locale === "ru") return ru_profile_tab_kits(inputs)
	if (locale === "sv") return sv_profile_tab_kits(inputs)
	if (locale === "tr") return tr_profile_tab_kits(inputs)
	if (locale === "zh") return zh_profile_tab_kits(inputs)
	if (locale === "ja") return ja_profile_tab_kits(inputs)
	return en_profile_tab_kits(inputs)
});
