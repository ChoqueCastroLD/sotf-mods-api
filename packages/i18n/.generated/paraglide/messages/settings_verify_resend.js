/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Verify_ResendInputs */

const en_settings_verify_resend = /** @type {(inputs: Settings_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resend the link`)
};

const es_settings_verify_resend = /** @type {(inputs: Settings_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reenviar el enlace`)
};

const de_settings_verify_resend = /** @type {(inputs: Settings_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link erneut senden`)
};

const fr_settings_verify_resend = /** @type {(inputs: Settings_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Renvoyer le lien`)
};

const it_settings_verify_resend = /** @type {(inputs: Settings_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invia di nuovo il link`)
};

const nl_settings_verify_resend = /** @type {(inputs: Settings_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link opnieuw sturen`)
};

const pl_settings_verify_resend = /** @type {(inputs: Settings_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyślij link ponownie`)
};

const pt_settings_verify_resend = /** @type {(inputs: Settings_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reenviar o link`)
};

const ru_settings_verify_resend = /** @type {(inputs: Settings_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправить ссылку ещё раз`)
};

const sv_settings_verify_resend = /** @type {(inputs: Settings_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skicka länken igen`)
};

const tr_settings_verify_resend = /** @type {(inputs: Settings_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantıyı yeniden gönder`)
};

const zh_settings_verify_resend = /** @type {(inputs: Settings_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新发送链接`)
};

const ja_settings_verify_resend = /** @type {(inputs: Settings_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクを再送信`)
};

/**
* | output |
* | --- |
* | "Resend the link" |
*
* @param {Settings_Verify_ResendInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_verify_resend = /** @type {((inputs?: Settings_Verify_ResendInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Verify_ResendInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_verify_resend(inputs)
	if (locale === "de") return de_settings_verify_resend(inputs)
	if (locale === "fr") return fr_settings_verify_resend(inputs)
	if (locale === "it") return it_settings_verify_resend(inputs)
	if (locale === "nl") return nl_settings_verify_resend(inputs)
	if (locale === "pl") return pl_settings_verify_resend(inputs)
	if (locale === "pt") return pt_settings_verify_resend(inputs)
	if (locale === "ru") return ru_settings_verify_resend(inputs)
	if (locale === "sv") return sv_settings_verify_resend(inputs)
	if (locale === "tr") return tr_settings_verify_resend(inputs)
	if (locale === "zh") return zh_settings_verify_resend(inputs)
	if (locale === "ja") return ja_settings_verify_resend(inputs)
	return en_settings_verify_resend(inputs)
});
