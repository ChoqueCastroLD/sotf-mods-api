/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Deleted_SubjectInputs */

const en_emails_auth_deleted_subject = /** @type {(inputs: Emails_Auth_Deleted_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your SOTF Mods account was deleted`)
};

const es_emails_auth_deleted_subject = /** @type {(inputs: Emails_Auth_Deleted_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se ha borrado tu cuenta de SOTF Mods`)
};

const de_emails_auth_deleted_subject = /** @type {(inputs: Emails_Auth_Deleted_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein SOTF-Mods-Konto wurde gelöscht`)
};

const fr_emails_auth_deleted_subject = /** @type {(inputs: Emails_Auth_Deleted_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre compte SOTF Mods a été supprimé`)
};

const it_emails_auth_deleted_subject = /** @type {(inputs: Emails_Auth_Deleted_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo account SOTF Mods è stato eliminato`)
};

const nl_emails_auth_deleted_subject = /** @type {(inputs: Emails_Auth_Deleted_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je SOTF Mods-account is verwijderd`)
};

const pl_emails_auth_deleted_subject = /** @type {(inputs: Emails_Auth_Deleted_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje konto SOTF Mods zostało usunięte`)
};

const pt_emails_auth_deleted_subject = /** @type {(inputs: Emails_Auth_Deleted_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua conta do SOTF Mods foi excluída`)
};

const ru_emails_auth_deleted_subject = /** @type {(inputs: Emails_Auth_Deleted_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш аккаунт SOTF Mods удалён`)
};

const sv_emails_auth_deleted_subject = /** @type {(inputs: Emails_Auth_Deleted_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ditt SOTF Mods-konto har raderats`)
};

const tr_emails_auth_deleted_subject = /** @type {(inputs: Emails_Auth_Deleted_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods hesabın silindi`)
};

const zh_emails_auth_deleted_subject = /** @type {(inputs: Emails_Auth_Deleted_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的 SOTF Mods 账号已删除`)
};

const ja_emails_auth_deleted_subject = /** @type {(inputs: Emails_Auth_Deleted_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods アカウントを削除しました`)
};

/**
* | output |
* | --- |
* | "Your SOTF Mods account was deleted" |
*
* @param {Emails_Auth_Deleted_SubjectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_deleted_subject = /** @type {((inputs?: Emails_Auth_Deleted_SubjectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Deleted_SubjectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_deleted_subject(inputs)
	if (locale === "de") return de_emails_auth_deleted_subject(inputs)
	if (locale === "fr") return fr_emails_auth_deleted_subject(inputs)
	if (locale === "it") return it_emails_auth_deleted_subject(inputs)
	if (locale === "nl") return nl_emails_auth_deleted_subject(inputs)
	if (locale === "pl") return pl_emails_auth_deleted_subject(inputs)
	if (locale === "pt") return pt_emails_auth_deleted_subject(inputs)
	if (locale === "ru") return ru_emails_auth_deleted_subject(inputs)
	if (locale === "sv") return sv_emails_auth_deleted_subject(inputs)
	if (locale === "tr") return tr_emails_auth_deleted_subject(inputs)
	if (locale === "zh") return zh_emails_auth_deleted_subject(inputs)
	if (locale === "ja") return ja_emails_auth_deleted_subject(inputs)
	return en_emails_auth_deleted_subject(inputs)
});
