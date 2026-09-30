/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Xp_Onboarding_CompletedInputs */

const en_profile_xp_onboarding_completed = /** @type {(inputs: Profile_Xp_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Complete the Day 1 checklist`)
};

const es_profile_xp_onboarding_completed = /** @type {(inputs: Profile_Xp_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completa la lista del Día 1`)
};

const de_profile_xp_onboarding_completed = /** @type {(inputs: Profile_Xp_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checkliste für Tag 1 abschließen`)
};

const fr_profile_xp_onboarding_completed = /** @type {(inputs: Profile_Xp_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terminer la liste du Jour 1`)
};

const it_profile_xp_onboarding_completed = /** @type {(inputs: Profile_Xp_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completa la lista del Giorno 1`)
};

const nl_profile_xp_onboarding_completed = /** @type {(inputs: Profile_Xp_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De checklist van Dag 1 voltooien`)
};

const pl_profile_xp_onboarding_completed = /** @type {(inputs: Profile_Xp_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukończ listę kontrolną Dnia 1`)
};

const pt_profile_xp_onboarding_completed = /** @type {(inputs: Profile_Xp_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completar a lista do Dia 1`)
};

const ru_profile_xp_onboarding_completed = /** @type {(inputs: Profile_Xp_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выполнить чек-лист первого дня`)
};

const sv_profile_xp_onboarding_completed = /** @type {(inputs: Profile_Xp_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slutför checklistan för Dag 1`)
};

const tr_profile_xp_onboarding_completed = /** @type {(inputs: Profile_Xp_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1. Gün kontrol listesini tamamla`)
};

const zh_profile_xp_onboarding_completed = /** @type {(inputs: Profile_Xp_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完成“第 1 天”清单`)
};

const ja_profile_xp_onboarding_completed = /** @type {(inputs: Profile_Xp_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`「1 日目」チェックリストを完了する`)
};

/**
* | output |
* | --- |
* | "Complete the Day 1 checklist" |
*
* @param {Profile_Xp_Onboarding_CompletedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_xp_onboarding_completed = /** @type {((inputs?: Profile_Xp_Onboarding_CompletedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Xp_Onboarding_CompletedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_xp_onboarding_completed(inputs)
	if (locale === "de") return de_profile_xp_onboarding_completed(inputs)
	if (locale === "fr") return fr_profile_xp_onboarding_completed(inputs)
	if (locale === "it") return it_profile_xp_onboarding_completed(inputs)
	if (locale === "nl") return nl_profile_xp_onboarding_completed(inputs)
	if (locale === "pl") return pl_profile_xp_onboarding_completed(inputs)
	if (locale === "pt") return pt_profile_xp_onboarding_completed(inputs)
	if (locale === "ru") return ru_profile_xp_onboarding_completed(inputs)
	if (locale === "sv") return sv_profile_xp_onboarding_completed(inputs)
	if (locale === "tr") return tr_profile_xp_onboarding_completed(inputs)
	if (locale === "zh") return zh_profile_xp_onboarding_completed(inputs)
	if (locale === "ja") return ja_profile_xp_onboarding_completed(inputs)
	return en_profile_xp_onboarding_completed(inputs)
});
