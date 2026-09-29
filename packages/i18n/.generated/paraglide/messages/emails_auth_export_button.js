/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Export_ButtonInputs */

const en_emails_auth_export_button = /** @type {(inputs: Emails_Auth_Export_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download my data`)
};

const es_emails_auth_export_button = /** @type {(inputs: Emails_Auth_Export_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargar mis datos`)
};

const de_emails_auth_export_button = /** @type {(inputs: Emails_Auth_Export_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meine Daten herunterladen`)
};

const fr_emails_auth_export_button = /** @type {(inputs: Emails_Auth_Export_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Télécharger mes données`)
};

const it_emails_auth_export_button = /** @type {(inputs: Emails_Auth_Export_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica i miei dati`)
};

const nl_emails_auth_export_button = /** @type {(inputs: Emails_Auth_Export_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mijn gegevens downloaden`)
};

const pl_emails_auth_export_button = /** @type {(inputs: Emails_Auth_Export_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz moje dane`)
};

const pt_emails_auth_export_button = /** @type {(inputs: Emails_Auth_Export_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixar meus dados`)
};

const ru_emails_auth_export_button = /** @type {(inputs: Emails_Auth_Export_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать мои данные`)
};

const sv_emails_auth_export_button = /** @type {(inputs: Emails_Auth_Export_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ner mina data`)
};

const tr_emails_auth_export_button = /** @type {(inputs: Emails_Auth_Export_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verilerimi indir`)
};

const zh_emails_auth_export_button = /** @type {(inputs: Emails_Auth_Export_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载我的数据`)
};

const ja_emails_auth_export_button = /** @type {(inputs: Emails_Auth_Export_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`データをダウンロード`)
};

/**
* | output |
* | --- |
* | "Download my data" |
*
* @param {Emails_Auth_Export_ButtonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_export_button = /** @type {((inputs?: Emails_Auth_Export_ButtonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Export_ButtonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_export_button(inputs)
	if (locale === "de") return de_emails_auth_export_button(inputs)
	if (locale === "fr") return fr_emails_auth_export_button(inputs)
	if (locale === "it") return it_emails_auth_export_button(inputs)
	if (locale === "nl") return nl_emails_auth_export_button(inputs)
	if (locale === "pl") return pl_emails_auth_export_button(inputs)
	if (locale === "pt") return pt_emails_auth_export_button(inputs)
	if (locale === "ru") return ru_emails_auth_export_button(inputs)
	if (locale === "sv") return sv_emails_auth_export_button(inputs)
	if (locale === "tr") return tr_emails_auth_export_button(inputs)
	if (locale === "zh") return zh_emails_auth_export_button(inputs)
	if (locale === "ja") return ja_emails_auth_export_button(inputs)
	return en_emails_auth_export_button(inputs)
});
