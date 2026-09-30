/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Account_Overview_TitleInputs */

const en_settings_account_overview_title = /** @type {(inputs: Settings_Account_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your account`)
};

const es_settings_account_overview_title = /** @type {(inputs: Settings_Account_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu cuenta`)
};

const de_settings_account_overview_title = /** @type {(inputs: Settings_Account_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Konto`)
};

const fr_settings_account_overview_title = /** @type {(inputs: Settings_Account_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre compte`)
};

const it_settings_account_overview_title = /** @type {(inputs: Settings_Account_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo account`)
};

const nl_settings_account_overview_title = /** @type {(inputs: Settings_Account_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je account`)
};

const pl_settings_account_overview_title = /** @type {(inputs: Settings_Account_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje konto`)
};

const pt_settings_account_overview_title = /** @type {(inputs: Settings_Account_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua conta`)
};

const ru_settings_account_overview_title = /** @type {(inputs: Settings_Account_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш аккаунт`)
};

const sv_settings_account_overview_title = /** @type {(inputs: Settings_Account_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ditt konto`)
};

const tr_settings_account_overview_title = /** @type {(inputs: Settings_Account_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesabın`)
};

const zh_settings_account_overview_title = /** @type {(inputs: Settings_Account_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的账户`)
};

const ja_settings_account_overview_title = /** @type {(inputs: Settings_Account_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのアカウント`)
};

/**
* | output |
* | --- |
* | "Your account" |
*
* @param {Settings_Account_Overview_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_account_overview_title = /** @type {((inputs?: Settings_Account_Overview_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Account_Overview_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_account_overview_title(inputs)
	if (locale === "de") return de_settings_account_overview_title(inputs)
	if (locale === "fr") return fr_settings_account_overview_title(inputs)
	if (locale === "it") return it_settings_account_overview_title(inputs)
	if (locale === "nl") return nl_settings_account_overview_title(inputs)
	if (locale === "pl") return pl_settings_account_overview_title(inputs)
	if (locale === "pt") return pt_settings_account_overview_title(inputs)
	if (locale === "ru") return ru_settings_account_overview_title(inputs)
	if (locale === "sv") return sv_settings_account_overview_title(inputs)
	if (locale === "tr") return tr_settings_account_overview_title(inputs)
	if (locale === "zh") return zh_settings_account_overview_title(inputs)
	if (locale === "ja") return ja_settings_account_overview_title(inputs)
	return en_settings_account_overview_title(inputs)
});
