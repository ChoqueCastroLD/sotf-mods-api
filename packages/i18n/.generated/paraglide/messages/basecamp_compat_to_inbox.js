/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_To_InboxInputs */

const en_basecamp_compat_to_inbox = /** @type {(inputs: Basecamp_Compat_To_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Answer field reports in the inbox`)
};

const es_basecamp_compat_to_inbox = /** @type {(inputs: Basecamp_Compat_To_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Responder reportes de campo en la bandeja`)
};

const de_basecamp_compat_to_inbox = /** @type {(inputs: Basecamp_Compat_To_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feldberichte im Posteingang beantworten`)
};

const fr_basecamp_compat_to_inbox = /** @type {(inputs: Basecamp_Compat_To_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Répondre aux rapports de terrain dans la boîte`)
};

const it_basecamp_compat_to_inbox = /** @type {(inputs: Basecamp_Compat_To_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rispondi ai rapporti sul campo nella posta`)
};

const nl_basecamp_compat_to_inbox = /** @type {(inputs: Basecamp_Compat_To_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veldrapporten beantwoorden in de inbox`)
};

const pl_basecamp_compat_to_inbox = /** @type {(inputs: Basecamp_Compat_To_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpowiadaj na raporty terenowe w skrzynce`)
};

const pt_basecamp_compat_to_inbox = /** @type {(inputs: Basecamp_Compat_To_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Responder relatórios de campo na caixa de entrada`)
};

const ru_basecamp_compat_to_inbox = /** @type {(inputs: Basecamp_Compat_To_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отвечать на полевые отчёты во входящих`)
};

const sv_basecamp_compat_to_inbox = /** @type {(inputs: Basecamp_Compat_To_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Svara på fältrapporter i inkorgen`)
};

const tr_basecamp_compat_to_inbox = /** @type {(inputs: Basecamp_Compat_To_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha raporlarını gelen kutusunda yanıtla`)
};

const zh_basecamp_compat_to_inbox = /** @type {(inputs: Basecamp_Compat_To_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在收件箱回复实地报告`)
};

const ja_basecamp_compat_to_inbox = /** @type {(inputs: Basecamp_Compat_To_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`受信箱でフィールドレポートに返信`)
};

/**
* | output |
* | --- |
* | "Answer field reports in the inbox" |
*
* @param {Basecamp_Compat_To_InboxInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_to_inbox = /** @type {((inputs?: Basecamp_Compat_To_InboxInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_To_InboxInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_to_inbox(inputs)
	if (locale === "de") return de_basecamp_compat_to_inbox(inputs)
	if (locale === "fr") return fr_basecamp_compat_to_inbox(inputs)
	if (locale === "it") return it_basecamp_compat_to_inbox(inputs)
	if (locale === "nl") return nl_basecamp_compat_to_inbox(inputs)
	if (locale === "pl") return pl_basecamp_compat_to_inbox(inputs)
	if (locale === "pt") return pt_basecamp_compat_to_inbox(inputs)
	if (locale === "ru") return ru_basecamp_compat_to_inbox(inputs)
	if (locale === "sv") return sv_basecamp_compat_to_inbox(inputs)
	if (locale === "tr") return tr_basecamp_compat_to_inbox(inputs)
	if (locale === "zh") return zh_basecamp_compat_to_inbox(inputs)
	if (locale === "ja") return ja_basecamp_compat_to_inbox(inputs)
	return en_basecamp_compat_to_inbox(inputs)
});
