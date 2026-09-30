/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Survived_Day_One_HintInputs */

const en_profile_badge_survived_day_one_hint = /** @type {(inputs: Profile_Badge_Survived_Day_One_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Complete the Day 1 checklist.`)
};

const es_profile_badge_survived_day_one_hint = /** @type {(inputs: Profile_Badge_Survived_Day_One_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completa la lista del Día 1.`)
};

const de_profile_badge_survived_day_one_hint = /** @type {(inputs: Profile_Badge_Survived_Day_One_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schließe die Checkliste für Tag 1 ab.`)
};

const fr_profile_badge_survived_day_one_hint = /** @type {(inputs: Profile_Badge_Survived_Day_One_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terminez la liste du Jour 1.`)
};

const it_profile_badge_survived_day_one_hint = /** @type {(inputs: Profile_Badge_Survived_Day_One_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completa la lista del Giorno 1.`)
};

const nl_profile_badge_survived_day_one_hint = /** @type {(inputs: Profile_Badge_Survived_Day_One_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltooi de checklist van Dag 1.`)
};

const pl_profile_badge_survived_day_one_hint = /** @type {(inputs: Profile_Badge_Survived_Day_One_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukończ listę kontrolną Dnia 1.`)
};

const pt_profile_badge_survived_day_one_hint = /** @type {(inputs: Profile_Badge_Survived_Day_One_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Complete a lista do Dia 1.`)
};

const ru_profile_badge_survived_day_one_hint = /** @type {(inputs: Profile_Badge_Survived_Day_One_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выполните чек-лист первого дня.`)
};

const sv_profile_badge_survived_day_one_hint = /** @type {(inputs: Profile_Badge_Survived_Day_One_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slutför checklistan för Dag 1.`)
};

const tr_profile_badge_survived_day_one_hint = /** @type {(inputs: Profile_Badge_Survived_Day_One_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1. Gün kontrol listesini tamamla.`)
};

const zh_profile_badge_survived_day_one_hint = /** @type {(inputs: Profile_Badge_Survived_Day_One_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完成“第 1 天”清单。`)
};

const ja_profile_badge_survived_day_one_hint = /** @type {(inputs: Profile_Badge_Survived_Day_One_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`「1 日目」チェックリストを完了する。`)
};

/**
* | output |
* | --- |
* | "Complete the Day 1 checklist." |
*
* @param {Profile_Badge_Survived_Day_One_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_survived_day_one_hint = /** @type {((inputs?: Profile_Badge_Survived_Day_One_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Survived_Day_One_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_survived_day_one_hint(inputs)
	if (locale === "de") return de_profile_badge_survived_day_one_hint(inputs)
	if (locale === "fr") return fr_profile_badge_survived_day_one_hint(inputs)
	if (locale === "it") return it_profile_badge_survived_day_one_hint(inputs)
	if (locale === "nl") return nl_profile_badge_survived_day_one_hint(inputs)
	if (locale === "pl") return pl_profile_badge_survived_day_one_hint(inputs)
	if (locale === "pt") return pt_profile_badge_survived_day_one_hint(inputs)
	if (locale === "ru") return ru_profile_badge_survived_day_one_hint(inputs)
	if (locale === "sv") return sv_profile_badge_survived_day_one_hint(inputs)
	if (locale === "tr") return tr_profile_badge_survived_day_one_hint(inputs)
	if (locale === "zh") return zh_profile_badge_survived_day_one_hint(inputs)
	if (locale === "ja") return ja_profile_badge_survived_day_one_hint(inputs)
	return en_profile_badge_survived_day_one_hint(inputs)
});
