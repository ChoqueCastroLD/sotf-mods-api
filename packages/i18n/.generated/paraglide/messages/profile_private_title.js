/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Private_TitleInputs */

const en_profile_private_title = /** @type {(inputs: Profile_Private_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kept private`)
};

const es_profile_private_title = /** @type {(inputs: Profile_Private_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privado`)
};

const de_profile_private_title = /** @type {(inputs: Profile_Private_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privat`)
};

const fr_profile_private_title = /** @type {(inputs: Profile_Private_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privé`)
};

const it_profile_private_title = /** @type {(inputs: Profile_Private_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privato`)
};

const nl_profile_private_title = /** @type {(inputs: Profile_Private_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privé`)
};

const pl_profile_private_title = /** @type {(inputs: Profile_Private_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prywatne`)
};

const pt_profile_private_title = /** @type {(inputs: Profile_Private_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privado`)
};

const ru_profile_private_title = /** @type {(inputs: Profile_Private_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыто`)
};

const sv_profile_private_title = /** @type {(inputs: Profile_Private_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privat`)
};

const tr_profile_private_title = /** @type {(inputs: Profile_Private_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizli`)
};

const zh_profile_private_title = /** @type {(inputs: Profile_Private_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未公开`)
};

const ja_profile_private_title = /** @type {(inputs: Profile_Private_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非公開`)
};

/**
* | output |
* | --- |
* | "Kept private" |
*
* @param {Profile_Private_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_private_title = /** @type {((inputs?: Profile_Private_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Private_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_private_title(inputs)
	if (locale === "de") return de_profile_private_title(inputs)
	if (locale === "fr") return fr_profile_private_title(inputs)
	if (locale === "it") return it_profile_private_title(inputs)
	if (locale === "nl") return nl_profile_private_title(inputs)
	if (locale === "pl") return pl_profile_private_title(inputs)
	if (locale === "pt") return pt_profile_private_title(inputs)
	if (locale === "ru") return ru_profile_private_title(inputs)
	if (locale === "sv") return sv_profile_private_title(inputs)
	if (locale === "tr") return tr_profile_private_title(inputs)
	if (locale === "zh") return zh_profile_private_title(inputs)
	if (locale === "ja") return ja_profile_private_title(inputs)
	return en_profile_private_title(inputs)
});
