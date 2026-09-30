/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Export_HeadingInputs */

const en_emails_auth_export_heading = /** @type {(inputs: Emails_Auth_Export_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your data is ready`)
};

const es_emails_auth_export_heading = /** @type {(inputs: Emails_Auth_Export_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus datos están listos`)
};

const de_emails_auth_export_heading = /** @type {(inputs: Emails_Auth_Export_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Daten sind bereit`)
};

const fr_emails_auth_export_heading = /** @type {(inputs: Emails_Auth_Export_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos données sont prêtes`)
};

const it_emails_auth_export_heading = /** @type {(inputs: Emails_Auth_Export_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I tuoi dati sono pronti`)
};

const nl_emails_auth_export_heading = /** @type {(inputs: Emails_Auth_Export_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je gegevens staan klaar`)
};

const pl_emails_auth_export_heading = /** @type {(inputs: Emails_Auth_Export_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje dane są gotowe`)
};

const pt_emails_auth_export_heading = /** @type {(inputs: Emails_Auth_Export_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seus dados estão prontos`)
};

const ru_emails_auth_export_heading = /** @type {(inputs: Emails_Auth_Export_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши данные готовы`)
};

const sv_emails_auth_export_heading = /** @type {(inputs: Emails_Auth_Export_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina data är klara`)
};

const tr_emails_auth_export_heading = /** @type {(inputs: Emails_Auth_Export_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verilerin hazır`)
};

const zh_emails_auth_export_heading = /** @type {(inputs: Emails_Auth_Export_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的数据已准备好`)
};

const ja_emails_auth_export_heading = /** @type {(inputs: Emails_Auth_Export_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`データの準備ができました`)
};

/**
* | output |
* | --- |
* | "Your data is ready" |
*
* @param {Emails_Auth_Export_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_export_heading = /** @type {((inputs?: Emails_Auth_Export_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Export_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_export_heading(inputs)
	if (locale === "de") return de_emails_auth_export_heading(inputs)
	if (locale === "fr") return fr_emails_auth_export_heading(inputs)
	if (locale === "it") return it_emails_auth_export_heading(inputs)
	if (locale === "nl") return nl_emails_auth_export_heading(inputs)
	if (locale === "pl") return pl_emails_auth_export_heading(inputs)
	if (locale === "pt") return pt_emails_auth_export_heading(inputs)
	if (locale === "ru") return ru_emails_auth_export_heading(inputs)
	if (locale === "sv") return sv_emails_auth_export_heading(inputs)
	if (locale === "tr") return tr_emails_auth_export_heading(inputs)
	if (locale === "zh") return zh_emails_auth_export_heading(inputs)
	if (locale === "ja") return ja_emails_auth_export_heading(inputs)
	return en_emails_auth_export_heading(inputs)
});
