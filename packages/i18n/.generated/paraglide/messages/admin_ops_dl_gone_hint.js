/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Dl_Gone_HintInputs */

const en_admin_ops_dl_gone_hint = /** @type {(inputs: Admin_Ops_Dl_Gone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This queue no longer exists, so these jobs can only be discarded.`)
};

const es_admin_ops_dl_gone_hint = /** @type {(inputs: Admin_Ops_Dl_Gone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta cola ya no existe, así que estas tareas solo se pueden descartar.`)
};

const de_admin_ops_dl_gone_hint = /** @type {(inputs: Admin_Ops_Dl_Gone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Warteschlange gibt es nicht mehr, die Jobs können nur verworfen werden.`)
};

const fr_admin_ops_dl_gone_hint = /** @type {(inputs: Admin_Ops_Dl_Gone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette file n’existe plus : ces tâches peuvent seulement être abandonnées.`)
};

const it_admin_ops_dl_gone_hint = /** @type {(inputs: Admin_Ops_Dl_Gone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa coda non esiste più, quindi questi job si possono solo scartare.`)
};

const nl_admin_ops_dl_gone_hint = /** @type {(inputs: Admin_Ops_Dl_Gone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze wachtrij bestaat niet meer, dus deze taken kunnen alleen worden verwijderd.`)
};

const pl_admin_ops_dl_gone_hint = /** @type {(inputs: Admin_Ops_Dl_Gone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta kolejka już nie istnieje, więc te zadania można tylko odrzucić.`)
};

const pt_admin_ops_dl_gone_hint = /** @type {(inputs: Admin_Ops_Dl_Gone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta fila não existe mais, então estas tarefas só podem ser descartadas.`)
};

const ru_admin_ops_dl_gone_hint = /** @type {(inputs: Admin_Ops_Dl_Gone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этой очереди больше нет, поэтому эти задачи можно только удалить.`)
};

const sv_admin_ops_dl_gone_hint = /** @type {(inputs: Admin_Ops_Dl_Gone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här kön finns inte längre, så jobben kan bara slängas.`)
};

const tr_admin_ops_dl_gone_hint = /** @type {(inputs: Admin_Ops_Dl_Gone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kuyruk artık yok, bu yüzden bu işler yalnızca atılabilir.`)
};

const zh_admin_ops_dl_gone_hint = /** @type {(inputs: Admin_Ops_Dl_Gone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该队列已不存在,所以这些任务只能丢弃。`)
};

const ja_admin_ops_dl_gone_hint = /** @type {(inputs: Admin_Ops_Dl_Gone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このキューはもう存在しないため、これらのジョブは破棄のみ可能です。`)
};

/**
* | output |
* | --- |
* | "This queue no longer exists, so these jobs can only be discarded." |
*
* @param {Admin_Ops_Dl_Gone_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_gone_hint = /** @type {((inputs?: Admin_Ops_Dl_Gone_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_Gone_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_gone_hint(inputs)
	if (locale === "de") return de_admin_ops_dl_gone_hint(inputs)
	if (locale === "fr") return fr_admin_ops_dl_gone_hint(inputs)
	if (locale === "it") return it_admin_ops_dl_gone_hint(inputs)
	if (locale === "nl") return nl_admin_ops_dl_gone_hint(inputs)
	if (locale === "pl") return pl_admin_ops_dl_gone_hint(inputs)
	if (locale === "pt") return pt_admin_ops_dl_gone_hint(inputs)
	if (locale === "ru") return ru_admin_ops_dl_gone_hint(inputs)
	if (locale === "sv") return sv_admin_ops_dl_gone_hint(inputs)
	if (locale === "tr") return tr_admin_ops_dl_gone_hint(inputs)
	if (locale === "zh") return zh_admin_ops_dl_gone_hint(inputs)
	if (locale === "ja") return ja_admin_ops_dl_gone_hint(inputs)
	return en_admin_ops_dl_gone_hint(inputs)
});
