/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Survived_Day_One_NameInputs */

const en_profile_badge_survived_day_one_name = /** @type {(inputs: Profile_Badge_Survived_Day_One_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Survived Day One`)
};

const es_profile_badge_survived_day_one_name = /** @type {(inputs: Profile_Badge_Survived_Day_One_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobreviviste al día 1`)
};

const de_profile_badge_survived_day_one_name = /** @type {(inputs: Profile_Badge_Survived_Day_One_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag 1 überlebt`)
};

const fr_profile_badge_survived_day_one_name = /** @type {(inputs: Profile_Badge_Survived_Day_One_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Survivant du jour 1`)
};

const it_profile_badge_survived_day_one_name = /** @type {(inputs: Profile_Badge_Survived_Day_One_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sopravvissuto al giorno 1`)
};

const nl_profile_badge_survived_day_one_name = /** @type {(inputs: Profile_Badge_Survived_Day_One_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag 1 overleefd`)
};

const pl_profile_badge_survived_day_one_name = /** @type {(inputs: Profile_Badge_Survived_Day_One_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przetrwałeś dzień 1`)
};

const pt_profile_badge_survived_day_one_name = /** @type {(inputs: Profile_Badge_Survived_Day_One_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobreviveu ao dia 1`)
};

const ru_profile_badge_survived_day_one_name = /** @type {(inputs: Profile_Badge_Survived_Day_One_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пережил первый день`)
};

const sv_profile_badge_survived_day_one_name = /** @type {(inputs: Profile_Badge_Survived_Day_One_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Överlevde dag 1`)
};

const tr_profile_badge_survived_day_one_name = /** @type {(inputs: Profile_Badge_Survived_Day_One_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk Günü Atlattın`)
};

const zh_profile_badge_survived_day_one_name = /** @type {(inputs: Profile_Badge_Survived_Day_One_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`熬过第一天`)
};

const ja_profile_badge_survived_day_one_name = /** @type {(inputs: Profile_Badge_Survived_Day_One_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 日目を生き延びた`)
};

/**
* | output |
* | --- |
* | "Survived Day One" |
*
* @param {Profile_Badge_Survived_Day_One_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_survived_day_one_name = /** @type {((inputs?: Profile_Badge_Survived_Day_One_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Survived_Day_One_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_survived_day_one_name(inputs)
	if (locale === "de") return de_profile_badge_survived_day_one_name(inputs)
	if (locale === "fr") return fr_profile_badge_survived_day_one_name(inputs)
	if (locale === "it") return it_profile_badge_survived_day_one_name(inputs)
	if (locale === "nl") return nl_profile_badge_survived_day_one_name(inputs)
	if (locale === "pl") return pl_profile_badge_survived_day_one_name(inputs)
	if (locale === "pt") return pt_profile_badge_survived_day_one_name(inputs)
	if (locale === "ru") return ru_profile_badge_survived_day_one_name(inputs)
	if (locale === "sv") return sv_profile_badge_survived_day_one_name(inputs)
	if (locale === "tr") return tr_profile_badge_survived_day_one_name(inputs)
	if (locale === "zh") return zh_profile_badge_survived_day_one_name(inputs)
	if (locale === "ja") return ja_profile_badge_survived_day_one_name(inputs)
	return en_profile_badge_survived_day_one_name(inputs)
});
