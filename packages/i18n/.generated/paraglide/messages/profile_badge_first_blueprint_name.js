/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_First_Blueprint_NameInputs */

const en_profile_badge_first_blueprint_name = /** @type {(inputs: Profile_Badge_First_Blueprint_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`First Blueprint`)
};

const es_profile_badge_first_blueprint_name = /** @type {(inputs: Profile_Badge_First_Blueprint_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primer plano`)
};

const de_profile_badge_first_blueprint_name = /** @type {(inputs: Profile_Badge_First_Blueprint_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erster Bauplan`)
};

const fr_profile_badge_first_blueprint_name = /** @type {(inputs: Profile_Badge_First_Blueprint_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premier plan`)
};

const it_profile_badge_first_blueprint_name = /** @type {(inputs: Profile_Badge_First_Blueprint_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primo progetto`)
};

const nl_profile_badge_first_blueprint_name = /** @type {(inputs: Profile_Badge_First_Blueprint_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eerste bouwtekening`)
};

const pl_profile_badge_first_blueprint_name = /** @type {(inputs: Profile_Badge_First_Blueprint_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pierwszy plan`)
};

const pt_profile_badge_first_blueprint_name = /** @type {(inputs: Profile_Badge_First_Blueprint_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primeira planta`)
};

const ru_profile_badge_first_blueprint_name = /** @type {(inputs: Profile_Badge_First_Blueprint_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Первый чертёж`)
};

const sv_profile_badge_first_blueprint_name = /** @type {(inputs: Profile_Badge_First_Blueprint_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Första ritningen`)
};

const tr_profile_badge_first_blueprint_name = /** @type {(inputs: Profile_Badge_First_Blueprint_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk Plan`)
};

const zh_profile_badge_first_blueprint_name = /** @type {(inputs: Profile_Badge_First_Blueprint_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`第一张蓝图`)
};

const ja_profile_badge_first_blueprint_name = /** @type {(inputs: Profile_Badge_First_Blueprint_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初の設計図`)
};

/**
* | output |
* | --- |
* | "First Blueprint" |
*
* @param {Profile_Badge_First_Blueprint_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_first_blueprint_name = /** @type {((inputs?: Profile_Badge_First_Blueprint_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_First_Blueprint_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_first_blueprint_name(inputs)
	if (locale === "de") return de_profile_badge_first_blueprint_name(inputs)
	if (locale === "fr") return fr_profile_badge_first_blueprint_name(inputs)
	if (locale === "it") return it_profile_badge_first_blueprint_name(inputs)
	if (locale === "nl") return nl_profile_badge_first_blueprint_name(inputs)
	if (locale === "pl") return pl_profile_badge_first_blueprint_name(inputs)
	if (locale === "pt") return pt_profile_badge_first_blueprint_name(inputs)
	if (locale === "ru") return ru_profile_badge_first_blueprint_name(inputs)
	if (locale === "sv") return sv_profile_badge_first_blueprint_name(inputs)
	if (locale === "tr") return tr_profile_badge_first_blueprint_name(inputs)
	if (locale === "zh") return zh_profile_badge_first_blueprint_name(inputs)
	if (locale === "ja") return ja_profile_badge_first_blueprint_name(inputs)
	return en_profile_badge_first_blueprint_name(inputs)
});
