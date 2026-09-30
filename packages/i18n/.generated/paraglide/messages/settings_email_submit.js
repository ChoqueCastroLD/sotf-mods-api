/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_SubmitInputs */

const en_settings_email_submit = /** @type {(inputs: Settings_Email_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Change email`)
};

const es_settings_email_submit = /** @type {(inputs: Settings_Email_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambiar correo`)
};

const de_settings_email_submit = /** @type {(inputs: Settings_Email_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-Mail ändern`)
};

const fr_settings_email_submit = /** @type {(inputs: Settings_Email_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changer d’e-mail`)
};

const it_settings_email_submit = /** @type {(inputs: Settings_Email_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambia email`)
};

const nl_settings_email_submit = /** @type {(inputs: Settings_Email_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mailadres wijzigen`)
};

const pl_settings_email_submit = /** @type {(inputs: Settings_Email_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmień e-mail`)
};

const pt_settings_email_submit = /** @type {(inputs: Settings_Email_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mudar e-mail`)
};

const ru_settings_email_submit = /** @type {(inputs: Settings_Email_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сменить почту`)
};

const sv_settings_email_submit = /** @type {(inputs: Settings_Email_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byt e-post`)
};

const tr_settings_email_submit = /** @type {(inputs: Settings_Email_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-postayı değiştir`)
};

const zh_settings_email_submit = /** @type {(inputs: Settings_Email_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更改邮箱`)
};

const ja_settings_email_submit = /** @type {(inputs: Settings_Email_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メールアドレスを変更`)
};

/**
* | output |
* | --- |
* | "Change email" |
*
* @param {Settings_Email_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_email_submit = /** @type {((inputs?: Settings_Email_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_email_submit(inputs)
	if (locale === "de") return de_settings_email_submit(inputs)
	if (locale === "fr") return fr_settings_email_submit(inputs)
	if (locale === "it") return it_settings_email_submit(inputs)
	if (locale === "nl") return nl_settings_email_submit(inputs)
	if (locale === "pl") return pl_settings_email_submit(inputs)
	if (locale === "pt") return pt_settings_email_submit(inputs)
	if (locale === "ru") return ru_settings_email_submit(inputs)
	if (locale === "sv") return sv_settings_email_submit(inputs)
	if (locale === "tr") return tr_settings_email_submit(inputs)
	if (locale === "zh") return zh_settings_email_submit(inputs)
	if (locale === "ja") return ja_settings_email_submit(inputs)
	return en_settings_email_submit(inputs)
});
