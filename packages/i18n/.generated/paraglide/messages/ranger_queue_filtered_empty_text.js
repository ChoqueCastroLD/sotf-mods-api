/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Queue_Filtered_Empty_TextInputs */

const en_ranger_queue_filtered_empty_text = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing in this queue matches the filters. Clear them to see the whole queue.`)
};

const es_ranger_queue_filtered_empty_text = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada en esta cola coincide con los filtros. Quítalos para ver la cola completa.`)
};

const de_ranger_queue_filtered_empty_text = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nichts in dieser Warteschlange passt zu den Filtern. Setze sie zurück, um die ganze Warteschlange zu sehen.`)
};

const fr_ranger_queue_filtered_empty_text = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien dans cette file ne correspond aux filtres. Effacez-les pour voir toute la file.`)
};

const it_ranger_queue_filtered_empty_text = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun elemento di questa coda corrisponde ai filtri. Rimuovili per vedere tutta la coda.`)
};

const nl_ranger_queue_filtered_empty_text = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niets in deze wachtrij komt overeen met de filters. Wis ze om de hele wachtrij te zien.`)
};

const pl_ranger_queue_filtered_empty_text = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nic w tej kolejce nie pasuje do filtrów. Wyczyść je, aby zobaczyć całą kolejkę.`)
};

const pt_ranger_queue_filtered_empty_text = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada nesta fila corresponde aos filtros. Limpe os filtros para ver a fila inteira.`)
};

const ru_ranger_queue_filtered_empty_text = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В этой очереди нет элементов по выбранным фильтрам. Сбросьте их, чтобы увидеть всю очередь.`)
};

const sv_ranger_queue_filtered_empty_text = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget i den här kön matchar filtren. Rensa dem för att se hela kön.`)
};

const tr_ranger_queue_filtered_empty_text = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kuyrukta filtrelere uyan bir öğe yok. Tüm kuyruğu görmek için filtreleri temizleyin.`)
};

const zh_ranger_queue_filtered_empty_text = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此队列中没有符合筛选条件的项目。清除筛选即可查看整个队列。`)
};

const ja_ranger_queue_filtered_empty_text = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この待ちリストに、フィルターに合う項目はありません。フィルターを解除すると全体が表示されます。`)
};

/**
* | output |
* | --- |
* | "Nothing in this queue matches the filters. Clear them to see the whole queue." |
*
* @param {Ranger_Queue_Filtered_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_queue_filtered_empty_text = /** @type {((inputs?: Ranger_Queue_Filtered_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Queue_Filtered_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_queue_filtered_empty_text(inputs)
	if (locale === "de") return de_ranger_queue_filtered_empty_text(inputs)
	if (locale === "fr") return fr_ranger_queue_filtered_empty_text(inputs)
	if (locale === "it") return it_ranger_queue_filtered_empty_text(inputs)
	if (locale === "nl") return nl_ranger_queue_filtered_empty_text(inputs)
	if (locale === "pl") return pl_ranger_queue_filtered_empty_text(inputs)
	if (locale === "pt") return pt_ranger_queue_filtered_empty_text(inputs)
	if (locale === "ru") return ru_ranger_queue_filtered_empty_text(inputs)
	if (locale === "sv") return sv_ranger_queue_filtered_empty_text(inputs)
	if (locale === "tr") return tr_ranger_queue_filtered_empty_text(inputs)
	if (locale === "zh") return zh_ranger_queue_filtered_empty_text(inputs)
	if (locale === "ja") return ja_ranger_queue_filtered_empty_text(inputs)
	return en_ranger_queue_filtered_empty_text(inputs)
});
