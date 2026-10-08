/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Dl_Unknown_HintInputs */

const en_admin_ops_dl_unknown_hint = /** @type {(inputs: Admin_Ops_Dl_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The queue of these jobs could not be found, so they can only be discarded.`)
};

const es_admin_ops_dl_unknown_hint = /** @type {(inputs: Admin_Ops_Dl_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se encontró la cola de estas tareas, así que solo se pueden descartar.`)
};

const de_admin_ops_dl_unknown_hint = /** @type {(inputs: Admin_Ops_Dl_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Warteschlange dieser Jobs wurde nicht gefunden, sie können nur verworfen werden.`)
};

const fr_admin_ops_dl_unknown_hint = /** @type {(inputs: Admin_Ops_Dl_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La file de ces tâches est introuvable : elles peuvent seulement être abandonnées.`)
};

const it_admin_ops_dl_unknown_hint = /** @type {(inputs: Admin_Ops_Dl_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La coda di questi job non è stata trovata, quindi si possono solo scartare.`)
};

const nl_admin_ops_dl_unknown_hint = /** @type {(inputs: Admin_Ops_Dl_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De wachtrij van deze taken is niet gevonden, dus ze kunnen alleen worden verwijderd.`)
};

const pl_admin_ops_dl_unknown_hint = /** @type {(inputs: Admin_Ops_Dl_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie znaleziono kolejki tych zadań, więc można je tylko odrzucić.`)
};

const pt_admin_ops_dl_unknown_hint = /** @type {(inputs: Admin_Ops_Dl_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A fila destas tarefas não foi encontrada, então elas só podem ser descartadas.`)
};

const ru_admin_ops_dl_unknown_hint = /** @type {(inputs: Admin_Ops_Dl_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Очередь этих задач не найдена, поэтому их можно только удалить.`)
};

const sv_admin_ops_dl_unknown_hint = /** @type {(inputs: Admin_Ops_Dl_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kön för de här jobben hittades inte, så de kan bara slängas.`)
};

const tr_admin_ops_dl_unknown_hint = /** @type {(inputs: Admin_Ops_Dl_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu işlerin kuyruğu bulunamadı, bu yüzden yalnızca atılabilirler.`)
};

const zh_admin_ops_dl_unknown_hint = /** @type {(inputs: Admin_Ops_Dl_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`找不到这些任务所属的队列,所以只能丢弃。`)
};

const ja_admin_ops_dl_unknown_hint = /** @type {(inputs: Admin_Ops_Dl_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`これらのジョブのキューが見つからないため、破棄のみ可能です。`)
};

/**
* | output |
* | --- |
* | "The queue of these jobs could not be found, so they can only be discarded." |
*
* @param {Admin_Ops_Dl_Unknown_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_unknown_hint = /** @type {((inputs?: Admin_Ops_Dl_Unknown_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_Unknown_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_unknown_hint(inputs)
	if (locale === "de") return de_admin_ops_dl_unknown_hint(inputs)
	if (locale === "fr") return fr_admin_ops_dl_unknown_hint(inputs)
	if (locale === "it") return it_admin_ops_dl_unknown_hint(inputs)
	if (locale === "nl") return nl_admin_ops_dl_unknown_hint(inputs)
	if (locale === "pl") return pl_admin_ops_dl_unknown_hint(inputs)
	if (locale === "pt") return pt_admin_ops_dl_unknown_hint(inputs)
	if (locale === "ru") return ru_admin_ops_dl_unknown_hint(inputs)
	if (locale === "sv") return sv_admin_ops_dl_unknown_hint(inputs)
	if (locale === "tr") return tr_admin_ops_dl_unknown_hint(inputs)
	if (locale === "zh") return zh_admin_ops_dl_unknown_hint(inputs)
	if (locale === "ja") return ja_admin_ops_dl_unknown_hint(inputs)
	return en_admin_ops_dl_unknown_hint(inputs)
});
