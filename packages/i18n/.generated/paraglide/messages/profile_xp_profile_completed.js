/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Xp_Profile_CompletedInputs */

const en_profile_xp_profile_completed = /** @type {(inputs: Profile_Xp_Profile_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Complete your profile`)
};

const es_profile_xp_profile_completed = /** @type {(inputs: Profile_Xp_Profile_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completa tu perfil`)
};

const de_profile_xp_profile_completed = /** @type {(inputs: Profile_Xp_Profile_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profil vervollständigen`)
};

const fr_profile_xp_profile_completed = /** @type {(inputs: Profile_Xp_Profile_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compléter votre profil`)
};

const it_profile_xp_profile_completed = /** @type {(inputs: Profile_Xp_Profile_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completa il tuo profilo`)
};

const nl_profile_xp_profile_completed = /** @type {(inputs: Profile_Xp_Profile_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je profiel invullen`)
};

const pl_profile_xp_profile_completed = /** @type {(inputs: Profile_Xp_Profile_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uzupełnij profil`)
};

const pt_profile_xp_profile_completed = /** @type {(inputs: Profile_Xp_Profile_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completar seu perfil`)
};

const ru_profile_xp_profile_completed = /** @type {(inputs: Profile_Xp_Profile_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заполнить профиль`)
};

const sv_profile_xp_profile_completed = /** @type {(inputs: Profile_Xp_Profile_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fyll i din profil`)
};

const tr_profile_xp_profile_completed = /** @type {(inputs: Profile_Xp_Profile_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profilini tamamla`)
};

const zh_profile_xp_profile_completed = /** @type {(inputs: Profile_Xp_Profile_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完善个人资料`)
};

const ja_profile_xp_profile_completed = /** @type {(inputs: Profile_Xp_Profile_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロフィールを完成させる`)
};

/**
* | output |
* | --- |
* | "Complete your profile" |
*
* @param {Profile_Xp_Profile_CompletedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_xp_profile_completed = /** @type {((inputs?: Profile_Xp_Profile_CompletedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Xp_Profile_CompletedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_xp_profile_completed(inputs)
	if (locale === "de") return de_profile_xp_profile_completed(inputs)
	if (locale === "fr") return fr_profile_xp_profile_completed(inputs)
	if (locale === "it") return it_profile_xp_profile_completed(inputs)
	if (locale === "nl") return nl_profile_xp_profile_completed(inputs)
	if (locale === "pl") return pl_profile_xp_profile_completed(inputs)
	if (locale === "pt") return pt_profile_xp_profile_completed(inputs)
	if (locale === "ru") return ru_profile_xp_profile_completed(inputs)
	if (locale === "sv") return sv_profile_xp_profile_completed(inputs)
	if (locale === "tr") return tr_profile_xp_profile_completed(inputs)
	if (locale === "zh") return zh_profile_xp_profile_completed(inputs)
	if (locale === "ja") return ja_profile_xp_profile_completed(inputs)
	return en_profile_xp_profile_completed(inputs)
});
