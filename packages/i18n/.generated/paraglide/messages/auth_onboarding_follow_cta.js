/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Onboarding_Follow_CtaInputs */

const en_auth_onboarding_follow_cta = /** @type {(inputs: Auth_Onboarding_Follow_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Browse popular mods`)
};

const es_auth_onboarding_follow_cta = /** @type {(inputs: Auth_Onboarding_Follow_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver mods populares`)
};

const de_auth_onboarding_follow_cta = /** @type {(inputs: Auth_Onboarding_Follow_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beliebte Mods ansehen`)
};

const fr_auth_onboarding_follow_cta = /** @type {(inputs: Auth_Onboarding_Follow_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir les mods populaires`)
};

const it_auth_onboarding_follow_cta = /** @type {(inputs: Auth_Onboarding_Follow_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sfoglia le mod popolari`)
};

const nl_auth_onboarding_follow_cta = /** @type {(inputs: Auth_Onboarding_Follow_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekijk populaire mods`)
};

const pl_auth_onboarding_follow_cta = /** @type {(inputs: Auth_Onboarding_Follow_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądaj popularne mody`)
};

const pt_auth_onboarding_follow_cta = /** @type {(inputs: Auth_Onboarding_Follow_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver mods populares`)
};

const ru_auth_onboarding_follow_cta = /** @type {(inputs: Auth_Onboarding_Follow_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смотреть популярные моды`)
};

const sv_auth_onboarding_follow_cta = /** @type {(inputs: Auth_Onboarding_Follow_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bläddra bland populära moddar`)
};

const tr_auth_onboarding_follow_cta = /** @type {(inputs: Auth_Onboarding_Follow_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popüler modlara göz at`)
};

const zh_auth_onboarding_follow_cta = /** @type {(inputs: Auth_Onboarding_Follow_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浏览热门模组`)
};

const ja_auth_onboarding_follow_cta = /** @type {(inputs: Auth_Onboarding_Follow_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`人気の MOD を見る`)
};

/**
* | output |
* | --- |
* | "Browse popular mods" |
*
* @param {Auth_Onboarding_Follow_CtaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_onboarding_follow_cta = /** @type {((inputs?: Auth_Onboarding_Follow_CtaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Onboarding_Follow_CtaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_onboarding_follow_cta(inputs)
	if (locale === "de") return de_auth_onboarding_follow_cta(inputs)
	if (locale === "fr") return fr_auth_onboarding_follow_cta(inputs)
	if (locale === "it") return it_auth_onboarding_follow_cta(inputs)
	if (locale === "nl") return nl_auth_onboarding_follow_cta(inputs)
	if (locale === "pl") return pl_auth_onboarding_follow_cta(inputs)
	if (locale === "pt") return pt_auth_onboarding_follow_cta(inputs)
	if (locale === "ru") return ru_auth_onboarding_follow_cta(inputs)
	if (locale === "sv") return sv_auth_onboarding_follow_cta(inputs)
	if (locale === "tr") return tr_auth_onboarding_follow_cta(inputs)
	if (locale === "zh") return zh_auth_onboarding_follow_cta(inputs)
	if (locale === "ja") return ja_auth_onboarding_follow_cta(inputs)
	return en_auth_onboarding_follow_cta(inputs)
});
