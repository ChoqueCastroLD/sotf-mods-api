/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Review_SessionsInputs */

const en_emails_auth_review_sessions = /** @type {(inputs: Emails_Auth_Review_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review your sessions`)
};

const es_emails_auth_review_sessions = /** @type {(inputs: Emails_Auth_Review_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisar tus sesiones`)
};

const de_emails_auth_review_sessions = /** @type {(inputs: Emails_Auth_Review_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sitzungen prüfen`)
};

const fr_emails_auth_review_sessions = /** @type {(inputs: Emails_Auth_Review_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifier vos sessions`)
};

const it_emails_auth_review_sessions = /** @type {(inputs: Emails_Auth_Review_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controlla le sessioni`)
};

const nl_emails_auth_review_sessions = /** @type {(inputs: Emails_Auth_Review_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sessies controleren`)
};

const pl_emails_auth_review_sessions = /** @type {(inputs: Emails_Auth_Review_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdź sesje`)
};

const pt_emails_auth_review_sessions = /** @type {(inputs: Emails_Auth_Review_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisar suas sessões`)
};

const ru_emails_auth_review_sessions = /** @type {(inputs: Emails_Auth_Review_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверить сеансы`)
};

const sv_emails_auth_review_sessions = /** @type {(inputs: Emails_Auth_Review_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Granska sessioner`)
};

const tr_emails_auth_review_sessions = /** @type {(inputs: Emails_Auth_Review_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oturumları gözden geçir`)
};

const zh_emails_auth_review_sessions = /** @type {(inputs: Emails_Auth_Review_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`检查会话`)
};

const ja_emails_auth_review_sessions = /** @type {(inputs: Emails_Auth_Review_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セッションを確認`)
};

/**
* | output |
* | --- |
* | "Review your sessions" |
*
* @param {Emails_Auth_Review_SessionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_review_sessions = /** @type {((inputs?: Emails_Auth_Review_SessionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Review_SessionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_review_sessions(inputs)
	if (locale === "de") return de_emails_auth_review_sessions(inputs)
	if (locale === "fr") return fr_emails_auth_review_sessions(inputs)
	if (locale === "it") return it_emails_auth_review_sessions(inputs)
	if (locale === "nl") return nl_emails_auth_review_sessions(inputs)
	if (locale === "pl") return pl_emails_auth_review_sessions(inputs)
	if (locale === "pt") return pt_emails_auth_review_sessions(inputs)
	if (locale === "ru") return ru_emails_auth_review_sessions(inputs)
	if (locale === "sv") return sv_emails_auth_review_sessions(inputs)
	if (locale === "tr") return tr_emails_auth_review_sessions(inputs)
	if (locale === "zh") return zh_emails_auth_review_sessions(inputs)
	if (locale === "ja") return ja_emails_auth_review_sessions(inputs)
	return en_emails_auth_review_sessions(inputs)
});
