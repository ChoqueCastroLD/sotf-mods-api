/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Export_BodyInputs */

const en_emails_auth_export_body = /** @type {(inputs: Emails_Auth_Export_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your export is a ZIP file with every record linked to your account, as JSON.`)
};

const es_emails_auth_export_body = /** @type {(inputs: Emails_Auth_Export_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu exportación es un archivo ZIP con cada registro vinculado a tu cuenta, en JSON.`)
};

const de_emails_auth_export_body = /** @type {(inputs: Emails_Auth_Export_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Export ist eine ZIP-Datei mit allen Datensätzen deines Kontos im JSON-Format.`)
};

const fr_emails_auth_export_body = /** @type {(inputs: Emails_Auth_Export_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre export est un fichier ZIP contenant chaque enregistrement lié à votre compte, au format JSON.`)
};

const it_emails_auth_export_body = /** @type {(inputs: Emails_Auth_Export_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’esportazione è un file ZIP con ogni record collegato al tuo account, in formato JSON.`)
};

const nl_emails_auth_export_body = /** @type {(inputs: Emails_Auth_Export_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je export is een ZIP-bestand met elk record dat aan je account is gekoppeld, in JSON.`)
};

const pl_emails_auth_export_body = /** @type {(inputs: Emails_Auth_Export_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eksport to plik ZIP z każdym rekordem powiązanym z Twoim kontem, w formacie JSON.`)
};

const pt_emails_auth_export_body = /** @type {(inputs: Emails_Auth_Export_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua exportação é um arquivo ZIP com cada registro ligado à sua conta, em JSON.`)
};

const ru_emails_auth_export_body = /** @type {(inputs: Emails_Auth_Export_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Экспорт — это ZIP-архив со всеми записями вашего аккаунта в формате JSON.`)
};

const sv_emails_auth_export_body = /** @type {(inputs: Emails_Auth_Export_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exporten är en ZIP-fil med varje post som är kopplad till ditt konto, i JSON.`)
};

const tr_emails_auth_export_body = /** @type {(inputs: Emails_Auth_Export_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dışa aktarımın, hesabına bağlı tüm kayıtları JSON olarak içeren bir ZIP dosyasıdır.`)
};

const zh_emails_auth_export_body = /** @type {(inputs: Emails_Auth_Export_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`导出文件是一个 ZIP 压缩包，包含与你账号相关的每条记录（JSON 格式）。`)
};

const ja_emails_auth_export_body = /** @type {(inputs: Emails_Auth_Export_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エクスポートは、アカウントに関連するすべての記録を JSON 形式で含む ZIP ファイルです。`)
};

/**
* | output |
* | --- |
* | "Your export is a ZIP file with every record linked to your account, as JSON." |
*
* @param {Emails_Auth_Export_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_export_body = /** @type {((inputs?: Emails_Auth_Export_BodyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Export_BodyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_export_body(inputs)
	if (locale === "de") return de_emails_auth_export_body(inputs)
	if (locale === "fr") return fr_emails_auth_export_body(inputs)
	if (locale === "it") return it_emails_auth_export_body(inputs)
	if (locale === "nl") return nl_emails_auth_export_body(inputs)
	if (locale === "pl") return pl_emails_auth_export_body(inputs)
	if (locale === "pt") return pt_emails_auth_export_body(inputs)
	if (locale === "ru") return ru_emails_auth_export_body(inputs)
	if (locale === "sv") return sv_emails_auth_export_body(inputs)
	if (locale === "tr") return tr_emails_auth_export_body(inputs)
	if (locale === "zh") return zh_emails_auth_export_body(inputs)
	if (locale === "ja") return ja_emails_auth_export_body(inputs)
	return en_emails_auth_export_body(inputs)
});
