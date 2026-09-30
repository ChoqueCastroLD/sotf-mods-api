/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Deletion_Cancelled_HeadingInputs */

const en_emails_auth_deletion_cancelled_heading = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deletion cancelled`)
};

const es_emails_auth_deletion_cancelled_heading = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrado cancelado`)
};

const de_emails_auth_deletion_cancelled_heading = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Löschung abgebrochen`)
};

const fr_emails_auth_deletion_cancelled_heading = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suppression annulée`)
};

const it_emails_auth_deletion_cancelled_heading = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminazione annullata`)
};

const nl_emails_auth_deletion_cancelled_heading = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijdering geannuleerd`)
};

const pl_emails_auth_deletion_cancelled_heading = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięcie anulowane`)
};

const pt_emails_auth_deletion_cancelled_heading = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exclusão cancelada`)
};

const ru_emails_auth_deletion_cancelled_heading = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удаление отменено`)
};

const sv_emails_auth_deletion_cancelled_heading = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raderingen avbruten`)
};

const tr_emails_auth_deletion_cancelled_heading = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Silme iptal edildi`)
};

const zh_emails_auth_deletion_cancelled_heading = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已取消删除`)
};

const ja_emails_auth_deletion_cancelled_heading = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除を取り消しました`)
};

/**
* | output |
* | --- |
* | "Deletion cancelled" |
*
* @param {Emails_Auth_Deletion_Cancelled_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_deletion_cancelled_heading = /** @type {((inputs?: Emails_Auth_Deletion_Cancelled_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Deletion_Cancelled_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_deletion_cancelled_heading(inputs)
	if (locale === "de") return de_emails_auth_deletion_cancelled_heading(inputs)
	if (locale === "fr") return fr_emails_auth_deletion_cancelled_heading(inputs)
	if (locale === "it") return it_emails_auth_deletion_cancelled_heading(inputs)
	if (locale === "nl") return nl_emails_auth_deletion_cancelled_heading(inputs)
	if (locale === "pl") return pl_emails_auth_deletion_cancelled_heading(inputs)
	if (locale === "pt") return pt_emails_auth_deletion_cancelled_heading(inputs)
	if (locale === "ru") return ru_emails_auth_deletion_cancelled_heading(inputs)
	if (locale === "sv") return sv_emails_auth_deletion_cancelled_heading(inputs)
	if (locale === "tr") return tr_emails_auth_deletion_cancelled_heading(inputs)
	if (locale === "zh") return zh_emails_auth_deletion_cancelled_heading(inputs)
	if (locale === "ja") return ja_emails_auth_deletion_cancelled_heading(inputs)
	return en_emails_auth_deletion_cancelled_heading(inputs)
});
