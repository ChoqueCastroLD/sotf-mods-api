/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Verified_Creator_NameInputs */

const en_profile_badge_verified_creator_name = /** @type {(inputs: Profile_Badge_Verified_Creator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verified Creator`)
};

const es_profile_badge_verified_creator_name = /** @type {(inputs: Profile_Badge_Verified_Creator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creador verificado`)
};

const de_profile_badge_verified_creator_name = /** @type {(inputs: Profile_Badge_Verified_Creator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifizierter Ersteller`)
};

const fr_profile_badge_verified_creator_name = /** @type {(inputs: Profile_Badge_Verified_Creator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateur vérifié`)
};

const it_profile_badge_verified_creator_name = /** @type {(inputs: Profile_Badge_Verified_Creator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatore verificato`)
};

const nl_profile_badge_verified_creator_name = /** @type {(inputs: Profile_Badge_Verified_Creator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geverifieerde maker`)
};

const pl_profile_badge_verified_creator_name = /** @type {(inputs: Profile_Badge_Verified_Creator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zweryfikowany twórca`)
};

const pt_profile_badge_verified_creator_name = /** @type {(inputs: Profile_Badge_Verified_Creator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criador verificado`)
};

const ru_profile_badge_verified_creator_name = /** @type {(inputs: Profile_Badge_Verified_Creator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверенный автор`)
};

const sv_profile_badge_verified_creator_name = /** @type {(inputs: Profile_Badge_Verified_Creator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifierad skapare`)
};

const tr_profile_badge_verified_creator_name = /** @type {(inputs: Profile_Badge_Verified_Creator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doğrulanmış Üretici`)
};

const zh_profile_badge_verified_creator_name = /** @type {(inputs: Profile_Badge_Verified_Creator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`认证创作者`)
};

const ja_profile_badge_verified_creator_name = /** @type {(inputs: Profile_Badge_Verified_Creator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`認証済みクリエイター`)
};

/**
* | output |
* | --- |
* | "Verified Creator" |
*
* @param {Profile_Badge_Verified_Creator_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_verified_creator_name = /** @type {((inputs?: Profile_Badge_Verified_Creator_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Verified_Creator_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_verified_creator_name(inputs)
	if (locale === "de") return de_profile_badge_verified_creator_name(inputs)
	if (locale === "fr") return fr_profile_badge_verified_creator_name(inputs)
	if (locale === "it") return it_profile_badge_verified_creator_name(inputs)
	if (locale === "nl") return nl_profile_badge_verified_creator_name(inputs)
	if (locale === "pl") return pl_profile_badge_verified_creator_name(inputs)
	if (locale === "pt") return pt_profile_badge_verified_creator_name(inputs)
	if (locale === "ru") return ru_profile_badge_verified_creator_name(inputs)
	if (locale === "sv") return sv_profile_badge_verified_creator_name(inputs)
	if (locale === "tr") return tr_profile_badge_verified_creator_name(inputs)
	if (locale === "zh") return zh_profile_badge_verified_creator_name(inputs)
	if (locale === "ja") return ja_profile_badge_verified_creator_name(inputs)
	return en_profile_badge_verified_creator_name(inputs)
});
