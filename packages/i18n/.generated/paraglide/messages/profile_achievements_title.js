/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_TitleInputs */

const en_profile_achievements_title = /** @type {(inputs: Profile_Achievements_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Achievements`)
};

const es_profile_achievements_title = /** @type {(inputs: Profile_Achievements_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logros`)
};

const de_profile_achievements_title = /** @type {(inputs: Profile_Achievements_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erfolge`)
};

const fr_profile_achievements_title = /** @type {(inputs: Profile_Achievements_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Succès`)
};

const it_profile_achievements_title = /** @type {(inputs: Profile_Achievements_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traguardi`)
};

const nl_profile_achievements_title = /** @type {(inputs: Profile_Achievements_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prestaties`)
};

const pl_profile_achievements_title = /** @type {(inputs: Profile_Achievements_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Osiągnięcia`)
};

const pt_profile_achievements_title = /** @type {(inputs: Profile_Achievements_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conquistas`)
};

const ru_profile_achievements_title = /** @type {(inputs: Profile_Achievements_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Достижения`)
};

const sv_profile_achievements_title = /** @type {(inputs: Profile_Achievements_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prestationer`)
};

const tr_profile_achievements_title = /** @type {(inputs: Profile_Achievements_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başarımlar`)
};

const zh_profile_achievements_title = /** @type {(inputs: Profile_Achievements_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成就`)
};

const ja_profile_achievements_title = /** @type {(inputs: Profile_Achievements_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`実績`)
};

/**
* | output |
* | --- |
* | "Achievements" |
*
* @param {Profile_Achievements_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_title = /** @type {((inputs?: Profile_Achievements_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_title(inputs)
	if (locale === "de") return de_profile_achievements_title(inputs)
	if (locale === "fr") return fr_profile_achievements_title(inputs)
	if (locale === "it") return it_profile_achievements_title(inputs)
	if (locale === "nl") return nl_profile_achievements_title(inputs)
	if (locale === "pl") return pl_profile_achievements_title(inputs)
	if (locale === "pt") return pt_profile_achievements_title(inputs)
	if (locale === "ru") return ru_profile_achievements_title(inputs)
	if (locale === "sv") return sv_profile_achievements_title(inputs)
	if (locale === "tr") return tr_profile_achievements_title(inputs)
	if (locale === "zh") return zh_profile_achievements_title(inputs)
	if (locale === "ja") return ja_profile_achievements_title(inputs)
	return en_profile_achievements_title(inputs)
});
