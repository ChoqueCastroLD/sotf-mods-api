/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Cards_Empty_ActionInputs */

const en_profile_cards_empty_action = /** @type {(inputs: Profile_Cards_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Browse mods`)
};

const es_profile_cards_empty_action = /** @type {(inputs: Profile_Cards_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar mods`)
};

const de_profile_cards_empty_action = /** @type {(inputs: Profile_Cards_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods durchsuchen`)
};

const fr_profile_cards_empty_action = /** @type {(inputs: Profile_Cards_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parcourir les mods`)
};

const it_profile_cards_empty_action = /** @type {(inputs: Profile_Cards_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esplora le mod`)
};

const nl_profile_cards_empty_action = /** @type {(inputs: Profile_Cards_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods bekijken`)
};

const pl_profile_cards_empty_action = /** @type {(inputs: Profile_Cards_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądaj mody`)
};

const pt_profile_cards_empty_action = /** @type {(inputs: Profile_Cards_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar mods`)
};

const ru_profile_cards_empty_action = /** @type {(inputs: Profile_Cards_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смотреть моды`)
};

const sv_profile_cards_empty_action = /** @type {(inputs: Profile_Cards_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bläddra bland moddar`)
};

const tr_profile_cards_empty_action = /** @type {(inputs: Profile_Cards_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlara göz at`)
};

const zh_profile_cards_empty_action = /** @type {(inputs: Profile_Cards_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浏览模组`)
};

const ja_profile_cards_empty_action = /** @type {(inputs: Profile_Cards_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD を探す`)
};

/**
* | output |
* | --- |
* | "Browse mods" |
*
* @param {Profile_Cards_Empty_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_cards_empty_action = /** @type {((inputs?: Profile_Cards_Empty_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Cards_Empty_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_cards_empty_action(inputs)
	if (locale === "de") return de_profile_cards_empty_action(inputs)
	if (locale === "fr") return fr_profile_cards_empty_action(inputs)
	if (locale === "it") return it_profile_cards_empty_action(inputs)
	if (locale === "nl") return nl_profile_cards_empty_action(inputs)
	if (locale === "pl") return pl_profile_cards_empty_action(inputs)
	if (locale === "pt") return pt_profile_cards_empty_action(inputs)
	if (locale === "ru") return ru_profile_cards_empty_action(inputs)
	if (locale === "sv") return sv_profile_cards_empty_action(inputs)
	if (locale === "tr") return tr_profile_cards_empty_action(inputs)
	if (locale === "zh") return zh_profile_cards_empty_action(inputs)
	if (locale === "ja") return ja_profile_cards_empty_action(inputs)
	return en_profile_cards_empty_action(inputs)
});
