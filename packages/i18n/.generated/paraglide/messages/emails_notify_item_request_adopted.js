/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ actor: NonNullable<unknown>, request: NonNullable<unknown> }} Emails_Notify_Item_Request_AdoptedInputs */

const en_emails_notify_item_request_adopted = /** @type {(inputs: Emails_Notify_Item_Request_AdoptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} is working on your request “${i?.request}”`)
};

const es_emails_notify_item_request_adopted = /** @type {(inputs: Emails_Notify_Item_Request_AdoptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} está trabajando en tu petición «${i?.request}»`)
};

const de_emails_notify_item_request_adopted = /** @type {(inputs: Emails_Notify_Item_Request_AdoptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} arbeitet an deiner Anfrage „${i?.request}“`)
};

const fr_emails_notify_item_request_adopted = /** @type {(inputs: Emails_Notify_Item_Request_AdoptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} travaille sur votre demande « ${i?.request} »`)
};

const it_emails_notify_item_request_adopted = /** @type {(inputs: Emails_Notify_Item_Request_AdoptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} sta lavorando alla tua richiesta «${i?.request}»`)
};

const nl_emails_notify_item_request_adopted = /** @type {(inputs: Emails_Notify_Item_Request_AdoptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} werkt aan je verzoek “${i?.request}”`)
};

const pl_emails_notify_item_request_adopted = /** @type {(inputs: Emails_Notify_Item_Request_AdoptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} pracuje nad Twoją prośbą „${i?.request}”`)
};

const pt_emails_notify_item_request_adopted = /** @type {(inputs: Emails_Notify_Item_Request_AdoptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} está a trabalhar no teu pedido “${i?.request}”`)
};

const ru_emails_notify_item_request_adopted = /** @type {(inputs: Emails_Notify_Item_Request_AdoptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} взялся(-ась) за ваш запрос «${i?.request}»`)
};

const sv_emails_notify_item_request_adopted = /** @type {(inputs: Emails_Notify_Item_Request_AdoptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} arbetar på din förfrågan ”${i?.request}”`)
};

const tr_emails_notify_item_request_adopted = /** @type {(inputs: Emails_Notify_Item_Request_AdoptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor}, “${i?.request}” isteğin üzerinde çalışıyor`)
};

const zh_emails_notify_item_request_adopted = /** @type {(inputs: Emails_Notify_Item_Request_AdoptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} 正在处理你的请求“${i?.request}”`)
};

const ja_emails_notify_item_request_adopted = /** @type {(inputs: Emails_Notify_Item_Request_AdoptedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} があなたのリクエスト「${i?.request}」に取り組んでいます`)
};

/**
* | output |
* | --- |
* | "{actor} is working on your request “{request}”" |
*
* @param {Emails_Notify_Item_Request_AdoptedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_request_adopted = /** @type {((inputs: Emails_Notify_Item_Request_AdoptedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Request_AdoptedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_request_adopted(inputs)
	if (locale === "de") return de_emails_notify_item_request_adopted(inputs)
	if (locale === "fr") return fr_emails_notify_item_request_adopted(inputs)
	if (locale === "it") return it_emails_notify_item_request_adopted(inputs)
	if (locale === "nl") return nl_emails_notify_item_request_adopted(inputs)
	if (locale === "pl") return pl_emails_notify_item_request_adopted(inputs)
	if (locale === "pt") return pt_emails_notify_item_request_adopted(inputs)
	if (locale === "ru") return ru_emails_notify_item_request_adopted(inputs)
	if (locale === "sv") return sv_emails_notify_item_request_adopted(inputs)
	if (locale === "tr") return tr_emails_notify_item_request_adopted(inputs)
	if (locale === "zh") return zh_emails_notify_item_request_adopted(inputs)
	if (locale === "ja") return ja_emails_notify_item_request_adopted(inputs)
	return en_emails_notify_item_request_adopted(inputs)
});
