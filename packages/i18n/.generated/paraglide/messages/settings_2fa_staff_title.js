/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_Staff_TitleInputs */

const en_settings_2fa_staff_title = /** @type {(inputs: Settings_2fa_Staff_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Protect your staff account`)
};

const es_settings_2fa_staff_title = /** @type {(inputs: Settings_2fa_Staff_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Protege tu cuenta de staff`)
};

const de_settings_2fa_staff_title = /** @type {(inputs: Settings_2fa_Staff_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schütze dein Staff-Konto`)
};

const fr_settings_2fa_staff_title = /** @type {(inputs: Settings_2fa_Staff_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Protégez votre compte staff`)
};

const it_settings_2fa_staff_title = /** @type {(inputs: Settings_2fa_Staff_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Proteggi il tuo account staff`)
};

const nl_settings_2fa_staff_title = /** @type {(inputs: Settings_2fa_Staff_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beveilig je staff-account`)
};

const pl_settings_2fa_staff_title = /** @type {(inputs: Settings_2fa_Staff_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zabezpiecz swoje konto staffu`)
};

const pt_settings_2fa_staff_title = /** @type {(inputs: Settings_2fa_Staff_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Proteja sua conta de staff`)
};

const ru_settings_2fa_staff_title = /** @type {(inputs: Settings_2fa_Staff_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Защитите аккаунт сотрудника`)
};

const sv_settings_2fa_staff_title = /** @type {(inputs: Settings_2fa_Staff_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skydda ditt personalkonto`)
};

const tr_settings_2fa_staff_title = /** @type {(inputs: Settings_2fa_Staff_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekip hesabını koru`)
};

const zh_settings_2fa_staff_title = /** @type {(inputs: Settings_2fa_Staff_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保护你的管理账号`)
};

const ja_settings_2fa_staff_title = /** @type {(inputs: Settings_2fa_Staff_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スタッフアカウントを保護`)
};

/**
* | output |
* | --- |
* | "Protect your staff account" |
*
* @param {Settings_2fa_Staff_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_staff_title = /** @type {((inputs?: Settings_2fa_Staff_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_Staff_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_staff_title(inputs)
	if (locale === "de") return de_settings_2fa_staff_title(inputs)
	if (locale === "fr") return fr_settings_2fa_staff_title(inputs)
	if (locale === "it") return it_settings_2fa_staff_title(inputs)
	if (locale === "nl") return nl_settings_2fa_staff_title(inputs)
	if (locale === "pl") return pl_settings_2fa_staff_title(inputs)
	if (locale === "pt") return pt_settings_2fa_staff_title(inputs)
	if (locale === "ru") return ru_settings_2fa_staff_title(inputs)
	if (locale === "sv") return sv_settings_2fa_staff_title(inputs)
	if (locale === "tr") return tr_settings_2fa_staff_title(inputs)
	if (locale === "zh") return zh_settings_2fa_staff_title(inputs)
	if (locale === "ja") return ja_settings_2fa_staff_title(inputs)
	return en_settings_2fa_staff_title(inputs)
});
