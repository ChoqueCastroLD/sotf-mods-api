/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ when: NonNullable<unknown> }} Emails_Auth_Deletion_Cancelled_BodyInputs */

const en_emails_auth_deletion_cancelled_body = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The deletion was cancelled on ${i?.when} (UTC). Your account stays as it is.`)
};

const es_emails_auth_deletion_cancelled_body = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`El borrado se canceló el ${i?.when} (UTC). Tu cuenta sigue igual.`)
};

const de_emails_auth_deletion_cancelled_body = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Die Löschung wurde am ${i?.when} (UTC) abgebrochen. Dein Konto bleibt, wie es ist.`)
};

const fr_emails_auth_deletion_cancelled_body = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La suppression a été annulée le ${i?.when} (UTC). Votre compte reste tel quel.`)
};

const it_emails_auth_deletion_cancelled_body = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`L’eliminazione è stata annullata il ${i?.when} (UTC). Il tuo account resta com’è.`)
};

const nl_emails_auth_deletion_cancelled_body = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De verwijdering is geannuleerd op ${i?.when} (UTC). Je account blijft zoals het is.`)
};

const pl_emails_auth_deletion_cancelled_body = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usunięcie anulowano ${i?.when} (UTC). Twoje konto pozostaje bez zmian.`)
};

const pt_emails_auth_deletion_cancelled_body = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A exclusão foi cancelada em ${i?.when} (UTC). Sua conta continua como está.`)
};

const ru_emails_auth_deletion_cancelled_body = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Удаление отменено ${i?.when} (UTC). Аккаунт остаётся как есть.`)
};

const sv_emails_auth_deletion_cancelled_body = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Raderingen avbröts ${i?.when} (UTC). Ditt konto förblir som det är.`)
};

const tr_emails_auth_deletion_cancelled_body = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Silme işlemi ${i?.when} (UTC) tarihinde iptal edildi. Hesabın olduğu gibi kalıyor.`)
};

const zh_emails_auth_deletion_cancelled_body = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`删除已于 ${i?.when}（UTC）取消。你的账号保持不变。`)
};

const ja_emails_auth_deletion_cancelled_body = /** @type {(inputs: Emails_Auth_Deletion_Cancelled_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`削除は ${i?.when}（UTC）に取り消されました。アカウントはそのまま残ります。`)
};

/**
* | output |
* | --- |
* | "The deletion was cancelled on {when} (UTC). Your account stays as it is." |
*
* @param {Emails_Auth_Deletion_Cancelled_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_deletion_cancelled_body = /** @type {((inputs: Emails_Auth_Deletion_Cancelled_BodyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Deletion_Cancelled_BodyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_deletion_cancelled_body(inputs)
	if (locale === "de") return de_emails_auth_deletion_cancelled_body(inputs)
	if (locale === "fr") return fr_emails_auth_deletion_cancelled_body(inputs)
	if (locale === "it") return it_emails_auth_deletion_cancelled_body(inputs)
	if (locale === "nl") return nl_emails_auth_deletion_cancelled_body(inputs)
	if (locale === "pl") return pl_emails_auth_deletion_cancelled_body(inputs)
	if (locale === "pt") return pt_emails_auth_deletion_cancelled_body(inputs)
	if (locale === "ru") return ru_emails_auth_deletion_cancelled_body(inputs)
	if (locale === "sv") return sv_emails_auth_deletion_cancelled_body(inputs)
	if (locale === "tr") return tr_emails_auth_deletion_cancelled_body(inputs)
	if (locale === "zh") return zh_emails_auth_deletion_cancelled_body(inputs)
	if (locale === "ja") return ja_emails_auth_deletion_cancelled_body(inputs)
	return en_emails_auth_deletion_cancelled_body(inputs)
});
