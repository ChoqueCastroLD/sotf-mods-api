/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Verify_Resend_FailedInputs */

const en_settings_verify_resend_failed = /** @type {(inputs: Settings_Verify_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t send the link`)
};

const es_settings_verify_resend_failed = /** @type {(inputs: Settings_Verify_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se ha podido enviar el enlace`)
};

const de_settings_verify_resend_failed = /** @type {(inputs: Settings_Verify_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Link konnte nicht gesendet werden`)
};

const fr_settings_verify_resend_failed = /** @type {(inputs: Settings_Verify_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d’envoyer le lien`)
};

const it_settings_verify_resend_failed = /** @type {(inputs: Settings_Verify_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile inviare il link`)
};

const nl_settings_verify_resend_failed = /** @type {(inputs: Settings_Verify_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De link kon niet worden verstuurd`)
};

const pl_settings_verify_resend_failed = /** @type {(inputs: Settings_Verify_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wysłać linku`)
};

const pt_settings_verify_resend_failed = /** @type {(inputs: Settings_Verify_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível enviar o link`)
};

const ru_settings_verify_resend_failed = /** @type {(inputs: Settings_Verify_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось отправить ссылку`)
};

const sv_settings_verify_resend_failed = /** @type {(inputs: Settings_Verify_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att skicka länken`)
};

const tr_settings_verify_resend_failed = /** @type {(inputs: Settings_Verify_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantı gönderilemedi`)
};

const zh_settings_verify_resend_failed = /** @type {(inputs: Settings_Verify_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法发送链接`)
};

const ja_settings_verify_resend_failed = /** @type {(inputs: Settings_Verify_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクを送信できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t send the link" |
*
* @param {Settings_Verify_Resend_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_verify_resend_failed = /** @type {((inputs?: Settings_Verify_Resend_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Verify_Resend_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_verify_resend_failed(inputs)
	if (locale === "de") return de_settings_verify_resend_failed(inputs)
	if (locale === "fr") return fr_settings_verify_resend_failed(inputs)
	if (locale === "it") return it_settings_verify_resend_failed(inputs)
	if (locale === "nl") return nl_settings_verify_resend_failed(inputs)
	if (locale === "pl") return pl_settings_verify_resend_failed(inputs)
	if (locale === "pt") return pt_settings_verify_resend_failed(inputs)
	if (locale === "ru") return ru_settings_verify_resend_failed(inputs)
	if (locale === "sv") return sv_settings_verify_resend_failed(inputs)
	if (locale === "tr") return tr_settings_verify_resend_failed(inputs)
	if (locale === "zh") return zh_settings_verify_resend_failed(inputs)
	if (locale === "ja") return ja_settings_verify_resend_failed(inputs)
	return en_settings_verify_resend_failed(inputs)
});
