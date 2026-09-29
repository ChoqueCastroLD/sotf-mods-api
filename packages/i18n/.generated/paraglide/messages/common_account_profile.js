/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Account_ProfileInputs */

const en_common_account_profile = /** @type {(inputs: Common_Account_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your profile`)
};

const es_common_account_profile = /** @type {(inputs: Common_Account_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu perfil`)
};

const de_common_account_profile = /** @type {(inputs: Common_Account_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Profil`)
};

const fr_common_account_profile = /** @type {(inputs: Common_Account_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre profil`)
};

const it_common_account_profile = /** @type {(inputs: Common_Account_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo profilo`)
};

const nl_common_account_profile = /** @type {(inputs: Common_Account_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je profiel`)
};

const pl_common_account_profile = /** @type {(inputs: Common_Account_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój profil`)
};

const pt_common_account_profile = /** @type {(inputs: Common_Account_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu perfil`)
};

const ru_common_account_profile = /** @type {(inputs: Common_Account_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш профиль`)
};

const sv_common_account_profile = /** @type {(inputs: Common_Account_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din profil`)
};

const tr_common_account_profile = /** @type {(inputs: Common_Account_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profilin`)
};

const zh_common_account_profile = /** @type {(inputs: Common_Account_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的主页`)
};

const ja_common_account_profile = /** @type {(inputs: Common_Account_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロフィール`)
};

/**
* | output |
* | --- |
* | "Your profile" |
*
* @param {Common_Account_ProfileInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_account_profile = /** @type {((inputs?: Common_Account_ProfileInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Account_ProfileInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_account_profile(inputs)
	if (locale === "de") return de_common_account_profile(inputs)
	if (locale === "fr") return fr_common_account_profile(inputs)
	if (locale === "it") return it_common_account_profile(inputs)
	if (locale === "nl") return nl_common_account_profile(inputs)
	if (locale === "pl") return pl_common_account_profile(inputs)
	if (locale === "pt") return pt_common_account_profile(inputs)
	if (locale === "ru") return ru_common_account_profile(inputs)
	if (locale === "sv") return sv_common_account_profile(inputs)
	if (locale === "tr") return tr_common_account_profile(inputs)
	if (locale === "zh") return zh_common_account_profile(inputs)
	if (locale === "ja") return ja_common_account_profile(inputs)
	return en_common_account_profile(inputs)
});
