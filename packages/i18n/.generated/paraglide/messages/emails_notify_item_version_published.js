/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown>, version: NonNullable<unknown> }} Emails_Notify_Item_Version_PublishedInputs */

const en_emails_notify_item_version_published = /** @type {(inputs: Emails_Notify_Item_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} was updated to ${i?.version}`)
};

const es_emails_notify_item_version_published = /** @type {(inputs: Emails_Notify_Item_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} se actualizó a ${i?.version}`)
};

const de_emails_notify_item_version_published = /** @type {(inputs: Emails_Notify_Item_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} wurde auf ${i?.version} aktualisiert`)
};

const fr_emails_notify_item_version_published = /** @type {(inputs: Emails_Notify_Item_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} est passé en version ${i?.version}`)
};

const it_emails_notify_item_version_published = /** @type {(inputs: Emails_Notify_Item_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} è stato aggiornato alla ${i?.version}`)
};

const nl_emails_notify_item_version_published = /** @type {(inputs: Emails_Notify_Item_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} is bijgewerkt naar ${i?.version}`)
};

const pl_emails_notify_item_version_published = /** @type {(inputs: Emails_Notify_Item_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} zaktualizowano do wersji ${i?.version}`)
};

const pt_emails_notify_item_version_published = /** @type {(inputs: Emails_Notify_Item_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} foi atualizado para ${i?.version}`)
};

const ru_emails_notify_item_version_published = /** @type {(inputs: Emails_Notify_Item_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} обновлён до ${i?.version}`)
};

const sv_emails_notify_item_version_published = /** @type {(inputs: Emails_Notify_Item_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} har uppdaterats till ${i?.version}`)
};

const tr_emails_notify_item_version_published = /** @type {(inputs: Emails_Notify_Item_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod}, ${i?.version} sürümüne güncellendi`)
};

const zh_emails_notify_item_version_published = /** @type {(inputs: Emails_Notify_Item_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} 已更新到 ${i?.version}`)
};

const ja_emails_notify_item_version_published = /** @type {(inputs: Emails_Notify_Item_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} が ${i?.version} に更新されました`)
};

/**
* | output |
* | --- |
* | "{mod} was updated to {version}" |
*
* @param {Emails_Notify_Item_Version_PublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_version_published = /** @type {((inputs: Emails_Notify_Item_Version_PublishedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Version_PublishedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_version_published(inputs)
	if (locale === "de") return de_emails_notify_item_version_published(inputs)
	if (locale === "fr") return fr_emails_notify_item_version_published(inputs)
	if (locale === "it") return it_emails_notify_item_version_published(inputs)
	if (locale === "nl") return nl_emails_notify_item_version_published(inputs)
	if (locale === "pl") return pl_emails_notify_item_version_published(inputs)
	if (locale === "pt") return pt_emails_notify_item_version_published(inputs)
	if (locale === "ru") return ru_emails_notify_item_version_published(inputs)
	if (locale === "sv") return sv_emails_notify_item_version_published(inputs)
	if (locale === "tr") return tr_emails_notify_item_version_published(inputs)
	if (locale === "zh") return zh_emails_notify_item_version_published(inputs)
	if (locale === "ja") return ja_emails_notify_item_version_published(inputs)
	return en_emails_notify_item_version_published(inputs)
});
