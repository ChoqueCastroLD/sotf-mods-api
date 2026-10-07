/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_Filtered_Empty_TextInputs */

const en_jams_admin_filtered_empty_text = /** @type {(inputs: Jams_Admin_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No jam matches the search or the filters. Clear them to see every jam.`)
};

const es_jams_admin_filtered_empty_text = /** @type {(inputs: Jams_Admin_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ningún jam coincide con la búsqueda o los filtros. Quítalos para ver todos los jams.`)
};

const de_jams_admin_filtered_empty_text = /** @type {(inputs: Jams_Admin_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Jam passt zur Suche oder zu den Filtern. Setze sie zurück, um alle Jams zu sehen.`)
};

const fr_jams_admin_filtered_empty_text = /** @type {(inputs: Jams_Admin_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun jam ne correspond à la recherche ou aux filtres. Effacez-les pour voir tous les jams.`)
};

const it_jams_admin_filtered_empty_text = /** @type {(inputs: Jams_Admin_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun jam corrisponde alla ricerca o ai filtri. Rimuovili per vedere tutti i jam.`)
};

const nl_jams_admin_filtered_empty_text = /** @type {(inputs: Jams_Admin_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen enkele jam komt overeen met de zoekopdracht of de filters. Wis ze om alle jams te zien.`)
};

const pl_jams_admin_filtered_empty_text = /** @type {(inputs: Jams_Admin_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żaden jam nie pasuje do wyszukiwania ani filtrów. Wyczyść je, aby zobaczyć wszystkie jamy.`)
};

const pt_jams_admin_filtered_empty_text = /** @type {(inputs: Jams_Admin_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma jam corresponde à busca ou aos filtros. Limpe-os para ver todas as jams.`)
};

const ru_jams_admin_filtered_empty_text = /** @type {(inputs: Jams_Admin_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет джемов по запросу и фильтрам. Сбросьте их, чтобы увидеть все джемы.`)
};

const sv_jams_admin_filtered_empty_text = /** @type {(inputs: Jams_Admin_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen jam matchar sökningen eller filtren. Rensa dem för att se alla jams.`)
};

const tr_jams_admin_filtered_empty_text = /** @type {(inputs: Jams_Admin_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aramaya veya filtrelere uyan jam yok. Tüm jamleri görmek için temizleyin.`)
};

const zh_jams_admin_filtered_empty_text = /** @type {(inputs: Jams_Admin_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有符合搜索或筛选条件的 Jam。清除后即可查看全部。`)
};

const ja_jams_admin_filtered_empty_text = /** @type {(inputs: Jams_Admin_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索やフィルターに合うジャムはありません。解除するとすべてのジャムが表示されます。`)
};

/**
* | output |
* | --- |
* | "No jam matches the search or the filters. Clear them to see every jam." |
*
* @param {Jams_Admin_Filtered_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_filtered_empty_text = /** @type {((inputs?: Jams_Admin_Filtered_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Filtered_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_filtered_empty_text(inputs)
	if (locale === "de") return de_jams_admin_filtered_empty_text(inputs)
	if (locale === "fr") return fr_jams_admin_filtered_empty_text(inputs)
	if (locale === "it") return it_jams_admin_filtered_empty_text(inputs)
	if (locale === "nl") return nl_jams_admin_filtered_empty_text(inputs)
	if (locale === "pl") return pl_jams_admin_filtered_empty_text(inputs)
	if (locale === "pt") return pt_jams_admin_filtered_empty_text(inputs)
	if (locale === "ru") return ru_jams_admin_filtered_empty_text(inputs)
	if (locale === "sv") return sv_jams_admin_filtered_empty_text(inputs)
	if (locale === "tr") return tr_jams_admin_filtered_empty_text(inputs)
	if (locale === "zh") return zh_jams_admin_filtered_empty_text(inputs)
	if (locale === "ja") return ja_jams_admin_filtered_empty_text(inputs)
	return en_jams_admin_filtered_empty_text(inputs)
});
