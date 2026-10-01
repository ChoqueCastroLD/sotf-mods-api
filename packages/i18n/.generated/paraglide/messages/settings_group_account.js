/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Group_AccountInputs */

const en_settings_group_account = /** @type {(inputs: Settings_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your account`)
};

const es_settings_group_account = /** @type {(inputs: Settings_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu cuenta`)
};

const de_settings_group_account = /** @type {(inputs: Settings_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Konto`)
};

const fr_settings_group_account = /** @type {(inputs: Settings_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre compte`)
};

const it_settings_group_account = /** @type {(inputs: Settings_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo account`)
};

const nl_settings_group_account = /** @type {(inputs: Settings_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jouw account`)
};

const pl_settings_group_account = /** @type {(inputs: Settings_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje konto`)
};

const pt_settings_group_account = /** @type {(inputs: Settings_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A tua conta`)
};

const ru_settings_group_account = /** @type {(inputs: Settings_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш аккаунт`)
};

const sv_settings_group_account = /** @type {(inputs: Settings_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ditt konto`)
};

const tr_settings_group_account = /** @type {(inputs: Settings_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesabın`)
};

const zh_settings_group_account = /** @type {(inputs: Settings_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的账号`)
};

const ja_settings_group_account = /** @type {(inputs: Settings_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウント`)
};

/**
* | output |
* | --- |
* | "Your account" |
*
* @param {Settings_Group_AccountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_group_account = /** @type {((inputs?: Settings_Group_AccountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Group_AccountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_group_account(inputs)
	if (locale === "de") return de_settings_group_account(inputs)
	if (locale === "fr") return fr_settings_group_account(inputs)
	if (locale === "it") return it_settings_group_account(inputs)
	if (locale === "nl") return nl_settings_group_account(inputs)
	if (locale === "pl") return pl_settings_group_account(inputs)
	if (locale === "pt") return pt_settings_group_account(inputs)
	if (locale === "ru") return ru_settings_group_account(inputs)
	if (locale === "sv") return sv_settings_group_account(inputs)
	if (locale === "tr") return tr_settings_group_account(inputs)
	if (locale === "zh") return zh_settings_group_account(inputs)
	if (locale === "ja") return ja_settings_group_account(inputs)
	return en_settings_group_account(inputs)
});
