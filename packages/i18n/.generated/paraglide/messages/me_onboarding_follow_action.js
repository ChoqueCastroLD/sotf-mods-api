/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_Follow_ActionInputs */

const en_me_onboarding_follow_action = /** @type {(inputs: Me_Onboarding_Follow_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Find one to follow`)
};

const es_me_onboarding_follow_action = /** @type {(inputs: Me_Onboarding_Follow_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar uno que seguir`)
};

const de_me_onboarding_follow_action = /** @type {(inputs: Me_Onboarding_Follow_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einen Mod zum Folgen finden`)
};

const fr_me_onboarding_follow_action = /** @type {(inputs: Me_Onboarding_Follow_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trouver un mod à suivre`)
};

const it_me_onboarding_follow_action = /** @type {(inputs: Me_Onboarding_Follow_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trova una mod da seguire`)
};

const nl_me_onboarding_follow_action = /** @type {(inputs: Me_Onboarding_Follow_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoek een mod om te volgen`)
};

const pl_me_onboarding_follow_action = /** @type {(inputs: Me_Onboarding_Follow_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Znajdź mod do obserwowania`)
};

const pt_me_onboarding_follow_action = /** @type {(inputs: Me_Onboarding_Follow_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Encontrar um mod para seguir`)
};

const ru_me_onboarding_follow_action = /** @type {(inputs: Me_Onboarding_Follow_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Найти мод для подписки`)
};

const sv_me_onboarding_follow_action = /** @type {(inputs: Me_Onboarding_Follow_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hitta en modd att följa`)
};

const tr_me_onboarding_follow_action = /** @type {(inputs: Me_Onboarding_Follow_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip edecek bir mod bul`)
};

const zh_me_onboarding_follow_action = /** @type {(inputs: Me_Onboarding_Follow_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`找一个模组来关注`)
};

const ja_me_onboarding_follow_action = /** @type {(inputs: Me_Onboarding_Follow_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォローするMODを探す`)
};

/**
* | output |
* | --- |
* | "Find one to follow" |
*
* @param {Me_Onboarding_Follow_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_follow_action = /** @type {((inputs?: Me_Onboarding_Follow_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_Follow_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_follow_action(inputs)
	if (locale === "de") return de_me_onboarding_follow_action(inputs)
	if (locale === "fr") return fr_me_onboarding_follow_action(inputs)
	if (locale === "it") return it_me_onboarding_follow_action(inputs)
	if (locale === "nl") return nl_me_onboarding_follow_action(inputs)
	if (locale === "pl") return pl_me_onboarding_follow_action(inputs)
	if (locale === "pt") return pt_me_onboarding_follow_action(inputs)
	if (locale === "ru") return ru_me_onboarding_follow_action(inputs)
	if (locale === "sv") return sv_me_onboarding_follow_action(inputs)
	if (locale === "tr") return tr_me_onboarding_follow_action(inputs)
	if (locale === "zh") return zh_me_onboarding_follow_action(inputs)
	if (locale === "ja") return ja_me_onboarding_follow_action(inputs)
	return en_me_onboarding_follow_action(inputs)
});
