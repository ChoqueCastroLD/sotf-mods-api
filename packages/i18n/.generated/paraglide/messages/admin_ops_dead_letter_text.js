/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Ops_Dead_Letter_TextInputs */

const en_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jobs in the dead letter queue: ${i?.count}. Check the worker logs; docs/operations/monitoring.md explains how to retry or drop them.`)
};

const es_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tareas en la cola de fallidas: ${i?.count}. Revisa los logs del worker; docs/operations/monitoring.md explica cómo reintentarlas o descartarlas.`)
};

const de_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jobs in der Dead-Letter-Warteschlange: ${i?.count}. Prüfe die Worker-Logs; docs/operations/monitoring.md erklärt, wie du sie erneut ausführst oder verwirfst.`)
};

const fr_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tâches en échec définitif : ${i?.count}. Consultez les journaux du worker ; docs/operations/monitoring.md explique comment les relancer ou les abandonner.`)
};

const it_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Job nella coda dei falliti: ${i?.count}. Controlla i log del worker; docs/operations/monitoring.md spiega come riprovarli o scartarli.`)
};

const nl_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Taken in de dead-letter-wachtrij: ${i?.count}. Bekijk de worker-logs; docs/operations/monitoring.md legt uit hoe je ze opnieuw uitvoert of verwijdert.`)
};

const pl_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zadania w kolejce nieudanych: ${i?.count}. Sprawdź logi workera; docs/operations/monitoring.md wyjaśnia, jak je ponowić lub odrzucić.`)
};

const pt_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tarefas na fila de falhas: ${i?.count}. Verifique os logs do worker; docs/operations/monitoring.md explica como tentar de novo ou descartá-las.`)
};

const ru_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Задач в очереди неудачных: ${i?.count}. Проверь логи воркера; в docs/operations/monitoring.md описано, как их повторить или удалить.`)
};

const sv_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jobb i dead letter-kön: ${i?.count}. Kolla workerns loggar; docs/operations/monitoring.md förklarar hur du kör om eller slänger dem.`)
};

const tr_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Başarısız iş kuyruğundaki işler: ${i?.count}. Worker günlüklerine bak; docs/operations/monitoring.md bunları nasıl yeniden deneyeceğini veya atacağını anlatır.`)
};

const zh_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`死信队列中的任务:${i?.count}。请查看 worker 日志;docs/operations/monitoring.md 说明了如何重试或丢弃它们。`)
};

const ja_admin_ops_dead_letter_text = /** @type {(inputs: Admin_Ops_Dead_Letter_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`デッドレターキューのジョブ: ${i?.count}。ワーカーのログを確認してください。再実行や破棄の方法は docs/operations/monitoring.md にあります。`)
};

/**
* | output |
* | --- |
* | "Jobs in the dead letter queue: {count}. Check the worker logs; docs/operations/monitoring.md explains how to retry or drop them." |
*
* @param {Admin_Ops_Dead_Letter_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dead_letter_text = /** @type {((inputs: Admin_Ops_Dead_Letter_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dead_Letter_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dead_letter_text(inputs)
	if (locale === "de") return de_admin_ops_dead_letter_text(inputs)
	if (locale === "fr") return fr_admin_ops_dead_letter_text(inputs)
	if (locale === "it") return it_admin_ops_dead_letter_text(inputs)
	if (locale === "nl") return nl_admin_ops_dead_letter_text(inputs)
	if (locale === "pl") return pl_admin_ops_dead_letter_text(inputs)
	if (locale === "pt") return pt_admin_ops_dead_letter_text(inputs)
	if (locale === "ru") return ru_admin_ops_dead_letter_text(inputs)
	if (locale === "sv") return sv_admin_ops_dead_letter_text(inputs)
	if (locale === "tr") return tr_admin_ops_dead_letter_text(inputs)
	if (locale === "zh") return zh_admin_ops_dead_letter_text(inputs)
	if (locale === "ja") return ja_admin_ops_dead_letter_text(inputs)
	return en_admin_ops_dead_letter_text(inputs)
});
