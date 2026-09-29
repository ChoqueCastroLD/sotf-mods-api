/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Deletion_HeadingInputs */

const en_emails_auth_deletion_heading = /** @type {(inputs: Emails_Auth_Deletion_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account deletion scheduled`)
};

const es_emails_auth_deletion_heading = /** @type {(inputs: Emails_Auth_Deletion_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrado de cuenta programado`)
};

const de_emails_auth_deletion_heading = /** @type {(inputs: Emails_Auth_Deletion_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontolöschung geplant`)
};

const fr_emails_auth_deletion_heading = /** @type {(inputs: Emails_Auth_Deletion_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suppression du compte programmée`)
};

const it_emails_auth_deletion_heading = /** @type {(inputs: Emails_Auth_Deletion_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminazione dell’account programmata`)
};

const nl_emails_auth_deletion_heading = /** @type {(inputs: Emails_Auth_Deletion_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijdering van account gepland`)
};

const pl_emails_auth_deletion_heading = /** @type {(inputs: Emails_Auth_Deletion_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaplanowano usunięcie konta`)
};

const pt_emails_auth_deletion_heading = /** @type {(inputs: Emails_Auth_Deletion_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exclusão da conta agendada`)
};

const ru_emails_auth_deletion_heading = /** @type {(inputs: Emails_Auth_Deletion_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удаление аккаунта запланировано`)
};

const sv_emails_auth_deletion_heading = /** @type {(inputs: Emails_Auth_Deletion_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radering av konto schemalagd`)
};

const tr_emails_auth_deletion_heading = /** @type {(inputs: Emails_Auth_Deletion_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesap silme planlandı`)
};

const zh_emails_auth_deletion_heading = /** @type {(inputs: Emails_Auth_Deletion_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已安排删除账号`)
};

const ja_emails_auth_deletion_heading = /** @type {(inputs: Emails_Auth_Deletion_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウントの削除を予約しました`)
};

/**
* | output |
* | --- |
* | "Account deletion scheduled" |
*
* @param {Emails_Auth_Deletion_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_deletion_heading = /** @type {((inputs?: Emails_Auth_Deletion_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Deletion_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_deletion_heading(inputs)
	if (locale === "de") return de_emails_auth_deletion_heading(inputs)
	if (locale === "fr") return fr_emails_auth_deletion_heading(inputs)
	if (locale === "it") return it_emails_auth_deletion_heading(inputs)
	if (locale === "nl") return nl_emails_auth_deletion_heading(inputs)
	if (locale === "pl") return pl_emails_auth_deletion_heading(inputs)
	if (locale === "pt") return pt_emails_auth_deletion_heading(inputs)
	if (locale === "ru") return ru_emails_auth_deletion_heading(inputs)
	if (locale === "sv") return sv_emails_auth_deletion_heading(inputs)
	if (locale === "tr") return tr_emails_auth_deletion_heading(inputs)
	if (locale === "zh") return zh_emails_auth_deletion_heading(inputs)
	if (locale === "ja") return ja_emails_auth_deletion_heading(inputs)
	return en_emails_auth_deletion_heading(inputs)
});
