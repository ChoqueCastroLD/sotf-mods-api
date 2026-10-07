/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_Filtered_Empty_TextInputs */

const en_jams_entries_filtered_empty_text = /** @type {(inputs: Jams_Entries_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No entry matches the search or the status. Clear the filters to see every entry.`)
};

const es_jams_entries_filtered_empty_text = /** @type {(inputs: Jams_Entries_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ninguna participación coincide con la búsqueda o el estado. Quita los filtros para ver todas.`)
};

const de_jams_entries_filtered_empty_text = /** @type {(inputs: Jams_Entries_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Beitrag passt zur Suche oder zum Status. Setze die Filter zurück, um alle Beiträge zu sehen.`)
};

const fr_jams_entries_filtered_empty_text = /** @type {(inputs: Jams_Entries_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune participation ne correspond à la recherche ou à l’état. Effacez les filtres pour tout voir.`)
};

const it_jams_entries_filtered_empty_text = /** @type {(inputs: Jams_Entries_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna partecipazione corrisponde alla ricerca o allo stato. Rimuovi i filtri per vederle tutte.`)
};

const nl_jams_entries_filtered_empty_text = /** @type {(inputs: Jams_Entries_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen enkele inzending komt overeen met de zoekopdracht of status. Wis de filters om alles te zien.`)
};

const pl_jams_entries_filtered_empty_text = /** @type {(inputs: Jams_Entries_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żadne zgłoszenie nie pasuje do wyszukiwania ani statusu. Wyczyść filtry, aby zobaczyć wszystkie.`)
};

const pt_jams_entries_filtered_empty_text = /** @type {(inputs: Jams_Entries_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma inscrição corresponde à busca ou ao status. Limpe os filtros para ver todas.`)
};

const ru_jams_entries_filtered_empty_text = /** @type {(inputs: Jams_Entries_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет работ по запросу и статусу. Сбросьте фильтры, чтобы увидеть все.`)
};

const sv_jams_entries_filtered_empty_text = /** @type {(inputs: Jams_Entries_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget bidrag matchar sökningen eller statusen. Rensa filtren för att se alla.`)
};

const tr_jams_entries_filtered_empty_text = /** @type {(inputs: Jams_Entries_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aramaya veya duruma uyan katılım yok. Hepsini görmek için filtreleri temizleyin.`)
};

const zh_jams_entries_filtered_empty_text = /** @type {(inputs: Jams_Entries_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有符合搜索或状态的作品。清除筛选即可查看全部。`)
};

const ja_jams_entries_filtered_empty_text = /** @type {(inputs: Jams_Entries_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索や状態に合う作品はありません。フィルターを解除するとすべて表示されます。`)
};

/**
* | output |
* | --- |
* | "No entry matches the search or the status. Clear the filters to see every entry." |
*
* @param {Jams_Entries_Filtered_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_filtered_empty_text = /** @type {((inputs?: Jams_Entries_Filtered_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_Filtered_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_filtered_empty_text(inputs)
	if (locale === "de") return de_jams_entries_filtered_empty_text(inputs)
	if (locale === "fr") return fr_jams_entries_filtered_empty_text(inputs)
	if (locale === "it") return it_jams_entries_filtered_empty_text(inputs)
	if (locale === "nl") return nl_jams_entries_filtered_empty_text(inputs)
	if (locale === "pl") return pl_jams_entries_filtered_empty_text(inputs)
	if (locale === "pt") return pt_jams_entries_filtered_empty_text(inputs)
	if (locale === "ru") return ru_jams_entries_filtered_empty_text(inputs)
	if (locale === "sv") return sv_jams_entries_filtered_empty_text(inputs)
	if (locale === "tr") return tr_jams_entries_filtered_empty_text(inputs)
	if (locale === "zh") return zh_jams_entries_filtered_empty_text(inputs)
	if (locale === "ja") return ja_jams_entries_filtered_empty_text(inputs)
	return en_jams_entries_filtered_empty_text(inputs)
});
