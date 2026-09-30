/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Xp_Kit_Followers_10Inputs */

const en_profile_xp_kit_followers_10 = /** @type {(inputs: Profile_Xp_Kit_Followers_10Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your kit reaches every 10 followers`)
};

const es_profile_xp_kit_followers_10 = /** @type {(inputs: Profile_Xp_Kit_Followers_10Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu kit alcanza cada 10 seguidores`)
};

const de_profile_xp_kit_followers_10 = /** @type {(inputs: Profile_Xp_Kit_Followers_10Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Kit erreicht jeweils 10 weitere Follower`)
};

const fr_profile_xp_kit_followers_10 = /** @type {(inputs: Profile_Xp_Kit_Followers_10Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre kit atteint chaque palier de 10 abonnés`)
};

const it_profile_xp_kit_followers_10 = /** @type {(inputs: Profile_Xp_Kit_Followers_10Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo kit raggiunge ogni 10 follower`)
};

const nl_profile_xp_kit_followers_10 = /** @type {(inputs: Profile_Xp_Kit_Followers_10Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je kit haalt telkens 10 volgers erbij`)
};

const pl_profile_xp_kit_followers_10 = /** @type {(inputs: Profile_Xp_Kit_Followers_10Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój zestaw zdobywa kolejne 10 obserwujących`)
};

const pt_profile_xp_kit_followers_10 = /** @type {(inputs: Profile_Xp_Kit_Followers_10Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu kit alcança cada 10 seguidores`)
};

const ru_profile_xp_kit_followers_10 = /** @type {(inputs: Profile_Xp_Kit_Followers_10Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш набор набирает очередные 10 подписчиков`)
};

const sv_profile_xp_kit_followers_10 = /** @type {(inputs: Profile_Xp_Kit_Followers_10Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ditt kit når ytterligare 10 följare`)
};

const tr_profile_xp_kit_followers_10 = /** @type {(inputs: Profile_Xp_Kit_Followers_10Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitin her 10 takipçiye ulaştığında`)
};

const zh_profile_xp_kit_followers_10 = /** @type {(inputs: Profile_Xp_Kit_Followers_10Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的合集每新增 10 位关注者`)
};

const ja_profile_xp_kit_followers_10 = /** @type {(inputs: Profile_Xp_Kit_Followers_10Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットのフォロワーが 10 人増えるごと`)
};

/**
* | output |
* | --- |
* | "Your kit reaches every 10 followers" |
*
* @param {Profile_Xp_Kit_Followers_10Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_xp_kit_followers_10 = /** @type {((inputs?: Profile_Xp_Kit_Followers_10Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Xp_Kit_Followers_10Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_xp_kit_followers_10(inputs)
	if (locale === "de") return de_profile_xp_kit_followers_10(inputs)
	if (locale === "fr") return fr_profile_xp_kit_followers_10(inputs)
	if (locale === "it") return it_profile_xp_kit_followers_10(inputs)
	if (locale === "nl") return nl_profile_xp_kit_followers_10(inputs)
	if (locale === "pl") return pl_profile_xp_kit_followers_10(inputs)
	if (locale === "pt") return pt_profile_xp_kit_followers_10(inputs)
	if (locale === "ru") return ru_profile_xp_kit_followers_10(inputs)
	if (locale === "sv") return sv_profile_xp_kit_followers_10(inputs)
	if (locale === "tr") return tr_profile_xp_kit_followers_10(inputs)
	if (locale === "zh") return zh_profile_xp_kit_followers_10(inputs)
	if (locale === "ja") return ja_profile_xp_kit_followers_10(inputs)
	return en_profile_xp_kit_followers_10(inputs)
});
