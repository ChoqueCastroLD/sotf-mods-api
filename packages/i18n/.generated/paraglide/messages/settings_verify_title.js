/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Verify_TitleInputs */

const en_settings_verify_title = /** @type {(inputs: Settings_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify your email address`)
};

const es_settings_verify_title = /** @type {(inputs: Settings_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica tu correo electrónico`)
};

const de_settings_verify_title = /** @type {(inputs: Settings_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige deine E-Mail-Adresse`)
};

const fr_settings_verify_title = /** @type {(inputs: Settings_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifiez votre adresse e-mail`)
};

const it_settings_verify_title = /** @type {(inputs: Settings_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica il tuo indirizzo email`)
};

const nl_settings_verify_title = /** @type {(inputs: Settings_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig je e-mailadres`)
};

const pl_settings_verify_title = /** @type {(inputs: Settings_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdź adres e-mail`)
};

const pt_settings_verify_title = /** @type {(inputs: Settings_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifique seu endereço de e-mail`)
};

const ru_settings_verify_title = /** @type {(inputs: Settings_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите адрес почты`)
};

const sv_settings_verify_title = /** @type {(inputs: Settings_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekräfta din e-postadress`)
};

const tr_settings_verify_title = /** @type {(inputs: Settings_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-posta adresini doğrula`)
};

const zh_settings_verify_title = /** @type {(inputs: Settings_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`验证你的邮箱地址`)
};

const ja_settings_verify_title = /** @type {(inputs: Settings_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メールアドレスを確認してください`)
};

/**
* | output |
* | --- |
* | "Verify your email address" |
*
* @param {Settings_Verify_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_verify_title = /** @type {((inputs?: Settings_Verify_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Verify_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_verify_title(inputs)
	if (locale === "de") return de_settings_verify_title(inputs)
	if (locale === "fr") return fr_settings_verify_title(inputs)
	if (locale === "it") return it_settings_verify_title(inputs)
	if (locale === "nl") return nl_settings_verify_title(inputs)
	if (locale === "pl") return pl_settings_verify_title(inputs)
	if (locale === "pt") return pt_settings_verify_title(inputs)
	if (locale === "ru") return ru_settings_verify_title(inputs)
	if (locale === "sv") return sv_settings_verify_title(inputs)
	if (locale === "tr") return tr_settings_verify_title(inputs)
	if (locale === "zh") return zh_settings_verify_title(inputs)
	if (locale === "ja") return ja_settings_verify_title(inputs)
	return en_settings_verify_title(inputs)
});
