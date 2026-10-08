/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Dl_DescriptionInputs */

const en_admin_ops_dl_description = /** @type {(inputs: Admin_Ops_Dl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jobs that ran out of retries and are waiting for a decision. Retry sends them back to their queue with the same data. Discard removes them from this list and they will not run again.`)
};

const es_admin_ops_dl_description = /** @type {(inputs: Admin_Ops_Dl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tareas que se quedaron sin reintentos y esperan una decisión. Reintentar las devuelve a su cola con los mismos datos. Descartar las quita de esta lista y no se ejecutarán de nuevo.`)
};

const de_admin_ops_dl_description = /** @type {(inputs: Admin_Ops_Dl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jobs, die keine Versuche mehr haben und auf eine Entscheidung warten. Erneut ausführen schickt sie mit denselben Daten zurück in ihre Warteschlange. Verwerfen entfernt sie aus dieser Liste und sie laufen nicht mehr.`)
};

const fr_admin_ops_dl_description = /** @type {(inputs: Admin_Ops_Dl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tâches sans essais restants, en attente d’une décision. Relancer les remet dans leur file avec les mêmes données. Abandonner les retire de cette liste et elles ne s’exécuteront plus.`)
};

const it_admin_ops_dl_description = /** @type {(inputs: Admin_Ops_Dl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Job che hanno esaurito i tentativi e aspettano una decisione. Riprova li rimanda nella loro coda con gli stessi dati. Scarta li toglie da questo elenco e non verranno più eseguiti.`)
};

const nl_admin_ops_dl_description = /** @type {(inputs: Admin_Ops_Dl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taken zonder pogingen die op een beslissing wachten. Opnieuw proberen stuurt ze met dezelfde gegevens terug naar hun wachtrij. Verwijderen haalt ze van deze lijst en ze worden niet meer uitgevoerd.`)
};

const pl_admin_ops_dl_description = /** @type {(inputs: Admin_Ops_Dl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zadania, które wyczerpały próby i czekają na decyzję. Ponowienie odsyła je do ich kolejki z tymi samymi danymi. Odrzucenie usuwa je z tej listy i nie zostaną już uruchomione.`)
};

const pt_admin_ops_dl_description = /** @type {(inputs: Admin_Ops_Dl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tarefas que esgotaram as tentativas e aguardam uma decisão. Tentar de novo as devolve à fila com os mesmos dados. Descartar as tira desta lista e elas não serão executadas outra vez.`)
};

const ru_admin_ops_dl_description = /** @type {(inputs: Admin_Ops_Dl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Задачи, у которых закончились попытки и которые ждут решения. Повтор возвращает их в свою очередь с теми же данными. Удаление убирает их из списка, и они больше не запустятся.`)
};

const sv_admin_ops_dl_description = /** @type {(inputs: Admin_Ops_Dl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jobb som har slut på försök och väntar på ett beslut. Försök igen skickar tillbaka dem till sin kö med samma data. Släng tar bort dem från listan och de körs inte igen.`)
};

const tr_admin_ops_dl_description = /** @type {(inputs: Admin_Ops_Dl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deneme hakkı biten ve karar bekleyen işler. Yeniden dene, onları aynı verilerle kendi kuyruğuna geri gönderir. At, onları bu listeden çıkarır ve bir daha çalışmazlar.`)
};

const zh_admin_ops_dl_description = /** @type {(inputs: Admin_Ops_Dl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重试次数已用完、等待处理决定的任务。重试会用相同的数据把它们送回原队列。丢弃会把它们从此列表移除,之后不会再运行。`)
};

const ja_admin_ops_dl_description = /** @type {(inputs: Admin_Ops_Dl_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再試行回数を使い切り、判断を待っているジョブです。再試行すると同じデータで元のキューに戻ります。破棄するとこの一覧から外れ、再実行されません。`)
};

/**
* | output |
* | --- |
* | "Jobs that ran out of retries and are waiting for a decision. Retry sends them back to their queue with the same data. Discard removes them from this list and..." |
*
* @param {Admin_Ops_Dl_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_description = /** @type {((inputs?: Admin_Ops_Dl_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_description(inputs)
	if (locale === "de") return de_admin_ops_dl_description(inputs)
	if (locale === "fr") return fr_admin_ops_dl_description(inputs)
	if (locale === "it") return it_admin_ops_dl_description(inputs)
	if (locale === "nl") return nl_admin_ops_dl_description(inputs)
	if (locale === "pl") return pl_admin_ops_dl_description(inputs)
	if (locale === "pt") return pt_admin_ops_dl_description(inputs)
	if (locale === "ru") return ru_admin_ops_dl_description(inputs)
	if (locale === "sv") return sv_admin_ops_dl_description(inputs)
	if (locale === "tr") return tr_admin_ops_dl_description(inputs)
	if (locale === "zh") return zh_admin_ops_dl_description(inputs)
	if (locale === "ja") return ja_admin_ops_dl_description(inputs)
	return en_admin_ops_dl_description(inputs)
});
