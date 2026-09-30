/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Emails_Notify_Item_Kit_Added_My_ModInputs */

const en_emails_notify_item_kit_added_my_mod = /** @type {(inputs: Emails_Notify_Item_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} was added to a public kit`)
};

const es_emails_notify_item_kit_added_my_mod = /** @type {(inputs: Emails_Notify_Item_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} se añadió a un kit público`)
};

const de_emails_notify_item_kit_added_my_mod = /** @type {(inputs: Emails_Notify_Item_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} wurde zu einem öffentlichen Kit hinzugefügt`)
};

const fr_emails_notify_item_kit_added_my_mod = /** @type {(inputs: Emails_Notify_Item_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} a été ajouté à un kit public`)
};

const it_emails_notify_item_kit_added_my_mod = /** @type {(inputs: Emails_Notify_Item_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} è stato aggiunto a un kit pubblico`)
};

const nl_emails_notify_item_kit_added_my_mod = /** @type {(inputs: Emails_Notify_Item_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} is toegevoegd aan een openbare kit`)
};

const pl_emails_notify_item_kit_added_my_mod = /** @type {(inputs: Emails_Notify_Item_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} został dodany do publicznego zestawu`)
};

const pt_emails_notify_item_kit_added_my_mod = /** @type {(inputs: Emails_Notify_Item_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} foi adicionado a um kit público`)
};

const ru_emails_notify_item_kit_added_my_mod = /** @type {(inputs: Emails_Notify_Item_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} добавили в публичный набор`)
};

const sv_emails_notify_item_kit_added_my_mod = /** @type {(inputs: Emails_Notify_Item_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} lades till i ett offentligt kit`)
};

const tr_emails_notify_item_kit_added_my_mod = /** @type {(inputs: Emails_Notify_Item_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} herkese açık bir kite eklendi`)
};

const zh_emails_notify_item_kit_added_my_mod = /** @type {(inputs: Emails_Notify_Item_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} 被添加到了公开套件`)
};

const ja_emails_notify_item_kit_added_my_mod = /** @type {(inputs: Emails_Notify_Item_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} が公開キットに追加されました`)
};

/**
* | output |
* | --- |
* | "{mod} was added to a public kit" |
*
* @param {Emails_Notify_Item_Kit_Added_My_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_kit_added_my_mod = /** @type {((inputs: Emails_Notify_Item_Kit_Added_My_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Kit_Added_My_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_kit_added_my_mod(inputs)
	if (locale === "de") return de_emails_notify_item_kit_added_my_mod(inputs)
	if (locale === "fr") return fr_emails_notify_item_kit_added_my_mod(inputs)
	if (locale === "it") return it_emails_notify_item_kit_added_my_mod(inputs)
	if (locale === "nl") return nl_emails_notify_item_kit_added_my_mod(inputs)
	if (locale === "pl") return pl_emails_notify_item_kit_added_my_mod(inputs)
	if (locale === "pt") return pt_emails_notify_item_kit_added_my_mod(inputs)
	if (locale === "ru") return ru_emails_notify_item_kit_added_my_mod(inputs)
	if (locale === "sv") return sv_emails_notify_item_kit_added_my_mod(inputs)
	if (locale === "tr") return tr_emails_notify_item_kit_added_my_mod(inputs)
	if (locale === "zh") return zh_emails_notify_item_kit_added_my_mod(inputs)
	if (locale === "ja") return ja_emails_notify_item_kit_added_my_mod(inputs)
	return en_emails_notify_item_kit_added_my_mod(inputs)
});
