/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_Public_ProfileInputs */

const en_ranger_user_public_profile = /** @type {(inputs: Ranger_User_Public_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Public profile`)
};

const es_ranger_user_public_profile = /** @type {(inputs: Ranger_User_Public_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perfil público`)
};

const de_ranger_user_public_profile = /** @type {(inputs: Ranger_User_Public_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öffentliches Profil`)
};

const fr_ranger_user_public_profile = /** @type {(inputs: Ranger_User_Public_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profil public`)
};

const it_ranger_user_public_profile = /** @type {(inputs: Ranger_User_Public_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profilo pubblico`)
};

const nl_ranger_user_public_profile = /** @type {(inputs: Ranger_User_Public_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Openbaar profiel`)
};

const pl_ranger_user_public_profile = /** @type {(inputs: Ranger_User_Public_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profil publiczny`)
};

const pt_ranger_user_public_profile = /** @type {(inputs: Ranger_User_Public_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perfil público`)
};

const ru_ranger_user_public_profile = /** @type {(inputs: Ranger_User_Public_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Публичный профиль`)
};

const sv_ranger_user_public_profile = /** @type {(inputs: Ranger_User_Public_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Offentlig profil`)
};

const tr_ranger_user_public_profile = /** @type {(inputs: Ranger_User_Public_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herkese açık profil`)
};

const zh_ranger_user_public_profile = /** @type {(inputs: Ranger_User_Public_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公开资料`)
};

const ja_ranger_user_public_profile = /** @type {(inputs: Ranger_User_Public_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開プロフィール`)
};

/**
* | output |
* | --- |
* | "Public profile" |
*
* @param {Ranger_User_Public_ProfileInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_public_profile = /** @type {((inputs?: Ranger_User_Public_ProfileInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Public_ProfileInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_public_profile(inputs)
	if (locale === "de") return de_ranger_user_public_profile(inputs)
	if (locale === "fr") return fr_ranger_user_public_profile(inputs)
	if (locale === "it") return it_ranger_user_public_profile(inputs)
	if (locale === "nl") return nl_ranger_user_public_profile(inputs)
	if (locale === "pl") return pl_ranger_user_public_profile(inputs)
	if (locale === "pt") return pt_ranger_user_public_profile(inputs)
	if (locale === "ru") return ru_ranger_user_public_profile(inputs)
	if (locale === "sv") return sv_ranger_user_public_profile(inputs)
	if (locale === "tr") return tr_ranger_user_public_profile(inputs)
	if (locale === "zh") return zh_ranger_user_public_profile(inputs)
	if (locale === "ja") return ja_ranger_user_public_profile(inputs)
	return en_ranger_user_public_profile(inputs)
});
