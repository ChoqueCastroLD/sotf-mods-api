/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Security_Change_PreviewInputs */

const en_emails_auth_security_change_preview = /** @type {(inputs: Emails_Auth_Security_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If this wasn’t you, act now.`)
};

const es_emails_auth_security_change_preview = /** @type {(inputs: Emails_Auth_Security_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si no has sido tú, actúa ya.`)
};

const de_emails_auth_security_change_preview = /** @type {(inputs: Emails_Auth_Security_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wenn du das nicht warst, handle jetzt.`)
};

const fr_emails_auth_security_change_preview = /** @type {(inputs: Emails_Auth_Security_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si ce n’était pas vous, agissez maintenant.`)
};

const it_emails_auth_security_change_preview = /** @type {(inputs: Emails_Auth_Security_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se non sei stato tu, agisci subito.`)
};

const nl_emails_auth_security_change_preview = /** @type {(inputs: Emails_Auth_Security_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als jij dit niet was, onderneem dan nu actie.`)
};

const pl_emails_auth_security_change_preview = /** @type {(inputs: Emails_Auth_Security_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeśli to nie Ty, działaj od razu.`)
};

const pt_emails_auth_security_change_preview = /** @type {(inputs: Emails_Auth_Security_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se não foi você, aja agora.`)
};

const ru_emails_auth_security_change_preview = /** @type {(inputs: Emails_Auth_Security_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Если это были не вы, действуйте сейчас.`)
};

const sv_emails_auth_security_change_preview = /** @type {(inputs: Emails_Auth_Security_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Om det inte var du, agera nu.`)
};

const tr_emails_auth_security_change_preview = /** @type {(inputs: Emails_Auth_Security_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sen değilsen hemen harekete geç.`)
};

const zh_emails_auth_security_change_preview = /** @type {(inputs: Emails_Auth_Security_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如果不是你本人，请立即处理。`)
};

const ja_emails_auth_security_change_preview = /** @type {(inputs: Emails_Auth_Security_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ご本人でない場合は、すぐに対処してください。`)
};

/**
* | output |
* | --- |
* | "If this wasn’t you, act now." |
*
* @param {Emails_Auth_Security_Change_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_security_change_preview = /** @type {((inputs?: Emails_Auth_Security_Change_PreviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Security_Change_PreviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_security_change_preview(inputs)
	if (locale === "de") return de_emails_auth_security_change_preview(inputs)
	if (locale === "fr") return fr_emails_auth_security_change_preview(inputs)
	if (locale === "it") return it_emails_auth_security_change_preview(inputs)
	if (locale === "nl") return nl_emails_auth_security_change_preview(inputs)
	if (locale === "pl") return pl_emails_auth_security_change_preview(inputs)
	if (locale === "pt") return pt_emails_auth_security_change_preview(inputs)
	if (locale === "ru") return ru_emails_auth_security_change_preview(inputs)
	if (locale === "sv") return sv_emails_auth_security_change_preview(inputs)
	if (locale === "tr") return tr_emails_auth_security_change_preview(inputs)
	if (locale === "zh") return zh_emails_auth_security_change_preview(inputs)
	if (locale === "ja") return ja_emails_auth_security_change_preview(inputs)
	return en_emails_auth_security_change_preview(inputs)
});
