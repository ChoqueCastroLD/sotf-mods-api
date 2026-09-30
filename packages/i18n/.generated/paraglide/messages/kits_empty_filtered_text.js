/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Empty_Filtered_TextInputs */

const en_kits_empty_filtered_text = /** @type {(inputs: Kits_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No kit passes these filters yet. Clear them to see every kit.`)
};

const es_kits_empty_filtered_text = /** @type {(inputs: Kits_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía ningún kit cumple estos filtros. Quítalos para ver todos.`)
};

const de_kits_empty_filtered_text = /** @type {(inputs: Kits_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch kein Kit erfüllt diese Filter. Entferne sie, um alle Kits zu sehen.`)
};

const fr_kits_empty_filtered_text = /** @type {(inputs: Kits_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun kit ne passe encore ces filtres. Retirez-les pour voir tous les kits.`)
};

const it_kits_empty_filtered_text = /** @type {(inputs: Kits_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun kit supera ancora questi filtri. Rimuovili per vedere tutti i kit.`)
};

const nl_kits_empty_filtered_text = /** @type {(inputs: Kits_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen kit voldoet aan deze filters. Wis ze om alle kits te zien.`)
};

const pl_kits_empty_filtered_text = /** @type {(inputs: Kits_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żaden zestaw nie spełnia jeszcze tych filtrów. Wyczyść je, aby zobaczyć wszystkie.`)
};

const pt_kits_empty_filtered_text = /** @type {(inputs: Kits_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum kit passa por esses filtros ainda. Limpe-os para ver todos.`)
};

const ru_kits_empty_filtered_text = /** @type {(inputs: Kits_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пока ни один набор не проходит эти фильтры. Сбросьте их, чтобы увидеть все наборы.`)
};

const sv_kits_empty_filtered_text = /** @type {(inputs: Kits_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget kit klarar de här filtren än. Rensa dem för att se alla kit.`)
};

const tr_kits_empty_filtered_text = /** @type {(inputs: Kits_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz bu filtrelere uyan bir kit yok. Tümünü görmek için filtreleri temizle.`)
};

const zh_kits_empty_filtered_text = /** @type {(inputs: Kits_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂时没有套装符合这些筛选条件。清除筛选即可查看全部套装。`)
};

const ja_kits_empty_filtered_text = /** @type {(inputs: Kits_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この条件に合うキットはまだありません。絞り込みを解除するとすべて表示されます。`)
};

/**
* | output |
* | --- |
* | "No kit passes these filters yet. Clear them to see every kit." |
*
* @param {Kits_Empty_Filtered_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_empty_filtered_text = /** @type {((inputs?: Kits_Empty_Filtered_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Empty_Filtered_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_empty_filtered_text(inputs)
	if (locale === "de") return de_kits_empty_filtered_text(inputs)
	if (locale === "fr") return fr_kits_empty_filtered_text(inputs)
	if (locale === "it") return it_kits_empty_filtered_text(inputs)
	if (locale === "nl") return nl_kits_empty_filtered_text(inputs)
	if (locale === "pl") return pl_kits_empty_filtered_text(inputs)
	if (locale === "pt") return pt_kits_empty_filtered_text(inputs)
	if (locale === "ru") return ru_kits_empty_filtered_text(inputs)
	if (locale === "sv") return sv_kits_empty_filtered_text(inputs)
	if (locale === "tr") return tr_kits_empty_filtered_text(inputs)
	if (locale === "zh") return zh_kits_empty_filtered_text(inputs)
	if (locale === "ja") return ja_kits_empty_filtered_text(inputs)
	return en_kits_empty_filtered_text(inputs)
});
