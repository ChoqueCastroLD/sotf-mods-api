/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Password_Changed_PreviewInputs */

const en_emails_auth_password_changed_preview = /** @type {(inputs: Emails_Auth_Password_Changed_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If this wasn’t you, secure your account.`)
};

const es_emails_auth_password_changed_preview = /** @type {(inputs: Emails_Auth_Password_Changed_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si no has sido tú, protege tu cuenta.`)
};

const de_emails_auth_password_changed_preview = /** @type {(inputs: Emails_Auth_Password_Changed_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falls du das nicht warst, sichere dein Konto.`)
};

const fr_emails_auth_password_changed_preview = /** @type {(inputs: Emails_Auth_Password_Changed_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si ce n’était pas vous, sécurisez votre compte.`)
};

const it_emails_auth_password_changed_preview = /** @type {(inputs: Emails_Auth_Password_Changed_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se non sei stato tu, proteggi il tuo account.`)
};

const nl_emails_auth_password_changed_preview = /** @type {(inputs: Emails_Auth_Password_Changed_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was jij dit niet? Beveilig je account.`)
};

const pl_emails_auth_password_changed_preview = /** @type {(inputs: Emails_Auth_Password_Changed_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeśli to nie Ty, zabezpiecz konto.`)
};

const pt_emails_auth_password_changed_preview = /** @type {(inputs: Emails_Auth_Password_Changed_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se não foi você, proteja sua conta.`)
};

const ru_emails_auth_password_changed_preview = /** @type {(inputs: Emails_Auth_Password_Changed_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Если это были не вы, защитите аккаунт.`)
};

const sv_emails_auth_password_changed_preview = /** @type {(inputs: Emails_Auth_Password_Changed_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Om det inte var du, säkra ditt konto.`)
};

const tr_emails_auth_password_changed_preview = /** @type {(inputs: Emails_Auth_Password_Changed_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sen değilsen hesabını güvene al.`)
};

const zh_emails_auth_password_changed_preview = /** @type {(inputs: Emails_Auth_Password_Changed_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如果不是你本人操作，请保护好你的账号。`)
};

const ja_emails_auth_password_changed_preview = /** @type {(inputs: Emails_Auth_Password_Changed_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`心当たりがない場合は、アカウントを保護してください。`)
};

/**
* | output |
* | --- |
* | "If this wasn’t you, secure your account." |
*
* @param {Emails_Auth_Password_Changed_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_password_changed_preview = /** @type {((inputs?: Emails_Auth_Password_Changed_PreviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Password_Changed_PreviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_password_changed_preview(inputs)
	if (locale === "de") return de_emails_auth_password_changed_preview(inputs)
	if (locale === "fr") return fr_emails_auth_password_changed_preview(inputs)
	if (locale === "it") return it_emails_auth_password_changed_preview(inputs)
	if (locale === "nl") return nl_emails_auth_password_changed_preview(inputs)
	if (locale === "pl") return pl_emails_auth_password_changed_preview(inputs)
	if (locale === "pt") return pt_emails_auth_password_changed_preview(inputs)
	if (locale === "ru") return ru_emails_auth_password_changed_preview(inputs)
	if (locale === "sv") return sv_emails_auth_password_changed_preview(inputs)
	if (locale === "tr") return tr_emails_auth_password_changed_preview(inputs)
	if (locale === "zh") return zh_emails_auth_password_changed_preview(inputs)
	if (locale === "ja") return ja_emails_auth_password_changed_preview(inputs)
	return en_emails_auth_password_changed_preview(inputs)
});
