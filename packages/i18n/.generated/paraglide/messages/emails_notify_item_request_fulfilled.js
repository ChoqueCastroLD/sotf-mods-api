/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Emails_Notify_Item_Request_FulfilledInputs */

const en_emails_notify_item_request_fulfilled = /** @type {(inputs: Emails_Notify_Item_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A mod you asked for or voted for is out: ${i?.mod}`)
};

const es_emails_notify_item_request_fulfilled = /** @type {(inputs: Emails_Notify_Item_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ya está publicado un mod que pediste o votaste: ${i?.mod}`)
};

const de_emails_notify_item_request_fulfilled = /** @type {(inputs: Emails_Notify_Item_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ein Mod, den du angefragt oder unterstützt hast, ist erschienen: ${i?.mod}`)
};

const fr_emails_notify_item_request_fulfilled = /** @type {(inputs: Emails_Notify_Item_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Un mod que vous avez demandé ou soutenu est publié : ${i?.mod}`)
};

const it_emails_notify_item_request_fulfilled = /** @type {(inputs: Emails_Notify_Item_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`È uscito un mod che hai richiesto o votato: ${i?.mod}`)
};

const nl_emails_notify_item_request_fulfilled = /** @type {(inputs: Emails_Notify_Item_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Een mod waar je om vroeg of op stemde is uit: ${i?.mod}`)
};

const pl_emails_notify_item_request_fulfilled = /** @type {(inputs: Emails_Notify_Item_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod, o który prosiłeś(-aś) lub na który głosowałeś(-aś), jest już dostępny: ${i?.mod}`)
};

const pt_emails_notify_item_request_fulfilled = /** @type {(inputs: Emails_Notify_Item_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Saiu um mod que pediste ou votaste: ${i?.mod}`)
};

const ru_emails_notify_item_request_fulfilled = /** @type {(inputs: Emails_Notify_Item_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вышел мод, который вы запрашивали или за который голосовали: ${i?.mod}`)
};

const sv_emails_notify_item_request_fulfilled = /** @type {(inputs: Emails_Notify_Item_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En mod du bett om eller röstade på är ute: ${i?.mod}`)
};

const tr_emails_notify_item_request_fulfilled = /** @type {(inputs: Emails_Notify_Item_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`İstediğin veya oy verdiğin bir mod yayında: ${i?.mod}`)
};

const zh_emails_notify_item_request_fulfilled = /** @type {(inputs: Emails_Notify_Item_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你请求或投票支持的模组已发布：${i?.mod}`)
};

const ja_emails_notify_item_request_fulfilled = /** @type {(inputs: Emails_Notify_Item_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`あなたがリクエストまたは投票した MOD が公開されました：${i?.mod}`)
};

/**
* | output |
* | --- |
* | "A mod you asked for or voted for is out: {mod}" |
*
* @param {Emails_Notify_Item_Request_FulfilledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_request_fulfilled = /** @type {((inputs: Emails_Notify_Item_Request_FulfilledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Request_FulfilledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_request_fulfilled(inputs)
	if (locale === "de") return de_emails_notify_item_request_fulfilled(inputs)
	if (locale === "fr") return fr_emails_notify_item_request_fulfilled(inputs)
	if (locale === "it") return it_emails_notify_item_request_fulfilled(inputs)
	if (locale === "nl") return nl_emails_notify_item_request_fulfilled(inputs)
	if (locale === "pl") return pl_emails_notify_item_request_fulfilled(inputs)
	if (locale === "pt") return pt_emails_notify_item_request_fulfilled(inputs)
	if (locale === "ru") return ru_emails_notify_item_request_fulfilled(inputs)
	if (locale === "sv") return sv_emails_notify_item_request_fulfilled(inputs)
	if (locale === "tr") return tr_emails_notify_item_request_fulfilled(inputs)
	if (locale === "zh") return zh_emails_notify_item_request_fulfilled(inputs)
	if (locale === "ja") return ja_emails_notify_item_request_fulfilled(inputs)
	return en_emails_notify_item_request_fulfilled(inputs)
});
