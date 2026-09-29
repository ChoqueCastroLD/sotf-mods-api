/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Deletion_Cancelled_PreviewInputs */

const en_emails_auth_deletion_cancelled_preview = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The scheduled deletion was cancelled.`)
};

const es_emails_auth_deletion_cancelled_preview = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se ha cancelado el borrado programado.`)
};

const de_emails_auth_deletion_cancelled_preview = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die geplante Löschung wurde abgebrochen.`)
};

const fr_emails_auth_deletion_cancelled_preview = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La suppression programmée a été annulée.`)
};

const it_emails_auth_deletion_cancelled_preview = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’eliminazione programmata è stata annullata.`)
};

const nl_emails_auth_deletion_cancelled_preview = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De geplande verwijdering is geannuleerd.`)
};

const pl_emails_auth_deletion_cancelled_preview = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaplanowane usunięcie zostało anulowane.`)
};

const pt_emails_auth_deletion_cancelled_preview = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A exclusão agendada foi cancelada.`)
};

const ru_emails_auth_deletion_cancelled_preview = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запланированное удаление отменено.`)
};

const sv_emails_auth_deletion_cancelled_preview = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den schemalagda raderingen har avbrutits.`)
};

const tr_emails_auth_deletion_cancelled_preview = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Planlanan silme iptal edildi.`)
};

const zh_emails_auth_deletion_cancelled_preview = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已取消计划中的删除。`)
};

const ja_emails_auth_deletion_cancelled_preview = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`予約していた削除は取り消されました。`)
};

/**
* | output |
* | --- |
* | "The scheduled deletion was cancelled." |
*
* @param {Emails_Auth_Deletion_Cancelled_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_deletion_cancelled_preview = /** @type {((inputs?: Emails_Auth_Deletion_Cancelled_PreviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Deletion_Cancelled_PreviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_deletion_cancelled_preview(inputs)
	if (locale === "de") return de_emails_auth_deletion_cancelled_preview(inputs)
	if (locale === "fr") return fr_emails_auth_deletion_cancelled_preview(inputs)
	if (locale === "it") return it_emails_auth_deletion_cancelled_preview(inputs)
	if (locale === "nl") return nl_emails_auth_deletion_cancelled_preview(inputs)
	if (locale === "pl") return pl_emails_auth_deletion_cancelled_preview(inputs)
	if (locale === "pt") return pt_emails_auth_deletion_cancelled_preview(inputs)
	if (locale === "ru") return ru_emails_auth_deletion_cancelled_preview(inputs)
	if (locale === "sv") return sv_emails_auth_deletion_cancelled_preview(inputs)
	if (locale === "tr") return tr_emails_auth_deletion_cancelled_preview(inputs)
	if (locale === "zh") return zh_emails_auth_deletion_cancelled_preview(inputs)
	if (locale === "ja") return ja_emails_auth_deletion_cancelled_preview(inputs)
	return en_emails_auth_deletion_cancelled_preview(inputs)
});
