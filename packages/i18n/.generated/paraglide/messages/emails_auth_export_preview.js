/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Export_PreviewInputs */

const en_emails_auth_export_preview = /** @type {(inputs: Emails_Auth_Export_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download a copy of everything linked to your account.`)
};

const es_emails_auth_export_preview = /** @type {(inputs: Emails_Auth_Export_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descarga una copia de todo lo vinculado a tu cuenta.`)
};

const de_emails_auth_export_preview = /** @type {(inputs: Emails_Auth_Export_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lade eine Kopie von allem herunter, was mit deinem Konto verknüpft ist.`)
};

const fr_emails_auth_export_preview = /** @type {(inputs: Emails_Auth_Export_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargez une copie de tout ce qui est lié à votre compte.`)
};

const it_emails_auth_export_preview = /** @type {(inputs: Emails_Auth_Export_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica una copia di tutto ciò che è collegato al tuo account.`)
};

const nl_emails_auth_export_preview = /** @type {(inputs: Emails_Auth_Export_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download een kopie van alles wat aan je account is gekoppeld.`)
};

const pl_emails_auth_export_preview = /** @type {(inputs: Emails_Auth_Export_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz kopię wszystkiego, co jest powiązane z Twoim kontem.`)
};

const pt_emails_auth_export_preview = /** @type {(inputs: Emails_Auth_Export_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixe uma cópia de tudo o que está ligado à sua conta.`)
};

const ru_emails_auth_export_preview = /** @type {(inputs: Emails_Auth_Export_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачайте копию всего, что связано с вашим аккаунтом.`)
};

const sv_emails_auth_export_preview = /** @type {(inputs: Emails_Auth_Export_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ner en kopia av allt som är kopplat till ditt konto.`)
};

const tr_emails_auth_export_preview = /** @type {(inputs: Emails_Auth_Export_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesabına bağlı her şeyin bir kopyasını indir.`)
};

const zh_emails_auth_export_preview = /** @type {(inputs: Emails_Auth_Export_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载与你账号相关的全部数据副本。`)
};

const ja_emails_auth_export_preview = /** @type {(inputs: Emails_Auth_Export_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウントに関連するすべてのデータのコピーをダウンロードできます。`)
};

/**
* | output |
* | --- |
* | "Download a copy of everything linked to your account." |
*
* @param {Emails_Auth_Export_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_export_preview = /** @type {((inputs?: Emails_Auth_Export_PreviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Export_PreviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_export_preview(inputs)
	if (locale === "de") return de_emails_auth_export_preview(inputs)
	if (locale === "fr") return fr_emails_auth_export_preview(inputs)
	if (locale === "it") return it_emails_auth_export_preview(inputs)
	if (locale === "nl") return nl_emails_auth_export_preview(inputs)
	if (locale === "pl") return pl_emails_auth_export_preview(inputs)
	if (locale === "pt") return pt_emails_auth_export_preview(inputs)
	if (locale === "ru") return ru_emails_auth_export_preview(inputs)
	if (locale === "sv") return sv_emails_auth_export_preview(inputs)
	if (locale === "tr") return tr_emails_auth_export_preview(inputs)
	if (locale === "zh") return zh_emails_auth_export_preview(inputs)
	if (locale === "ja") return ja_emails_auth_export_preview(inputs)
	return en_emails_auth_export_preview(inputs)
});
