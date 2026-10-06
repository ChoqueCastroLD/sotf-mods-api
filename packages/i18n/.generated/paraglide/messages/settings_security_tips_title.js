/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Security_Tips_TitleInputs */

const en_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep your account safe`)
};

const es_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómo mantener tu cuenta segura`)
};

const de_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So schützt du dein Konto`)
};

const fr_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gardez votre compte en sécurité`)
};

const it_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tieni al sicuro il tuo account`)
};

const nl_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Houd je account veilig`)
};

const pl_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dbaj o bezpieczeństwo konta`)
};

const pt_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mantenha sua conta segura`)
};

const ru_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как защитить аккаунт`)
};

const sv_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Håll ditt konto säkert`)
};

const tr_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesabını güvende tut`)
};

const zh_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保护账号安全`)
};

const ja_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウントを安全に保つために`)
};

/**
* | output |
* | --- |
* | "Keep your account safe" |
*
* @param {Settings_Security_Tips_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_security_tips_title = /** @type {((inputs?: Settings_Security_Tips_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Security_Tips_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_security_tips_title(inputs)
	if (locale === "de") return de_settings_security_tips_title(inputs)
	if (locale === "fr") return fr_settings_security_tips_title(inputs)
	if (locale === "it") return it_settings_security_tips_title(inputs)
	if (locale === "nl") return nl_settings_security_tips_title(inputs)
	if (locale === "pl") return pl_settings_security_tips_title(inputs)
	if (locale === "pt") return pt_settings_security_tips_title(inputs)
	if (locale === "ru") return ru_settings_security_tips_title(inputs)
	if (locale === "sv") return sv_settings_security_tips_title(inputs)
	if (locale === "tr") return tr_settings_security_tips_title(inputs)
	if (locale === "zh") return zh_settings_security_tips_title(inputs)
	if (locale === "ja") return ja_settings_security_tips_title(inputs)
	return en_settings_security_tips_title(inputs)
});
