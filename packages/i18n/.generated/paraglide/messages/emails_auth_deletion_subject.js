/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Deletion_SubjectInputs */

const en_emails_auth_deletion_subject = /** @type {(inputs: Emails_Auth_Deletion_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your SOTF Mods account will be deleted`)
};

const es_emails_auth_deletion_subject = /** @type {(inputs: Emails_Auth_Deletion_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu cuenta de SOTF Mods se va a borrar`)
};

const de_emails_auth_deletion_subject = /** @type {(inputs: Emails_Auth_Deletion_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein SOTF-Mods-Konto wird gelöscht`)
};

const fr_emails_auth_deletion_subject = /** @type {(inputs: Emails_Auth_Deletion_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre compte SOTF Mods va être supprimé`)
};

const it_emails_auth_deletion_subject = /** @type {(inputs: Emails_Auth_Deletion_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo account SOTF Mods verrà eliminato`)
};

const nl_emails_auth_deletion_subject = /** @type {(inputs: Emails_Auth_Deletion_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je SOTF Mods-account wordt verwijderd`)
};

const pl_emails_auth_deletion_subject = /** @type {(inputs: Emails_Auth_Deletion_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje konto SOTF Mods zostanie usunięte`)
};

const pt_emails_auth_deletion_subject = /** @type {(inputs: Emails_Auth_Deletion_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua conta do SOTF Mods será excluída`)
};

const ru_emails_auth_deletion_subject = /** @type {(inputs: Emails_Auth_Deletion_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш аккаунт SOTF Mods будет удалён`)
};

const sv_emails_auth_deletion_subject = /** @type {(inputs: Emails_Auth_Deletion_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ditt SOTF Mods-konto kommer att raderas`)
};

const tr_emails_auth_deletion_subject = /** @type {(inputs: Emails_Auth_Deletion_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods hesabın silinecek`)
};

const zh_emails_auth_deletion_subject = /** @type {(inputs: Emails_Auth_Deletion_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的 SOTF Mods 账号将被删除`)
};

const ja_emails_auth_deletion_subject = /** @type {(inputs: Emails_Auth_Deletion_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods アカウントが削除されます`)
};

/**
* | output |
* | --- |
* | "Your SOTF Mods account will be deleted" |
*
* @param {Emails_Auth_Deletion_SubjectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_deletion_subject = /** @type {((inputs?: Emails_Auth_Deletion_SubjectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Deletion_SubjectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_deletion_subject(inputs)
	if (locale === "de") return de_emails_auth_deletion_subject(inputs)
	if (locale === "fr") return fr_emails_auth_deletion_subject(inputs)
	if (locale === "it") return it_emails_auth_deletion_subject(inputs)
	if (locale === "nl") return nl_emails_auth_deletion_subject(inputs)
	if (locale === "pl") return pl_emails_auth_deletion_subject(inputs)
	if (locale === "pt") return pt_emails_auth_deletion_subject(inputs)
	if (locale === "ru") return ru_emails_auth_deletion_subject(inputs)
	if (locale === "sv") return sv_emails_auth_deletion_subject(inputs)
	if (locale === "tr") return tr_emails_auth_deletion_subject(inputs)
	if (locale === "zh") return zh_emails_auth_deletion_subject(inputs)
	if (locale === "ja") return ja_emails_auth_deletion_subject(inputs)
	return en_emails_auth_deletion_subject(inputs)
});
