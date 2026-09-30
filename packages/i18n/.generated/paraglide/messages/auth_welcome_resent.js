/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Welcome_ResentInputs */

const en_auth_welcome_resent = /** @type {(inputs: Auth_Welcome_ResentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sent. Check your inbox and your spam folder.`)
};

const es_auth_welcome_resent = /** @type {(inputs: Auth_Welcome_ResentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviado. Revisa tu bandeja de entrada y la carpeta de spam.`)
};

const de_auth_welcome_resent = /** @type {(inputs: Auth_Welcome_ResentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gesendet. Schau in deinen Posteingang und in den Spam-Ordner.`)
};

const fr_auth_welcome_resent = /** @type {(inputs: Auth_Welcome_ResentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyé. Vérifiez votre boîte de réception et vos spams.`)
};

const it_auth_welcome_resent = /** @type {(inputs: Auth_Welcome_ResentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inviato. Controlla la posta in arrivo e la cartella spam.`)
};

const nl_auth_welcome_resent = /** @type {(inputs: Auth_Welcome_ResentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verstuurd. Kijk in je inbox en je spammap.`)
};

const pl_auth_welcome_resent = /** @type {(inputs: Auth_Welcome_ResentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wysłano. Sprawdź skrzynkę odbiorczą i folder spam.`)
};

const pt_auth_welcome_resent = /** @type {(inputs: Auth_Welcome_ResentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviado. Confira sua caixa de entrada e a pasta de spam.`)
};

const ru_auth_welcome_resent = /** @type {(inputs: Auth_Welcome_ResentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправлено. Проверьте входящие и папку «Спам».`)
};

const sv_auth_welcome_resent = /** @type {(inputs: Auth_Welcome_ResentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skickat. Kolla inkorgen och skräppostmappen.`)
};

const tr_auth_welcome_resent = /** @type {(inputs: Auth_Welcome_ResentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gönderildi. Gelen kutunu ve spam klasörünü kontrol et.`)
};

const zh_auth_welcome_resent = /** @type {(inputs: Auth_Welcome_ResentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已发送。请查看收件箱和垃圾邮件文件夹。`)
};

const ja_auth_welcome_resent = /** @type {(inputs: Auth_Welcome_ResentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`送信しました。受信トレイと迷惑メールフォルダを確認してください。`)
};

/**
* | output |
* | --- |
* | "Sent. Check your inbox and your spam folder." |
*
* @param {Auth_Welcome_ResentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_welcome_resent = /** @type {((inputs?: Auth_Welcome_ResentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Welcome_ResentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_welcome_resent(inputs)
	if (locale === "de") return de_auth_welcome_resent(inputs)
	if (locale === "fr") return fr_auth_welcome_resent(inputs)
	if (locale === "it") return it_auth_welcome_resent(inputs)
	if (locale === "nl") return nl_auth_welcome_resent(inputs)
	if (locale === "pl") return pl_auth_welcome_resent(inputs)
	if (locale === "pt") return pt_auth_welcome_resent(inputs)
	if (locale === "ru") return ru_auth_welcome_resent(inputs)
	if (locale === "sv") return sv_auth_welcome_resent(inputs)
	if (locale === "tr") return tr_auth_welcome_resent(inputs)
	if (locale === "zh") return zh_auth_welcome_resent(inputs)
	if (locale === "ja") return ja_auth_welcome_resent(inputs)
	return en_auth_welcome_resent(inputs)
});
