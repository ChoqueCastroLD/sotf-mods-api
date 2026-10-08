/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Ops_Dl_Discard_All_TextInputs */

const en_admin_ops_dl_discard_all_text = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jobs removed from this list: ${i?.count}, from every queue. They will not run again. This cannot be undone.`)
};

const es_admin_ops_dl_discard_all_text = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tareas quitadas de esta lista: ${i?.count}, de todas las colas. No se ejecutarán de nuevo. No se puede deshacer.`)
};

const de_admin_ops_dl_discard_all_text = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aus dieser Liste entfernte Jobs: ${i?.count}, aus allen Warteschlangen. Sie laufen nicht mehr. Das lässt sich nicht rückgängig machen.`)
};

const fr_admin_ops_dl_discard_all_text = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tâches retirées de cette liste : ${i?.count}, de toutes les files. Elles ne s’exécuteront plus. Cette action est irréversible.`)
};

const it_admin_ops_dl_discard_all_text = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Job tolti da questo elenco: ${i?.count}, da tutte le code. Non verranno più eseguiti. L’operazione non si può annullare.`)
};

const nl_admin_ops_dl_discard_all_text = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Van deze lijst gehaalde taken: ${i?.count}, uit alle wachtrijen. Ze worden niet meer uitgevoerd. Dit kan niet ongedaan worden gemaakt.`)
};

const pl_admin_ops_dl_discard_all_text = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zadania usunięte z tej listy: ${i?.count}, ze wszystkich kolejek. Nie zostaną już uruchomione. Tego nie można cofnąć.`)
};

const pt_admin_ops_dl_discard_all_text = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tarefas tiradas desta lista: ${i?.count}, de todas as filas. Elas não serão executadas outra vez. Isso não pode ser desfeito.`)
};

const ru_admin_ops_dl_discard_all_text = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Задач убрано из списка: ${i?.count}, из всех очередей. Они больше не запустятся. Это нельзя отменить.`)
};

const sv_admin_ops_dl_discard_all_text = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jobb som tas bort från listan: ${i?.count}, från alla köer. De körs inte igen. Det går inte att ångra.`)
};

const tr_admin_ops_dl_discard_all_text = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bu listeden çıkarılan işler: ${i?.count}, tüm kuyruklardan. Bir daha çalışmazlar. Bu geri alınamaz.`)
};

const zh_admin_ops_dl_discard_all_text = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`将从此列表移除的任务:${i?.count},来自所有队列。它们不会再运行。此操作无法撤销。`)
};

const ja_admin_ops_dl_discard_all_text = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`この一覧から外すジョブ: ${i?.count}(すべてのキュー)。再実行されません。元に戻せません。`)
};

/**
* | output |
* | --- |
* | "Jobs removed from this list: {count}, from every queue. They will not run again. This cannot be undone." |
*
* @param {Admin_Ops_Dl_Discard_All_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_discard_all_text = /** @type {((inputs: Admin_Ops_Dl_Discard_All_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_Discard_All_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_discard_all_text(inputs)
	if (locale === "de") return de_admin_ops_dl_discard_all_text(inputs)
	if (locale === "fr") return fr_admin_ops_dl_discard_all_text(inputs)
	if (locale === "it") return it_admin_ops_dl_discard_all_text(inputs)
	if (locale === "nl") return nl_admin_ops_dl_discard_all_text(inputs)
	if (locale === "pl") return pl_admin_ops_dl_discard_all_text(inputs)
	if (locale === "pt") return pt_admin_ops_dl_discard_all_text(inputs)
	if (locale === "ru") return ru_admin_ops_dl_discard_all_text(inputs)
	if (locale === "sv") return sv_admin_ops_dl_discard_all_text(inputs)
	if (locale === "tr") return tr_admin_ops_dl_discard_all_text(inputs)
	if (locale === "zh") return zh_admin_ops_dl_discard_all_text(inputs)
	if (locale === "ja") return ja_admin_ops_dl_discard_all_text(inputs)
	return en_admin_ops_dl_discard_all_text(inputs)
});
