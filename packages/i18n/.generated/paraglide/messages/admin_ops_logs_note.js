/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Logs_NoteInputs */

const en_admin_ops_logs_note = /** @type {(inputs: Admin_Ops_Logs_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rates of 404, 410 and 5xx answers are not stored: read them in the API logs (docs/operations/monitoring.md).`)
};

const es_admin_ops_logs_note = /** @type {(inputs: Admin_Ops_Logs_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las tasas de respuestas 404, 410 y 5xx no se guardan: consúltalas en los logs de la API (docs/operations/monitoring.md).`)
};

const de_admin_ops_logs_note = /** @type {(inputs: Admin_Ops_Logs_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raten von 404-, 410- und 5xx-Antworten werden nicht gespeichert: Du findest sie in den API-Logs (docs/operations/monitoring.md).`)
};

const fr_admin_ops_logs_note = /** @type {(inputs: Admin_Ops_Logs_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les taux de réponses 404, 410 et 5xx ne sont pas stockés : consultez-les dans les journaux de l’API (docs/operations/monitoring.md).`)
};

const it_admin_ops_logs_note = /** @type {(inputs: Admin_Ops_Logs_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le percentuali di risposte 404, 410 e 5xx non vengono salvate: leggile nei log dell’API (docs/operations/monitoring.md).`)
};

const nl_admin_ops_logs_note = /** @type {(inputs: Admin_Ops_Logs_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Percentages 404-, 410- en 5xx-antwoorden worden niet opgeslagen: lees ze in de API-logs (docs/operations/monitoring.md).`)
};

const pl_admin_ops_logs_note = /** @type {(inputs: Admin_Ops_Logs_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odsetki odpowiedzi 404, 410 i 5xx nie są zapisywane: sprawdź je w logach API (docs/operations/monitoring.md).`)
};

const pt_admin_ops_logs_note = /** @type {(inputs: Admin_Ops_Logs_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As taxas de respostas 404, 410 e 5xx não são guardadas: consulte-as nos logs da API (docs/operations/monitoring.md).`)
};

const ru_admin_ops_logs_note = /** @type {(inputs: Admin_Ops_Logs_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Доли ответов 404, 410 и 5xx не сохраняются: смотри их в логах API (docs/operations/monitoring.md).`)
};

const sv_admin_ops_logs_note = /** @type {(inputs: Admin_Ops_Logs_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andelen 404-, 410- och 5xx-svar sparas inte: läs dem i API-loggarna (docs/operations/monitoring.md).`)
};

const tr_admin_ops_logs_note = /** @type {(inputs: Admin_Ops_Logs_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`404, 410 ve 5xx yanıt oranları saklanmaz: bunları API günlüklerinde oku (docs/operations/monitoring.md).`)
};

const zh_admin_ops_logs_note = /** @type {(inputs: Admin_Ops_Logs_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`404、410 和 5xx 响应的比率不会保存:请在 API 日志中查看(docs/operations/monitoring.md)。`)
};

const ja_admin_ops_logs_note = /** @type {(inputs: Admin_Ops_Logs_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`404・410・5xx の応答率は保存されません。API のログで確認してください(docs/operations/monitoring.md)。`)
};

/**
* | output |
* | --- |
* | "Rates of 404, 410 and 5xx answers are not stored: read them in the API logs (docs/operations/monitoring.md)." |
*
* @param {Admin_Ops_Logs_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_logs_note = /** @type {((inputs?: Admin_Ops_Logs_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Logs_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_logs_note(inputs)
	if (locale === "de") return de_admin_ops_logs_note(inputs)
	if (locale === "fr") return fr_admin_ops_logs_note(inputs)
	if (locale === "it") return it_admin_ops_logs_note(inputs)
	if (locale === "nl") return nl_admin_ops_logs_note(inputs)
	if (locale === "pl") return pl_admin_ops_logs_note(inputs)
	if (locale === "pt") return pt_admin_ops_logs_note(inputs)
	if (locale === "ru") return ru_admin_ops_logs_note(inputs)
	if (locale === "sv") return sv_admin_ops_logs_note(inputs)
	if (locale === "tr") return tr_admin_ops_logs_note(inputs)
	if (locale === "zh") return zh_admin_ops_logs_note(inputs)
	if (locale === "ja") return ja_admin_ops_logs_note(inputs)
	return en_admin_ops_logs_note(inputs)
});
