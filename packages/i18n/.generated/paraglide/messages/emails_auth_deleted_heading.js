/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Deleted_HeadingInputs */

const en_emails_auth_deleted_heading = /** @type {(inputs: Emails_Auth_Deleted_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account deleted`)
};

const es_emails_auth_deleted_heading = /** @type {(inputs: Emails_Auth_Deleted_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuenta borrada`)
};

const de_emails_auth_deleted_heading = /** @type {(inputs: Emails_Auth_Deleted_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto gelöscht`)
};

const fr_emails_auth_deleted_heading = /** @type {(inputs: Emails_Auth_Deleted_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compte supprimé`)
};

const it_emails_auth_deleted_heading = /** @type {(inputs: Emails_Auth_Deleted_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account eliminato`)
};

const nl_emails_auth_deleted_heading = /** @type {(inputs: Emails_Auth_Deleted_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account verwijderd`)
};

const pl_emails_auth_deleted_heading = /** @type {(inputs: Emails_Auth_Deleted_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto usunięte`)
};

const pt_emails_auth_deleted_heading = /** @type {(inputs: Emails_Auth_Deleted_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conta excluída`)
};

const ru_emails_auth_deleted_heading = /** @type {(inputs: Emails_Auth_Deleted_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Аккаунт удалён`)
};

const sv_emails_auth_deleted_heading = /** @type {(inputs: Emails_Auth_Deleted_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontot raderat`)
};

const tr_emails_auth_deleted_heading = /** @type {(inputs: Emails_Auth_Deleted_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesap silindi`)
};

const zh_emails_auth_deleted_heading = /** @type {(inputs: Emails_Auth_Deleted_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`账号已删除`)
};

const ja_emails_auth_deleted_heading = /** @type {(inputs: Emails_Auth_Deleted_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウントを削除しました`)
};

/**
* | output |
* | --- |
* | "Account deleted" |
*
* @param {Emails_Auth_Deleted_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_deleted_heading = /** @type {((inputs?: Emails_Auth_Deleted_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Deleted_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_deleted_heading(inputs)
	if (locale === "de") return de_emails_auth_deleted_heading(inputs)
	if (locale === "fr") return fr_emails_auth_deleted_heading(inputs)
	if (locale === "it") return it_emails_auth_deleted_heading(inputs)
	if (locale === "nl") return nl_emails_auth_deleted_heading(inputs)
	if (locale === "pl") return pl_emails_auth_deleted_heading(inputs)
	if (locale === "pt") return pt_emails_auth_deleted_heading(inputs)
	if (locale === "ru") return ru_emails_auth_deleted_heading(inputs)
	if (locale === "sv") return sv_emails_auth_deleted_heading(inputs)
	if (locale === "tr") return tr_emails_auth_deleted_heading(inputs)
	if (locale === "zh") return zh_emails_auth_deleted_heading(inputs)
	if (locale === "ja") return ja_emails_auth_deleted_heading(inputs)
	return en_emails_auth_deleted_heading(inputs)
});
