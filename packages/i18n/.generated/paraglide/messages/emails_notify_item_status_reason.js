/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ reason: NonNullable<unknown> }} Emails_Notify_Item_Status_ReasonInputs */

const en_emails_notify_item_status_reason = /** @type {(inputs: Emails_Notify_Item_Status_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reason: ${i?.reason}`)
};

const es_emails_notify_item_status_reason = /** @type {(inputs: Emails_Notify_Item_Status_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Motivo: ${i?.reason}`)
};

const de_emails_notify_item_status_reason = /** @type {(inputs: Emails_Notify_Item_Status_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Grund: ${i?.reason}`)
};

const fr_emails_notify_item_status_reason = /** @type {(inputs: Emails_Notify_Item_Status_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Motif : ${i?.reason}`)
};

const it_emails_notify_item_status_reason = /** @type {(inputs: Emails_Notify_Item_Status_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Motivo: ${i?.reason}`)
};

const nl_emails_notify_item_status_reason = /** @type {(inputs: Emails_Notify_Item_Status_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reden: ${i?.reason}`)
};

const pl_emails_notify_item_status_reason = /** @type {(inputs: Emails_Notify_Item_Status_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Powód: ${i?.reason}`)
};

const pt_emails_notify_item_status_reason = /** @type {(inputs: Emails_Notify_Item_Status_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Motivo: ${i?.reason}`)
};

const ru_emails_notify_item_status_reason = /** @type {(inputs: Emails_Notify_Item_Status_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Причина: ${i?.reason}`)
};

const sv_emails_notify_item_status_reason = /** @type {(inputs: Emails_Notify_Item_Status_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Anledning: ${i?.reason}`)
};

const tr_emails_notify_item_status_reason = /** @type {(inputs: Emails_Notify_Item_Status_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Neden: ${i?.reason}`)
};

const zh_emails_notify_item_status_reason = /** @type {(inputs: Emails_Notify_Item_Status_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`原因：${i?.reason}`)
};

const ja_emails_notify_item_status_reason = /** @type {(inputs: Emails_Notify_Item_Status_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`理由：${i?.reason}`)
};

/**
* | output |
* | --- |
* | "Reason: {reason}" |
*
* @param {Emails_Notify_Item_Status_ReasonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_status_reason = /** @type {((inputs: Emails_Notify_Item_Status_ReasonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Status_ReasonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_status_reason(inputs)
	if (locale === "de") return de_emails_notify_item_status_reason(inputs)
	if (locale === "fr") return fr_emails_notify_item_status_reason(inputs)
	if (locale === "it") return it_emails_notify_item_status_reason(inputs)
	if (locale === "nl") return nl_emails_notify_item_status_reason(inputs)
	if (locale === "pl") return pl_emails_notify_item_status_reason(inputs)
	if (locale === "pt") return pt_emails_notify_item_status_reason(inputs)
	if (locale === "ru") return ru_emails_notify_item_status_reason(inputs)
	if (locale === "sv") return sv_emails_notify_item_status_reason(inputs)
	if (locale === "tr") return tr_emails_notify_item_status_reason(inputs)
	if (locale === "zh") return zh_emails_notify_item_status_reason(inputs)
	if (locale === "ja") return ja_emails_notify_item_status_reason(inputs)
	return en_emails_notify_item_status_reason(inputs)
});
