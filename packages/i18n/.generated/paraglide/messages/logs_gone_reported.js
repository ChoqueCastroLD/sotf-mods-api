/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Gone_ReportedInputs */

const en_logs_gone_reported = /** @type {(inputs: Logs_Gone_ReportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This log was removed after abuse reports.`)
};

const es_logs_gone_reported = /** @type {(inputs: Logs_Gone_ReportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este log se retiró tras varias denuncias.`)
};

const de_logs_gone_reported = /** @type {(inputs: Logs_Gone_ReportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Log wurde nach Missbrauchsmeldungen entfernt.`)
};

const fr_logs_gone_reported = /** @type {(inputs: Logs_Gone_ReportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce log a été retiré après des signalements d’abus.`)
};

const it_logs_gone_reported = /** @type {(inputs: Logs_Gone_ReportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo log è stato rimosso dopo alcune segnalazioni di abuso.`)
};

const nl_logs_gone_reported = /** @type {(inputs: Logs_Gone_ReportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze log is verwijderd na meldingen van misbruik.`)
};

const pl_logs_gone_reported = /** @type {(inputs: Logs_Gone_ReportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten log został usunięty po zgłoszeniach nadużyć.`)
};

const pt_logs_gone_reported = /** @type {(inputs: Logs_Gone_ReportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este log foi removido após denúncias de abuso.`)
};

const ru_logs_gone_reported = /** @type {(inputs: Logs_Gone_ReportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот лог удалён после жалоб.`)
};

const sv_logs_gone_reported = /** @type {(inputs: Logs_Gone_ReportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här loggen togs bort efter anmälningar om missbruk.`)
};

const tr_logs_gone_reported = /** @type {(inputs: Logs_Gone_ReportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu log, kötüye kullanım bildirimleri üzerine kaldırıldı.`)
};

const zh_logs_gone_reported = /** @type {(inputs: Logs_Gone_ReportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此日志因滥用举报已被移除。`)
};

const ja_logs_gone_reported = /** @type {(inputs: Logs_Gone_ReportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このログは不正利用の報告を受けて削除されました。`)
};

/**
* | output |
* | --- |
* | "This log was removed after abuse reports." |
*
* @param {Logs_Gone_ReportedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_gone_reported = /** @type {((inputs?: Logs_Gone_ReportedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Gone_ReportedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_gone_reported(inputs)
	if (locale === "de") return de_logs_gone_reported(inputs)
	if (locale === "fr") return fr_logs_gone_reported(inputs)
	if (locale === "it") return it_logs_gone_reported(inputs)
	if (locale === "nl") return nl_logs_gone_reported(inputs)
	if (locale === "pl") return pl_logs_gone_reported(inputs)
	if (locale === "pt") return pt_logs_gone_reported(inputs)
	if (locale === "ru") return ru_logs_gone_reported(inputs)
	if (locale === "sv") return sv_logs_gone_reported(inputs)
	if (locale === "tr") return tr_logs_gone_reported(inputs)
	if (locale === "zh") return zh_logs_gone_reported(inputs)
	if (locale === "ja") return ja_logs_gone_reported(inputs)
	return en_logs_gone_reported(inputs)
});
