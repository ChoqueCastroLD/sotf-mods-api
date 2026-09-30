/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Reports_Empty_Open_TextInputs */

const en_ranger_reports_empty_open_text = /** @type {(inputs: Ranger_Reports_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing to look at. New reports appear here and in the queue.`)
};

const es_ranger_reports_empty_open_text = /** @type {(inputs: Ranger_Reports_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada que revisar. Los reportes nuevos aparecen aquí y en la cola.`)
};

const de_ranger_reports_empty_open_text = /** @type {(inputs: Ranger_Reports_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nichts zu tun. Neue Meldungen erscheinen hier und in der Warteschlange.`)
};

const fr_ranger_reports_empty_open_text = /** @type {(inputs: Ranger_Reports_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien à examiner. Les nouveaux signalements apparaissent ici et dans la file.`)
};

const it_ranger_reports_empty_open_text = /** @type {(inputs: Ranger_Reports_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niente da esaminare. Le nuove segnalazioni compaiono qui e nella coda.`)
};

const nl_ranger_reports_empty_open_text = /** @type {(inputs: Ranger_Reports_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niets te bekijken. Nieuwe meldingen verschijnen hier en in de wachtrij.`)
};

const pl_ranger_reports_empty_open_text = /** @type {(inputs: Ranger_Reports_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie ma czego sprawdzać. Nowe zgłoszenia pojawiają się tutaj i w kolejce.`)
};

const pt_ranger_reports_empty_open_text = /** @type {(inputs: Ranger_Reports_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada para ver. Novas denúncias aparecem aqui e na fila.`)
};

const ru_ranger_reports_empty_open_text = /** @type {(inputs: Ranger_Reports_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смотреть нечего. Новые жалобы появляются здесь и в очереди.`)
};

const sv_ranger_reports_empty_open_text = /** @type {(inputs: Ranger_Reports_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget att titta på. Nya anmälningar syns här och i kön.`)
};

const tr_ranger_reports_empty_open_text = /** @type {(inputs: Ranger_Reports_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bakılacak bir şey yok. Yeni şikâyetler burada ve kuyrukta görünür.`)
};

const zh_ranger_reports_empty_open_text = /** @type {(inputs: Ranger_Reports_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无需要查看的内容。新举报会出现在这里和队列中。`)
};

const ja_ranger_reports_empty_open_text = /** @type {(inputs: Ranger_Reports_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`確認するものはありません。新しい報告はこことキューに表示されます。`)
};

/**
* | output |
* | --- |
* | "Nothing to look at. New reports appear here and in the queue." |
*
* @param {Ranger_Reports_Empty_Open_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_reports_empty_open_text = /** @type {((inputs?: Ranger_Reports_Empty_Open_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reports_Empty_Open_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_reports_empty_open_text(inputs)
	if (locale === "de") return de_ranger_reports_empty_open_text(inputs)
	if (locale === "fr") return fr_ranger_reports_empty_open_text(inputs)
	if (locale === "it") return it_ranger_reports_empty_open_text(inputs)
	if (locale === "nl") return nl_ranger_reports_empty_open_text(inputs)
	if (locale === "pl") return pl_ranger_reports_empty_open_text(inputs)
	if (locale === "pt") return pt_ranger_reports_empty_open_text(inputs)
	if (locale === "ru") return ru_ranger_reports_empty_open_text(inputs)
	if (locale === "sv") return sv_ranger_reports_empty_open_text(inputs)
	if (locale === "tr") return tr_ranger_reports_empty_open_text(inputs)
	if (locale === "zh") return zh_ranger_reports_empty_open_text(inputs)
	if (locale === "ja") return ja_ranger_reports_empty_open_text(inputs)
	return en_ranger_reports_empty_open_text(inputs)
});
