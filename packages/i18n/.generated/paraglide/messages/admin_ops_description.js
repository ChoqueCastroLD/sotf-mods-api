/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_DescriptionInputs */

const en_admin_ops_description = /** @type {(inputs: Admin_Ops_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Job queues, dead letters, downloads and CDN purges as they are now. The page refreshes every minute.`)
};

const es_admin_ops_description = /** @type {(inputs: Admin_Ops_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Colas de tareas, tareas fallidas, descargas y purgas de la CDN en este momento. La página se actualiza cada minuto.`)
};

const de_admin_ops_description = /** @type {(inputs: Admin_Ops_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Job-Warteschlangen, Dead Letters, Downloads und CDN-Purges im Moment. Die Seite aktualisiert sich jede Minute.`)
};

const fr_admin_ops_description = /** @type {(inputs: Admin_Ops_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Files de tâches, tâches en échec définitif, téléchargements et purges du CDN en ce moment. La page se met à jour chaque minute.`)
};

const it_admin_ops_description = /** @type {(inputs: Admin_Ops_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code dei job, job falliti definitivamente, download e purge della CDN in questo momento. La pagina si aggiorna ogni minuto.`)
};

const nl_admin_ops_description = /** @type {(inputs: Admin_Ops_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takenwachtrijen, definitief mislukte taken, downloads en CDN-purges op dit moment. De pagina ververst elke minuut.`)
};

const pl_admin_ops_description = /** @type {(inputs: Admin_Ops_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kolejki zadań, zadania bez kolejnych prób, pobrania i czyszczenia CDN w tej chwili. Strona odświeża się co minutę.`)
};

const pt_admin_ops_description = /** @type {(inputs: Admin_Ops_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filas de tarefas, tarefas com falha definitiva, downloads e purgas da CDN neste momento. A página atualiza a cada minuto.`)
};

const ru_admin_ops_description = /** @type {(inputs: Admin_Ops_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Очереди задач, окончательно упавшие задачи, скачивания и очистки CDN прямо сейчас. Страница обновляется каждую минуту.`)
};

const sv_admin_ops_description = /** @type {(inputs: Admin_Ops_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jobbköer, jobb utan fler försök, nedladdningar och CDN-rensningar just nu. Sidan uppdateras varje minut.`)
};

const tr_admin_ops_description = /** @type {(inputs: Admin_Ops_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İş kuyrukları, denemesi tükenen işler, indirmeler ve CDN temizlemeleri şu an. Sayfa her dakika yenilenir.`)
};

const zh_admin_ops_description = /** @type {(inputs: Admin_Ops_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任务队列、重试耗尽的任务、下载量和 CDN 清除的当前状态。页面每分钟刷新一次。`)
};

const ja_admin_ops_description = /** @type {(inputs: Admin_Ops_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジョブキュー、再試行が尽きたジョブ、ダウンロード、CDN パージの現在の状態です。ページは 1 分ごとに更新されます。`)
};

/**
* | output |
* | --- |
* | "Job queues, dead letters, downloads and CDN purges as they are now. The page refreshes every minute." |
*
* @param {Admin_Ops_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_description = /** @type {((inputs?: Admin_Ops_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_description(inputs)
	if (locale === "de") return de_admin_ops_description(inputs)
	if (locale === "fr") return fr_admin_ops_description(inputs)
	if (locale === "it") return it_admin_ops_description(inputs)
	if (locale === "nl") return nl_admin_ops_description(inputs)
	if (locale === "pl") return pl_admin_ops_description(inputs)
	if (locale === "pt") return pt_admin_ops_description(inputs)
	if (locale === "ru") return ru_admin_ops_description(inputs)
	if (locale === "sv") return sv_admin_ops_description(inputs)
	if (locale === "tr") return tr_admin_ops_description(inputs)
	if (locale === "zh") return zh_admin_ops_description(inputs)
	if (locale === "ja") return ja_admin_ops_description(inputs)
	return en_admin_ops_description(inputs)
});
