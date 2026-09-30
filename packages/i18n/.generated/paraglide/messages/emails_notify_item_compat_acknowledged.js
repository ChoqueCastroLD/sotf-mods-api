/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Emails_Notify_Item_Compat_AcknowledgedInputs */

const en_emails_notify_item_compat_acknowledged = /** @type {(inputs: Emails_Notify_Item_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The author of ${i?.mod} marked the problem you reported as fixed`)
};

const es_emails_notify_item_compat_acknowledged = /** @type {(inputs: Emails_Notify_Item_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`El autor de ${i?.mod} marcó como resuelto el problema que reportaste`)
};

const de_emails_notify_item_compat_acknowledged = /** @type {(inputs: Emails_Notify_Item_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Der Autor von ${i?.mod} hat das von dir gemeldete Problem als behoben markiert`)
};

const fr_emails_notify_item_compat_acknowledged = /** @type {(inputs: Emails_Notify_Item_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`L’auteur de ${i?.mod} a marqué le problème que vous avez signalé comme corrigé`)
};

const it_emails_notify_item_compat_acknowledged = /** @type {(inputs: Emails_Notify_Item_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`L’autore di ${i?.mod} ha segnato come risolto il problema che hai segnalato`)
};

const nl_emails_notify_item_compat_acknowledged = /** @type {(inputs: Emails_Notify_Item_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De maker van ${i?.mod} heeft het probleem dat je meldde als opgelost gemarkeerd`)
};

const pl_emails_notify_item_compat_acknowledged = /** @type {(inputs: Emails_Notify_Item_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autor ${i?.mod} oznaczył zgłoszony przez Ciebie problem jako naprawiony`)
};

const pt_emails_notify_item_compat_acknowledged = /** @type {(inputs: Emails_Notify_Item_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`O autor de ${i?.mod} marcou como resolvido o problema que você relatou`)
};

const ru_emails_notify_item_compat_acknowledged = /** @type {(inputs: Emails_Notify_Item_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Автор ${i?.mod} отметил проблему, о которой вы сообщили, как исправленную`)
};

const sv_emails_notify_item_compat_acknowledged = /** @type {(inputs: Emails_Notify_Item_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Skaparen av ${i?.mod} markerade problemet du rapporterade som åtgärdat`)
};

const tr_emails_notify_item_compat_acknowledged = /** @type {(inputs: Emails_Notify_Item_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} yapımcısı bildirdiğin sorunu düzeltildi olarak işaretledi`)
};

const zh_emails_notify_item_compat_acknowledged = /** @type {(inputs: Emails_Notify_Item_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} 的作者已将你报告的问题标记为已修复`)
};

const ja_emails_notify_item_compat_acknowledged = /** @type {(inputs: Emails_Notify_Item_Compat_AcknowledgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} の作者が、あなたの報告した問題を修正済みにしました`)
};

/**
* | output |
* | --- |
* | "The author of {mod} marked the problem you reported as fixed" |
*
* @param {Emails_Notify_Item_Compat_AcknowledgedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_compat_acknowledged = /** @type {((inputs: Emails_Notify_Item_Compat_AcknowledgedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Compat_AcknowledgedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_compat_acknowledged(inputs)
	if (locale === "de") return de_emails_notify_item_compat_acknowledged(inputs)
	if (locale === "fr") return fr_emails_notify_item_compat_acknowledged(inputs)
	if (locale === "it") return it_emails_notify_item_compat_acknowledged(inputs)
	if (locale === "nl") return nl_emails_notify_item_compat_acknowledged(inputs)
	if (locale === "pl") return pl_emails_notify_item_compat_acknowledged(inputs)
	if (locale === "pt") return pt_emails_notify_item_compat_acknowledged(inputs)
	if (locale === "ru") return ru_emails_notify_item_compat_acknowledged(inputs)
	if (locale === "sv") return sv_emails_notify_item_compat_acknowledged(inputs)
	if (locale === "tr") return tr_emails_notify_item_compat_acknowledged(inputs)
	if (locale === "zh") return zh_emails_notify_item_compat_acknowledged(inputs)
	if (locale === "ja") return ja_emails_notify_item_compat_acknowledged(inputs)
	return en_emails_notify_item_compat_acknowledged(inputs)
});
