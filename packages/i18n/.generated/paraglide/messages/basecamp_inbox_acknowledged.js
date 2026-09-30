/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_AcknowledgedInputs */

const en_basecamp_inbox_acknowledged = /** @type {(inputs: Basecamp_Inbox_AcknowledgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report acknowledged: the reporter was told`)
};

const es_basecamp_inbox_acknowledged = /** @type {(inputs: Basecamp_Inbox_AcknowledgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reporte visto: se ha avisado a quien lo envió`)
};

const de_basecamp_inbox_acknowledged = /** @type {(inputs: Basecamp_Inbox_AcknowledgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bericht zur Kenntnis genommen: der Absender wurde informiert`)
};

const fr_basecamp_inbox_acknowledged = /** @type {(inputs: Basecamp_Inbox_AcknowledgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapport pris en compte : son auteur a été prévenu`)
};

const it_basecamp_inbox_acknowledged = /** @type {(inputs: Basecamp_Inbox_AcknowledgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporto preso in carico: l’autore è stato avvisato`)
};

const nl_basecamp_inbox_acknowledged = /** @type {(inputs: Basecamp_Inbox_AcknowledgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapport bevestigd: de melder is op de hoogte gebracht`)
};

const pl_basecamp_inbox_acknowledged = /** @type {(inputs: Basecamp_Inbox_AcknowledgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raport potwierdzony: autor został powiadomiony`)
};

const pt_basecamp_inbox_acknowledged = /** @type {(inputs: Basecamp_Inbox_AcknowledgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatório confirmado: quem enviou foi avisado`)
};

const ru_basecamp_inbox_acknowledged = /** @type {(inputs: Basecamp_Inbox_AcknowledgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отчёт принят: автор уведомлён`)
};

const sv_basecamp_inbox_acknowledged = /** @type {(inputs: Basecamp_Inbox_AcknowledgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporten bekräftad: avsändaren har meddelats`)
};

const tr_basecamp_inbox_acknowledged = /** @type {(inputs: Basecamp_Inbox_AcknowledgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapor görüldü: gönderene haber verildi`)
};

const zh_basecamp_inbox_acknowledged = /** @type {(inputs: Basecamp_Inbox_AcknowledgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已确认报告：已通知报告者`)
};

const ja_basecamp_inbox_acknowledged = /** @type {(inputs: Basecamp_Inbox_AcknowledgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レポートを確認済みにしました：報告者に通知しました`)
};

/**
* | output |
* | --- |
* | "Report acknowledged: the reporter was told" |
*
* @param {Basecamp_Inbox_AcknowledgedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_acknowledged = /** @type {((inputs?: Basecamp_Inbox_AcknowledgedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_AcknowledgedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_acknowledged(inputs)
	if (locale === "de") return de_basecamp_inbox_acknowledged(inputs)
	if (locale === "fr") return fr_basecamp_inbox_acknowledged(inputs)
	if (locale === "it") return it_basecamp_inbox_acknowledged(inputs)
	if (locale === "nl") return nl_basecamp_inbox_acknowledged(inputs)
	if (locale === "pl") return pl_basecamp_inbox_acknowledged(inputs)
	if (locale === "pt") return pt_basecamp_inbox_acknowledged(inputs)
	if (locale === "ru") return ru_basecamp_inbox_acknowledged(inputs)
	if (locale === "sv") return sv_basecamp_inbox_acknowledged(inputs)
	if (locale === "tr") return tr_basecamp_inbox_acknowledged(inputs)
	if (locale === "zh") return zh_basecamp_inbox_acknowledged(inputs)
	if (locale === "ja") return ja_basecamp_inbox_acknowledged(inputs)
	return en_basecamp_inbox_acknowledged(inputs)
});
