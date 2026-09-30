/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Onboarding_Follow_TitleInputs */

const en_auth_onboarding_follow_title = /** @type {(inputs: Auth_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follow 3 popular mods`)
};

const es_auth_onboarding_follow_title = /** @type {(inputs: Auth_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sigue 3 mods populares`)
};

const de_auth_onboarding_follow_title = /** @type {(inputs: Auth_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Folge 3 beliebten Mods`)
};

const fr_auth_onboarding_follow_title = /** @type {(inputs: Auth_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suivez 3 mods populaires`)
};

const it_auth_onboarding_follow_title = /** @type {(inputs: Auth_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segui 3 mod popolari`)
};

const nl_auth_onboarding_follow_title = /** @type {(inputs: Auth_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volg 3 populaire mods`)
};

const pl_auth_onboarding_follow_title = /** @type {(inputs: Auth_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwuj 3 popularne mody`)
};

const pt_auth_onboarding_follow_title = /** @type {(inputs: Auth_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siga 3 mods populares`)
};

const ru_auth_onboarding_follow_title = /** @type {(inputs: Auth_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подпишитесь на 3 популярных мода`)
};

const sv_auth_onboarding_follow_title = /** @type {(inputs: Auth_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följ 3 populära moddar`)
};

const tr_auth_onboarding_follow_title = /** @type {(inputs: Auth_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3 popüler modu takip et`)
};

const zh_auth_onboarding_follow_title = /** @type {(inputs: Auth_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注 3 个热门模组`)
};

const ja_auth_onboarding_follow_title = /** @type {(inputs: Auth_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`人気の MOD を 3 つフォロー`)
};

/**
* | output |
* | --- |
* | "Follow 3 popular mods" |
*
* @param {Auth_Onboarding_Follow_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_onboarding_follow_title = /** @type {((inputs?: Auth_Onboarding_Follow_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Onboarding_Follow_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_onboarding_follow_title(inputs)
	if (locale === "de") return de_auth_onboarding_follow_title(inputs)
	if (locale === "fr") return fr_auth_onboarding_follow_title(inputs)
	if (locale === "it") return it_auth_onboarding_follow_title(inputs)
	if (locale === "nl") return nl_auth_onboarding_follow_title(inputs)
	if (locale === "pl") return pl_auth_onboarding_follow_title(inputs)
	if (locale === "pt") return pt_auth_onboarding_follow_title(inputs)
	if (locale === "ru") return ru_auth_onboarding_follow_title(inputs)
	if (locale === "sv") return sv_auth_onboarding_follow_title(inputs)
	if (locale === "tr") return tr_auth_onboarding_follow_title(inputs)
	if (locale === "zh") return zh_auth_onboarding_follow_title(inputs)
	if (locale === "ja") return ja_auth_onboarding_follow_title(inputs)
	return en_auth_onboarding_follow_title(inputs)
});
