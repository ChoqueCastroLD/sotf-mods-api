/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Lane_Empty_TextInputs */

const en_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing is waiting in this queue. New items appear here automatically.`)
};

const es_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay nada en esta cola. Los nuevos elementos aparecerán aquí automáticamente.`)
};

const de_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In dieser Warteschlange wartet nichts. Neue Einträge erscheinen hier automatisch.`)
};

const fr_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien n’attend dans cette file. Les nouveaux éléments apparaîtront ici automatiquement.`)
};

const it_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In questa coda non c’è niente. I nuovi elementi compariranno qui automaticamente.`)
};

const nl_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er wacht niets in deze wachtrij. Nieuwe items verschijnen hier automatisch.`)
};

const pl_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W tej kolejce nic nie czeka. Nowe elementy pojawią się tu automatycznie.`)
};

const pt_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada aguarda nesta fila. Novos itens aparecem aqui automaticamente.`)
};

const ru_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В этой очереди ничего нет. Новые элементы появятся здесь автоматически.`)
};

const sv_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget väntar i den här kön. Nya objekt visas här automatiskt.`)
};

const tr_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kuyrukta bekleyen bir şey yok. Yeni öğeler burada otomatik olarak görünür.`)
};

const zh_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此队列没有待处理项。新项目会自动出现在这里。`)
};

const ja_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このキューに待機中の項目はありません。新しい項目は自動的にここに表示されます。`)
};

/**
* | output |
* | --- |
* | "Nothing is waiting in this queue. New items appear here automatically." |
*
* @param {Ranger_Lane_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_lane_empty_text = /** @type {((inputs?: Ranger_Lane_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Lane_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_lane_empty_text(inputs)
	if (locale === "de") return de_ranger_lane_empty_text(inputs)
	if (locale === "fr") return fr_ranger_lane_empty_text(inputs)
	if (locale === "it") return it_ranger_lane_empty_text(inputs)
	if (locale === "nl") return nl_ranger_lane_empty_text(inputs)
	if (locale === "pl") return pl_ranger_lane_empty_text(inputs)
	if (locale === "pt") return pt_ranger_lane_empty_text(inputs)
	if (locale === "ru") return ru_ranger_lane_empty_text(inputs)
	if (locale === "sv") return sv_ranger_lane_empty_text(inputs)
	if (locale === "tr") return tr_ranger_lane_empty_text(inputs)
	if (locale === "zh") return zh_ranger_lane_empty_text(inputs)
	if (locale === "ja") return ja_ranger_lane_empty_text(inputs)
	return en_ranger_lane_empty_text(inputs)
});
