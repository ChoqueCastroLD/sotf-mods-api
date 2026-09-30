/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Kits_Empty_ActionInputs */

const en_profile_kits_empty_action = /** @type {(inputs: Profile_Kits_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Browse kits`)
};

const es_profile_kits_empty_action = /** @type {(inputs: Profile_Kits_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver kits`)
};

const de_profile_kits_empty_action = /** @type {(inputs: Profile_Kits_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits ansehen`)
};

const fr_profile_kits_empty_action = /** @type {(inputs: Profile_Kits_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parcourir les kits`)
};

const it_profile_kits_empty_action = /** @type {(inputs: Profile_Kits_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sfoglia i kit`)
};

const nl_profile_kits_empty_action = /** @type {(inputs: Profile_Kits_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits bekijken`)
};

const pl_profile_kits_empty_action = /** @type {(inputs: Profile_Kits_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądaj zestawy`)
};

const pt_profile_kits_empty_action = /** @type {(inputs: Profile_Kits_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver kits`)
};

const ru_profile_kits_empty_action = /** @type {(inputs: Profile_Kits_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смотреть наборы`)
};

const sv_profile_kits_empty_action = /** @type {(inputs: Profile_Kits_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bläddra bland kit`)
};

const tr_profile_kits_empty_action = /** @type {(inputs: Profile_Kits_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitlere göz at`)
};

const zh_profile_kits_empty_action = /** @type {(inputs: Profile_Kits_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浏览套装`)
};

const ja_profile_kits_empty_action = /** @type {(inputs: Profile_Kits_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットを見る`)
};

/**
* | output |
* | --- |
* | "Browse kits" |
*
* @param {Profile_Kits_Empty_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_kits_empty_action = /** @type {((inputs?: Profile_Kits_Empty_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Kits_Empty_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_kits_empty_action(inputs)
	if (locale === "de") return de_profile_kits_empty_action(inputs)
	if (locale === "fr") return fr_profile_kits_empty_action(inputs)
	if (locale === "it") return it_profile_kits_empty_action(inputs)
	if (locale === "nl") return nl_profile_kits_empty_action(inputs)
	if (locale === "pl") return pl_profile_kits_empty_action(inputs)
	if (locale === "pt") return pt_profile_kits_empty_action(inputs)
	if (locale === "ru") return ru_profile_kits_empty_action(inputs)
	if (locale === "sv") return sv_profile_kits_empty_action(inputs)
	if (locale === "tr") return tr_profile_kits_empty_action(inputs)
	if (locale === "zh") return zh_profile_kits_empty_action(inputs)
	if (locale === "ja") return ja_profile_kits_empty_action(inputs)
	return en_profile_kits_empty_action(inputs)
});
