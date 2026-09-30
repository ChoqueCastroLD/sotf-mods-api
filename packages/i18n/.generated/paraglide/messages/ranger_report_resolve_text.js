/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Report_Resolve_TextInputs */

const en_ranger_report_resolve_text = /** @type {(inputs: Ranger_Report_Resolve_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every open report about this content is closed and each reporter is told it was handled.`)
};

const es_ranger_report_resolve_text = /** @type {(inputs: Ranger_Report_Resolve_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se cierran todos los reportes abiertos sobre este contenido y se avisa a cada persona que reportó.`)
};

const de_ranger_report_resolve_text = /** @type {(inputs: Ranger_Report_Resolve_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle offenen Meldungen zu diesem Inhalt werden geschlossen und jeder Meldende wird informiert.`)
};

const fr_ranger_report_resolve_text = /** @type {(inputs: Ranger_Report_Resolve_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les signalements ouverts sur ce contenu sont fermés et chaque auteur de signalement est prévenu.`)
};

const it_ranger_report_resolve_text = /** @type {(inputs: Ranger_Report_Resolve_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte le segnalazioni aperte su questo contenuto vengono chiuse e ogni segnalatore riceve un avviso.`)
};

const nl_ranger_report_resolve_text = /** @type {(inputs: Ranger_Report_Resolve_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle open meldingen over deze inhoud worden gesloten en elke melder krijgt bericht dat ze zijn afgehandeld.`)
};

const pl_ranger_report_resolve_text = /** @type {(inputs: Ranger_Report_Resolve_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie otwarte zgłoszenia tej treści zostają zamknięte, a każdy zgłaszający dostaje informację.`)
};

const pt_ranger_report_resolve_text = /** @type {(inputs: Ranger_Report_Resolve_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas as denúncias abertas sobre este conteúdo são fechadas e cada denunciante é avisado.`)
};

const ru_ranger_report_resolve_text = /** @type {(inputs: Ranger_Report_Resolve_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все открытые жалобы на это содержимое закрываются, и каждый пожаловавшийся получает уведомление.`)
};

const sv_ranger_report_resolve_text = /** @type {(inputs: Ranger_Report_Resolve_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla öppna anmälningar om innehållet stängs och varje anmälare får veta att det har hanterats.`)
};

const tr_ranger_report_resolve_text = /** @type {(inputs: Ranger_Report_Resolve_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu içerikle ilgili tüm açık şikâyetler kapanır ve her şikâyet edene ele alındığı bildirilir.`)
};

const zh_ranger_report_resolve_text = /** @type {(inputs: Ranger_Report_Resolve_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关于此内容的所有未处理举报都会关闭，并通知每位举报人。`)
};

const ja_ranger_report_resolve_text = /** @type {(inputs: Ranger_Report_Resolve_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このコンテンツに関する未対応の報告はすべて閉じられ、各報告者に通知されます。`)
};

/**
* | output |
* | --- |
* | "Every open report about this content is closed and each reporter is told it was handled." |
*
* @param {Ranger_Report_Resolve_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_resolve_text = /** @type {((inputs?: Ranger_Report_Resolve_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_Resolve_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_resolve_text(inputs)
	if (locale === "de") return de_ranger_report_resolve_text(inputs)
	if (locale === "fr") return fr_ranger_report_resolve_text(inputs)
	if (locale === "it") return it_ranger_report_resolve_text(inputs)
	if (locale === "nl") return nl_ranger_report_resolve_text(inputs)
	if (locale === "pl") return pl_ranger_report_resolve_text(inputs)
	if (locale === "pt") return pt_ranger_report_resolve_text(inputs)
	if (locale === "ru") return ru_ranger_report_resolve_text(inputs)
	if (locale === "sv") return sv_ranger_report_resolve_text(inputs)
	if (locale === "tr") return tr_ranger_report_resolve_text(inputs)
	if (locale === "zh") return zh_ranger_report_resolve_text(inputs)
	if (locale === "ja") return ja_ranger_report_resolve_text(inputs)
	return en_ranger_report_resolve_text(inputs)
});
