/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown>, threshold: NonNullable<unknown> }} Emails_Notify_Item_MilestoneInputs */

const en_emails_notify_item_milestone = /** @type {(inputs: Emails_Notify_Item_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("en", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} passed ${threshold__number} downloads`)
};

const es_emails_notify_item_milestone = /** @type {(inputs: Emails_Notify_Item_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("es", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} superó las ${threshold__number} descargas`)
};

const de_emails_notify_item_milestone = /** @type {(inputs: Emails_Notify_Item_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("de", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} hat ${threshold__number} Downloads überschritten`)
};

const fr_emails_notify_item_milestone = /** @type {(inputs: Emails_Notify_Item_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("fr", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} a dépassé ${threshold__number} téléchargements`)
};

const it_emails_notify_item_milestone = /** @type {(inputs: Emails_Notify_Item_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("it", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} ha superato ${threshold__number} download`)
};

const nl_emails_notify_item_milestone = /** @type {(inputs: Emails_Notify_Item_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("nl", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} is de ${threshold__number} downloads gepasseerd`)
};

const pl_emails_notify_item_milestone = /** @type {(inputs: Emails_Notify_Item_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("pl", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} przekroczył ${threshold__number} pobrań`)
};

const pt_emails_notify_item_milestone = /** @type {(inputs: Emails_Notify_Item_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("pt", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} passou de ${threshold__number} downloads`)
};

const ru_emails_notify_item_milestone = /** @type {(inputs: Emails_Notify_Item_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("ru", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} превысил ${threshold__number} скачиваний`)
};

const sv_emails_notify_item_milestone = /** @type {(inputs: Emails_Notify_Item_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("sv", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} har passerat ${threshold__number} nedladdningar`)
};

const tr_emails_notify_item_milestone = /** @type {(inputs: Emails_Notify_Item_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("tr", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} ${threshold__number} indirmeyi geçti`)
};

const zh_emails_notify_item_milestone = /** @type {(inputs: Emails_Notify_Item_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("zh", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} 的下载量已突破 ${threshold__number}`)
};

const ja_emails_notify_item_milestone = /** @type {(inputs: Emails_Notify_Item_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("ja", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} のダウンロード数が ${threshold__number} を突破しました`)
};

/**
* | output |
* | --- |
* | "{mod} passed {threshold__number} downloads" |
*
* @param {Emails_Notify_Item_MilestoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_milestone = /** @type {((inputs: Emails_Notify_Item_MilestoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_MilestoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_milestone(inputs)
	if (locale === "de") return de_emails_notify_item_milestone(inputs)
	if (locale === "fr") return fr_emails_notify_item_milestone(inputs)
	if (locale === "it") return it_emails_notify_item_milestone(inputs)
	if (locale === "nl") return nl_emails_notify_item_milestone(inputs)
	if (locale === "pl") return pl_emails_notify_item_milestone(inputs)
	if (locale === "pt") return pt_emails_notify_item_milestone(inputs)
	if (locale === "ru") return ru_emails_notify_item_milestone(inputs)
	if (locale === "sv") return sv_emails_notify_item_milestone(inputs)
	if (locale === "tr") return tr_emails_notify_item_milestone(inputs)
	if (locale === "zh") return zh_emails_notify_item_milestone(inputs)
	if (locale === "ja") return ja_emails_notify_item_milestone(inputs)
	return en_emails_notify_item_milestone(inputs)
});
