/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Profile_View_PublicInputs */

const en_settings_profile_view_public = /** @type {(inputs: Settings_Profile_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View your public profile`)
};

const es_settings_profile_view_public = /** @type {(inputs: Settings_Profile_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver tu perfil público`)
};

const de_settings_profile_view_public = /** @type {(inputs: Settings_Profile_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein öffentliches Profil ansehen`)
};

const fr_settings_profile_view_public = /** @type {(inputs: Settings_Profile_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir votre profil public`)
};

const it_settings_profile_view_public = /** @type {(inputs: Settings_Profile_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedi il tuo profilo pubblico`)
};

const nl_settings_profile_view_public = /** @type {(inputs: Settings_Profile_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je openbare profiel bekijken`)
};

const pl_settings_profile_view_public = /** @type {(inputs: Settings_Profile_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz swój publiczny profil`)
};

const pt_settings_profile_view_public = /** @type {(inputs: Settings_Profile_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver seu perfil público`)
};

const ru_settings_profile_view_public = /** @type {(inputs: Settings_Profile_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть публичный профиль`)
};

const sv_settings_profile_view_public = /** @type {(inputs: Settings_Profile_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa din offentliga profil`)
};

const tr_settings_profile_view_public = /** @type {(inputs: Settings_Profile_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herkese açık profilini gör`)
};

const zh_settings_profile_view_public = /** @type {(inputs: Settings_Profile_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看你的公开资料`)
};

const ja_settings_profile_view_public = /** @type {(inputs: Settings_Profile_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開プロフィールを見る`)
};

/**
* | output |
* | --- |
* | "View your public profile" |
*
* @param {Settings_Profile_View_PublicInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_profile_view_public = /** @type {((inputs?: Settings_Profile_View_PublicInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Profile_View_PublicInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_profile_view_public(inputs)
	if (locale === "de") return de_settings_profile_view_public(inputs)
	if (locale === "fr") return fr_settings_profile_view_public(inputs)
	if (locale === "it") return it_settings_profile_view_public(inputs)
	if (locale === "nl") return nl_settings_profile_view_public(inputs)
	if (locale === "pl") return pl_settings_profile_view_public(inputs)
	if (locale === "pt") return pt_settings_profile_view_public(inputs)
	if (locale === "ru") return ru_settings_profile_view_public(inputs)
	if (locale === "sv") return sv_settings_profile_view_public(inputs)
	if (locale === "tr") return tr_settings_profile_view_public(inputs)
	if (locale === "zh") return zh_settings_profile_view_public(inputs)
	if (locale === "ja") return ja_settings_profile_view_public(inputs)
	return en_settings_profile_view_public(inputs)
});
