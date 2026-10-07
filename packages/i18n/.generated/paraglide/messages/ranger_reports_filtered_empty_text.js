/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Reports_Filtered_Empty_TextInputs */

const en_ranger_reports_filtered_empty_text = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No report matches the filters. Clear them to see every report in this status.`)
};

const es_ranger_reports_filtered_empty_text = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ningún reporte coincide con los filtros. Quítalos para ver todos los reportes de este estado.`)
};

const de_ranger_reports_filtered_empty_text = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Meldung passt zu den Filtern. Setze sie zurück, um alle Meldungen mit diesem Status zu sehen.`)
};

const fr_ranger_reports_filtered_empty_text = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun signalement ne correspond aux filtres. Effacez-les pour voir tous les signalements de cet état.`)
};

const it_ranger_reports_filtered_empty_text = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna segnalazione corrisponde ai filtri. Rimuovili per vedere tutte le segnalazioni di questo stato.`)
};

const nl_ranger_reports_filtered_empty_text = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen enkele melding komt overeen met de filters. Wis ze om alle meldingen met deze status te zien.`)
};

const pl_ranger_reports_filtered_empty_text = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żadne zgłoszenie nie pasuje do filtrów. Wyczyść je, aby zobaczyć wszystkie zgłoszenia w tym stanie.`)
};

const pt_ranger_reports_filtered_empty_text = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma denúncia corresponde aos filtros. Limpe os filtros para ver todas as denúncias deste status.`)
};

const ru_ranger_reports_filtered_empty_text = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет жалоб по выбранным фильтрам. Сбросьте их, чтобы увидеть все жалобы с этим статусом.`)
};

const sv_ranger_reports_filtered_empty_text = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen anmälan matchar filtren. Rensa dem för att se alla anmälningar med den här statusen.`)
};

const tr_ranger_reports_filtered_empty_text = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrelere uyan şikâyet yok. Bu durumdaki tüm şikâyetleri görmek için filtreleri temizleyin.`)
};

const zh_ranger_reports_filtered_empty_text = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有符合筛选条件的举报。清除筛选即可查看此状态下的全部举报。`)
};

const ja_ranger_reports_filtered_empty_text = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィルターに合う報告はありません。解除すると、この状態のすべての報告が表示されます。`)
};

/**
* | output |
* | --- |
* | "No report matches the filters. Clear them to see every report in this status." |
*
* @param {Ranger_Reports_Filtered_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_reports_filtered_empty_text = /** @type {((inputs?: Ranger_Reports_Filtered_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reports_Filtered_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_reports_filtered_empty_text(inputs)
	if (locale === "de") return de_ranger_reports_filtered_empty_text(inputs)
	if (locale === "fr") return fr_ranger_reports_filtered_empty_text(inputs)
	if (locale === "it") return it_ranger_reports_filtered_empty_text(inputs)
	if (locale === "nl") return nl_ranger_reports_filtered_empty_text(inputs)
	if (locale === "pl") return pl_ranger_reports_filtered_empty_text(inputs)
	if (locale === "pt") return pt_ranger_reports_filtered_empty_text(inputs)
	if (locale === "ru") return ru_ranger_reports_filtered_empty_text(inputs)
	if (locale === "sv") return sv_ranger_reports_filtered_empty_text(inputs)
	if (locale === "tr") return tr_ranger_reports_filtered_empty_text(inputs)
	if (locale === "zh") return zh_ranger_reports_filtered_empty_text(inputs)
	if (locale === "ja") return ja_ranger_reports_filtered_empty_text(inputs)
	return en_ranger_reports_filtered_empty_text(inputs)
});
