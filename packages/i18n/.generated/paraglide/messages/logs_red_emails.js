/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Red_EmailsInputs */

const en_logs_red_emails = /** @type {(inputs: Logs_Red_EmailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mails`)
};

const es_logs_red_emails = /** @type {(inputs: Logs_Red_EmailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Correos`)
};

const de_logs_red_emails = /** @type {(inputs: Logs_Red_EmailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-Mail-Adressen`)
};

const fr_logs_red_emails = /** @type {(inputs: Logs_Red_EmailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mails`)
};

const it_logs_red_emails = /** @type {(inputs: Logs_Red_EmailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail`)
};

const nl_logs_red_emails = /** @type {(inputs: Logs_Red_EmailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mailadressen`)
};

const pl_logs_red_emails = /** @type {(inputs: Logs_Red_EmailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-maile`)
};

const pt_logs_red_emails = /** @type {(inputs: Logs_Red_EmailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mails`)
};

const ru_logs_red_emails = /** @type {(inputs: Logs_Red_EmailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail`)
};

const sv_logs_red_emails = /** @type {(inputs: Logs_Red_EmailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-postadresser`)
};

const tr_logs_red_emails = /** @type {(inputs: Logs_Red_EmailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-postalar`)
};

const zh_logs_red_emails = /** @type {(inputs: Logs_Red_EmailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`邮箱`)
};

const ja_logs_red_emails = /** @type {(inputs: Logs_Red_EmailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メールアドレス`)
};

/**
* | output |
* | --- |
* | "E-mails" |
*
* @param {Logs_Red_EmailsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_red_emails = /** @type {((inputs?: Logs_Red_EmailsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Red_EmailsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_red_emails(inputs)
	if (locale === "de") return de_logs_red_emails(inputs)
	if (locale === "fr") return fr_logs_red_emails(inputs)
	if (locale === "it") return it_logs_red_emails(inputs)
	if (locale === "nl") return nl_logs_red_emails(inputs)
	if (locale === "pl") return pl_logs_red_emails(inputs)
	if (locale === "pt") return pt_logs_red_emails(inputs)
	if (locale === "ru") return ru_logs_red_emails(inputs)
	if (locale === "sv") return sv_logs_red_emails(inputs)
	if (locale === "tr") return tr_logs_red_emails(inputs)
	if (locale === "zh") return zh_logs_red_emails(inputs)
	if (locale === "ja") return ja_logs_red_emails(inputs)
	return en_logs_red_emails(inputs)
});
